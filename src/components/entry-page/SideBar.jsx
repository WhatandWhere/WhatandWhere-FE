import "../design-files-css/entry-page/SideBar.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { SidebarData } from "./SidebarData";

function SideBar() {
	const [sidebar, setSidebar] = useState(false);

	const showSideBar = () => {
		setSidebar(!sidebar);
	};

	return (
		// eslint-disable-next-line react/jsx-no-constructed-context-values
		<IconContext.Provider value={{ color: "#fff" }}>
			<div className="sidebar">
				{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
				<Link to="#" className="menu-bars">
					<FaIcons.FaBars onClick={showSideBar} />
				</Link>
			</div>
			<nav className={sidebar ? "sidebar-menu active" : "sidebar-menu"}>
				<ul className="sidebar-items" onClick={showSideBar}>
					<li className="sidebar-toggle">
						{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
						<Link to="#" className="menu-bars">
							<AiIcons.AiOutlineClose />
						</Link>
					</li>
					{SidebarData.map((item, index) => (
						<li key={index} className={item.cName}>
							<Link to={item.path}>
								{item.icon}
								<span>{item.title}</span>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</IconContext.Provider>
	);
}

export default SideBar;
