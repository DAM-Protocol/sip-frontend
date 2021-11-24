// Dependancies
import { Routes, Route, Navigate } from "react-router";
import { lazy, Suspense } from "react";

// Components
import Navbar from "./components/Navbar";
import PageLoader from "./components/PageLoader";
import DhedgeRoutes from "./Routes/DhedgeRoutes";
import DcaRoutes from "./Routes/DcaRoutes";

// Styles
import AppStyled from "./App.styles";

// Lazy Imports
const Home = lazy(() => import("./pages/Home"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Components = lazy(() => import("./pages/Components"));

const App = () => {
	return (
		<AppStyled>
			<Navbar />
			<main>
				<Routes>
					{/* Base Route */}
					<Route path="/">
						{/* Route `/` */}
						<Route
							path=""
							exact
							element={
								<Suspense fallback={<PageLoader />}>
									<Home />
								</Suspense>
							}
						/>

						<Route path="dca" exact element={<DcaRoutes />} />
						<Route path="dhedge" exact element={<DhedgeRoutes />} />

						{/* Component Showcase -- For Dev purposes only */}
						<Route
							path="components"
							exact
							element={
								<Suspense fallback={<PageLoader />}>
									<Components />
								</Suspense>
							}
						/>

						<Route
							exact
							path="404"
							element={
								<Suspense fallback={<PageLoader />}>
									<NotFound />
								</Suspense>
							}
						/>
						{/* No Matching Route -> Redirect */}
						<Route path="*" element={<Navigate to="/404" />} />
					</Route>
				</Routes>
			</main>
		</AppStyled>
	);
};

export default App;
