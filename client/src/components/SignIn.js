function SignIn() {
	return (
		<div className="signIn">
			<h2>Log In</h2>
			<form>
				<label htmlFor="email">Email:</label>
				<input
					type="email"
					placeholder="johndoe@example.com"
					id="email"
					value="email"></input>
				<label htmlFor="password">Password:</label>
				<input
					type="password"
					id="password"
					value="password"></input>
				<button
					type="submit"
					className="logIn">
					Log In
				</button>
			</form>
		</div>
	);
}

export default SignIn;
