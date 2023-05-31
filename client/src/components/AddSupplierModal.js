import { useState } from 'react';
import axios from 'axios';

function AddSupplierModal({ handleOpenAddSupplierModal, userID }) {
	const [supplierInfo, setSupplierInfo] = useState({
		name: '',
		website: '',
		contacts: [],
		userID: userID,
		supplierRef: '',
	});
	function formatSupplierRef(name) {
		return name.replace(/\s/g, '').toLowerCase();
	}

	function handleChange(event) {
		const value = event.target.value;

		if (event.target.name === 'name') {
			setSupplierInfo({
				...supplierInfo,
				[event.target.name]: value,
				supplierRef: formatSupplierRef(value),
			});
		} else {
			setSupplierInfo({
				...supplierInfo,
				[event.target.name]: value,
			});
		}
	}

	async function handleSubmit(event) {
		event.preventDefault();
		const API = process.env.REACT_APP_API + '/suppliers';

		await axios.post(API, supplierInfo);

		setSupplierInfo({
			name: '',
			website: '',
			contacts: [],
			userID: userID,
			supplierRef: '',
		});

		event.target.reset();
	}
	return (
		<div className="modal">
			<button
				className="closeModal"
				onClick={handleOpenAddSupplierModal}>
				X
			</button>
			<h2>Add Supplier</h2>
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

export default AddSupplierModal;
