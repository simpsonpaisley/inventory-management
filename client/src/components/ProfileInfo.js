import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import ProfileDropDown from './ProfileDropDown';

function ProfileInfo() {
	const { user } = useAuth0();
	const { name, picture } = user;
	const [showDropDown, setShowDropDown] = useState(false);

	function openDropDown() {
		setShowDropDown(!showDropDown);
	}

	return (
		<div className="profileDropDownArea">
			<div
				className="headerProfileDisplay"
				onMouseOver={openDropDown}>
				<img
					src={picture}
					alt=""></img>
				<p id="user">{name}</p>
			</div>
			{showDropDown && (
				<ProfileDropDown
					showDropDown={setShowDropDown}
					openDropDown={openDropDown}
				/>
			)}
		</div>
	);
}

export default ProfileInfo;
