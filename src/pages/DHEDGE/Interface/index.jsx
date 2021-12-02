import { useEffect, useState, useMemo, useCallback } from "react";
import SuperfluidSDK from "@superfluid-finance/js-sdk";
import BigNumber from "bignumber.js";
import { useParams } from "react-router-dom";
import { gql } from "@apollo/client";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";

import Button from "../../../components/Button/Button.styles";
import { Interface, Form } from "./Interface.styles";

import { useDHedgeLazyQuery } from "../../../hooks/useDHedgeQuery";
import { useSfSubgraphLazyQuery } from "../../../hooks/useSfSubgraphLazyQuery";

import dhedgeSipAbi from "../../../abi/dHedgeSipAbi";
import dhedgeCoreAbi from "../../../abi/dhedgeCoreAbi";

import TokenInput from "../../../components/Inputs/TokenInput";
import RateInput from "../../../components/Inputs/RateInput";
import InterfaceSidebar from "./InterfaceSidebar";

const DhedgeInterface = () => {
	// dHEDGE SIP Contract Address
	const { contractAddress } = useParams();
	// dHEDGE Pool Address
	const [poolAddress, setPoolAddress] = useState();

	// SuperFluid SDK Object
	const [superFluid, setSuperFluid] = useState();

	const { Moralis, isWeb3Enabled, isAuthenticated } = useMoralis();
	const Web3Api = useMoralisWeb3Api();

	const [wasSubmitted, setWasSubmitted] = useState(false);
	const [tokenList, setTokenList] = useState();

	const [getData, { data: dHedgePoolData }] = useDHedgeLazyQuery(GET_POOL_INFO);
	const [getSuperTokenList, { data: superTokenList }] =
		useSfSubgraphLazyQuery(GET_SUPER_TOKEN_LIST);

	const tokensLookup = useMemo(
		() =>
			superTokenList?.tokens?.reduce((obj, { id, ...rest }) => {
				obj[id] = { ...rest };
				return obj;
			}, {}),
		[superTokenList]
	);

	// Fetch required data
	const fetchAllData = useCallback(async () => {
		// Get dHEDGE Pool Address from dHEDGE SIP Contract
		let _pooladdress = await Moralis.executeFunction({
			contractAddress: contractAddress,
			functionName: "getPoolLogic",
			abi: dhedgeSipAbi,
		});
		setPoolAddress(_pooladdress);

		if (_pooladdress) {
			// Get dHEDGE Pool Data
			const { data: _data } = await getData({
				variables: { address: _pooladdress },
			});

			if (_data && _data?.fund) {
				// Get available tokens for dHEDGE Pool Deposits
				const depositAssets = await Moralis.executeFunction({
					contractAddress: _data.fund.managerLogicAddress,
					functionName: "getDepositAssets",
					abi: dhedgeCoreAbi,
				});

				// Get deposit tokens metadata
				const options = { chain: "polygon", addresses: depositAssets };
				const tokenMetadata = await Web3Api.token.getTokenMetadata(options);

				setTokenList(tokenMetadata);

				if (tokenMetadata) {
					const tokens = tokenMetadata.reduce(
						(arr, token) => arr.concat(token["address"]),
						[]
					);
					// Get super tokens for deposit tokens
					getSuperTokenList({
						variables: { where: { underlyingAddress_in: tokens } },
					});
				}
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isAuthenticated, isWeb3Enabled, contractAddress]);

	useEffect(() => {
		if (isWeb3Enabled) {
			fetchAllData();
			initialiseSuperfluid();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isAuthenticated, isWeb3Enabled]);

	const initialiseSuperfluid = useCallback(async () => {
		const web3 = await Moralis.enableWeb3();
		// Initialise Superfluid SDK
		const sf = new SuperfluidSDK.Framework({
			web3: web3,
		});
		await sf.initialize();
		setSuperFluid(sf);
	}, [Moralis]);

	const handleSubmit = (event) => {
		event.preventDefault();
		(async () => {
			const formData = new FormData(event.currentTarget);
			const fieldValues = Object.fromEntries(formData.entries());

			const formIsValid = Object.values(fieldValues).every((value) => !!value);
			if (formIsValid) {
				const web3 = await Moralis.enableWeb3();

				const amountPerMonth = new BigNumber(fieldValues["rate"]).multipliedBy(
					new BigNumber(10).pow(
						tokensLookup[fieldValues["Token-address-input"]].decimals
					)
				);

				const seconds = new BigNumber(2592000);

				const ratePerSecond = amountPerMonth.dividedBy(seconds);
				console.log(ratePerSecond.toFixed(0).toString());

				// Initiate Flow of super tokens
				const sfUser = superFluid.user({
					address: web3.currentProvider.selectedAddress,
					token: fieldValues["Token-address-input"],
				});
				await sfUser.flow({
					recipient: contractAddress,
					flowRate: ratePerSecond.toFixed(0).toString(),
				});
			}

			setWasSubmitted(true);
		})();
	};

	return (
		<div>
			<h1>
				Create <span className="gold-highlight">dHEDGE</span> Stream
			</h1>

			<Interface className="interface">
				<InterfaceSidebar
					data={dHedgePoolData?.fund}
					tokenList={tokenList}
					seed={contractAddress}
				/>
				<Form
					noValidate
					onSubmit={handleSubmit}
					poolAddress={poolAddress}
					contractAddress={contractAddress}>
					<TokenInput
						name="Token"
						reason="To Stream"
						wasSubmitted={wasSubmitted}
						tokenList={superTokenList?.tokens}
						tokensLookup={tokensLookup}
					/>
					<RateInput wasSubmitted={wasSubmitted} />
					<Button filled type="submit">
						Start Streaming
					</Button>
				</Form>
			</Interface>
		</div>
	);
};
const GET_POOL_INFO = gql`
	query GetPoolInfo($address: String!) {
		fund(address: $address) {
			id
			managerName
			name
			managerLogicAddress
		}
	}
`;

const GET_SUPER_TOKEN_LIST = gql`
	query Tokens($where: Token_filter) {
		tokens(where: $where) {
			name
			id
			symbol
			decimals
			underlyingToken {
				name
			}
		}
	}
`;

export default DhedgeInterface;
