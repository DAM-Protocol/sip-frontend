import { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
	Actions,
	BiLinkIcon,
	ContentText,
	CustomInput,
	DashboardExtraOptionsHeader,
	DashboardRow,
	DashboardRowWrapper,
	Icon,
	Number,
	PoolName,
	Tag,
	Withdrawable,
	WithdrawButton,
} from "./Dashboard.styles";

import GET_POOL_STREAMS_DATA from "../../../queries/getPoolStreamsData";
import { useWeb3ExecuteFunction } from "react-moralis";

import { useSfSubgraphQuery } from "../../../hooks/useSfSubgraphQuery";
import dHedgeSipAbi from "../../../abi/dHedgeSipAbi";
import AssetRow from "./AssetRow";
import { useMoralis } from "react-moralis";

const PoolRow = ({
	index,
	poolAddress, //dhedge sip pool address
	userAddress,
	setModalData,
	editStream,
	stopStream,
	poolDetails: { name, poolLogic },
}) => {
	const [isWithdrawing, setIsWithdrawing] = useState(false);

	const { data } = useSfSubgraphQuery(GET_POOL_STREAMS_DATA, {
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
	const [withdrawAmount, setWithdrawAmount] = useState(0);
	const {
		data: withdrawLPTsData,
		error: withdrawLPTsError,
		fetch: withdrawLPTs,
		isFetching: isWithdrawingLPTs,
	} = useWeb3ExecuteFunction({
		abi: dHedgeSipAbi,
		contractAddress: poolAddress,
		functionName: "dHedgeWithdraw",
		params: {
			amount: withdrawAmount,
		},
	});

	useEffect(() => {
		if (userAddress) {
			fetchWithdrawableBalance();
			// calcUserLockedShareAmount();
		}
	}, [fetchWithdrawableBalance, poolAddress, userAddress]);

	return (
		<DashboardRowWrapper>
			<DashboardRow>
				<Icon onClick={() => setShowExtraOptions(!showExtraOptions)}>
					<MdKeyboardArrowDown />
				</Icon>
				<Number>
					<ContentText>{index + 1}</ContentText>
				</Number>
				<PoolName>
					<a
						href={`https://app.dhedge.org/pool/${poolLogic}`}
						target="_blank"
						rel="noreferrer">
						<ContentText>
							{" "}
							{name} <BiLinkIcon />
						</ContentText>
					</a>
				</PoolName>
				<Withdrawable>
					<ContentText>
						{Moralis.Units.FromWei(withdrawableBalance || 0)}
					</ContentText>{" "}
					<Tag>LPTs</Tag>
				</Withdrawable>
				<Actions>
					{isWithdrawing ? (
						<>
							<CustomInput
								value={withdrawAmount}
								onChange={(e) => setWithdrawAmount(e.target.value)}
								type="text"
								placeholder="amount"
							/>
							<WithdrawButton
								onClick={() => {
									withdrawLPTs();
									setIsWithdrawing(false);
								}}>
								submit
							</WithdrawButton>
							<WithdrawButton onClick={() => setIsWithdrawing(false)}>
								back
							</WithdrawButton>
						</>
					) : (
						<WithdrawButton onClick={() => setIsWithdrawing(true)}>
							Withdraw LPTs
						</WithdrawButton>
					)}
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
						setModalData={setModalData}
						poolAddress={poolAddress}
						stream={data?.streams[0]}
						editStream={editStream}
						stopStream={stopStream}
					/>
				</div>
			)}
		</DashboardRowWrapper>
	);
};
export default PoolRow;
