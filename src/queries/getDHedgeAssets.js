import { gql } from "@apollo/client";

const GET_DHEDGE_ASSETS = gql`
	query Assets {
		assets {
			address
			name
		}
	}
`;
export default GET_DHEDGE_ASSETS;
