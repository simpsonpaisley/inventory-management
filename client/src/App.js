import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import LogIn from './pages/LogIn';

function App() {
	return (
		<div>
			<Routes>
				<Route
					path="/"
					element={<LandingPage />}
				/>
				<Route
					path="/login"
					element={<LogIn />}
				/>
			</Routes>
		</div>
	);
}

export default App;
