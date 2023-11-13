// LoginPage.jsx
import React from "react";
import DynamicForm from "./DynamicForm";
import "./design-files-css/DynamicForm.css";
import { signIn, storeUser } from "../action/authActions";
// eslint-disable-next-line import/order
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/context";

const emailPasswordFields = [
	{
		name: "email",
		type: "email",
		label: "Email",
		placeholder: "Email",
	},
	{
		name: "password",
		type: "password",
		label: "Password",
		placeholder: "Password",
	},
];

function LoginPage() {
	const navigate = useNavigate();
	const user = useAuth();
	const handleSubmit = async (formValues) => {
		const result = await signIn(formValues.email, formValues.password);
		storeUser(result.token);
		user.setUserToken(result.token);
		navigate("/mainpage");
		console.log("Login");
	};
	return (
		<div className="form-container login-form-container">
			<DynamicForm formData={emailPasswordFields} name="Login" onSubmit={handleSubmit} />
		</div>
	);
}

export default LoginPage;
