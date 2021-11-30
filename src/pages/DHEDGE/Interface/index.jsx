import { useEffect, useState, useMemo, useCallback } from "react";
import Button from "../../../components/Button/Button.styles";

import { Interface, Form } from "./Interface.styles";

import { useParams } from "react-router-dom";

import { gql } from "@apollo/client";
import { useDHedgeLazyQuery } from "../../../hooks/useDHedgeQuery";
import dhedgeSipAbi from "../../../abi/dHedgeSipAbi";
import dhedgeCoreAbi from "../../../abi/dhedgeCoreAbi";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import InterfaceSidebar from "./InterfaceSidebar";
import TokenInput from "../../../components/Inputs/TokenInput";
import RateInput from "../../../components/Inputs/RateInput";
import { useSfSubgraphLazyQuery } from "../../../hooks/useSfSubgraphLazyQuery";

const DhedgeInterface = () => {
	const { contractAddress } = useParams();
	const [poolAddress, setPoolAddress] = useState();

	const { Moralis, isWeb3Enabled } = useMoralis();
	const Web3Api = useMoralisWeb3Api();

	const [wasSubmitted, setWasSubmitted] = useState(false);
	const [tokenList, setTokenList] = useState();

	const [getData, { data: dHedgePoolData }] = useDHedgeLazyQuery(GET_POOL_INFO);
	const [getSuperTokenList, { data: superTokenList }] =
		useSfSubgraphLazyQuery(GET_SUPER_TOKEN_LIST);

	const tokensLookup = useMemo(
		() =>
			tokenList?.reduce((obj, { address, ...rest }) => {
				obj[address] = { ...rest };
				return obj;
			}, {}),
		[tokenList]
	);

	const fetchAllData = useCallback(async () => {
		let _pooladdress = await Moralis.executeFunction({
			contractAddress: contractAddress,
			functionName: "getPoolLogic",
			abi: dhedgeSipAbi,
		});
		setPoolAddress(_pooladdress);

		if (_pooladdress) {
			const { data: _data } = await getData({
				variables: { address: _pooladdress },
			});

			if (_data && _data?.fund) {
				const depositAssets = await Moralis.executeFunction({
					contractAddress: _data.fund.managerLogicAddress,
					functionName: "getDepositAssets",
					abi: dhedgeCoreAbi,
				});
				const options = { chain: "polygon", addresses: depositAssets };
				const tokenMetadata = await Web3Api.token.getTokenMetadata(options);

				setTokenList(tokenMetadata);

				if (tokenMetadata) {
					const tokens = tokenMetadata.reduce(
						(arr, token) => arr.concat(token["address"]),
						[]
					);
					getSuperTokenList({
						variables: { where: { underlyingAddress_in: tokens } },
					});
				}
			}
		}
	}, [Moralis, contractAddress]);

	useEffect(() => {
		(async () => {
			if (!isWeb3Enabled) {
				//
				console.log("Enabling Web3");
				await Moralis.enableWeb3();
				fetchAllData();
			}
		})();
	}, [isWeb3Enabled]);

	const handleSubmit = (event) => {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const fieldValues = Object.fromEntries(formData.entries());

		const formIsValid = Object.values(fieldValues).every(
			(value) => !getFieldError(value)
		);

		setWasSubmitted(true);
		if (formIsValid) {
			console.log(`Fast Form Submitted`, fieldValues);
		}
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
			underlyingToken {
				name
			}
		}
	}
`;
// {
//   "where": {
//     "underlyingAddress_in": ["0x2791bca1f2de4661ed88a30c99a7a9449aa84174"]
//   }
// }

function getFieldError(value) {
	if (!value) return "field is required";
}

export default DhedgeInterface;
