import { React, useEffect, useState } from "react";
import axios from "axios";
import UserList from "../components/admin-page-components/UserList";
import "../components/design-files-css/admin-page-css/AdminPage.css";
import SearchBar from "../components/admin-page-components/SearchBar";
import AuthorityChangeMenu from "../components/admin-page-components/AuthorityChangeMenu";
import NavBar from "../components/entry-page/Navbar";
import { backendLink } from "../action/authActions";

const authToken = localStorage.getItem("auth_token");

export default function AdminPage() {
	const [users, setUsers] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [showChangeAuthority, setShowChangeAuthority] = useState(false);
	const [currentUserId, setCurrentUserId] = useState(null);

	const fetchUsers = async () => {
		try {
			const response = await axios.get(`${backendLink}/api/admin/users`, {
				headers: { Authorization: `Bearer ${authToken}` },
			});
			if (response.data && response.data.users) {
				setUsers(response.data.users); // Make sure to set the users from the response
			} else {
				setUsers([]);
			}
		} catch (error) {
			console.error("Error fetching users:", error);
			setUsers([]);
		}
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	const updateUserAuthority = async (userId, authority) => {
		let updatedData;

		switch (authority) {
			case "Admin":
				updatedData = { isAdmin: true, isManager: false };
				break;
			case "Manager":
				updatedData = { isAdmin: false, isManager: true };
				break;
			case "Admin&Manager":
				updatedData = { isAdmin: true, isManager: true };
				break;
			case "User":
			default:
				updatedData = { isAdmin: false, isManager: false };
				break;
		}

		try {
			const response = await axios.put(
				`${backendLink}/api/admin/users/${userId}`,
				updatedData,
				{ headers: { Authorization: `Bearer ${authToken}` } }
			);
			await fetchUsers();
			setShowChangeAuthority(false);
		} catch (error) {
			console.error("Error updating user authority:", error);
		}
	};

	const deleteUser = async (userId) => {
		try {
			await axios.delete(`${backendLink}/api/admin/users/${userId}`, {
				headers: { Authorization: `Bearer ${authToken}` },
			});
			setUsers(users.filter((user) => user.userInfoId !== userId));
		} catch (error) {
			console.error("Error deleting user:", error);
		}
	};

	const openChangeAuthorityMenu = (userId, username) => {
		setCurrentUserId(userId);
		setShowChangeAuthority(true);
	};

	const closeChangeAuthorityMenu = () => {
		setShowChangeAuthority(false);
	};
	const handleSearchChange = (searchValue) => {
		setSearchTerm(searchValue);
	};

	const filteredUsers =
		users.length !== 0
			? users.filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
			: [{ userInfoId: -1, phoneNumber: -1 }];

	console.log(filteredUsers); // Add this to check the filtered user data

	return (
		<div className="admin-page-container">
			<NavBar />
			<div className="search-bar-container">
				<SearchBar value={searchTerm} onChange={handleSearchChange} />
			</div>
			<div className="user-list-container">
				<UserList
					users={filteredUsers}
					onEdit={openChangeAuthorityMenu}
					onDelete={deleteUser}
				/>
			</div>
			{showChangeAuthority && (
				<AuthorityChangeMenu
					userId={currentUserId}
					changeAuthority={updateUserAuthority}
					closeMenu={closeChangeAuthorityMenu}
				/>
			)}
		</div>
	);
}
