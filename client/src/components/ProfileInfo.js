import { useAuth0 } from '@auth0/auth0-react';

function ProfileInfo() {
	const { user } = useAuth0();
	const { name, picture } = user;
	console.log(name);

	return (
		<div className="headerProfileDisplay">
			<img
				src={picture}
				alt=""></img>
			<p>{name}</p>
		</div>
	);
}

export default ProfileInfo;
