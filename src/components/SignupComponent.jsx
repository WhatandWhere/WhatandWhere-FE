import React from "react";
// eslint-disable-next-line import/no-named-as-default,import/no-named-as-default-member
import { useNavigate } from "react-router-dom";
import DynamicForm from "./DynamicForm";
import { signUp, storeUser } from "../action/authActions";

const signupFields = [
	{
		name: "email",
		type: "email",
		label: "Mail",
		placeholder: "Email",
	},
	{
		name: "password",
		type: "password",
		label: "Password",
		placeholder: "Password",
	},
	{
		name: "name",
		type: "text",
		label: "Name",
		placeholder: "Name",
	},
	{
		name: "surname",
		type: "text",
		label: "Surname",
		placeholder: "Surname",
	},
	{
		name: "username",
		type: "text",
		label: "Username",
		placeholder: "Username",
	},
];

function SignupComponent() {
	const navigate = useNavigate();
	const handleSubmit = (formValues) => {
		signUp(
			formValues.email,
			formValues.password,
			formValues.username,
			formValues.name,
			formValues.surname
		).then((res) => {
			storeUser(res.token);
			navigate("/mainpage");
		});
	};
	return (
		<div className="form-container signup-form-container">
			<DynamicForm formData={signupFields} name="Sign up" showTerms onSubmit={handleSubmit} />
		</div>
	);
}

export default SignupComponent;
