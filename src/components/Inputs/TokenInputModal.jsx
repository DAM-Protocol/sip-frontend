import { useRef, useCallback, useEffect } from "react";
import { ListItem, TokenSymbol, TokenList } from "./Input.styles";
import { ModalContainer, Modal, ModalTitle } from "../Modal.styles";

const TokenInputModal = ({ reason, tokenList, setIsModalOpen, setValue }) => {
	const modalRef = useRef();

	const handleClickOutside = useCallback((e) => {
		if (!modalRef.current?.contains(e.target)) setIsModalOpen(false);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleClick = (token) => {
		setValue(token);
		setIsModalOpen(false);
	};
	useEffect(() => {
		document.addEventListener("click", handleClickOutside);

		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, [handleClickOutside]);

	return (
		<ModalContainer className="modal">
			<Modal className="inner" ref={modalRef}>
				<ModalTitle>Select A Token {reason}</ModalTitle>
				{/* Search Bar */}
				<hr />
				{/* Token List */}
				<TokenList>
					{tokenList &&
						tokenList.map((token, index) => (
							<TokenListItem
								key={index}
								token={token}
								handleClick={handleClick}
							/>
						))}
				</TokenList>
			</Modal>
		</ModalContainer>
	);
};

const TokenListItem = ({ token, handleClick }) => {
	return (
		<ListItem
			onClick={() => {
				handleClick(token);
			}}>
			<span>{token?.name}</span> <TokenSymbol>{token?.symbol}</TokenSymbol>
		</ListItem>
	);
};

export default TokenInputModal;
