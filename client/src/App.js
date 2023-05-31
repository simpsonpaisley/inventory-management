import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Manufacturers from './pages/Manufacturers';
import Suppliers from './pages/Suppliers';
import ProductDisplay from './pages/ProductDisplay';

function App() {
	const { user, isLoading } = useAuth0();
	const [userID, setUserID] = useState('');

	try {
		useEffect(() => {
			if (isLoading) {
				console.log('User Loading');
			} else if (!isLoading && user) {
				const { sub } = user;
				setUserID(sub);
				console.log(userID);
			}
		});
	} catch {
		console.log('Error, no user');
	}

	return (
		<div>
			<Routes>
				<Route
					path="/"
					element={<LandingPage userID={userID} />}
				/>
				<Route
					path="/dashboard"
					element={<Dashboard userID={userID} />}
				/>
				<Route
					path="/products"
					element={<Products userID={userID} />}
				/>
				<Route
					path="/manufacturers"
					element={<Manufacturers userID={userID} />}
				/>
				<Route
					path="/suppliers"
					element={<Suppliers userID={userID} />}
				/>
				<Route
					path="/products/:id"
					element={<ProductDisplay />}
				/>
			</Routes>
		</div>
	);
}

export default App;
