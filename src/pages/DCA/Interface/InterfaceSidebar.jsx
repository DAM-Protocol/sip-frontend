import { useMemo } from "react";
import AssetTag from "../../../components/AssetTag.styles";
import { LinkButton } from "../../../components/Button/Button.styles";
import { Blockie, Sidebar } from "./Interface.styles";

const InterfaceSidebar = ({ data, tokenList, seed }) => {
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
				<h4>Task Description</h4>
			</div>
		</Sidebar>
	);
};

export default InterfaceSidebar;
