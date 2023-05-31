import { useState } from 'react';
import axios from 'axios';

function AddProductSupplier({ userSuppliers, addSupplier, productData }) {
	const [productInfo, setProductInfo] = useState({
		...productData,
	});

	const [selectedSupplier, setSelectedSupplier] = useState(null);

	function handleChange(event) {
		const selectedSupplierRef = event.target.value;
		const selectedSupplierData = userSuppliers.find(
			(supplier) => supplier.supplierRef === selectedSupplierRef
		);
		setSelectedSupplier(selectedSupplierData);
		console.log(selectedSupplierData);
	}

	async function handleSubmit(event) {
		event.preventDefault();
		if (!selectedSupplier) return;

		const updatedProductInfo = {
			...productInfo,
			suppliers: [...productInfo.suppliers, selectedSupplier],
		};

		try {
			const API = process.env.REACT_APP_API + '/products/' + productData._id;
			console.log(API);
			const response = await axios.put(API, updatedProductInfo);
			console.log(response.data);

			setProductInfo(updatedProductInfo);
			setSelectedSupplier(null);
		} catch (error) {
			console.error('Failed to update product:', error);
		}
	}
	return (
		<div className="modalBackground">
			<div className="modal">
				<button
					className="closeModal"
					onClick={addSupplier}>
					X
				</button>
				<h2>Add Supplier to Product</h2>

				<form onSubmit={handleSubmit}>
					<div className="formBlock">
						<label htmlFor="supplier">Choose a Supplier </label>
						<select
							id="supplier"
							name="supplier"
							onChange={handleChange}>
							<option
								value=""
								disabled>
								Select a Supplier
							</option>
							{userSuppliers.map((supplier) => (
								<option
									value={supplier.supplierRef}
									key={supplier.supplierRef}>
									{supplier.name}
								</option>
							))}
						</select>
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
		</div>
	);
}

export default AddProductSupplier;
