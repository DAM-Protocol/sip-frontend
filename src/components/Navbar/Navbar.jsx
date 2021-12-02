import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import { Link } from "react-router-dom";
import Button from "../Button/Button.styles";
import NavigationBar from "./Navbar.style";

const Navbar = () => {
	const { authenticate, isAuthenticated, logout, user } = useMoralis();

	const {
		web3,
		enableWeb3,
		isWeb3Enabled,
		isWeb3EnableLoading,
		web3EnableError,
		Moralis,
	} = useMoralis();

	// console.log(isWeb3Enabled);

	const authenticateUser = () => {
		authenticate();
		enableWeb3();
	};

	console.log(web3, isWeb3Enabled);

	const getnetwork = async () => {
		const chainId = await Moralis.getChainId();
		console.log(chainId);
	};

	const initalChecks = async () => {
		const isMetaMaskInstalled = await Moralis.isMetaMaskInstalled();
		console.log("Is metaMask " + isMetaMaskInstalled);

		if (isMetaMaskInstalled && !isWeb3Enabled) {
			enableWeb3();
		}
	};

	useEffect(() => {
		// if (window.ethereum !== undefined) {
		// 	enableWeb3();
		// }

		initalChecks();

		Moralis.onAccountsChanged(async (accs) => {
			const confirmed = window.confirm("Link this address to your account?");
			if (confirmed) {
				await Moralis.link(accs[0]);
				alert("Address added!");
			}
			console.log(accs);
		});
		Moralis.onChainChanged((network) => {
			console.log(network);
		});
		Moralis.onConnect(() => {
			console.log("Connected");
		});
		Moralis.onDisconnect(() => {
			console.log("DisConnected");
		});
	}, []);

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
				<Link className="link" to="/dhedge">
					dHEDHE
				</Link>
				<Link className="link" to="/dca">
					DCA
				</Link>
			</div>
			{isAuthenticated ? (
				<Button stroke onClick={getnetwork}>
					Polygon
				</Button>
			) : (
				<Button stroke onClick={() => logout()}>
					Polygon
				</Button>
			)}
			{!isAuthenticated ? (
				<Button stroke onClick={authenticateUser}>
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
