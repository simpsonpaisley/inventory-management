import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import ManufacturerDisplay from '../components/ManufacturerDisplay';

function Manufacturers({ userID }) {
	return (
		<div className="productsPage">
			<Header />
			<div className="manufacturerMain">
				<Sidebar />
				<ManufacturerDisplay userID={userID} />
			</div>
			<Footer />
		</div>
	);
}

export default Manufacturers;
