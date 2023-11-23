import React from "react";
import { Link } from "react-router-dom";
import "../design-files-css/entry-page/Navbar.css";
import Sidebar from "./SideBar";
import { signOut } from "../../action/authActions";
import { useAuth } from "../../context/context";

export default function NavBar() {
	const user = useAuth();
	const router = window.location.pathname;
	return (
		<div>
			<nav className="navbar">
				<div className="navbar-container">
					<a href="/" className="navbar-logo">
						<div className="title">
							<div className="title-primary">What and</div>
							<div className="title-secondary">Where</div>
						</div>
						<img className="nav-logo" src="./logoForHeader.png" alt="Logo" />
					</a>

					<div className="nav-buttons">
						<Link to="/" className="nav-links">
							Home
						</Link>
						{router === "/" ? (
							<Link
								to="g-wrapper"
								spy
								smooth
								offset={50}
								duration={700}
								className="nav-links"
							>
								About
							</Link>
						) : (
							""
						)}

						{!user.userToken ? (
							<a href="/signup" className="primary-medium">
								SIGN UP
							</a>
						) : (
							<button
								type="button"
								className="primary-medium"
								onClick={() => {
									signOut();
									user.setUserToken(null);
								}}
							>
								SIGN OUT
							</button>
						)}
						<Sidebar />
					</div>
				</div>
			</nav>
		</div>
	);
}
