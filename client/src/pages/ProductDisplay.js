import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import AddProductSupplier from '../components/AddProductSupplier';
import AddCost from '../components/AddCost';

function ProductDisplay() {
	const { id } = useParams();
	const [productData, setProductData] = useState([]);
	const [suppliers, setSuppliers] = useState([]);
	const [userSuppliers, setUserSuppliers] = useState([]);
	const [showAddSupplier, setShowAddSupplier] = useState(false);
	const [costHistory, setCostHistory] = useState([]);
	const [showAddCost, setShowCost] = useState(false);

	useEffect(() => {
		async function getProduct() {
			const API = process.env.REACT_APP_API + '/products?_id=' + id;
			const response = await axios.get(API);
			const suppliersWithState = response.data[0].suppliers.map((supplier) => ({
				...supplier,
				supplierContacts: [],
				showContacts: false,
			}));
			setProductData(response.data[0]);
			setSuppliers(response.data[0].suppliers);
			setCostHistory(response.data[0].costHistory);
		}
		getProduct();
	}, [id]);

	async function getContacts(supplier) {
		const API =
			process.env.REACT_APP_API +
			'/suppliers?supplierRef=' +
			supplier.supplierRef;
		const response = await axios.get(API);
		supplier.supplierContacts = response.data[0].contacts;
		supplier.showContacts = !supplier.showContacts;
		setSuppliers([...suppliers]);
	}

	async function addSupplier() {
		const API =
			process.env.REACT_APP_API + '/suppliers?userID=' + productData.userID;
		const response = await axios.get(API);
		setUserSuppliers(response.data);
		setShowAddSupplier(!showAddSupplier);
	}

	function handleAddCost() {
		setShowCost(!showAddCost);
	}

	return (
		<div className="productsPage">
			<Header />
			<div className="productsPageMain">
				<Sidebar />
				<div className="productDisplayBackground">
					<div className="productDisplay">
						<h2>{productData.name}</h2>
						<div className="productInformation">
							<div className="basicProductInformation">
								<div className="shortProductInfoPage">
									<h3>SKU:</h3>
									<p>{productData.sku}</p>
								</div>
								<div className="shortProductInfoPage">
									<h3>Manufacturer:</h3>
									<p>{productData.manufacturer}</p>
								</div>
								<div className="shortProductInfoPage">
									<h3>Category:</h3>
									<p>{productData.category}</p>
								</div>
								<div className="shortProductInfoPage">
									<h3>Barcode:</h3>
									<p>{productData.barcode}</p>
								</div>
							</div>
							<div className="supplierDisplay">
								<h3>Suppliers</h3>
								{suppliers &&
									suppliers.map((supplier) => (
										<div className="supplierDisplayMap">
											<h4>{supplier.name}</h4>
											<button onClick={() => getContacts(supplier)}>
												View Contacts
											</button>
											{supplier.showContacts && (
												<div className="supplierContacts">
													{supplier.supplierContacts.map((contact) => (
														<div className="supplierContact">
															<h5>{contact.name}</h5>
															<a href={'mailto:${contact.email}'}>
																{contact.email}
															</a>
														</div>
													))}
												</div>
											)}
										</div>
									))}
								<button
									className="addButton"
									onClick={addSupplier}>
									{' '}
									+ Add Supplier
								</button>
							</div>

							<div className="costHistoryDisplay">
								<h3>Price History</h3>
								{costHistory &&
									costHistory
										.slice(0)
										.reverse()
										.map((cost) => (
											<div class="costHistory">
												<h4>{cost.supplier}</h4>
												<p>{cost.date} </p>
												<p className="cost">£{cost.cost}</p>
											</div>
										))}
								<button
									className="addButton"
									onClick={handleAddCost}>
									Add Price
								</button>
							</div>
						</div>
						{showAddCost && (
							<AddCost
								handleAddCost={handleAddCost}
								productData={productData}
							/>
						)}
						{showAddSupplier && (
							<AddProductSupplier
								userSuppliers={userSuppliers}
								addSupplier={addSupplier}
								productData={productData}
							/>
						)}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default ProductDisplay;
