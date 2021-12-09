import styled from "styled-components";
import Blockies from "react-blockies";

export const Interface = styled.div`
	background: ${(props) => props.theme.colors.graybackground};
	display: flex;

	min-height: calc(100vh - 18rem);
	max-width: 80ch;
	width: fit-content;

	padding: 0.25rem;
	margin: auto;
	margin-top: 2rem;

	border-radius: 2rem;
`;

export const Sidebar = styled.div`
	background: ${(props) => props.theme.colors.darkbackground};
	text-align: center;
	max-width: 30ch;
	width: 40%;

	padding: 2rem 2rem;

	border-radius: 1.75rem;

	.flex-column {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		height: 100%;
	}

	.assets {
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;
		margin-top: 0.75rem;
		max-height: 6rem;
		overflow-y: auto;
	}
`;
export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
	width: 100%;
	max-width: 50ch;
	padding: 2rem 2rem;
	button[type="submit"] {
		justify-self: end;
		margin-top: 1rem;
		position: sticky;
		bottom: 0;
	}
`;

export const Blockie = styled(Blockies)`
	border: 2px solid ${(props) => props.theme.colors.lightbackground};
	width: 80%;
	border-radius: 50%;
`;
