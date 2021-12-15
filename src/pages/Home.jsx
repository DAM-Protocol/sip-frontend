import { useNavigate } from "react-router-dom";

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
						Create Streams to dHEDGE Pools and relax as the yields grow
					</Text>
					<Button onClick={() => navigate("/dhedge")}>Start Investing</Button>
				</Card>
			</CardsList>
		</CardWrapper>
	);
};

export default Home;
