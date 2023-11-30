import { React, useEffect, useState } from "react";
import axios from "axios";
import UserList from "../components/admin-page-components/UserList";
import "../components/design-files-css/admin-page-css/AdminPage.css";
import NavBar from "../components/entry-page/Navbar";
import { backendLink } from "../action/authActions";

export default function AdminPage() {
	const [users, setUsers] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [fetching, setFetching] = useState(true);
	const [totalCount, setTotalCount] = useState(0);

	const scrollHandler = (e) => {
		if (
			e.target.documentElement.scrollHeight -
				(e.target.documentElement.scrollTop + window.innerHeight) <
			100
		) {
			setFetching(true);
		}
	};

	useEffect(() => {
		if (fetching) {
			axios
				.get(`${backendLink}/api/admin/users?_limit=15&_page=${currentPage}`, {
					headers: {
						Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
					},
				})
				.then((response) => {
					console.log(response.data);
					setUsers([...users, ...response.data]);
					setCurrentPage((prevState) => prevState + 1);
					setTotalCount(response.headers);
				})
				.finally(() => setFetching(false));
		}
	}, [fetching]);

	useEffect(() => {
		document.addEventListener("scroll", scrollHandler);
		return function () {
			document.removeEventListener("scroll", scrollHandler);
		};
	}, []);

	return (
		<div className="admin-page-container">
			<NavBar />
			<div className="hero-section-container">
				<UserList users={users} />
			</div>
		</div>
	);
}
