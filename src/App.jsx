// Dependancies
import { Routes, Route, Navigate } from "react-router";

// Components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import PageLoader from "./components/PageLoader";

// Styles
import AppStyled from "./App.styles";
import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";

// Lazy Imports
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
						<Route
							path="components"
							exact
							element={
								<Suspense fallback={<PageLoader />}>
									<Components />
								</Suspense>
							}
						/>

						<Route exact path="404" element={<NotFound />} />
						{/* No Matching Route -> Redirect */}
						<Route path="*" element={<Navigate to="/404" />} />
					</Route>
				</Routes>
			</main>
		</AppStyled>
	);
};

export default App;
