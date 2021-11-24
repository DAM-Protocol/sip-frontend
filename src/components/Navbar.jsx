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
			<div className="links">
				<Link className="link" to="/about">
					About
				</Link>
				<Link className="link" to="/docs">
					Docs
				</Link>
				<Link className="link" to="/invest">
					Invest
				</Link>
			</div>
			{!isAuthenticated ? (
				<Button stroke>Matic</Button>
			) : (
				<Button stroke onClick={() => logout()}>
					LogOut
				</Button>
			)}
			{!isAuthenticated ? (
				<Button stroke onClick={() => authenticate()}>
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
