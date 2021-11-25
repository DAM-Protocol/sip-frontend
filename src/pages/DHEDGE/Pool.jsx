import { useParams } from "react-router-dom";

const Pool = () => {
	const { poolAddress } = useParams();
	return <div>Pool {poolAddress} </div>;
};

export default Pool;
