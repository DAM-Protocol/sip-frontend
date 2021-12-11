import { gql } from "@apollo/client";

const GET_STREAM_INFO_FOR_POOL = gql`
	query Streams($where: Stream_filter) {
		streams(where: $where) {
			currentFlowRate
		}
	}
`;
export default GET_STREAM_INFO_FOR_POOL;
