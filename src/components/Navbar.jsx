import { useMoralis } from "react-moralis";
import { Link } from "react-router-dom";
import Button from "./Button.styles";
import NavigationBar from "./Navbar.style";

const Navbar = () => {
	const { authenticate, isAuthenticated, logout } = useMoralis();

	return (
		<NavigationBar>
			<Link to="/">
				<div className="logo">
					any
					<span className="yellow">Stream</span>
					<span className="red">.</span>
				</div>
			</Link>
			{!isAuthenticated ? (
				<Button
					stroke
					onClick={() =>
						authenticate({ provider: "walletconnect", chainId: 137 })
					}>
					Connect Wallet
				</Button>
			) : (
				<Button stroke onClick={() => logout()}>
					LogOut
				</Button>
			)}
		</NavigationBar>
	);
};

export default Navbar;
