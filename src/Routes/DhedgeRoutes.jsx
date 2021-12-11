import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "../components/Loader/Loader";

const DhedgeInterface = lazy(() => import("../pages/DHEDGE/Interface/"));
const DhedgeDashboard = lazy(() => import("../pages/DHEDGE/Dashboard/Dashboard"));
const Pool = lazy(() => import("../pages/DHEDGE/Pool"));
const Pools = lazy(() => import("../pages/DHEDGE/Pools/Pools"));

const DhedgeRoutes = () => {
	return (
		<Routes>
			<Route
				exact
				path="interface/:contractAddress"
				element={
					<Suspense fallback={<Loader />}>
						<DhedgeInterface />
					</Suspense>
				}
			/>
			<Route
				exact
				path="pool"
				element={
					<Suspense fallback={<Loader />}>
						<Pool />
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
			<Route
				exact
				path="pools"
				element={
					<Suspense fallback={<Loader />}>
						<Pools />
					</Suspense>
				}
			/>
			<Route path="*" element={"dHEDGE Information & FAQ"} />
		</Routes>
	);
};

export default DhedgeRoutes;
