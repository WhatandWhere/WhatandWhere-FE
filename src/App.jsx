import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router";
import EntryPage from "./pages/EntryPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import MainPage from "./pages/MainPage";
import ProfilePage from "./pages/ProfilePage";
import AdminPage from "./pages/AdminPage";
import ManagerPage from "./pages/ManagerPage";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";
import ProtectedRoute from "./components/utilcomponents/protectedRoute";
// eslint-disable-next-line import/no-named-as-default
import AuthProvider from "./context/context";
import EventManagersProfilePage from "./pages/EventManagersProfilePage";
import EventInfoPage from "./pages/EventInfoPage";
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
						<Route path="/managerpage" element={<ManagerPage />} />
						<Route path="/adminpage" element={<AdminPage />} />
						<Route path="/termsAndConditions" element={<TermsAndConditionsPage />} />
						<Route path="/profile" element={<ProfilePage />} />
						<Route path="/emprofile" element={<EventManagersProfilePage />} />
						<Route path="/event/:eventId" element={<EventInfoPage />} />
						<Route path="*" element={<Navigate replace to="/" />} />
					</Routes>
				</div>
			</Router>
		</AuthProvider>
	);
}

export default App;
