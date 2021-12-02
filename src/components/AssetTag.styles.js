import styled from "styled-components";
const AssetTag = styled.div`
	display: inline-block;
	border: 1px solid ${(props) => props.theme.colors.primary.gold};
	text-align: center;
	font-size: 0.75rem;
	width: fit-content;
	padding: 0.2rem 0.75rem;
	border-radius: 3rem;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0.25rem 0.25rem;
	user-select: none;
`;
export default AssetTag;
