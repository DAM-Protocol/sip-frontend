import styled from "styled-components";

const Button = styled.button`
	font-size: 1.2rem;
	width: fit-content;
	padding: 0.35rem 1.75rem;
	margin: 0 0.5rem;
	cursor: pointer;
	border-radius: 50px;
	box-sizing: border-box;
	background: ${(props) =>
		(props.filled && props.theme.colors.primary.gold) ||
		(props.alert && `${props.theme.colors.alert}dd`) ||
		(props.light && `${props.theme.colors.primary.gold}75`) ||
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
			(props.light && `${props.theme.colors.primary.gold}aa`) ||
			`${props.theme.colors.primary.gold}25`};
	}
`;

export const LinkButton = styled.a`
	display: inline-block;
	font-size: 1.2rem;
	width: fit-content;
	padding: 0.35rem 1.75rem;
	margin: 0 0.5rem;
	cursor: pointer;
	border-radius: 50px;
	box-sizing: border-box;
	background: ${(props) =>
		(props.filled && props.theme.colors.primary.gold) ||
		(props.alert && `${props.theme.colors.alert}dd`) ||
		(props.light && `${props.theme.colors.primary.gold}75`) ||
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
			(props.light && `${props.theme.colors.primary.gold}aa`) ||
			`${props.theme.colors.primary.gold}25`};
	}
`;

export default Button;
