import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "../components/Loader/Loader";

const DhedgeInterface = lazy(() => import("../pages/DHEDGE/Interface"));
const DhedgeDashboard = lazy(() => import("../pages/DHEDGE/Dashboard"));
const Pool = lazy(() => import("../pages/DHEDGE/Pool"));

const DhedgeRoutes = () => {
	return (
		<Routes>
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
			<Route path="*" element={"dHEDGE Information & FAQ"} />
		</Routes>
	);
};

export default DhedgeRoutes;
