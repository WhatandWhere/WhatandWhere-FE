import React, { useState } from "react";
import LoginRegisterButton from "./LoginRegisterButton";
import "./design-files-css/DynamicForm.css";
// eslint-disable-next-line import/order
import { Link, useNavigate } from "react-router-dom";

function DynamicForm({ formData, name, showTerms = false, onSubmit }) {
	const [formValues, setFormValues] = useState({});
	// const [email, setEmail] = useState("");
	// const [password, setPassword] = useState("");
	// const [username, setUsername] = useState("");
	// const [nameInput, setNameInput] = useState("");
	// const [surname, setSurname] = useState("");
	const navigate = useNavigate();
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormValues((prevFormValues) => ({
			...prevFormValues,
			[name]: value,
		}));
	};

	const handleCheckboxChange = (e) => {
		const { name, checked } = e.target;
		setFormValues((prevFormValues) => ({
			...prevFormValues,
			[name]: checked,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formValues);
	};

	return (
		<form onSubmit={handleSubmit}>
			{formData.map((field) => (
				<div className="form-group" key={field.name}>
					<input
						type={field.type}
						name={field.name}
						className="form-input"
						placeholder={field.placeholder}
						value={formValues[field.name] || ""}
						onChange={handleInputChange}
						onFocus={(e) => (e.target.type = field.onFocus)}
						onBlur={(e) => (e.target.type = field.onBlur)}
					/>
				</div>
			))}
			{showTerms && (
				<div className="terms-group">
					<input
						type="checkbox"
						name="acceptTerms"
						className="form-checkbox"
						onChange={handleCheckboxChange}
					/>
					{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
					<label htmlFor="acceptTerms" className="terms">
						I accept <Link to="/termsAndConditions">Terms and Conditions</Link>*
					</label>
				</div>
			)}
			<LoginRegisterButton
				label={name}
				onClick={() => {
					onSubmit(formValues);
				}}
			/>
		</form>
	);
}

export default DynamicForm;
