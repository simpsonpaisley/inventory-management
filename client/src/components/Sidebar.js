import { Link } from 'react-router-dom';

function Sidebar() {
	return (
		<div className="sidebar">
			<Link to="/dashboard">
				<div className="sidebarSection">
					<p>Dashboard</p>
				</div>
			</Link>
			<Link to="/products">
				<div className="sidebarSection">
					<p>Products</p>
				</div>
			</Link>
			<Link to="/manufacturers">
				<div className="sidebarSection">
					<p>Manufacturers</p>
				</div>
			</Link>
			<Link to="/suppliers">
				<div className="sidebarSection">
					<p>Suppliers</p>
				</div>
			</Link>
			<Link to="/reports">
				<div className="sidebarSection">
					<p>Reports</p>
				</div>
			</Link>
		</div>
	);
}

export default Sidebar;
