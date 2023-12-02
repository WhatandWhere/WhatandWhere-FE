// UserList.jsx
import { React, useState } from "react";
import List from "@mui/material/List";
import UserBar from "./UserBar";
import "../design-files-css/admin-page-css/UserList.css";

function UserList({ users, onEdit, onDelete }) {
	if (users.length === 0) {
		return (
			<div className="no-founded">
				<h1>There is no user with this name</h1>
			</div>
		);
	}
	if (users[0].userInfoId === -1) {
		return undefined;
	}

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
