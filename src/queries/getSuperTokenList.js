import { gql } from "@apollo/client";

const GET_SUPER_TOKEN_LIST = gql`
	query Tokens($where: Token_filter) {
		tokens(where: $where) {
			name
			id
			symbol
			decimals
			underlyingToken {
				name
			}
		}
	}
`;
export default GET_SUPER_TOKEN_LIST;
