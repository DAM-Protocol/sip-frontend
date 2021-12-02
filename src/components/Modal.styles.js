import styled from "styled-components";

export const ModalContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.75);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 100;
`;

export const Modal = styled.div`
	border: 3px solid ${(props) => props.theme.colors.lightbackground};
	background: ${(props) => props.theme.colors.darkbackground};

	min-width: 50ch;
	height: 60vh;

	padding: 2rem 2rem;

	border-radius: 1.75rem;
`;
export const ModalTitle = styled.div`
	position: sticky;
	font-size: 1.5rem;
	margin-bottom: 1rem;
`;
