import React, { useState } from "react";
import UpperPartOfThePage from "../components/profile-page-components/UpperPartOfThePage";
import UserSelectionList from "../components/profile-page-components/UserSelectionList";
import EventListMainPage from "../components/EventListMainPage";
import NavBar from "../components/entry-page/Navbar";
import "../components/design-files-css/profile-page-css/ProfilePage.css";

function ProfilePage() {
	const [selectedTab, setSelectedTab] = useState("myEvents");

	// Function to render content based on the selected tab
	const renderTabContent = () => {
		<EventListMainPage selectedTab={selectedTab} />;
	};

	return (
		<div className="profile-page">
			<NavBar />
			<UpperPartOfThePage />
			<div className="bottom-part">
				<UserSelectionList selectedAction={selectedTab} onSelect={setSelectedTab} />
				<div className="tab-content">
					<EventListMainPage />
					{/* {renderTabContent()} */}
				</div>
			</div>
		</div>
	);
}

export default ProfilePage;
