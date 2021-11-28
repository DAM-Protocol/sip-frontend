import { useMoralis } from "react-moralis";
import { Link } from "react-router-dom";

const Home = () => {
	const { isAuthenticated, user } = useMoralis();
	return (
		<div className="home page">
			<div className="App">🚀 SIP Frontend </div>

			{!isAuthenticated ? (
				<div>Connect Wallet</div>
			) : (
				<div>
					<h1>Welcome {user.get("username")}</h1>
				</div>
			)}
			<Link to="./dca/dashboard">DCA Dashboard</Link>
			<br />
			<Link to="./dca/interface">DCA Interface</Link>
			<br />
			<Link to="./dhedge/dashboard">Dhedge Dashboard</Link>
			<br />
			<Link to="./dhedge/interface">Dhedge Interface</Link>
			<br />
			<Link to="./components">All Components</Link>
		</div>
	);
};

export default Home;
