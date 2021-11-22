import styled, { withTheme } from "styled-components";

const NavigationBar = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;

	width: 100%;
	padding: 1rem 2rem;
	border-radius: 0 0 1.5rem 1.5rem;
	background: ${(props) => props.theme.colors.graybackground};

	.logo {
		font-size: 1.75rem;
		.yellow {
			font-size: 1.5rem;
			color: ${(props) => props.theme.colors.primary.gold};
		}
		.red {
			font-size: 1.5rem;
			color: ${(props) => props.theme.colors.primary.red};
		}
	}
`;

export default withTheme(NavigationBar);
