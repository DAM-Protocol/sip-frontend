import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { Link } from "react-router-dom";
import { useMoralisDapp } from "../../context/MoralisDappProvider";
import useChain from "../../hooks/useChain";
import Button from "../Button/Button.styles";
import NavigationBar from "./Navbar.style";
import PolygonLogoSVG from "../../assets/polygon-logo.svg";

const Navbar = () => {
	const { authenticate, isAuthenticated, logout } = useMoralis();
	const { switchNetwork } = useChain();
	const { chainId, walletAddress } = useMoralisDapp();
	const [selected, setSelected] = useState();

	useEffect(() => {
		if (!chainId) return null;
		if (chainId !== "0x89") {
			console.log("current chainId: ", chainId);
			// Alert Wrong Chain Id
			setSelected("Wrong Chain");
		} else setSelected("Polygon");
	}, [chainId]);

	const handleNetworkClick = (e) => {
		console.log("switch to: ", "0x89");
		switchNetwork("0x89");
	};
	const handleClick = async () => {
		await authenticate();
	};

	return (
		<NavigationBar>
			<Link to="/">
				<div className="logo">
					d-
					<span className="yellow">SIP</span>
					<span className="red">.</span>
				</div>
			</Link>
			<div className="links">
				<Link className="link" to="/dhedge">
					dHEDGE
				</Link>
				<Link className="link" to="/dca">
					DCA
				</Link>
				<a href="https://github.com/DAM-Protocol" target="_blank" rel="noreferrer">
					GitHub
				</a>
			</div>
			<Button
				id="chain"
				stroke={chainId === "0x89"}
				alert={chainId !== "0x89"}
				onClick={handleNetworkClick}>
				{chainId === "0x89" && <img src={PolygonLogoSVG} alt="Polygon" />}
				{selected}
			</Button>
			{!isAuthenticated ? (
				<Button stroke onClick={() => handleClick()}>
					Login
				</Button>
			) : (
				<Button stroke onClick={() => logout()}>
					Logout {walletAddress?.slice(0, 5)}...
				</Button>
			)}
		</NavigationBar>
	);
};

export default Navbar;
