import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
	const [products, setProducts] = useState([]);

	async function getProducts() {
		const API = 'http://localhost:1995/products';
		const results = await axios.get(API);
		setProducts(results.data);
	}
	return (
		<div className="App">
			<button onClick={getProducts}>Get Products</button>
			{products.map((product) => (
				<h2>{product.name}</h2>
			))}
		</div>
	);
}

export default App;
