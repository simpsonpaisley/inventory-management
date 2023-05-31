import { useState } from 'react';
import axios from 'axios';

function AddManufacturerModal({ handleOpenAddManufacturerModal, userID }) {
	const [manufacturerInfo, setManufacturerInfo] = useState({
		name: '',
		website: '',
		contacts: [],
		userID: userID,
		manufacturerRef: '',
	});

	function formatManufacturerRef(name) {
		return name.replace(/\s/g, '').toLowerCase();
	}

	function handleChange(event) {
		const value = event.target.value;

		if (event.target.name === 'name') {
			setManufacturerInfo({
				...manufacturerInfo,
				[event.target.name]: value,
				manufacturerRef: formatManufacturerRef(value),
			});
		} else {
			setManufacturerInfo({
				...manufacturerInfo,
				[event.target.name]: value,
			});
		}
	}

	async function handleSubmit(event) {
		event.preventDefault();
		const API = process.env.REACT_APP_API + '/manufacturers';
		console.log(API);
		await axios.post(API, manufacturerInfo);

		setManufacturerInfo({
			name: '',
			website: '',
			contacts: [],
			userID: userID,
			manufacturerRef: '',
		});

		event.target.reset();
	}
	return (
		<div className="modal">
			<button
				onClick={handleOpenAddManufacturerModal}
				className="closeModal">
				X
			</button>
			<h2>Add Manufacturer</h2>
			<form onSubmit={handleSubmit}>
				<div className="formBlock">
					<label htmlFor="name">Name:</label>
					<input
						id="name"
						name="name"
						onChange={handleChange}></input>
				</div>
				<div className="formBlock">
					<label htmlFor="website">Website:</label>
					<input
						id="website"
						name="website"
						onChange={handleChange}></input>
				</div>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default AddManufacturerModal;
