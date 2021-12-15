import { useNavigate } from "react-router-dom";
import {
	Button,
	Card,
	CardsList,
	CardWrapper,
	Heading,
	Text,
} from "../Home.style";

const DHedgeLanding = () => {
	const navigate = useNavigate();
	return (
		<div>
			<CardWrapper>
				<Heading
					style={{
						color: "#fff",
					}}>
					Super - dHEDGE
				</Heading>
				<CardsList>
					<Card>
						<Heading>Interface</Heading>
						<Text>
							Create Super Streams to dHEDGE Pools and relax as the yields grow
						</Text>
						<Button onClick={() => navigate("/dca/pools")}>Invest</Button>
					</Card>
					<Card>
						<Heading>Dashboard</Heading>
						<Text>Control your super streams to dHEDGE Pools</Text>
						<Button onClick={() => navigate("/dhedge/dashboard")}>
							Visit Dashboard
						</Button>
					</Card>
				</CardsList>
			</CardWrapper>
		</div>
	);
};

export default DHedgeLanding;
