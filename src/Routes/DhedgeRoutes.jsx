import { Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "../components/Loader/Loader";

const DhedgeInterface = lazy(() => import("../pages/DhedgeInterface"));
const DhedgeDashboard = lazy(() => import("../pages/DhedgeDashboard"));

const DhedgeRoutes = () => {
	return (
		<Route path="/">
			<Route
				exact
				path="interface"
				element={
					<Suspense fallback={<Loader />}>
						<DhedgeInterface />
					</Suspense>
				}
			/>
			<Route
				exact
				path="dashboard"
				element={
					<Suspense fallback={<Loader />}>
						<DhedgeDashboard />
					</Suspense>
				}
			/>
		</Route>
	);
};

export default DhedgeRoutes;
