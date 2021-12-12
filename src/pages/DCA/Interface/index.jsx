import { useEffect, useState, useMemo, useRef, useCallback } from "react";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";

import Button from "../../../components/Button/Button.styles";
import { Interface, Form } from "./Interface.styles";

import dcaAbi from "../../../abi/dcaAbi";
import erc20Abi from "../../../abi/ERC20";

import TokenInput from "../../../components/Inputs/TokenInput";
import TokensPerInterval from "../../../components/Inputs/TpiInput";

import IntervalInput from "../../../components/Inputs/IntervalInput";
import DateInput from "../../../components/Inputs/DateInput";
import {
	Modal,
	ModalContainer,
	ModalTitle,
} from "../../../components/Modal.styles";

const DCA_CONTRACT_ADDRESS = "0x88df2C46e0e7D9185054e01965Dabf89e236Ae92";
const CHAINLINK_AGGREGATOR_ADDRESS =
	"0x2B76a4Fa993f30004B4e92caB6256F98d0612ae5";
const INTERVAL_FEE = 0.05;

const DCAInterface = () => {
	const { Moralis, isWeb3Enabled, isAuthenticated, user } = useMoralis();

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
	}, []);

	useEffect(() => {
		if (isWeb3Enabled) {
			fetchAllData();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isAuthenticated, isWeb3Enabled]);

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

	const [
		{ newTaskData, createNewDcaTaskError, creatingNewDcaTask },
		setModalData,
	] = useState({});

	const {
		data: approvalData,
		error: getApprovalFromUserError,
		fetch: getApprovalFromUser,
		isFetching: isApproving,
	} = useWeb3ExecuteFunction();

	const handleSubmit = (event) => {
		event.preventDefault();
		setWasSubmitted(true);
		(async () => {
			const formData = new FormData(event.currentTarget);
			const fieldValues = Object.fromEntries(formData.entries());

			const formIsValid = Object.values(fieldValues).every((value) => !!value);

			if (formIsValid) {
				if (fieldValues["Buy-address"] === fieldValues["Sell-address"]) {
					window.alert("You cannot buy and sell the same token");
					return;
				}
				const web3 = await Moralis.enableWeb3();
				// Call the smart Contract Function
				const sellAmount = web3.utils.toWei(fieldValues["rate"], "ether");
				let delay;
				switch (fieldValues["interval-type"]) {
					case "hours":
						delay = Number(fieldValues["interval"]) * 60 * 60;
						break;
					case "days":
						delay = fieldValues["interval"] * 60 * 60 * 24;
						break;
					case "months":
						delay = fieldValues["interval"] * 60 * 60 * 24 * 30;
						break;
					default:
				}
				const intervals = Math.floor(
					(new Date(fieldValues["till-date"]).getTime() - Date.now()) /
						(delay * 1000)
				);
				if (intervals > 0) {
					const options = {
						contractAddress: DCA_CONTRACT_ADDRESS,
						abi: dcaAbi,
						functionName: "newTask",
						params: {
							value: intervals * Moralis.Units.ETH(INTERVAL_FEE),
							_from: fieldValues["Buy-address"],
							_to: fieldValues["Sell-address"],
							_amount: sellAmount,
							_delay: delay,
							_intervals: intervals,
						},
					};

					const allowanceOptions = {
						contractAddress: fieldValues["Sell-address"],
						functionName: "allowance",
						abi: erc20Abi,
						params: {
							owner: user.get("ethAddress"),
							spender: DCA_CONTRACT_ADDRESS,
						},
					};

					const allowance = await Moralis.executeFunction(allowanceOptions);

					try {
						if (!allowance) {
							const approvalOptions = {
								contractAddress: fieldValues["Sell-address"],
								functionName: "approve",
								abi: erc20Abi,
								params: {
									spender: DCA_CONTRACT_ADDRESS,
									amount: Moralis.Units.Token("10000000000", "18"),
								},
							};

							const approvalData = await Moralis.executeFunction(
								approvalOptions
							);
							console.log(approvalData);
							if (!approvalData) {
								window.alert("Approval unsuccesful");
								return;
							}

							setModalData({ creatingNewDcaTask: true });
							const recepit = await Moralis.executeFunction(options);
							setModalData({ newTaskData: recepit, creatingNewDcaTask: false });
						} else {
							setModalData({ creatingNewDcaTask: true });

							const recepit = await Moralis.executeFunction(options);
							setModalData({ newTaskData: recepit, creatingNewDcaTask: false });
						}
					} catch (e) {
						console.log(e);
						setModalData({
							createNewDcaTaskError: e,
						});
					}
				} else {
					if (intervals === 0)
						window.alert("Can not create a task with 0 intervals");
					else window.alert("Can not create a task with till date in the past");
				}
			}
		})();
	};

	return (
		<div>
			{(creatingNewDcaTask || newTaskData) && (
				<ModalContainer className="modal">
					<Modal className="" height="auto" ref={modalRef}>
						{creatingNewDcaTask && (
							<ModalTitle>Creating Task. Please Wait.</ModalTitle>
						)}
						{newTaskData && <ModalTitle>Created New Task!</ModalTitle>}
						{createNewDcaTaskError && (
							<>
								<ModalTitle>
									An error occured while creating the task
								</ModalTitle>
								{createNewDcaTaskError}
							</>
						)}
					</Modal>
				</ModalContainer>
			)}
			<h1>
				Create <span className="gold-highlight">DCA</span> Task
			</h1>

			<Interface className="interface" id="dcainterface">
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
					<TokensPerInterval
						fieldName={"Tokens/Interval"}
						wasSubmitted={wasSubmitted}
					/>
					<IntervalInput fieldName={"Interval"} wasSubmitted={wasSubmitted} />
					<DateInput fieldName={"Till Date"} wasSubmitted={wasSubmitted} />

					<Button filled type="submit">
						Create Task
					</Button>
				</Form>
			</Interface>
		</div>
	);
};

export default DCAInterface;
