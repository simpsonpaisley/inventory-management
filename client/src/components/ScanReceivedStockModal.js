import { useState } from 'react';
import axios from 'axios';

function ScanReceivedStockModal({ handleOpenScanReceivedModal }) {
	const [barcode, setBarcode] = useState('');

	function handleChange(event) {
		setBarcode(event.target.value);
	}
	async function changeStock(event) {
		event.preventDefault();
		const API = 'http://localhost:1995/products?barcode=' + barcode;
		const response = await axios.get(API);
		const productData = response.data[0];

		const newCount = productData.count + 1;

		const updateProduct = {
			...productData,
			count: newCount,
		};

		const updateProductAPI =
			'http://localhost:1995/products/' + productData._id;
		await axios.put(updateProductAPI, updateProduct);

		event.target.reset();
	}

	return (
		<div className="modal">
			<button
				onClick={handleOpenScanReceivedModal}
				className="closeModal">
				X
			</button>
			<h2>Scan Received Stock</h2>
			<form onSubmit={changeStock}>
				<input
					id="barcode"
					name="barcode"
					autoFocus
					onChange={handleChange}></input>
				<button type="submit"></button>
			</form>
		</div>
	);
}

export default ScanReceivedStockModal;
