import React from "react";
import { Navigate } from "react-router";
import { useAuth } from "../../context/context";

function ProtectedRoute({ token, children }) {
	const user = useAuth();
	if (!user.userToken) {
		console.log(user);
		return <Navigate to="/" replace />;
	}
	return children;
}

export default ProtectedRoute;
