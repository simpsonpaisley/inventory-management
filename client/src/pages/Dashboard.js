import Footer from '../components/Footer';
import Header from '../components/Header';
import QuickActions from '../components/QuickActions';
import Sidebar from '../components/Sidebar';
function Dashboard({ userID }) {
	console.log(userID);
	return (
		<div>
			<Header />
			<div className="main">
				<Sidebar />
				<div className="dashboard">
					<QuickActions userID={userID} />
				</div>
			</div>

			<Footer />
		</div>
	);
}

export default Dashboard;
