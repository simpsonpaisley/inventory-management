import Footer from '../components/Footer';
import Header from '../components/Header';
import QuickActions from '../components/QuickActions';

function Dashboard() {
	return (
		<div>
			<Header />
			<div className="dashboard">
				<QuickActions />
			</div>
			<Footer />
		</div>
	);
}

export default Dashboard;
