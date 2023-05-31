import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import ProductsTable from '../components/ProductsTable';

function Products({ userID }) {
	return (
		<div className="productsPage">
			<Header />
			<div className="productsMain">
				<Sidebar />
				<ProductsTable
					userID={userID}
					className="productTableComponent"
				/>
			</div>
			<Footer />
		</div>
	);
}

export default Products;
