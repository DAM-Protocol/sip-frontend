const abi = [
	{
		inputs: [
			{
				internalType: "address",
				name: "member",
				type: "address",
			},
		],
		name: "addMember",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address[]",
				name: "members",
				type: "address[]",
			},
		],
		name: "addMembers",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "numerator",
				type: "uint256",
			},
		],
		name: "announceManagerFeeIncrease",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "announcedFeeIncreaseNumerator",
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
		name: "announcedFeeIncreaseTimestamp",
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
				name: "asset",
				type: "address",
			},
		],
		name: "assetBalance",
		outputs: [
			{
				internalType: "uint256",
				name: "balance",
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
				name: "asset",
				type: "address",
			},
		],
		name: "assetDecimal",
		outputs: [
			{
				internalType: "uint256",
				name: "decimal",
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
				name: "",
				type: "address",
			},
		],
		name: "assetPosition",
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
				name: "asset",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
		],
		name: "assetValue",
		outputs: [
			{
				internalType: "uint256",
				name: "value",
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
				name: "asset",
				type: "address",
			},
		],
		name: "assetValue",
		outputs: [
			{
				internalType: "uint256",
				name: "value",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "address",
						name: "asset",
						type: "address",
					},
					{
						internalType: "bool",
						name: "isDeposit",
						type: "bool",
					},
				],
				internalType: "struct IHasSupportedAsset.Asset[]",
				name: "_addAssets",
				type: "tuple[]",
			},
			{
				internalType: "address[]",
				name: "_removeAssets",
				type: "address[]",
			},
		],
		name: "changeAssets",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "newManager",
				type: "address",
			},
			{
				internalType: "string",
				name: "newManagerName",
				type: "string",
			},
		],
		name: "changeManager",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "commitManagerFeeIncrease",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "factory",
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
		name: "getDepositAssets",
		outputs: [
			{
				internalType: "address[]",
				name: "",
				type: "address[]",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "getFundComposition",
		outputs: [
			{
				components: [
					{
						internalType: "address",
						name: "asset",
						type: "address",
					},
					{
						internalType: "bool",
						name: "isDeposit",
						type: "bool",
					},
				],
				internalType: "struct IHasSupportedAsset.Asset[]",
				name: "assets",
				type: "tuple[]",
			},
			{
				internalType: "uint256[]",
				name: "balances",
				type: "uint256[]",
			},
			{
				internalType: "uint256[]",
				name: "rates",
				type: "uint256[]",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "getManagerFee",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
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
		name: "getManagerFeeIncreaseInfo",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
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
		name: "getMaximumManagerFee",
		outputs: [
			{
				internalType: "uint256",
				name: "numerator",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "denominator",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "getMaximumManagerFeeChange",
		outputs: [
			{
				internalType: "uint256",
				name: "change",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "getMembers",
		outputs: [
			{
				internalType: "address[]",
				name: "members",
				type: "address[]",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "getSupportedAssets",
		outputs: [
			{
				components: [
					{
						internalType: "address",
						name: "asset",
						type: "address",
					},
					{
						internalType: "bool",
						name: "isDeposit",
						type: "bool",
					},
				],
				internalType: "struct IHasSupportedAsset.Asset[]",
				name: "",
				type: "tuple[]",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_factory",
				type: "address",
			},
			{
				internalType: "address",
				name: "_manager",
				type: "address",
			},
			{
				internalType: "string",
				name: "_managerName",
				type: "string",
			},
			{
				internalType: "address",
				name: "_poolLogic",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "_managerFeeNumerator",
				type: "uint256",
			},
			{
				components: [
					{
						internalType: "address",
						name: "asset",
						type: "address",
					},
					{
						internalType: "bool",
						name: "isDeposit",
						type: "bool",
					},
				],
				internalType: "struct IHasSupportedAsset.Asset[]",
				name: "_supportedAssets",
				type: "tuple[]",
			},
		],
		name: "initialize",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "asset",
				type: "address",
			},
		],
		name: "isDepositAsset",
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
				name: "member",
				type: "address",
			},
		],
		name: "isMemberAllowed",
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
				name: "asset",
				type: "address",
			},
		],
		name: "isSupportedAsset",
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
		name: "manager",
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
		name: "managerFeeNumerator",
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
		name: "managerName",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "numberOfMembers",
		outputs: [
			{
				internalType: "uint256",
				name: "_numberOfMembers",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "poolLogic",
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
				name: "member",
				type: "address",
			},
		],
		name: "removeMember",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address[]",
				name: "members",
				type: "address[]",
			},
		],
		name: "removeMembers",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "removeTrader",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "renounceManagerFeeIncrease",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "numerator",
				type: "uint256",
			},
		],
		name: "setManagerFeeNumerator",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_poolLogic",
				type: "address",
			},
		],
		name: "setPoolLogic",
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
		inputs: [
			{
				internalType: "address",
				name: "newTrader",
				type: "address",
			},
		],
		name: "setTrader",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		name: "supportedAssets",
		outputs: [
			{
				internalType: "address",
				name: "asset",
				type: "address",
			},
			{
				internalType: "bool",
				name: "isDeposit",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "totalFundValue",
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
		name: "trader",
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
				name: "asset",
				type: "address",
			},
		],
		name: "validateAsset",
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
];

export default abi;
