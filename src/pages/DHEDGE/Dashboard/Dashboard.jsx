import { useEffect, useState, useCallback } from "react";
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

const DhedgeDashboard = () => {
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
			const web3 = await Moralis.enableWeb3();

			const amountPerMonth = new BigNumber(newRate).multipliedBy(
				new BigNumber(10).pow(token.decimals)
			);

			const seconds = new BigNumber(2592000);

			const ratePerSecond = amountPerMonth.dividedBy(seconds);

			const sfUser = superFluid.user({
				address: web3.currentProvider.selectedAddress,
				token: token.underlyingAddress,
			});
			await sfUser.flow({
				recipient: poolAddress,
				flowRate: ratePerSecond.toFixed(0).toString(),
			});
		},
		[superFluid]
	);

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

export default DhedgeDashboard;
