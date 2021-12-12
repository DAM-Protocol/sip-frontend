import { useState } from "react";
import { Field, InputContainer, RightButton } from "./Input.styles";

const IntervalInput = ({ wasSubmitted, fieldName }) => {
	const [value, setValue] = useState(0);
	const [intervalType, setIntervalType] = useState("months");
	const [touched, setTouched] = useState(false);
	const errorMessage = getFieldError(value);
	const displayErrorMessage = (wasSubmitted || touched) && errorMessage;

	return (
		<Field key={"interval"}>
			<label htmlFor={`interval`}>{fieldName}</label>

			<InputContainer>
				<input
					id="interval"
					name="interval"
					type="number"
					onChange={(event) => setValue(event.currentTarget.value)}
					onBlur={() => setTouched(true)}
					onWheel={(e) => e.target.blur()}
					required
					aria-describedby={displayErrorMessage ? `interval-error` : undefined}
				/>
				<input
					hidden
					name={`interval-type`}
					value={intervalType}
					readOnly
					type="text"
					required
				/>
			</InputContainer>

			{/* Right Icons/Buttons/Components */}
			<RightButton>
				<Dropdown value={intervalType} setIntervalType={setIntervalType} />
			</RightButton>

			{displayErrorMessage ? (
				<span role="alert" id={`interval-error`} className="error-message">
					{errorMessage}
				</span>
			) : null}
		</Field>
	);
};

function getFieldError(value) {
	if (!value) return "field is required";
}
const Dropdown = ({ value, setIntervalType }) => {
	return (
		<select value={value} onChange={(e) => setIntervalType(e.target.value)}>
			<option value="months">Months</option>
			<option value="days">Days</option>
			<option value="hours">Hours</option>
		</select>
	);
};

export default IntervalInput;
