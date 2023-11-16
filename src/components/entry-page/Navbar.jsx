import React, { useContext } from "react";
import { Link } from "react-scroll";
import "../design-files-css/entry-page/Navbar.css";
import Sidebar from "./SideBar";
import { signOut } from "../../action/authActions";
import { AuthContext } from "../../context/context";

export default function NavBar() {
	// const [user, setUser] = useState(localStorage.getItem("auth_token"));
	const user = useContext(AuthContext);
	console.log(user);
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
						<Link to="/" spy smooth offset={50} duration={700} className="nav-links">
							Home
						</Link>
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
						{!user ? (
							<a href="/signup" className="primary-medium">
								SIGN UP
							</a>
						) : (
							<button
								type="button"
								className="primary-medium"
								onClick={() => {
									signOut();
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
