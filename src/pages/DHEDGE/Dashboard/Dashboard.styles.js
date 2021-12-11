import styled from "styled-components";
import { BiLink } from "react-icons/bi";

export const DashbaordWrapper = styled.div`
	background: ${(props) => props.theme.colors.graybackground};
`;

export const DashboardHeader = styled.div`
	display: grid;
	grid-template-columns: repeat(8, 1fr);
	padding: 20px;
	gap: 40px;
	div {
		padding: 12px 8px;
		background: rgba(196, 196, 196, 0.18);
		border-radius: 16px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #ffffff;
	}
`;

export const HeaderText = styled.p`
	font-size: 20px;
	line-height: 25px;
`;

export const Icon = styled.div``;
export const Number = styled.div``;
export const PoolName = styled.div`
	grid-column: 3 / 5;
`;
export const Withdrawable = styled.div`
	grid-column: 5 / 7;
`;
export const Actions = styled.div`
	grid-column: 7 / -1;
`;

export const DashboardContent = styled.div`
	/* display: grid;
	grid-template-columns: repeat(8, 1fr);
	padding: 20px;
	gap: 40px;

	div {
		font-weight: 500;
		font-size: 16px;
		line-height: 21px;
		text-align: center;
		color: #ffffff;
	} */
`;

export const DashboardExtraOptionsHeader = styled.div`
	display: grid;
	grid-template-columns: repeat(8, 1fr);
	padding: 20px;
	gap: 40px;
	border-bottom: 1px solid rgba(255, 255, 255, 0.2);

	background: ${(props) =>
		props.danger === true ? "rgba(165, 20, 24, 0.44)" : "inherit"};
	div {
		/* padding: 12px 8px; */
		/* background: rgba(196, 196, 196, 0.18); */
		border-radius: 16px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #ffffff;
	}
`;

export const DashboardRowWrapper = styled.div``;

export const DashboardRow = styled.div`
	display: grid;
	grid-template-columns: repeat(8, 1fr);
	padding: 15px;
	gap: 40px;
	background: #181822;
	margin-bottom: 10px;
	div {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
	}
`;

export const DashboardExtraOptionsRow = styled.div`
	display: grid;
	grid-template-columns: repeat(8, 1fr);
	padding: 15px 20px;
	gap: 40px;
	margin-bottom: 10px;
	border-bottom: 1px solid rgba(255, 255, 255, 0.2);
	div {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
	}
`;

export const StreamOptions = styled.div`
	display: flex;
`;

// StreamOptionsButton

export const ContentText = styled.p`
	font-weight: 500;
	font-size: 16px;
	line-height: 21px;
	color: #ffffff;
`;

export const BiLinkIcon = styled(BiLink)`
	color: ${(props) => props.theme.colors.primary.gold};
	cursor: pointer;
`;

export const WithdrawButton = styled.button`
	background: rgba(255, 178, 0, 0.4);
	border-radius: 30px;
	padding: 9px 14px;
	font-weight: 500;
	font-size: 16px;
	line-height: 21px;
	color: #ffffff;
	cursor: pointer;
	outline: none;
	border: none;
`;

export const Tag = styled.span`
	border: 2px solid #ffb200;
	border-radius: 13px;
	padding: 2px 8px;
	font-size: 12px;
	line-height: 15px;
`;
