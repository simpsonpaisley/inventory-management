import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import SupplierDisplay from '../components/SupplierDisplay';

function Suppliers({ userID }) {
	return (
		<div className="productsPage">
			<Header />
			<div className="manufacturerMain">
				<Sidebar />
				<SupplierDisplay userID={userID} />
			</div>
			<Footer />
		</div>
	);
}

export default Suppliers;
