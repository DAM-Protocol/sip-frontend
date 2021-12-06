import { useState } from "react";
import { Field, InputContainer } from "./Input.styles";

const DateInput = ({ wasSubmitted, fieldName }) => {
	const [value, setValue] = useState("");
	const [touched, setTouched] = useState(false);
	const errorMessage = getFieldError(value);
	const displayErrorMessage = (wasSubmitted || touched) && errorMessage;

	return (
		<Field key={"till-date"}>
			<label htmlFor={`till-date-input`}>{fieldName}</label>

			<InputContainer>
				<input
					id="till-date"
					name="till-date"
					type="date"
					onChange={(event) => setValue(event.currentTarget.value)}
					onBlur={() => setTouched(true)}
					required
					aria-describedby={displayErrorMessage ? `till-date-error` : undefined}
				/>
			</InputContainer>

			{displayErrorMessage ? (
				<span role="alert" id={`till-date-error`} className="error-message">
					{errorMessage}
				</span>
			) : null}
		</Field>
	);
};

function getFieldError(value) {
	if (!value) return "field is required";
}

export default DateInput;
