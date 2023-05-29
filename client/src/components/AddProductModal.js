import axios from 'axios';
import { useEffect, useState } from 'react';
function AddProductModal({
	handleOpenAddProductModal,
	userManufacturers,
	userID,
}) {
	const [productInfo, setProductInfo] = useState({
		name: '',
		sku: '',
		manufacturer: '',
		costHistory: [],
		suppliers: [],
		count: 0,
		barcode: '',
		category: '',
		userID: userID,
	});

	function handleChange(event) {
		setProductInfo({ ...productInfo, [event.target.name]: event.target.value });
	}

	async function handleSubmit(event) {
		event.preventDefault();
		console.log(productInfo);
		const API = process.env.REACT_APP_API + '/products';
		await axios.post(API, productInfo);
		setProductInfo({
			name: '',
			sku: '',
			manufacturer: '',
			costHistory: [],
			suppliers: [],
			count: 0,
			barcode: '',
			category: '',
			userID: userID,
		});
		event.target.reset();
	}

	return (
		<div className="modalBackground">
			<div className="modal">
				<button
					onClick={handleOpenAddProductModal}
					className="closeModal">
					X
				</button>
				<h2>Add a Product</h2>

				<form onSubmit={handleSubmit}>
					<div className="formBlock">
						<label htmlFor="name">Name:</label>
						<input
							id="name"
							name="name"
							onChange={handleChange}
							required></input>
					</div>
					<div className="formBlock">
						<label htmlFor="sku">SKU:</label>
						<input
							id="sku"
							name="sku"
							onChange={handleChange}
							required></input>
					</div>
					<div className="formBlock">
						<label htmlFor="manufacturer">Manufacturer: </label>
						<select
							id="manufacturer"
							name="manufacturer"
							onChange={handleChange}
							required>
							<option
								value=""
								disabled
								selected>
								Select a Manufacturer
							</option>
							{userManufacturers.map((manufacturer) => (
								<option
									key={manufacturer.name}
									value={manufacturer.name}>
									{manufacturer.name}
								</option>
							))}
						</select>
					</div>
					<div className="formBlock">
						<label htmlFor="count">Count:</label>
						<input
							type="number"
							id="count"
							name="count"
							onChange={handleChange}
							required></input>
					</div>
					<div className="formBlock">
						<label htmlFor="barcode">Barcode:</label>
						<input
							id="barcode"
							name="barcode"
							onChange={handleChange}
							required></input>
					</div>
					<div className="formBlock">
						<label htmlFor="category">Category:</label>
						<input
							id="category"
							name="category"
							onChange={handleChange}
							required></input>
					</div>
					<button type="submit">Submit Form</button>
				</form>
			</div>
		</div>
	);
}

export default AddProductModal;
