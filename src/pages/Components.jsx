import Button from "../components/Button/Button.styles";
import Navbar from "../components/Navbar/Navbar";
import { ComponentsStyled, Heading } from "./Components.styles";

const Components = () => {
	return (
		<ComponentsStyled>
			<Heading>All Components</Heading>
			<div className="organism level">
				<h2>Organisms</h2>

				<div className="component">
					<h4>Navigation Bar</h4>
					<Navbar />
				</div>
			</div>
			<hr />

			{/* <div className="molecule level">
				<h2>Molecules</h2>

				<div className="component"></div>
			</div>
			<hr /> */}
			<div className="atom level">
				<h3>Atoms</h3>
				<Button stroke>Button</Button>
				<Button filled>Button Filled</Button>
				<Button light>Button Light</Button>
				<Button alert>Button Alert</Button>
			</div>
			<hr />
		</ComponentsStyled>
	);
};

export default Components;
