// Dependancies
import { Routes, Route } from "react-router";
import { lazy, Suspense, useEffect } from "react";

// Components
import Navbar from "./components/Navbar/Navbar";
import Loader from "./components/Loader/Loader";
import DhedgeRoutes from "./Routes/DhedgeRoutes";
import DcaRoutes from "./Routes/DcaRoutes";

// Styles
import AppStyled from "./App.styles";

import { MoralisDappProvider } from "./context/MoralisDappProvider";
import { useMoralis } from "react-moralis";

// Lazy Imports
const Home = lazy(() => import("./pages/Home"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Components = lazy(() => import("./pages/Components"));

const App = () => {
	const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
		useMoralis();

	useEffect(() => {
		if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isAuthenticated, isWeb3Enabled]);
	return (
		<MoralisDappProvider>
			<AppStyled>
				<Navbar />
				<main>
					<Routes>
						{/* Base Route */}
						<Route path="/">
							{/* Route `/` */}
							<Route
								index
								element={
									<Suspense fallback={<Loader />}>
										<Home />
									</Suspense>
								}
							/>

							<Route path="dca/*" exact element={<DcaRoutes />} />
							<Route path="dhedge/*" exact element={<DhedgeRoutes />} />

							{/* Component Showcase -- For Dev purposes only */}
							<Route
								path="components"
								exact
								element={
									<Suspense fallback={<Loader />}>
										<Components />
									</Suspense>
								}
							/>

							<Route
								exact
								path="*"
								element={
									<Suspense fallback={<Loader />}>
										<NotFound />
									</Suspense>
								}
							/>
						</Route>
					</Routes>
				</main>
			</AppStyled>
		</MoralisDappProvider>
	);
};

export default App;
