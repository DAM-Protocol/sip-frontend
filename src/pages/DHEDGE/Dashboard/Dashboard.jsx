import { useMemo, useEffect, useState, useCallback } from "react";
import { BiExit } from "react-icons/bi";
import { BsChevronDoubleDown } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import Heading from "../../../components/Heading/Heading";
import {
	Actions,
	BiLinkIcon,
	ContentText,
	DashbaordWrapper,
	DashboardContent,
	DashboardExtraOptionsHeader,
	DashboardExtraOptionsRow,
	DashboardHeader,
	DashboardRow,
	DashboardRowWrapper,
	HeaderText,
	Icon,
	Number,
	PoolName,
	StreamOptions,
	Tag,
	Withdrawable,
	WithdrawButton,
} from "./Dashboard.styles";
import { dHedgeContractMap } from "../../../helpers/dHedgeContractMap";

import GET_POOL_STREAMS_DATA from "../../../queries/getPoolStreamsData";
import GET_STREAM_INFO_FOR_POOL from "../../../queries/getStreamInfoForPool";
import { useMoralis, useWeb3ExecuteFunction,useChain } from "react-moralis";


import { useSfSubgraphQuery } from "../../../hooks/useSfSubgraphQuery";

import SuperfluidSDK from "@superfluid-finance/js-sdk";
import BigNumber from "bignumber.js";
import dHedgeSipAbi from "../../../abi/dHedgeSipAbi";

