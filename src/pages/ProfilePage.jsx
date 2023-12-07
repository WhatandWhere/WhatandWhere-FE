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
	const [attending, setAttending] = useState([]);
	const [favourite, setFavourite] = useState([]);
	const [userInfo, setUserInfo] = useState({});

	useEffect(() => {
		axios
			.get(`${backendLink}/api/profile`, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
				},
			})
			.then((profileInfo) => {
				console.log(profileInfo.data.attendingEvents);
				setUserInfo(profileInfo.data);
				setAttending(profileInfo.data.attendingEvents);
			});
	}, []);

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

	useEffect(() => {
		axios
			.get(`${backendLink}/api/favorite-events`, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
				},
			})
			.then((favouriteEvents) => {
				console.log(favouriteEvents.data);
				setFavourite(favouriteEvents.data);
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
			return <EventListMainPage events={attending} myEventsRemoveButton />;
		}
		if (selectedTab === "favorites") {
			return <EventListMainPage events={events} myEventsRemoveButton />;
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
