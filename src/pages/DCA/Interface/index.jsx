import { useEffect, useState, useMemo, useCallback } from "react";
import { useMoralis } from "react-moralis";

import Button from "../../../components/Button/Button.styles";
import { Interface, Form } from "./Interface.styles";

import TokenInput from "../../../components/Inputs/TokenInput";
import RateInput from "../../../components/Inputs/RateInput";
import InterfaceSidebar from "./InterfaceSidebar";
import dcaAbi from "../../../abi/dcaAbi";

const DhedgeInterface = () => {
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

			const formIsValid = Object.values(fieldValues).every((value) => !!value);
			if (
				fieldValues["buy-address-input"] === fieldValues["sell-address-input"]
			) {
				window.alert("You cannot buy and sell the same token");
				return;
			}
			if (formIsValid) {
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

			<Interface className="interface">
				<InterfaceSidebar
				// data={dHedgePoolData?.fund}
				// seed={contractAddress}
				/>
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
					<RateInput
						fieldName={"Tokens/Interval"}
						wasSubmitted={wasSubmitted}
					/>
					{/* <IntervalInput
						wasSubmitted={wasSubmitted}
					/>
					<IntervalsInput
						wasSubmitted={wasSubmitted}
					/> */}

					<Button filled type="submit">
						Create Task
					</Button>
				</Form>
			</Interface>
		</div>
	);
};

export default DhedgeInterface;
