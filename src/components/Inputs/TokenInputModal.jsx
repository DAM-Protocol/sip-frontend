import { useRef, useCallback, useEffect, useState } from "react";
import { ListItem, TokenSymbol, TokenList, SearchBar } from "./Input.styles";
import { ModalContainer, Modal, ModalTitle } from "../Modal.styles";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";

const TokenInputModal = ({
	reason,
	tokenList: defaultTokenList,
	setIsModalOpen,
	setValue,
	customAddress,
	allowSearch,
}) => {
	const Web3Api = useMoralisWeb3Api();
	const modalRef = useRef();
	const [tokenList, setTokenList] = useState(defaultTokenList);
	const { web3 } = useMoralis();

	const handleClickOutside = useCallback((e) => {
		if (!modalRef.current?.contains(e.target)) setIsModalOpen(false);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleClick = (token) => {
		setValue(token);
		setIsModalOpen(false);
	};
	const handleChange = useCallback(
		(e) => {
			e.preventDefault();
			const keyword = e.target.value;
			if (keyword !== "") {
				const results = defaultTokenList.filter((token) => {
					return (
						token.name.toLowerCase().startsWith(keyword.toLowerCase()) ||
						token.symbol.toLowerCase().startsWith(keyword.toLowerCase()) ||
						token.address.toLowerCase().startsWith(keyword.toLowerCase())
					);
				});
				setTokenList(results);
			} else {
				setTokenList(defaultTokenList);
			}
		},
		[defaultTokenList]
	);
	const handleKeyDown = useCallback(
		async (e) => {
			if (e.key === "Enter" && customAddress)
				try {
					e.preventDefault();
					const address = web3.utils.toChecksumAddress(e.target.value);
					const options = { chain: "polygon", addresses: [address] };
					const tokenMetadata = await Web3Api.token.getTokenMetadata(options);
					setValue(tokenMetadata[0]);
					setIsModalOpen(false);
				} catch (err) {
					console.error("invalid ethereum address", err.message);
					e.preventDefault();
				}
		},
		[Web3Api.token, web3.utils]
	);
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
				{allowSearch && (
					<SearchBar
						onChange={handleChange}
						onKeyDown={handleKeyDown}
						placeholder="Search Tokens or Paste Token Address"></SearchBar>
				)}
				<hr />
				{/* Token List */}
				<TokenList allowSearch={allowSearch}>
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
