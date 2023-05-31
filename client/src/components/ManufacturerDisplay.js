import axios from 'axios';
import { useState, useEffect } from 'react';
import ManufacturerBox from './ManufacturerBox';

function ManufacturerDisplay({ userID }) {
	const [manufacturers, setManufacturers] = useState([]);

	useEffect(() => {
		async function getManufacturers() {
			const API = process.env.REACT_APP_API + '/manufacturers?userID=' + userID;

			const response = await axios.get(API);
			setManufacturers(response.data);
			console.log(response.data);
		}
		getManufacturers();
	}, []);

	return (
		<div className="manufacturerDisplay">
			<h2>Manufacturers</h2>
			<div className="manufacturers">
				{manufacturers.map((manufacturer) => (
					<ManufacturerBox manufacturer={manufacturer} />
				))}
			</div>
		</div>
	);
}

export default ManufacturerDisplay;
