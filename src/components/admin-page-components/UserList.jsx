// UserList.jsx
import React from "react";
import List from "@mui/material/List";
import UserBar from "./UserBar";
import "../design-files-css/admin-page-css/UserList.css";

function UserList({ users, onEdit, onDelete }) {
	return (
		<List className="user-list">
			{users.map((user) => (
				<UserBar
					key={user.userInfoId}
					userId={user.userInfoId}
					username={user.name}
					authority={{ isAdmin: user.isAdmin, isManager: user.isManager }}
					onEdit={() => onEdit(user.userInfoId, user.name)}
					onDelete={() => onDelete(user.userInfoId)}
				/>
			))}
		</List>
	);
}

export default UserList;
