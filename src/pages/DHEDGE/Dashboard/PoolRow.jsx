import { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
	Actions,
	BiLinkIcon,
	ContentText,
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

const PoolRow = ({
	index,
	poolAddress,
	userAddress,
	poolDetails: { name },
}) => {
	const { data } = useSfSubgraphQuery(GET_POOL_STREAMS_DATA, {
		variables: { where: { sender: userAddress, receiver: poolAddress } },
	});

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
export default PoolRow;
