import React, { useState, useEffect } from "react";
import axios from "axios";
import UpperPartOfThePage from "../components/profile-page-components/UpperPartOfThePage";
import UserSelectionList from "../components/profile-page-components/UserSelectionList";
import EventListMainPage from "../components/EventListMainPage";
import NavBar from "../components/entry-page/Navbar";
import "../components/design-files-css/profile-page-css/ProfilePage.css";
import { backendLink } from "../action/authActions";

function ProfilePage() {
	const [selectedTab, setSelectedTab] = useState("myEvents");
	const [events, setEvents] = useState([]);

	useEffect(() => {
		axios
			.get(`${backendLink}/api/events`, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
				},
			})
			.then((events) => {
				console.log(events.data);
				setEvents(events.data);
			});
	}, []);

	const handelTabChange = (newTab) => {
		// console.log(newTab);
		setSelectedTab(newTab);
	};

	// Function to render content based on the selected tab
	function renderTabContent() {
		if (selectedTab === "myEvents") {
			return <EventListMainPage events={events} myEventsRemoveButton />;
		}
		if (selectedTab === "attending") {
			return <EventListMainPage events={[events[0], events[1]]} />;
		}
		if (selectedTab === "favorites") {
			return <EventListMainPage events={[events[2], events[3]]} />;
		}
		return null;
	}

	return (
		<div className="profile-page">
			<NavBar />
			<UpperPartOfThePage />
			<div className="bottom-part">
				<UserSelectionList
					handelTabChange={handelTabChange}
					selectedAction={selectedTab}
					onSelect={setSelectedTab}
				/>
				<div className="tab-content">{renderTabContent()}</div>
			</div>
		</div>
	);
}

export default ProfilePage;
