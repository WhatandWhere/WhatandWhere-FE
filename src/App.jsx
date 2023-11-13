import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EntryPage from "./pages/EntryPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import MainPage from "./pages/MainPage";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";
import "./App.css";
import { getUser } from "./action/authActions";

function App() {
	const [user, setUser] = useState(null);
	useEffect(() => {
		const userToken = getUser();
		if (userToken) {
			setUser(userToken);
		}
	}, [user]);

	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<EntryPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/signup" element={<SignupPage />} />
					<Route path="/mainpage" element={<MainPage />} />
					<Route path="/termsAndConditions" element={<TermsAndConditionsPage />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
