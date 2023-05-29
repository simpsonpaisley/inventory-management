import { useState } from 'react';
import axios from 'axios';

function AddManufacturerModal({ handleOpenAddManufacturerModal, userID }) {
	const [manufacturerInfo, setManufacturerInfo] = useState({
		name: '',
		website: '',
		contacts: [],
		userID: userID,
	});

	function handleChange(event) {
		setManufacturerInfo({
			...manufacturerInfo,
			[event.target.name]: event.target.value,
		});
	}

	async function handleSubmit(event) {
		event.preventDefault();
		const API = 'http://localhost:1995/manufacturers';

		await axios.post(API, manufacturerInfo);

		setManufacturerInfo({
			name: '',
			website: '',
			contacts: [],
			userID: userID,
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
