import React, { useState, useEffect } from "react";
import axios from "axios";
import "../design-files-css/profile-page-css/UpperPartOfThePage.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// eslint-disable-next-line import/no-extraneous-dependencies
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { backendLink } from "../../action/authActions";

function UpperPartOfThePage({ showEditButton }) {
	const userProfilePic = "/placeholder-avatar.png";
	const [isEditing, setIsEditing] = useState(false);
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [profilePic, setProfilePic] = useState(userProfilePic);
	const [username, setUsername] = useState("");
	const [isImageUploaded, setIsImageUploaded] = useState(false);

	useEffect(() => {
		axios
			.get(`${backendLink}/api/profile`, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
				},
			})
			.then((profileInfo) => {
				console.log(profileInfo.data);
				setEmail(profileInfo.data.email);
				if (profileInfo.data.phoneNumber === null) {
					setPhone("+48000000000");
				} else {
					setPhone(profileInfo.data.phoneNumber);
				}
				setUsername(profileInfo.data.username);
			});
	}, [isEditing]);

	// Function to handle profile picture change
	const handleProfilePicChange = (e) => {
		const file = e.target.files[0];
		const maxFileSize = 2 * 1024 * 1024;

		if (file) {
			if (!file.type.startsWith("image/")) {
				alert("Please upload an image file.");
				return;
			}

			if (file.size > maxFileSize) {
				alert("File is too large. Please upload an image smaller than 2MB.");
				return;
			}
			setIsImageUploaded(true);
			setProfilePic(URL.createObjectURL(file));
		}
	};

	// Function to validate email using regex pattern
	const validateEmail = (email) => {
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex pattern
		return re.test(email);
	};

	// Function to validate phone number to ensure it starts with a plus and contains digits
	const validatePhone = (phone) => {
		const re = /^\+[0-9]*$/; // Phone number regex pattern
		return re.test(phone);
	};

	// Call this function to save changes
	const saveChanges = () => {
		// Validate email and phone before saving
		if (!validateEmail(email)) {
			alert("Please enter a valid email address.");
			return;
		}
		if (!validatePhone(phone)) {
			alert("Phone number must start with a plus sign and contain only numbers.");
			return;
		}
		// If we're not in edit mode, we will save the current values

		const updateData = async () => {
			const url = "";
			const data = {
				email,
				phone,
			};

			try {
				const response = await axios.put(url, data);
				console.log(response.data);
			} catch (error) {
				console.log("Error: ", error);
			}
		};

		console.log("Values saved:", {
			email,
			phone,
		});
		alert("Values saved!");
		setIsEditing(false); // Exit editing mode
	};

	return (
		<div className="user-profile">
			{isEditing ? (
				<div className="user-image">
					<div className="background-for-change-image-button">
						<input
							type="file"
							className="profile-pic-upload"
							onChange={handleProfilePicChange}
							accept="image/*"
						/>
						{isImageUploaded && (
							<FontAwesomeIcon icon={faCheck} className="uploaded-tick" />
						)}
					</div>
				</div>
			) : (
				<div className="user-image">
					<img src={profilePic} alt="User" className="profile-pic" />
				</div>
			)}
			<div className="user-details">
				<div className="text-display">{username}</div>
				{isEditing ? (
					<>
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Email"
							className="input-field"
						/>
						<input
							type="tel"
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
							placeholder="Phone"
							className="input-field"
						/>
					</>
				) : (
					<>
						<div className="text-display">{email}</div>
						<div className="text-display">{phone}</div>
					</>
				)}
				{showEditButton && ( // Only render the button if showEditButton is true
					<button
						type="button"
						onClick={isEditing ? saveChanges : () => setIsEditing(true)}
						className={`edit-button ${isEditing ? "edit-button-bold" : ""}`}
					>
						{isEditing ? "Save changes" : "Edit user details"}
					</button>
				)}
			</div>
		</div>
	);
}

UpperPartOfThePage.defaultProps = {
	showEditButton: true,
};

export default UpperPartOfThePage;
