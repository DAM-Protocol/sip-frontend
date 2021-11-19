import { useMoralis } from "react-moralis";

const App = () => {
	console.log(process.env.REACT_APP_MORALIS_APPID);

	const { authenticate, isAuthenticated, user } = useMoralis();

	return !isAuthenticated ? (
		<div>
			<button onClick={() => authenticate({ provider: "walletconnect" })}>
				Authenticate
			</button>
		</div>
	) : (
		<div>
			<h1>Welcome {user.get("username")}</h1>
			<div className="App">🚀 SIP Frontend </div>
		</div>
	);
};

export default App;
