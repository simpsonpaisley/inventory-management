import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductTableRow from './ProductTableRow';
function ProductsTable({ userID }) {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function getProducts() {
			const API = process.env.REACT_APP_API + '/products?userID=' + userID;

			const response = await axios.get(API);
			setProducts(response.data);
		}
		getProducts();
	}, [userID]);

	return (
		<div className="productTable">
			<h2 id="tableHeader">Products</h2>
			{products.map((product) => (
				<ProductTableRow product={product} />
			))}
		</div>
	);
}

export default ProductsTable;
