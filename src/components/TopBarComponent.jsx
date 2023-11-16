import React, { useState } from "react";
import "./design-files-css/TopBar.css";
import SideMenuComponent from "./SideMenuComponent";

function TopBarComponent() {
	const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

	const toggleSideMenu = () => {
		setIsSideMenuOpen(!isSideMenuOpen);
	};

	return (
		<div className="top-bar">
			<div className="smb">
				<button type="button" onClick={toggleSideMenu}>
					<img src="/sidemenu.png" alt="Open Side Menu" />
				</button>
			</div>
			<div className="logo">{/* Your logo component or image goes here */}</div>
			<div className="header">
				<h6>WhatandWhere</h6>
			</div>
			{isSideMenuOpen && <SideMenuComponent />}
		</div>
	);
}

export default TopBarComponent;
