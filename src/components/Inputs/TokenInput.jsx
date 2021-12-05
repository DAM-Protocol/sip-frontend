import { useState, memo } from "react";
import { Field, InputContainer, RightButton } from "./Input.styles";

import TokenInputModal from "./TokenInputModal";
import { BsChevronDown } from "react-icons/bs";

const MemoizedTokenInputModal = memo(TokenInputModal);

function getFieldError(value, tokensLookup) {
	if (!value) return "Field is required";
	if (tokensLookup?.id) return "Token Not Available";
}

const TokenInput = ({
	name,
	reason,
	wasSubmitted,
	tokenList,
	tokensLookup,
	customAddress,
	allowSearch,
}) => {
	const [value, setValue] = useState();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [touched, setTouched] = useState(false);
	const errorMessage = getFieldError(value?.id || value?.address, tokensLookup);
	const displayErrorMessage = (wasSubmitted || touched) && errorMessage;

	const openModal = (e) => {
		e?.preventDefault();
		setIsModalOpen(true);
	};

	return (
		<Field key={name}>
			{/* Modal */}
			{isModalOpen && (
				<MemoizedTokenInputModal
					reason={reason}
					setIsModalOpen={setIsModalOpen}
					setValue={setValue}
					tokenList={tokenList}
					customAddress={customAddress}
					allowSearch={allowSearch}
				/>
			)}

			{/* Label */}
			<label htmlFor={`${name}-input`}>{name}</label>

			{/* Input */}
			<InputContainer>
				<input
					id={`${name}-input`}
					name={name}
					value={value ? value?.symbol : ""}
					readOnly
					type="text"
					onClick={openModal}
					onBlur={() => setTouched(true)}
					required
					aria-describedby={displayErrorMessage ? `${name}-error` : undefined}
				/>
				<input
					hidden
					name={`${name}-address-input`}
					value={value ? (value?.id ? value.id : value.address) : ""}
					readOnly
					type="text"
					required
					aria-describedby={
						displayErrorMessage ? `${name}-address-error` : undefined
					}
				/>
			</InputContainer>

			{/* Right Icons/Buttons/Components */}
			<RightButton onClick={openModal}>
				<BsChevronDown />
			</RightButton>

			{/* Error Message */}
			{displayErrorMessage ? (
				<span role="alert" id={`${name}-error`} className="error-message">
					{errorMessage}
				</span>
			) : null}
		</Field>
	);
};

export default TokenInput;
