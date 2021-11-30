import styled from "styled-components";

export const Field = styled.div`
	display: flex;
	align-items: center;
	background: ${(props) => props.theme.colors.highlight};
	position: relative;
	margin: 1rem 0;

	width: 90%;
	border-radius: 1rem;
	label {
		margin: 1rem 1rem;
		width: 17.5ch;
	}
	.error-message {
		color: ${(props) => props.theme.colors.primary.red};
		position: absolute;
		top: -1.25rem;
		font-size: 0.75rem;
	}
`;

export const InputContainer = styled.div`
	height: 100%;
	width: 100%;
	cursor: pointer;
	input {
		background: ${(props) => props.theme.colors.lightbackground};
		color: ${(props) => props.theme.colors.text};
		padding: 0.5rem 1rem;
		font-size: 1.2rem;
		border: none;
		border-radius: 1rem;
		height: 100%;
		width: 100%;
		:focus-visible {
			outline: #f6b243 2px solid;
		}
	}

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	input[type="number"] {
		-moz-appearance: textfield;
	}
`;

export const RightButton = styled.div`
	background: ${(props) => props.theme.colors.darkbackground};
	min-width: 3.5rem;
	height: 100%;
	position: absolute;
	right: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 0.95rem;
	cursor: pointer;
	padding: 1rem;
	color: ${(props) => `${props.theme.colors.text}75`};
`;

export const TokenSymbol = styled.span`
	display: inline-block;
	padding: 0.5rem;
	padding: 0.25rem 0.75rem;
	border-radius: 1rem;
	background: none;
	transition: all 0.1s;
`;

export const ListItem = styled.div`
	padding: 0.75rem 0;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: ${(props) => `${props.theme.colors.text}aa`};

	:hover {
		color: ${(props) => `${props.theme.colors.text}`};
	}

	:hover ${TokenSymbol} {
		background: ${(props) => `${props.theme.colors.primary.gold}cc`};
	}
`;

export const TokenList = styled.div`
	height: calc(100% - 3rem);
	overflow: auto;
`;
