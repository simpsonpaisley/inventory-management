import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';

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
			</Routes>
		</div>
	);
}

export default App;
