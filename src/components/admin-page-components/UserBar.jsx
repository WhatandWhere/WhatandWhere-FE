import React from "react";
import { ListItem, IconButton } from "@mui/material";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import "../design-files-css/admin-page-css/UserBar.css"; // Ensure correct path

function UserBar({ userId, username, authority, onEdit, onDelete }) {
	let displayAuthority = "User"; // Default display authority is 'User'

	if (authority.isAdmin && authority.isManager) {
		displayAuthority = "Admin&Manager";
	} else if (authority.isAdmin) {
		displayAuthority = "Admin";
	} else if (authority.isManager) {
		displayAuthority = "Manager";
	}

	return (
		<ListItem className="user-info">
			<div className="user-text">
				{username} | {displayAuthority}
			</div>
			<div className="action-buttons">
				<IconButton onClick={() => onEdit(userId)} className="user-bar-icon-edit">
					<EditRoundedIcon />
				</IconButton>
				<IconButton onClick={() => onDelete(userId)} className="user-bar-icon-delete">
					<ClearRoundedIcon />
				</IconButton>
			</div>
		</ListItem>
	);
}

export default UserBar;
