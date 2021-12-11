import { gql } from "@apollo/client";

const GET_POOL_INFO = gql`
	query GetPoolInfo($address: String!) {
		fund(address: $address) {
			id
			managerName
			name
			managerLogicAddress
		}
	}
`;
export default GET_POOL_INFO;
