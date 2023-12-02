import React, { useState } from "react";
import "../design-files-css/admin-page-css/AuthorityChangeMenu.css";

function AuthorityChangeMenu({ userId, changeAuthority, closeMenu }) {
	const [selectedAuthority, setSelectedAuthority] = useState("");

	const handleAuthorityChange = (e) => {
		setSelectedAuthority(e.target.value);
	};

	const handleSubmit = () => {
		changeAuthority(userId, selectedAuthority);
		closeMenu();
	};

	return (
		<div className="authority-change-menu">
			<h3>Change Authority for {userId}</h3>
			<select onChange={handleAuthorityChange} value={selectedAuthority}>
				<option value="">Select Authority</option>
				<option value="Admin">Admin</option>
				<option value="Manager">Manager</option>
				<option value="User">User</option>
				<option value="Admin&Manager">Admin&Manager</option>{" "}
				{/* New option for both roles */}
			</select>
			<button type="button" className="save-button" onClick={handleSubmit}>
				Save
			</button>
			<button type="button" className="exit-button" onClick={closeMenu}>
				Exit
			</button>
		</div>
	);
}

export default AuthorityChangeMenu;
