import { useMemo } from "react";
import AssetTag from "../../../components/AssetTag.styles";
import { LinkButton } from "../../../components/Button/Button.styles";
import { Blockie, Sidebar } from "./Interface.styles";

const InterfaceSidebar = ({ data, tokenList, seed, poolAddress }) => {
	const [color, bgColor, spotColor] = useMemo(
		() =>
			data
				? [
						`#${(seed / 20) % 1000000}`,
						`#${(seed / 30) % 1000000}`,
						`#${(seed / 50) % 1000000}`,
				  ]
				: ["#766edf", "#ffffff", "#fff36f"],
		[data, seed]
	);

	return (
		<Sidebar>
			<div className="flex-column">
				<Blockie
					seed={data ? seed : "blockie"}
					size={10}
					scale={10}
					color={color}
					bgColor={bgColor}
					spotColor={spotColor}
				/>
				<div className="meta">
					<h3 className="gold-highlight">{data ? data.name : "Pool Name"}</h3>
					<h4>{data ? data.managerName : "Manager Name"}</h4>
				</div>
				<div>
					<hr />
					<br />
					<div>Deposit Assets Available</div>
					<div className="assets">
						{tokenList &&
							tokenList.map((token, index) => (
								<AssetTag key={index}>{token.symbol}</AssetTag>
							))}
						<AssetTag>sUSDC</AssetTag>
						<AssetTag>MATIC</AssetTag>
					</div>
				</div>
				<LinkButton
					stroke
					href={`https://app.dhedge.org/pool/${poolAddress}`}
					target="_blank"
					rel="noopener noreferrer">
					Explore
				</LinkButton>
			</div>
		</Sidebar>
	);
};

export default InterfaceSidebar;
