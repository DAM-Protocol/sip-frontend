import { useEffect, useState, useCallback, useRef } from "react";
import { BsChevronDoubleDown } from "react-icons/bs";
import Heading from "../../../components/Heading/Heading";
import {
	Actions,
	DashbaordWrapper,
	DashboardContent,
	DashboardHeader,
	DashboardRowWrapper,
	HeaderText,
	Icon,
	Number,
	PoolName,
	Withdrawable,
} from "./Dashboard.styles";
import { dHedgeContractMap } from "../../../helpers/dHedgeContractMap";
import { useMoralis, useChain } from "react-moralis";

import BigNumber from "bignumber.js";
import SuperfluidSDK from "@superfluid-finance/js-sdk";
import PoolRow from "./PoolRow";

import {
	Modal,
	ModalContainer,
	ModalTitle,
} from "../../../components/Modal.styles";

const DhedgeDashboard = () => {
	// Modal
	const [{ modalData, modalErrorData, modalLoadingData }, setModalData] =
		useState({});
	const modalRef = useRef();
	const handleClickOutside = useCallback((e) => {
		if (!modalRef.current?.contains(e.target)) setModalData(false);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	useEffect(() => {
		document.addEventListener("click", handleClickOutside);

		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, [handleClickOutside]);
	// Modal End

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

	const editStream = useCallback(
		async (newRate, token, poolAddress) => {
			if (token) {
				const web3 = await Moralis.enableWeb3();

				const amountPerMonth = new BigNumber(newRate).multipliedBy(
					new BigNumber(10).pow(token.decimals)
				);

				const seconds = new BigNumber(2592000);

				const ratePerSecond = amountPerMonth.dividedBy(seconds);

				console.log(ratePerSecond, poolAddress, token);
				const sfUser = superFluid.user({
					address: web3.currentProvider.selectedAddress,
					token: token.id,
				});
				await sfUser.flow({
					recipient: poolAddress,
					flowRate: ratePerSecond.toFixed(0).toString(),
				});
			}
		},
		[Moralis, superFluid]
	);
	const stopStream = useCallback(
		async (token, poolAddress) => {
			await superFluid.cfa.deleteFlow({
				superToken: token.id,
				sender: user.get("ethAddress"),
				receiver: poolAddress,
				by: user.get("ethAddress"),
			});
		},
		[superFluid]
	);

	const { user } = useMoralis();
	return (
		<div>
			{(modalData || modalLoadingData) && (
				<ModalContainer className="modal">
					<Modal className="" height="auto" ref={modalRef}>
						{modalLoadingData && (
							<ModalTitle>{modalLoadingData?.title}</ModalTitle>
						)}
						{modalData && <ModalTitle>{modalData?.title}</ModalTitle>}
						{/* {modalData && (
							<>
								
							</>
						)} */}
						{modalErrorData && (
							<>
								<ModalTitle>{modalErrorData?.message}</ModalTitle>
							</>
						)}
					</Modal>
				</ModalContainer>
			)}

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
									setModalData={setModalData}
									editStream={editStream}
									stopStream={stopStream}
								/>
							);
						})}
					</DashboardRowWrapper>
				</DashboardContent>
			</DashbaordWrapper>
		</div>
	);
};

export default DhedgeDashboard;
