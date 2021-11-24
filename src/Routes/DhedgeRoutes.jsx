import { Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import PageLoader from "../components/PageLoader";

const DhedgeInterface = lazy(() => import("../pages/DhedgeInterface"));
const DhedgeDashboard = lazy(() => import("../pages/DhedgeDashboard"));

const DhedgeRoutes = () => {
	return (
		<Route path="/">
			<Route
				exact
				path="interface"
				element={
					<Suspense fallback={<PageLoader />}>
						<DhedgeInterface />
					</Suspense>
				}
			/>
			<Route
				exact
				path="dashboard"
				element={
					<Suspense fallback={<PageLoader />}>
						<DhedgeDashboard />
					</Suspense>
				}
			/>
		</Route>
	);
};

export default DhedgeRoutes;
