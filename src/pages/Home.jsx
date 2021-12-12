import { useNavigate } from "react-router-dom";
import { useMoralis } from "react-moralis";
import { Link } from "react-router-dom";
import {
	Button,
	Card,
	CardsList,
	CardWrapper,
	Heading,
	Text,
} from "./Home.style";

const Home = () => {
	const navigate = useNavigate();
	return (
		<CardWrapper>
			<Heading
				style={{
					color: "#fff",
				}}>
				Systematic Investment Plans Protocol for DeFi.
			</Heading>
			<CardsList>
				<Card>
					<Heading>Dollar Cost Average</Heading>
					<Text>
						Create automated tasks to buy Crypto for you while you grab some
						fresh air.
					</Text>
					<Button onClick={() => navigate("/dca/interface")}>
						Create Tasks
					</Button>
				</Card>
				<Card>
					<Heading>Super-dHEDGE</Heading>
					<Text>
						Create Streams to dHEDGE Pools and relax as the yeilds grow
					</Text>
					<Button
						onClick={() =>
							navigate(
								"/dhedge/interface/0xD53aecafB10A518F9df9dA1a87D650c02380e02b"
							)
						}>
						Start Investing
					</Button>
				</Card>
			</CardsList>

			{/* {!isAuthenticated ? (
				<div>Please Connect Wallet</div>
			) : (
				<div>
					<h1>Welcome {user.get("username")}</h1>
				</div>
			)} */}

			{/* <Link to="./dca/dashboard">DCA Dashboard</Link>
			<br />
			<Link to="./dca/interface">DCA Interface</Link>
			<br />
			<Link to="./dhedge/dashboard">Dhedge Dashboard</Link>
			<br />
			<Link to="./dhedge/interface">Dhedge Interface</Link>
			<br />
			<Link to="./components">All Components</Link> */}
		</CardWrapper>
	);
};

export default Home;
