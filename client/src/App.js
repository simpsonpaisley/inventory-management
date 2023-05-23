import './App.css';
import axios from 'axios';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LogIn from './pages/LogIn';
const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
	const [products, setProducts] = useState([]);

	async function getProducts() {
		const API = 'http://localhost:1995/products';
		const results = await axios.get(API);
		setProducts(results.data);
	}
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<LandingPage />}></Route>
				<Route
					path="/login"
					element={<LogIn />}></Route>
			</Routes>
		</BrowserRouter>
	);
}
root.render(App);
export default App;