const DhedgeDashboard = () => {
	const dHedgeContractList = useMemo(() => {
		return Object.keys(dHedgeContractMap);
	}, []);
	const [superFluid, setSuperFluid] = useState();
	const { Moralis, isWeb3Enabled, isAuthenticated } = useMoralis();
	const { chainId } = useChain();

	const initialiseSuperfluid = useCallback(async () => {
		const web3 = await Moralis.enableWeb3();
		// Initialise Superfluid SDK
		const sf = new SuperfluidSDK.Framework({
			web3: web3,
		});
		await sf.initialize();
		setSuperFluid(sf);
	}, [Moralis]);

	useEffect(() => {
		if (isWeb3Enabled) {
			initialiseSuperfluid();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isAuthenticated, isWeb3Enabled, chainId]);

	const { user } = useMoralis();
	return (
		<div>
			<Heading>dHEDGE Dashboard</Heading>
			<DashbaordWrapper>
				<DashboardHeader>
					<Icon>
						<BsChevronDoubleDown />
					</Icon>
					<Number>
						<HeaderText>#</HeaderText>
					</Number>
					<PoolName>
						<HeaderText>Pool Name</HeaderText>
					</PoolName>
					<Withdrawable>
						<HeaderText>Withdrawable</HeaderText>
					</Withdrawable>
					<Actions>
						<HeaderText>Actions</HeaderText>
					</Actions>
				</DashboardHeader>
				<DashboardContent>
					<DashboardRowWrapper>
						{Object.keys(dHedgeContractMap).map((key, index) => {
							return (
								<PoolRow
									userAddress={user?.get("ethAddress")}
									poolDetails={dHedgeContractMap[key]}
									poolAddress={key}
									key={index}
									index={index}
								/>
							);
						})}

						{/* <DashboardRow>
							<Icon>
								<MdKeyboardArrowDown />
							</Icon>
							<Number>
								<ContentText>1</ContentText>
							</Number>
							<PoolName>
								<ContentText> Convex Strategies</ContentText>
								<BiLinkIcon />
							</PoolName>
							<Withdrawable>
								<ContentText>300</ContentText> <Tag>LPs</Tag>
							</Withdrawable>
							<Actions>
								<WithdrawButton>Withdraw Lp</WithdrawButton>
							</Actions>
						</DashboardRow> */}
					</DashboardRowWrapper>
				</DashboardContent>
			</DashbaordWrapper>
		</div>
	);
};
const PoolRow = ({
	index,
	poolAddress,
	userAddress,
	poolDetails: { name },
}) => {
	const { loading, error, data } = useSfSubgraphQuery(GET_POOL_STREAMS_DATA, {
		variables: { where: { sender: userAddress, receiver: poolAddress } },
	});

	const { Moralis } = useMoralis();

	const [showExtraOptions, setShowExtraOptions] = useState(false);

	const {
		data: withdrawableBalance,
		error: withdrawableBalanceError,
		fetch: fetchWithdrawableBalance,
		isFetching: isTokenBalanceLoading,
	} = useWeb3ExecuteFunction({
		abi: dHedgeSipAbi,
		contractAddress: poolAddress,
		functionName: "calcWithdrawable",
		params: {
			_user: userAddress,
		},
	});
	const {
		data: userLockedShareAmount,
		error: calcUserLockedShareAmountError,
		fetch: calcUserLockedShareAmount,
		isFetching: isCalculatingUserLockedShareAmount,
	} = useWeb3ExecuteFunction({
		abi: dHedgeSipAbi,
		contractAddress: poolAddress,
		functionName: "calcUserLockedShareAmount",
		// params: {
		// 	_user: poolAddress,
		// },
	});
	useEffect(() => {
		if (userAddress) {
			fetchWithdrawableBalance();
			calcUserLockedShareAmount();
		}
	}, [poolAddress, userAddress]);

	return (
		<DashboardRowWrapper>
			<DashboardRow onClick={() => setShowExtraOptions(!showExtraOptions)}>
				<Icon>
					<MdKeyboardArrowDown />
				</Icon>
				<Number>
					<ContentText>{index + 1}</ContentText>
				</Number>
				<PoolName>
					<ContentText> {name}</ContentText>
					<BiLinkIcon />
				</PoolName>
				<Withdrawable>
					<ContentText>{withdrawableBalance}</ContentText> <Tag>LPs</Tag>
				</Withdrawable>
				<Actions>
					<WithdrawButton>Withdraw LPs</WithdrawButton>
				</Actions>
			</DashboardRow>

			{showExtraOptions && (
				<div className="DashboardExtraOptions">
					<DashboardExtraOptionsHeader>
						<Icon>Asset</Icon>
						<Number>
							<ContentText>Rate /month</ContentText>
						</Number>
						<PoolName>
							<ContentText>Streamed</ContentText>
						</PoolName>
						<Withdrawable>
							<ContentText>Uninvested</ContentText>
						</Withdrawable>
						<Actions>
							<ContentText>Stream Controls</ContentText>
						</Actions>
					</DashboardExtraOptionsHeader>

					<AssetRow
						userAddress={userAddress}
						poolAddress={poolAddress}
						stream={data?.streams[0]}
					/>

					{/* <DashboardExtraOptionsRow>
						<Icon>
							<Tag>LPs</Tag>
						</Icon>
						<Number>
							<ContentText>100</ContentText>
						</Number>
						<PoolName>
							<ContentText>100</ContentText>
						</PoolName>
						<Withdrawable>
							<ContentText>100</ContentText>
						</Withdrawable>
						<Actions>
							<StreamOptions>
								<WithdrawButton>Edit</WithdrawButton>
								<WithdrawButton>Stop</WithdrawButton>
							</StreamOptions>
						</Actions>
					</DashboardExtraOptionsRow>

					<DashboardExtraOptionsRow>
						<Icon>
							<Tag>LPs</Tag>
						</Icon>
						<Number>
							<ContentText>100</ContentText>
						</Number>
						<PoolName>
							<ContentText>100</ContentText>
						</PoolName>
						<Withdrawable>
							<ContentText>100</ContentText>
						</Withdrawable>
						<Actions>
							<StreamOptions>
								<WithdrawButton>Edit</WithdrawButton>
								<WithdrawButton>Stop</WithdrawButton>
							</StreamOptions>
						</Actions>
					</DashboardExtraOptionsRow> */}
				</div>
			)}
		</DashboardRowWrapper>
	);
};

const AssetRow = ({ userAddress, poolAddress, stream }) => {
	const {
		data: withdrawUninvestedAllData,
		error: withdrawUninvestedAllError,
		fetch: withdrawUninvestedAll,
		isFetching: isWithdrawingUninvestedAll,
	} = useWeb3ExecuteFunction({
		abi: dHedgeSipAbi,
		contractAddress: poolAddress,
		functionName: "withdrawUninvestedAll",
		params: {},
	});

	const { Moralis, isWeb3Enabled } = useMoralis();
	const {
		data: withdrawUninvestedSingleData,
		error: withdrawUninvestedSingleError,
		fetch: withdrawUninvestedSingle,
		isFetching: isWithdrawingUninvestedSingle,
	} = useWeb3ExecuteFunction({
		abi: dHedgeSipAbi,
		contractAddress: poolAddress,
		functionName: "withdrawUninvestedSingle",
	});
	const {
		data: unInvestedAmount,
		error: calcUserUninvestedError,
		fetch: calcUserUninvested,
		isFetching: isCalculatingUserUninvested,
	} = useWeb3ExecuteFunction({
		abi: dHedgeSipAbi,
		contractAddress: poolAddress,
		functionName: "calcUserUninvested",
		params: {
			_user: userAddress,
			_token: stream?.token.underlyingAddress,
		},
	});

	useEffect(() => {
		calcUserUninvested();
	}, [stream, userAddress, isWeb3Enabled]);
	return (
		<DashboardExtraOptionsRow>
			<Icon>
				<Tag>{stream?.token.symbol}</Tag>
			</Icon>
			<Number>
				<ContentText>
					{Moralis.Units.FromWei(stream?.currentFlowRate * 86400 * 30).toFixed(
						2
					)}
				</ContentText>
			</Number>
			<PoolName>
				<ContentText>
					{(
						Moralis.Units.FromWei(stream?.streamedUntilUpdatedAt) +
						(Date.now() / 1000 - stream?.updatedAtTimestamp) *
							Moralis.Units.FromWei(stream?.currentFlowRate)
					).toFixed(5)}
				</ContentText>
			</PoolName>
			<Withdrawable>
				<ContentText>
					{Moralis.Units.FromWei(unInvestedAmount).toFixed(5)}
				</ContentText>
				<BiExit onClick={() => withdrawUninvestedSingle()} />
			</Withdrawable>
			<Actions>
				<StreamOptions>
					<WithdrawButton>Edit</WithdrawButton>
					<WithdrawButton>Stop</WithdrawButton>
				</StreamOptions>
			</Actions>
		</DashboardExtraOptionsRow>
	);
};
export default DhedgeDashboard;
