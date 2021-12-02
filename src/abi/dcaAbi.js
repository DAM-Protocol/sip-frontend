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
				name: "_ChainLinkAggregator",
				type: "address",
			},
			{
				internalType: "address",
				name: "_feeToken",
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
				internalType: "address",
				name: "_from",
				type: "address",
			},
			{
				indexed: false,
				internalType: "address",
				name: "_to",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "_amount",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "uint64",
				name: "_delay",
				type: "uint64",
			},
			{
				indexed: false,
				internalType: "uint64",
				name: "_intervals",
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
		inputs: [],
		name: "ChainLinkAggregator",
		outputs: [
			{
				internalType: "contract IChainLinkAggregator",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "Uniswap",
		outputs: [
			{
				internalType: "contract IUniswapV2Router02",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
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
		inputs: [],
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
		outputs: [],
		stateMutability: "nonpayable",
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
				internalType: "address",
				name: "_feeToken",
				type: "address",
			},
		],
		name: "updateFeeToken",
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
		name: "updateFeetoken",
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
