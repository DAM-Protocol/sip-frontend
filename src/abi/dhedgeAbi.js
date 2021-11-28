const abi = [
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
				internalType: "struct IPoolManagerLogic.Asset[]",
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
];
export default abi;
