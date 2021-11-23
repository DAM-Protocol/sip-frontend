import styled from "styled-components";

const Button = styled.button`
	font-size: 1.2rem;
	padding: 0.35rem 1.5rem;
	background: none;

	border-radius: 500px;
	border: 2px solid ${(props) => props.theme.colors.primary.gold};
	font-weight: 400;
	color: ${(props) => props.theme.colors.text};
`;

export default Button;
