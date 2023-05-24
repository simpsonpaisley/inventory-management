import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const AuthButton = () => {
	const { loginWithRedirect } = useAuth0();

	return (
		<button
			onClick={() => loginWithRedirect()}
			className="logIn">
			Log In
		</button>
	);
};

export default AuthButton;
