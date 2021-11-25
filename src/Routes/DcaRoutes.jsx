import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "../components/Loader/Loader";

const DcaInterface = lazy(() => import("../pages/DcaInterface"));
const DcaDashboard = lazy(() => import("../pages/DcaDashboard"));

const DcaRoutes = () => {
	return (
		<Routes>
			<Route
				exact
				path="interface"
				element={
					<Suspense fallback={<Loader />}>
						<DcaInterface />
					</Suspense>
				}
			/>
			<Route
				exact
				path="dashboard"
				element={
					<Suspense fallback={<Loader />}>
						<DcaDashboard />
					</Suspense>
				}
			/>
			<Route path="*" element={"DCA Information & FAQ"} />
		</Routes>
	);
};

export default DcaRoutes;
