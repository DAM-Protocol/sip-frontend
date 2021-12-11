import { gql } from "@apollo/client";

const GET_POOL_STREAMS_DATA = gql`
	query Streams($where: Stream_filter) {
		streams(where: $where) {
			token {
				symbol
				decimals
			}
			streamedUntilUpdatedAt
			currentFlowRate
			updatedAtTimestamp
		}
	}
`;
export default GET_POOL_STREAMS_DATA;
