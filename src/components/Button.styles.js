import styled from "styled-components";

const Button = styled.button`
	font-size: 1.2rem;
	padding: 0.35rem 1.25rem;
	background: none;

	border-radius: 500px;
	border: 3px solid ${(props) => props.theme.colors.primary.gold};
	font-weight: 300;
	color: ${(props) => props.theme.colors.text};
`;

export default Button;
