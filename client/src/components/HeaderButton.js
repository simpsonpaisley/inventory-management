import AuthButton from './AuthButton';
import LogOut from './LogOut';
import ProfileInfo from './ProfileInfo';

import { useAuth0 } from '@auth0/auth0-react';

const HeaderButton = () => {
	const { isAuthenticated } = useAuth0();

	return isAuthenticated ? (
		<div className="headerAccount">
			<ProfileInfo />
			<LogOut />
		</div>
	) : (
		<AuthButton />
	);
};

export default HeaderButton;
