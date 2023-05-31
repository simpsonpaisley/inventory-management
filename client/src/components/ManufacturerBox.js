import { useState } from 'react';
import axios from 'axios';

function ManufacturerBox({ manufacturer }) {
	const [showContacts, setShowContacts] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [manufacturerObject, setManufacturerObject] = useState(manufacturer);
	const [newContact, setNewContact] = useState({
		name: '',
		email: '',
	});

	function handleModal() {
		setShowModal(!showModal);
	}

	function handleShowContacts() {
		setShowContacts(!showContacts);
	}

	function handleChange(event) {
		setNewContact({ ...newContact, [event.target.name]: event.target.value });
	}

	async function handleSubmit(event) {
		event.preventDefault();
		const updatedContacts = [...manufacturerObject.contacts, newContact];

		let updatedManufacturer = { ...manufacturerObject };
		updatedManufacturer.contacts = updatedContacts;

		const API =
			process.env.REACT_APP_API + '/manufacturers/' + manufacturer._id;
		const response = await axios.put(API, updatedManufacturer);
		setManufacturerObject(response.data);
		setNewContact({ name: '', email: '' });
		handleModal();
	}

	return (
		<div className="manufacturerBox">
			<h3>{manufacturer.name}</h3>
			<div className="manufacturerBoxExtend">
				<div className="manufacturerBoxButton">
					<a
						href={manufacturer.website}
						target="_blank">
						{manufacturer.website}
					</a>
					<button onClick={handleShowContacts}>Show Contacts</button>
				</div>
				{showContacts && (
					<div className="manufacturerContacts">
						{manufacturer.contacts.map((contact) => (
							<div className="contacts">
								<h4>{contact.name}</h4>
								<a href={'mailto:' + contact.email}>{contact.email}</a>
							</div>
						))}
						<button onClick={handleModal}>+ Add Contact</button>
						{showModal && (
							<form onSubmit={handleSubmit}>
								<div className="formBlock">
									<label htmlFor="name">Name:</label>
									<input
										id="name"
										name="name"
										onChange={handleChange}></input>
								</div>
								<div className="formBlock">
									<label htmlFor="email">Email:</label>
									<input
										type="email"
										id="email"
										name="email"
										onChange={handleChange}></input>
								</div>
								<button type="submit">Submit</button>
							</form>
						)}
					</div>
				)}
			</div>
		</div>
	);
}

export default ManufacturerBox;
