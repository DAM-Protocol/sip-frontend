import { useMemo } from "react";
import AssetTag from "../../../components/AssetTag.styles";
import { LinkButton } from "../../../components/Button/Button.styles";
import { Blockie, Sidebar } from "./Interface.styles";

const InterfaceSidebar = ({ data, tokenList, seed }) => {
	return (
		<Sidebar>
			<div className="flex-column">
				<h4>Task Description</h4>
			</div>
		</Sidebar>
	);
};

export default InterfaceSidebar;
