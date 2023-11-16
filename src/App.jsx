import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router";
import EntryPage from "./pages/EntryPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import MainPage from "./pages/MainPage";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";
import "./App.css";
import ProtectedRoute from "./components/utilcomponents/protectedRoute";
import { AuthContext } from "./context/context";

function App() {
	const [user, setUser] = useState(localStorage.getItem("auth_token"));
	useEffect(() => {
		const handleStorageChange = () => {
			console.log("Storage changed");
			setUser(localStorage.getItem("auth_token"));
		};
		window.addEventListener("storage", handleStorageChange);
		return () => {
			window.removeEventListener("storage", handleStorageChange);
		};
	}, [user]);

	return (
		<AuthContext.Provider value={user}>
			<Router>
				<div className="App">
					<Routes>
						<Route path="/" element={<EntryPage />} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="/signup" element={<SignupPage />} />
						<Route
							path="/mainpage"
							element={
								<ProtectedRoute user={user}>
									<MainPage />
								</ProtectedRoute>
							}
						/>
						<Route path="/termsAndConditions" element={<TermsAndConditionsPage />} />
						<Route path="*" element={<Navigate replace to="/" />} />
					</Routes>
				</div>
			</Router>
		</AuthContext.Provider>
	);
}

export default App;
