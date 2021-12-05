import { useState } from "react";
import { Field, InputContainer, RightButton } from "./Input.styles";

function getFieldError(value) {
	if (!value) return "field is required";
}

const RateInput = ({ wasSubmitted, fieldName }) => {
	const [value, setValue] = useState("");
	const [touched, setTouched] = useState(false);
	const errorMessage = getFieldError(value);
	const displayErrorMessage = (wasSubmitted || touched) && errorMessage;

	return (
		<Field key={"rate"}>
			<label htmlFor={`rate-input`}>{fieldName}</label>

			<InputContainer>
				<input
					id="rate-input"
					name="rate"
					type="number"
					onChange={(event) => setValue(event.currentTarget.value)}
					onBlur={() => setTouched(true)}
					onWheel={(e) => e.target.blur()}
					required
					aria-describedby={displayErrorMessage ? `rate-error` : undefined}
				/>
			</InputContainer>

			{/* Right Icons/Buttons/Components */}
			<RightButton>/interval</RightButton>

			{displayErrorMessage ? (
				<span role="alert" id={`rate-error`} className="error-message">
					{errorMessage}
				</span>
			) : null}
		</Field>
	);
};

export default RateInput;
