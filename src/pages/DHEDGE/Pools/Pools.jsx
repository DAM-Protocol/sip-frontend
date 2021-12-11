import "./Pools.css";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import { useEffect, useMemo } from "react";
import { useSfSubgraphQuery } from "../../../hooks/useSfSubgraphQuery";
import { dHedgeContractMap } from "../../../helpers/dHedgeContractMap";
import { useDHedgeQuery } from "../../../hooks/useDHedgeQuery";
import dhedgeCoreAbi from "../../../abi/dhedgeCoreAbi";
import AssetTag from "../../../components/AssetTag.styles";
import GET_DHEDGE_ASSETS from "../../../queries/getDHedgeAssets";

const Pools = () => {
	const { isWeb3Enabled } = useMoralis();
	const { data: assets, loading } = useDHedgeQuery(GET_DHEDGE_ASSETS);
	const assetsMap = useMemo(
		() =>
			assets?.assets?.reduce((obj, { address, ...rest }) => {
				obj[address] = { ...rest };
				return obj;
			}, {}),
		[assets]
	);
	return (
		<div className="card-section">
			{Object.keys(dHedgeContractMap).map((key, index) => {
				return (
					<PoolCard
						poolDetails={dHedgeContractMap[key]}
						poolAddress={key}
						key={index}
						isWeb3Enabled={isWeb3Enabled}
						assetsMap={assetsMap}
					/>
				);
			})}
		</div>
	);
};

const PoolCard = ({ poolDetails, poolAddress, isWeb3Enabled, assetsMap }) => {
	const { Moralis } = useMoralis();

	const depositAssets = async () => {
		const _assets = await Moralis.executeFunction({
			contractAddress: poolDetails.poolLogic,
			functionName: "getDepositAssets",
			abi: dhedgeCoreAbi,
		});
		console.log(_assets);
	};

	useEffect(() => {
		if (isWeb3Enabled) depositAssets();
	}, [isWeb3Enabled]);

	return (
		<div className="card">
			<div className="title-section">
				<img src="./Thumbnail.png" className="card-profile" />
				<div className="title-section-name">
					<h4 className="title-full-name">{poolDetails.name}</h4>
					<h5 className="title-short-name">CM</h5>
				</div>
			</div>
			<div className="price-section">
				<div className="price-section-row">
					<p className="price-left-text">Streaming</p>
					<p className="price-right-text">$300K/month</p>
				</div>
				<div className="price-section-row">
					<p className="price-left-text">Streams</p>
					<p className="price-right-text">54</p>
				</div>
			</div>
			<div className="assets-section">
				<p className="assets-left-text">Assets</p>
				{/* {depositAssets?.map((asset, index) => {
					return <AssetTag>{assets[asset]?.name}</AssetTag>;
				})} */}
				{/* <div className="assets-coin-section">
					<p className="asset-coin">sUSD</p>
					<p className="asset-coin">Matic</p>
					<p className="asset-coin">+3</p>
				</div> */}
			</div>
			<div className="buttons-section">
				<div className="button">Invest</div>
				<div className="button">Explore</div>
			</div>
		</div>
	);
};

export default Pools;
