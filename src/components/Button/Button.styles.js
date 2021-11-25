import styled from "styled-components";

const Button = styled.button`
	font-size: 1.2rem;
	padding: 0.35rem 1.75rem;
	cursor: pointer;
	border-radius: 50px;
	box-sizing: border-box;
	background: ${(props) =>
		(props.filled && props.theme.colors.primary.gold) ||
		(props.alert && `${props.theme.colors.alert}dd`) ||
		"none"};

	border: ${(props) =>
		(props.stroke && `2px solid ${props.theme.colors.primary.gold}`) ||
		(props.alert && `2px solid ${props.theme.colors.primary.red}`) ||
		"none"};

	font-weight: 400;

	color: ${(props) =>
		props.filled ? props.theme.colors.neutral.black : props.theme.colors.text};

	transition: all 0.2s ease-in-out;
	:hover {
		background: ${(props) =>
			(props.filled && `${props.theme.colors.primary.gold}ce`) ||
			(props.alert && `${props.theme.colors.alert}75`) ||
			`${props.theme.colors.primary.gold}25`};
	}
`;




export default Button;