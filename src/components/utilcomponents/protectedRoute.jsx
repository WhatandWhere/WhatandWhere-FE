import React from "react";
import { Navigate } from "react-router";

function ProtectedRoute({ user, children }) {
	if (!user) {
		return <Navigate to="/landing" replace />;
	}

	return children;
}

export default ProtectedRoute;
