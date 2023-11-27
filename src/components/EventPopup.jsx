import React from "react";
import EventTags from "./EventTags";
import "./design-files-css/EventPopup.css";
import Button from "./entry-page/Button";

// const EventPopup = ({ event, onPopupClick }) => {
// 	return (
// 		<div className="event-popup" onClick={() => onPopupClick(event)}>
// 			<img className="event-image" src={event.image} alt={event.name} />
// 			<h3 className="event-name">{event.name}</h3>
// 			<p className="event-description">{event.description}</p>
// 			<EventTags tags={event.tags} />
// 		</div>
// 	);
// };

function EventPopup({ event, onPopupClick }) {
	return (
		<div className="event-popup">
			<img className="event-image" src={event.image} alt={event.name} />
			<h3 className="event-name">{event.name}</h3>
			<p className="event-description">{event.description}</p>
			<EventTags tags={event.tags} />
			<Button buttonStyle="primary-medium">View</Button>
		</div>
	);
}

export default EventPopup;
