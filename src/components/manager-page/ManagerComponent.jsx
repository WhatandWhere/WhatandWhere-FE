import React, { useState, useEffect } from "react";
import axios from "axios";
import EventList from "./EventList";
import SearchBar from "./SearchBar";
import "../design-files-css/manager-page/ManagerComponent.css";

const authToken = localStorage.getItem("auth_token");
const backendLink = "https://whatandwhere-3df40fb886ec.herokuapp.com";

function ManagerComponent() {
	const [events, setEvents] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		const fetchEvents = async () => {
			try {
				const response = await axios.get(
					`${backendLink}/api/manager/territories/1/events`,
					{
						headers: { Authorization: `Bearer ${authToken}` },
					}
				);
				setEvents(response.data);
			} catch (error) {
				console.error("Error fetching events:", error);
			}
		};

		fetchEvents();
	}, []);

	const handleSearchChange = (searchValue) => {
		setSearchTerm(searchValue);
	};

	const filteredEvents = Array.isArray(events)
		? events.filter((event) => event.eventName.toLowerCase().includes(searchTerm.toLowerCase()))
		: events;

	const handleAcceptEvent = (eventId) => {
		// Logic to accept event
		console.log("Accept event:", eventId);
	};

	const handleRejectEvent = (eventId) => {
		// Logic to reject event
		console.log("Reject event:", eventId);
	};

	const handleViewEventDetails = (eventId) => {
		// Logic to view event details
		console.log("View details for event:", eventId);
	};

	return (
		<div className="manager-page-container">
			<div className="manager-form-container" />
			<div className="search-bar-container">
				<SearchBar value={searchTerm} onChange={handleSearchChange} />
			</div>
			<div className="event-list-container">
				<EventList
					events={filteredEvents}
					onAccept={handleAcceptEvent}
					onReject={handleRejectEvent}
					onViewDetails={handleViewEventDetails}
				/>
			</div>
		</div>
	);
}

export default ManagerComponent;
