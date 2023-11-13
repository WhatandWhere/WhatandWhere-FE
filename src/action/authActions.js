import axios from "axios";

export const signUp = async (email, password, username, name, surname) => {
	const result = await axios.post(`${process.env.BACK_URL}/api/user/signup`, {
		email,
		password,
		username,
		name,
		surname,
	});
	return { token: result.token };
};

export const signIn = async (email, password) => {
	const result = await axios.post(`${process.env.BACK_URL}/api/user/login`, {
		email,
		password,
	});
	return { token: result.token };
};

export const signOut = async () => {
	const result = await axios.post("http://localhost:3001/api/v1/users", {});
	return result;
};

// export const refreshTokens = async () => {
// 	const result = await axios.post("http://localhost:3001/api/v1/users", {});
// 	return result;
// };

export const storeUser = (token) => {
	localStorage.setItem("auth_token", token);
};
export const getUser = () => localStorage.getItem("auth_token");
