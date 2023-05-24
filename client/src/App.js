import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';

function App() {
	return (
		<div>
			<Routes>
				<Route
					path="/"
					element={<LandingPage />}
				/>
				<Route
					path="/dashboard"
					element={<Dashboard />}
				/>
			</Routes>
		</div>
	);
}

export default App;
