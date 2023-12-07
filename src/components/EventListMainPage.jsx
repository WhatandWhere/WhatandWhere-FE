import React from "react";
import "./design-files-css/MainPageList.css";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// eslint-disable-next-line import/no-extraneous-dependencies
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import EventTags from "./EventTags";

function EventItem({ event, myEventsRemoveButton }) {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(`/event/${event.eventId}`);
	};

	const handleRemove = () => {
		// add here onClick handler for remove button
	};

	return (
		// eslint-disable-next-line jsx-a11y/no-static-element-interactions
		<div className="event-item" onClick={handleClick}>
			{myEventsRemoveButton && (
				// eslint-disable-next-line jsx-a11y/control-has-associated-label,react/button-has-type
				<button className="remove-button-x" onClick={handleRemove}>
					<FontAwesomeIcon icon={faXmark} />
				</button>
			)}
			<div className="event-item-content">
				<img className="event-image" src={event.eventImages[0].url} alt={event.name} />
				<h3 className="event-name">{event.eventName}</h3>
				<p className="event-description">{event.eventDescription}</p>
				<EventTags tags={event.categories} />
			</div>
		</div>
	);
}

function EventList({ events, myEventsRemoveButton }) {
	return (
		<div className="event-list-container">
			<div className="event-list">
				{events.map((event) => (
					<EventItem
						key={event.eventId}
						event={event}
						myEventsRemoveButton={myEventsRemoveButton}
					/>
				))}
			</div>
		</div>
	);
}

export default EventList;
