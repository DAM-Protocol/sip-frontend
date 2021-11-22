import { useMoralis } from "react-moralis";
import Button from "./Button.styles";
import NavigationBar from "./Navbar.style";
const Navbar = () => {
	const { authenticate, isAuthenticated, logout } = useMoralis();

	return (
		<NavigationBar>
			<div className="logo">
				any
				<span className="yellow">Stream</span>
				<span className="red">.</span>
			</div>
			{!isAuthenticated ? (
				<Button
					onClick={() =>
						authenticate({ provider: "walletconnect", chainId: 137 })
					}>
					Connect Wallet
				</Button>
			) : (
				<Button onClick={() => logout()}>LogOut</Button>
			)}
		</NavigationBar>
	);
};

export default Navbar;
