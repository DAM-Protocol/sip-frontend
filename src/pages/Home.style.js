import styled from "styled-components";

export const CardWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 30px;
	flex-direction: column;
`;

export const CardsList = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 50px;
	flex-wrap: wrap;
`;
export const Card = styled.div`
	background: #282838;
	border-radius: 30px;
	padding: 30px 20px;
	max-width: 300px;
`;

export const Heading = styled.h5`
	font-family: Lato;
	font-style: normal;
	font-weight: bold;
	font-size: 22px;
	line-height: 25px;
	/* identical to box height */

	text-align: center;
	margin-bottom: 30px;
	color: #ffb200;
`;

export const Text = styled.p`
	font-family: Lato;
	font-style: normal;
	font-weight: bold;
	font-size: 15px;
	line-height: 20px;
	color: #ffffff;
	margin-bottom: 30px;
`;

export const Button = styled.button`
	outline: none;
	border: none;
	font-weight: 600;
	font-size: 15px;
	line-height: 18px;
	text-align: center;
	padding: 6px 15px;
	color: #221e30;
	background: linear-gradient(95.19deg, #ffb200 12.5%, #ffb200 89.87%);
	border-radius: 30px;
	margin: 0 auto;
	display: block;
	cursor: pointer;
`;
