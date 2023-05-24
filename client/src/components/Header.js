import HeaderButton from './HeaderButton';

function Header() {
	return (
		<div className="header">
			<div className="logo">
				<img src={require('../images/Logo.png')}></img>
				<h1 className="logoText">
					<a href="/">STOCKWISE</a>
				</h1>
			</div>
			<HeaderButton />
		</div>
	);
}

export default Header;
