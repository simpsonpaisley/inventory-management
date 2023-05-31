import { useState, useEffect } from 'react';
import axios from 'axios';

function AddCost({ handleAddCost, productData }) {
	const suppliers = productData.suppliers;
	const [name, setName] = useState({});
	const [newCost, setNewCost] = useState({
		supplier: '',
		supplierRef: '',
		date: '',
		cost: 0,
	});
	const [productInfo, setProductInfo] = useState({
		...productData,
	});

	function handleChange(event) {
		if (event.target.name === 'supplierRef') {
			const foundSupplier = suppliers.find(
				(supplier) => supplier.supplierRef === event.target.value
			);
			setName(foundSupplier);

			const supplierName = foundSupplier.name;

			setNewCost((prev) => ({
				...prev,
				supplier: supplierName,
				supplierRef: foundSupplier.supplierRef,
			}));
		}

		if (event.target.name === 'date') {
			setNewCost((prev) => ({
				...prev,
				date: event.target.value,
			}));
		}

		if (event.target.name === 'cost') {
			const price = parseFloat(event.target.value);
			setNewCost((prev) => ({
				...prev,
				cost: price,
			}));
		}
	}

	async function handleSubmit(event) {
		event.preventDefault();
		const updatedProductData = {
			...productData,
			costHistory: [...productData.costHistory, newCost],
		};

		const API = process.env.REACT_APP_API + '/products/' + productData._id;
		const response = await axios.put(API, updatedProductData);
		console.log(response.data);

		setProductInfo(updatedProductData);
		setNewCost({
			supplier: '',
			supplierRef: '',
			date: '',
			cost: 0,
		});
		event.target.reset();
	}

	return (
		<div className="modalBackground">
			<div className="modal">
				<button
					className="closeModal"
					onClick={handleAddCost}>
					X
				</button>
				<h2>Add Price</h2>

				<form onSubmit={handleSubmit}>
					<div className="formBlock">
						<label htmlFor="supplier">Supplier:</label>
						<select
							id="supplier"
							name="supplierRef"
							required
							onChange={handleChange}>
							<option
								value=""
								disabled>
								Select a Supplier:
							</option>
							{suppliers.map((supplier) => (
								<option
									key={supplier.supplierRef}
									value={supplier.supplierRef}>
									{supplier.name}
								</option>
							))}
						</select>
					</div>
					<div className="formBlock">
						<label htmlFor="date">Date:</label>
						<input
							type="date"
							id="date"
							name="date"
							onChange={handleChange}></input>
					</div>
					<div className="formBlock">
						<label htmlFor="cost">Cost:</label>
						<input
							type="number"
							id="cost"
							name="cost"
							onChange={handleChange}
							step={0.01}></input>
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
		</div>
	);
}

export default AddCost;
