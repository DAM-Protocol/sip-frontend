import LoaderSVG from "./assets/Loader.svg";
const Loader = () => {
	return (
		<div className="page-loader">
			<img src={LoaderSVG} alt="loading" />
		</div>
	);
};

export default Loader;
