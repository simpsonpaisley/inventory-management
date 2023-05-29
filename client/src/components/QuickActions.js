import axios from 'axios';
import { useState } from 'react';
import AddProductModal from './AddProductModal';
import AddManufacturerModal from './AddManufacturerModal';
import AddSupplierModal from './AddSupplierModal';
import ScanSoldStockModal from './ScanSoldStockModal';
import ScanReceivedStockModal from './ScanReceivedStockModal';

function QuickActions({ userID }) {
	const [userManufacturers, setUserManufacturers] = useState([]);
	const [userSuppliers, setUserSuppliers] = useState([]);
	const [showAddProductModal, setShowAddProductModal] = useState(false);
	const [showAddManufacturerModal, setShowAddManufacturerModal] =
		useState(false);
	const [showAddSupplierModal, setShowAddSupplierModal] = useState(false);
	const [showScanSoldModal, setShowScanSoldModal] = useState(false);
	const [showScanReceivedModal, setShowScanReceivedModal] = useState(false);

	async function getUserInformation() {
		const manufacturerAPI =
			'http://localhost:1995/manufacturers?userID=' + userID;

		const supplierAPI = 'http://localhost:1995/suppliers?userID=' + userID;

		const manufacturerResponse = await axios.get(manufacturerAPI);
		const suppliersResponse = await axios.get(supplierAPI);
		setUserManufacturers(manufacturerResponse.data);
		setUserSuppliers(suppliersResponse.data);
	}

	function handleOpenAddProductModal() {
		setShowAddProductModal(!showAddProductModal);
		getUserInformation();
	}

	function handleOpenAddManufacturerModal() {
		setShowAddManufacturerModal(!showAddManufacturerModal);
	}

	function handleOpenAddSupplierModal() {
		setShowAddSupplierModal(!showAddSupplierModal);
	}

	function handleOpenScanSoldModal() {
		setShowScanSoldModal(!showScanSoldModal);
	}

	function handleOpenScanReceivedModal() {
		setShowScanReceivedModal(!showScanReceivedModal);
	}

	return (
		<div className="quickActions">
			<h2>Quick Actions</h2>
			<div className="quickActionsButtonDisplay">
				<button
					className="quickActionButton"
					onClick={handleOpenScanSoldModal}>
					Scan Sold Stock
				</button>
				<button
					className="quickActionButton"
					onClick={handleOpenScanReceivedModal}>
					Scan Received Stock
				</button>
				<button
					className="quickActionButton"
					onClick={handleOpenAddProductModal}>
					Add a Product
				</button>
				<button
					className="quickActionButton"
					onClick={handleOpenAddManufacturerModal}>
					Add a Manufacturer
				</button>
				<button
					className="quickActionButton"
					onClick={handleOpenAddSupplierModal}>
					Add a Supplier
				</button>
			</div>
			{showAddProductModal && (
				<div className="modalBackground">
					<AddProductModal
						userSuppliers={userSuppliers}
						userManufacturers={userManufacturers}
						userID={userID}
						handleOpenAddProductModal={handleOpenAddProductModal}
					/>
				</div>
			)}
			{showAddManufacturerModal && (
				<div className="modalBackground">
					<AddManufacturerModal
						handleOpenAddManufacturerModal={handleOpenAddManufacturerModal}
						userID={userID}
					/>
				</div>
			)}
			{showAddSupplierModal && (
				<div className="modalBackground">
					<AddSupplierModal
						handleOpenAddSupplierModal={handleOpenAddSupplierModal}
						userID={userID}
					/>
				</div>
			)}
			{showScanSoldModal && (
				<div className="modalBackground">
					<ScanSoldStockModal
						handleOpenScanSoldModal={handleOpenScanSoldModal}
						userID={userID}
					/>
				</div>
			)}
			{showScanReceivedModal && (
				<div className="modalBackground">
					<ScanReceivedStockModal
						handleOpenScanReceivedModal={handleOpenScanReceivedModal}
					/>
				</div>
			)}
		</div>
	);
}

export default QuickActions;
