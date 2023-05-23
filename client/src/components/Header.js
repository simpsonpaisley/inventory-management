function Header() {
	return (
		<div className="header">
			<div className="logo">
				<img src={require('../images/Logo.png')}></img>
				<h1 className="logoText">
					<a href="http://localhost:3000">STOCKWISE</a>
				</h1>
			</div>
			<button className="logIn">
				<a href="http://localhost:3000/login">LOG IN</a>
			</button>
		</div>
	);
}

export default Header;
