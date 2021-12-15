import { useEffect, useState, useRef, useCallback } from "react";
import { BiExit } from "react-icons/bi";
import {
	Actions,
	ContentText,
	CustomInput,
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

import {
	Modal,
	ModalContainer,
	ModalTitle,
} from "../../../components/Modal.styles";
import Button from "../../../components/Button/Button.styles";
import RateInput from "../../../components/Inputs/RateInput";

const AssetRow = ({
	userAddress,
	poolAddress,
	stream,
	editStream,
	stopStream,
}) => {
	const [isEditing, setIsEditing] = useState(false);
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
	const { data: unInvestedAmount, fetch: calcUserUninvested } =
		useWeb3ExecuteFunction({
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

	// Modal
	const [isEditStreamModalOpen, setIsEditStreamModalOpen] = useState(false);
	const modalRef = useRef();
	const handleClickOutside = useCallback((e) => {
		if (!modalRef.current?.contains(e.target)) setIsEditStreamModalOpen(false);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	useEffect(() => {
		document.addEventListener("click", handleClickOutside);

		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, [handleClickOutside]);
	// Modal End
	const handleSubmit = (e) => {
		e.preventDefault();
		editStream(e.target.Rate, stream.token, poolAddress);
	};

	return (
		<DashboardExtraOptionsRow>
			{isEditStreamModalOpen && (
				<ModalContainer className="modal">
					<Modal className="" ref={modalRef}>
						<ModalTitle>Edit Stream</ModalTitle>
						<RateInput fieldName="Rate" />
						<Button filled onClick={handleSubmit} type="submit">
							Edit
						</Button>
					</Modal>
				</ModalContainer>
			)}
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
					{isEditing ? (
						<>
							<CustomInput type="text" placeholder="amount" />
							<WithdrawButton>submit</WithdrawButton>
							<WithdrawButton onClick={() => setIsEditing(false)}>
								back
							</WithdrawButton>
						</>
					) : (
						<>
							<WithdrawButton onClick={() => setIsEditing(true)}>
								Edit
							</WithdrawButton>
							<WithdrawButton
								onClick={() => stopStream(stream.token, poolAddress)}>
								Stop
							</WithdrawButton>
						</>
					)}
				</StreamOptions>
			</Actions>
		</DashboardExtraOptionsRow>
	);
};
export default AssetRow;
