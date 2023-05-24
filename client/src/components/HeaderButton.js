import AuthButton from './AuthButton';

import ProfileInfo from './ProfileInfo';

import { useAuth0 } from '@auth0/auth0-react';

const HeaderButton = () => {
	const { isAuthenticated } = useAuth0();

	return isAuthenticated ? (
		<div className="headerAccount">
			<ProfileInfo />
		</div>
	) : (
		<AuthButton />
	);
};

export default HeaderButton;
