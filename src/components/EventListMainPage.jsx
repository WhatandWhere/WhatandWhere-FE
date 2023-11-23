import React from "react";
import "./design-files-css/MainPageList.css";
import EventTags from "./EventTags";

function EventItem({ event }) {
	const handleClick = () => {
		// add here onClick handler to redirect to the event info
	};

	return (
		// eslint-disable-next-line jsx-a11y/no-static-element-interactions
		<div className="event-item" onClick={handleClick}>
			<div className="event-item-content">
				<img className="event-image" src={event.eventImages[0].url} alt={event.name} />
				<h3 className="event-name">{event.eventName}</h3>
				<p className="event-description">{event.eventDescription}</p>
				<EventTags tags={event.tags} />
			</div>
		</div>
	);
}

function EventList({ events }) {
	return (
		<div className="event-list-container">
			<div className="event-list">
				{events.map((event) => (
					<EventItem key={event.id} event={event} />
				))}
			</div>
		</div>
	);
}

export default EventList;
