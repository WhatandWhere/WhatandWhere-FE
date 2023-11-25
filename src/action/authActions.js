import axios from "axios";

export const backendLink = "https://whatandwhere-3df40fb886ec.herokuapp.com";
export const signUp = async (email, password, username, name, surname) => {
	const result = await axios.post(`${backendLink}/api/user/signup`, {
		email,
		password,
		username,
		name,
		surname,
	});
	console.log(result.data.token);
	return { token: result.data.token };
};

export const signIn = async (email, password) => {
	const result = await axios.post(`${backendLink}/api/user/login`, {
		email,
		password,
	});
	return { token: result.data.token };
};

export const signOut = async () => {
	localStorage.setItem("auth_token", "");
};

// export const refreshTokens = async () => {
// 	const result = await axios.post("http://localhost:3001/api/v1/users", {});
// 	return result;
// };

export const storeUser = (token) => {
	localStorage.setItem("auth_token", token);
};
export const getUser = () => localStorage.getItem("auth_token");
