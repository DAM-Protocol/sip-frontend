import { useMoralis } from "react-moralis";

const Navbar = () => {
	const { authenticate, isAuthenticated, logout } = useMoralis();

	return (
		<nav>
			{!isAuthenticated ? (
				<button onClick={() => authenticate({})}>Authenticate</button>
			) : (
				<button onClick={() => logout()}>Logout</button>
			)}
		</nav>
	);
};

export default Navbar;
