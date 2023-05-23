function SignIn() {
	return (
		<div className="signIn">
			<div className="signInForm">
				<h2>Log In</h2>
				<form>
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						placeholder="johndoe@example.com"
						id="email"
						required></input>
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						id="password"
						required></input>
					<button
						type="submit"
						className="logIn">
						Log In
					</button>
				</form>
			</div>
		</div>
	);
}

export default SignIn;
