import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

function Products({ userID }) {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function getProducts() {
			const API = 'http://localhost:1995/products?userID=' + userID;

			const response = await axios.get(API);
			setProducts(response.data);
		}
		getProducts();
	});
	return (
		<div className="productsPage">
			<Header />
			<div className="productsMain">
				<Sidebar />
				<div className="productTable">
					<table>
						<tr>
							<th>Products</th>
						</tr>
						<tr>
							<th>Name</th>
							<th>Manufacturer</th>
							<th>Count</th>
							<th>Category</th>
							<th>SKU</th>
						</tr>
						{products.map((product) => {
							return (
								<tr>
									<td>{product.name}</td>
									<td>{product.manufacturer}</td>
									<td>{product.count}</td>
									<td>{product.category}</td>
									<td>{product.sku}</td>
								</tr>
							);
						})}
					</table>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Products;
