const abi = [
	{
		inputs: [
			{
				internalType: "address",
				name: "_swapRouter",
				type: "address",
			},
			{
				internalType: "address",
				name: "_chainLinkAggregator",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "_fee",
				type: "uint256",
			},
		],
		stateMutability: "nonpayable",
		type: "constructor",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint256",
				name: "id",
				type: "uint256",
			},
		],
		name: "DeleteTask",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "string",
				name: "message",
				type: "string",
			},
		],
		name: "Log",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint256",
				name: "id",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "address",
				name: "from",
				type: "address",
			},
			{
				indexed: false,
				internalType: "address",
				name: "to",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "uint64",
				name: "delay",
				type: "uint64",
			},
			{
				indexed: false,
				internalType: "uint64",
				name: "intervals",
				type: "uint64",
			},
			{
				indexed: false,
				internalType: "address",
				name: "owner",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint64",
				name: "lastExecuted",
				type: "uint64",
			},
			{
				indexed: false,
				internalType: "uint64",
				name: "count",
				type: "uint64",
			},
		],
		name: "NewTask",
		type: "event",
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
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint256",
				name: "id",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "uint64",
				name: "count",
				type: "uint64",
			},
			{
				indexed: false,
				internalType: "uint64",
				name: "lastExecuted",
				type: "uint64",
			},
		],
		name: "TaskExecuted",
		type: "event",
	},
	{
		inputs: [],
		name: "activateContract",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_taskid",
				type: "uint256",
			},
		],
		name: "checkTask",
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
				internalType: "bytes",
				name: "checkData",
				type: "bytes",
			},
		],
		name: "checkUpkeep",
		outputs: [
			{
				internalType: "bool",
				name: "upkeepNeeded",
				type: "bool",
			},
			{
				internalType: "bytes",
				name: "performData",
				type: "bytes",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address payable",
				name: "_receiver",
				type: "address",
			},
		],
		name: "collectFees",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "deactivateContract",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_taskid",
				type: "uint256",
			},
		],
		name: "deleteTask",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "getAggregator",
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
		name: "getRouter",
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
		inputs: [
			{
				internalType: "address",
				name: "_from",
				type: "address",
			},
			{
				internalType: "address",
				name: "_to",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "_amount",
				type: "uint256",
			},
			{
				internalType: "uint64",
				name: "_delay",
				type: "uint64",
			},
			{
				internalType: "uint64",
				name: "_intervals",
				type: "uint64",
			},
		],
		name: "newTask",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "payable",
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
		inputs: [
			{
				internalType: "bytes",
				name: "performData",
				type: "bytes",
			},
		],
		name: "performUpkeep",
		outputs: [],
		stateMutability: "nonpayable",
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
		inputs: [
			{
				internalType: "address",
				name: "_chainLinkAggregator",
				type: "address",
			},
		],
		name: "setAggregator",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_swapRouter",
				type: "address",
			},
		],
		name: "setRouter",
		outputs: [],
		stateMutability: "nonpayable",
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
		inputs: [
			{
				internalType: "uint256",
				name: "_fee",
				type: "uint256",
			},
		],
		name: "updateFee",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_slippage",
				type: "uint256",
			},
		],
		name: "updateSlippage",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
];
export default abi;
