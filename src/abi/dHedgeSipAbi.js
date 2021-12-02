const abi = [
	{
		inputs: [
			{
				internalType: "contract ISuperfluid",
				name: "_host",
				type: "address",
			},
			{
				internalType: "contract IConstantFlowAgreementV1",
				name: "_cfa",
				type: "address",
			},
			{
				internalType: "address",
				name: "_dHedgePool",
				type: "address",
			},
			{
				internalType: "address",
				name: "_bank",
				type: "address",
			},
			{
				internalType: "string",
				name: "_regKey",
				type: "string",
			},
		],
		stateMutability: "nonpayable",
		type: "constructor",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "previousOwner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "newOwner",
				type: "address",
			},
		],
		name: "OwnershipTransferred",
		type: "event",
	},
	{
		inputs: [
			{
				internalType: "contract ISuperToken",
				name: "_superToken",
				type: "address",
			},
			{
				internalType: "address",
				name: "_agreementClass",
				type: "address",
			},
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32",
			},
			{
				internalType: "bytes",
				name: "",
				type: "bytes",
			},
			{
				internalType: "bytes",
				name: "_cbdata",
				type: "bytes",
			},
			{
				internalType: "bytes",
				name: "_ctx",
				type: "bytes",
			},
		],
		name: "afterAgreementCreated",
		outputs: [
			{
				internalType: "bytes",
				name: "newCtx",
				type: "bytes",
			},
		],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "contract ISuperToken",
				name: "_superToken",
				type: "address",
			},
			{
				internalType: "address",
				name: "_agreementClass",
				type: "address",
			},
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32",
			},
			{
				internalType: "bytes",
				name: "",
				type: "bytes",
			},
			{
				internalType: "bytes",
				name: "_cbdata",
				type: "bytes",
			},
			{
				internalType: "bytes",
				name: "_ctx",
				type: "bytes",
			},
		],
		name: "afterAgreementTerminated",
		outputs: [
			{
				internalType: "bytes",
				name: "newCtx",
				type: "bytes",
			},
		],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "contract ISuperToken",
				name: "_superToken",
				type: "address",
			},
			{
				internalType: "address",
				name: "_agreementClass",
				type: "address",
			},
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32",
			},
			{
				internalType: "bytes",
				name: "",
				type: "bytes",
			},
			{
				internalType: "bytes",
				name: "_cbdata",
				type: "bytes",
			},
			{
				internalType: "bytes",
				name: "_ctx",
				type: "bytes",
			},
		],
		name: "afterAgreementUpdated",
		outputs: [
			{
				internalType: "bytes",
				name: "newCtx",
				type: "bytes",
			},
		],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "contract ISuperToken",
				name: "_superToken",
				type: "address",
			},
			{
				internalType: "address",
				name: "_agreementClass",
				type: "address",
			},
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32",
			},
			{
				internalType: "bytes",
				name: "",
				type: "bytes",
			},
			{
				internalType: "bytes",
				name: "_ctx",
				type: "bytes",
			},
		],
		name: "beforeAgreementCreated",
		outputs: [
			{
				internalType: "bytes",
				name: "cbdata",
				type: "bytes",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "contract ISuperToken",
				name: "_superToken",
				type: "address",
			},
			{
				internalType: "address",
				name: "_agreementClass",
				type: "address",
			},
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32",
			},
			{
				internalType: "bytes",
				name: "",
				type: "bytes",
			},
			{
				internalType: "bytes",
				name: "_ctx",
				type: "bytes",
			},
		],
		name: "beforeAgreementTerminated",
		outputs: [
			{
				internalType: "bytes",
				name: "cbdata",
				type: "bytes",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "contract ISuperToken",
				name: "_superToken",
				type: "address",
			},
			{
				internalType: "address",
				name: "_agreementClass",
				type: "address",
			},
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32",
			},
			{
				internalType: "bytes",
				name: "",
				type: "bytes",
			},
			{
				internalType: "bytes",
				name: "_ctx",
				type: "bytes",
			},
		],
		name: "beforeAgreementUpdated",
		outputs: [
			{
				internalType: "bytes",
				name: "cbdata",
				type: "bytes",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_user",
				type: "address",
			},
			{
				internalType: "address",
				name: "_token",
				type: "address",
			},
		],
		name: "calcUserUninvested",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_user",
				type: "address",
			},
		],
		name: "calcWithdrawable",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "checkCoreActive",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "dHedgeDeposit",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_amount",
				type: "uint256",
			},
		],
		name: "dHedgeWithdraw",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "deactivateCore",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_token",
				type: "address",
			},
		],
		name: "emergencyWithdraw",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "getPoolLogic",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "moveLPT",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "owner",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "renounceOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "requireUpkeep",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "newOwner",
				type: "address",
			},
		],
		name: "transferOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "withdrawUninvestedAll",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_token",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "_amount",
				type: "uint256",
			},
		],
		name: "withdrawUninvestedSingle",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
];
export default abi;
