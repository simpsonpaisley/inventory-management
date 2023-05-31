import axios from 'axios';
import { useState, useEffect } from 'react';
import SupplierBox from './SupplierBox';

function SupplierDisplay({ userID }) {
	const [suppliers, setSuppliers] = useState([]);

	useEffect(() => {
		async function getSuppliers() {
			const API = process.env.REACT_APP_API + '/suppliers?userID=' + userID;

			const response = await axios.get(API);
			setSuppliers(response.data);
			console.log(response.data);
		}
		getSuppliers();
	}, []);

	return (
		<div className="manufacturerDisplay">
			<h2>Suppliers</h2>
			<div className="manufacturers">
				{suppliers.map((supplier) => (
					<SupplierBox supplier={supplier} />
				))}
			</div>
		</div>
	);
}

export default SupplierDisplay;
