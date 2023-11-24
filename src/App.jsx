import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router";
import EntryPage from "./pages/EntryPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import MainPage from "./pages/MainPage";
import ProfilePage from "./pages/ProfilePage";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";
import ProtectedRoute from "./components/utilcomponents/protectedRoute";
// eslint-disable-next-line import/no-named-as-default
import AuthProvider from "./context/context";
import EventManagersProfilePage from "./pages/EventManagersProfilePage";
import "./App.css";

function App() {
	return (
		<AuthProvider>
			<Router>
				<div className="App">
					<Routes>
						<Route path="/" element={<EntryPage />} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="/signup" element={<SignupPage />} />
						<Route
							path="/mainpage"
							element={
								<ProtectedRoute>
									<MainPage />
								</ProtectedRoute>
							}
						/>
						<Route
							path="/profile"
							element={
								<ProtectedRoute>
									<ProfilePage />
								</ProtectedRoute>
							}
						/>
						<Route path="/termsAndConditions" element={<TermsAndConditionsPage />} />
						<Route path="/emprofile" element={<EventManagersProfilePage />} />
						<Route path="*" element={<Navigate replace to="/" />} />
					</Routes>
				</div>
			</Router>
		</AuthProvider>
	);
}

export default App;
