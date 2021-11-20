// Dependancies
import { Routes, Route, Navigate } from "react-router";

// Components
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";

const App = () => {
	return (
		<>
			<Navbar />
			<main>
				<Routes>
					{/* Base Route */}
					<Route path="/">
						{/* Route `/` */}
						<Route path="" exact element={<Home />} />

						<Route exact path="404" element={<NotFound />} />
						{/* No Matching Route -> Redirect */}
						<Route path="*" element={<Navigate to="/404" />} />
					</Route>
				</Routes>
			</main>
		</>
	);
};

export default App;
