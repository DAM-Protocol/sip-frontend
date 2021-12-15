import { useEffect } from "react";
import { BiExit } from "react-icons/bi";
import {
	Actions,
	ContentText,
	DashboardExtraOptionsRow,
	Icon,
	Number,
	PoolName,
	StreamOptions,
	Tag,
	Withdrawable,
	WithdrawButton,
} from "./Dashboard.styles";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import dHedgeSipAbi from "../../../abi/dHedgeSipAbi";

const AssetRow = ({
	userAddress,
	poolAddress,
	stream,
	openEditStreamModal,
	openStopStreamModal,
}) => {
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
					<WithdrawButton onClick={openEditStreamModal}>Edit</WithdrawButton>
					<WithdrawButton onClick={openStopStreamModal}>Stop</WithdrawButton>
				</StreamOptions>
			</Actions>
		</DashboardExtraOptionsRow>
	);
};
export default AssetRow;
