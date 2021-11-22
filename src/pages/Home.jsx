import { useMoralis } from "react-moralis";

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
		</div>
	);
};

export default Home;
