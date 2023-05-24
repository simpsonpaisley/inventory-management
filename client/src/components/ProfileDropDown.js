import LogOut from './LogOut';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

function ProfileDropDown({ openDropDown, showDropDown }) {
	const { logout } = useAuth0();

	return (
		<div
			className="profileDropDown"
			onMouseLeave={openDropDown}>
			<Link to="/dashboard">
				<div
					className="dropDownSection"
					href="/dashboard">
					<p className="dropDownPara">Dashboard</p>
				</div>
			</Link>
			<div
				className="dropDownSection"
				onClick={() =>
					logout({ logoutParams: { returnTo: window.location.origin } })
				}>
				<LogOut />
			</div>
		</div>
	);
}

export default ProfileDropDown;
