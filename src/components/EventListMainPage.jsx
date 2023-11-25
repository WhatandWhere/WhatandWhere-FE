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
				<img className="event-image" src={event.image} alt={event.name} />
				<h3 className="event-name">{event.name}</h3>
				<p className="event-description">{event.description}</p>
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
