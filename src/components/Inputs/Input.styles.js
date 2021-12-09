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
	input[type="date"] {
		&::-webkit-calendar-picker-indicator {
			height: calc(100% - 4px);
			width: 3.5rem;
			cursor: pointer;
			background-color: ${(props) => props.theme.colors.darkbackground};
			background-image: ${(props) =>
				`url(
					'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="%23${props.theme.colors.text.slice(
						1
					)}75" width="16" height="15" viewBox="0 0 24 24"><path  d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"/></svg>'
				)`};
			background-position: 50% 50%;
			background-size: 1.75rem;

			position: absolute;
			right: 0;

			z-index: 2;
			border-radius: 1rem;
		}
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

	select {
		background: unset;
		color: unset;
		border: unset;
		font-size: unset;
		cursor: pointer;
		&:focus-visible {
			outline: none;
		}
	}
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
	height: ${(props) =>
		(props.allowSearch && "calc(100% - 5rem)") || "calc(100% - 3rem)"};

	overflow: auto;
`;

export const SearchBar = styled.input`
	width: 100%;
	border: 2px solid ${(props) => props.theme.colors.lightbackground};

	background: ${(props) => props.theme.colors.lightbackground};
	color: ${(props) => props.theme.colors.text};
	padding: 0.5rem 1rem;
	font-size: 1.2rem;
	border-radius: 1rem;
	margin-bottom: 0.5rem;

	width: 100%;
	:focus-visible {
		outline: #f6b243 2px solid;
	}

	::-webkit-input-placeholder,
	:-ms-input-placeholder {
		/* Edge */
		color: ${(props) => `${props.theme.colors.text}dd`};
	}

	::placeholder {
		color: ${(props) => `${props.theme.colors.text}`};
		color: ${(props) => `${props.theme.colors.text}75`};
	}
`;
