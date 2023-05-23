import './App.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LogIn from './pages/LogIn';
const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
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
