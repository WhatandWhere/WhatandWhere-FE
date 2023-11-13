import React, { createContext, useMemo, useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies

export const AuthContext = createContext("");
export const useAuth = () => React.useContext(AuthContext);

export function AuthProvider(props) {
	const [userToken, setUserToken] = useState(localStorage.getItem("auth_token") || "");
	// const [user, setUser] = React.useState(null);
	const user = useMemo(
		() => ({
			userToken,
			setUserToken,
		}),
		[userToken, setUserToken]
	);
	return <AuthContext.Provider value={user}>{props.children}</AuthContext.Provider>;
}

export default AuthProvider;
