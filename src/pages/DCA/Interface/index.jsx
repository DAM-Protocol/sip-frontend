import { useEffect, useState, useMemo, useReducer, useCallback } from "react";
import { useMoralis } from "react-moralis";

import Button from "../../../components/Button/Button.styles";
import { Interface, Form } from "./Interface.styles";

import dcaAbi from "../../../abi/dcaAbi";

import TokenInput from "../../../components/Inputs/TokenInput";
import TokensPerInterval from "../../../components/Inputs/TpiInput";
import InterfaceSidebar from "./InterfaceSidebar";

import IntervalInput from "../../../components/Inputs/IntervalInput";
import DateInput from "../../../components/Inputs/DateInput";

const DCAInterface = () => {
	const { Moralis, isWeb3Enabled, isAuthenticated } = useMoralis();

	const [wasSubmitted, setWasSubmitted] = useState(false);
	const [tokenList, setTokenList] = useState([]);

	const tokensLookup = useMemo(
		() =>
			tokenList.reduce((obj, { id, address, ...rest }) => {
				obj[address] = { ...rest };
				return obj;
			}, {}),
		[tokenList]
	);

	// Fetch required data
	const fetchAllData = useCallback(async () => {
		fetch(
			"https://raw.githubusercontent.com/sushiswap/default-token-list/master/tokens/matic.json"
		)
			.then((res) => res.json())
			.then((data) => {
				setTokenList(data);
			})
			.catch((err) => console.log(err));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isAuthenticated, isWeb3Enabled]);

	useEffect(() => {
		if (isWeb3Enabled) {
			fetchAllData();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isAuthenticated, isWeb3Enabled]);

	const handleSubmit = (event) => {
		event.preventDefault();
		(async () => {
			const formData = new FormData(event.currentTarget);
			const fieldValues = Object.fromEntries(formData.entries());
			console.log(fieldValues);

			const formIsValid = Object.values(fieldValues).every((value) => !!value);

			if (formIsValid) {
				if (fieldValues["Buy-address"] === fieldValues["Sell-address"]) {
					window.alert("You cannot buy and sell the same token");
					return;
				}
				// const web3 = await Moralis.enableWeb3();
				// Call the smart Contract Function
			}

			setWasSubmitted(true);
		})();
	};

	return (
		<div>
			<h1>
				Create <span className="gold-highlight">DCA</span> Task
			</h1>

			<Interface className="interface" id="dcainterface">
				<InterfaceSidebar />
				<Form noValidate onSubmit={handleSubmit}>
					<TokenInput
						name="Buy"
						reason="To Buy"
						wasSubmitted={wasSubmitted}
						tokenList={tokenList || []}
						tokensLookup={tokensLookup}
						customAddress
						allowSearch
					/>
					<TokenInput
						name="Sell"
						reason="To Sell"
						wasSubmitted={wasSubmitted}
						tokenList={tokenList || []}
						tokensLookup={tokensLookup}
						customAddress
						allowSearch
					/>
					<TokensPerInterval
						fieldName={"Tokens/Interval"}
						wasSubmitted={wasSubmitted}
					/>
					<IntervalInput fieldName={"Interval"} wasSubmitted={wasSubmitted} />
					<DateInput fieldName={"Till Date"} wasSubmitted={wasSubmitted} />

					<Button filled type="submit">
						Create Task
					</Button>
				</Form>
			</Interface>
		</div>
	);
};

export default DCAInterface;
