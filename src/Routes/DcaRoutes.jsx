import { Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import PageLoader from "../components/PageLoader";

const DcaInterface = lazy(() => import("../pages/DcaInterface"));
const DcaDashboard = lazy(() => import("../pages/DcaDashboard"));

const DcaRoutes = () => {
	return (
		<Route path="/">
			<Route
				exact
				path="interface"
				element={
					<Suspense fallback={<PageLoader />}>
						<DcaInterface />
					</Suspense>
				}
			/>
			<Route
				exact
				path="dashboard"
				element={
					<Suspense fallback={<PageLoader />}>
						<DcaDashboard />
					</Suspense>
				}
			/>
		</Route>
	);
};

export default DcaRoutes;
