import React from "react";
import EventBar from "./EventBar";
import "../design-files-css/manager-page/EventList.css";

function EventList({ events, onAccept, onReject, onViewDetails }) {
	return (
		<div className="event-list">
			{events.map((event) => (
				<EventBar
					key={event.eventId}
					event={event}
					onAccept={() => onAccept(event.eventId)}
					onReject={() => onReject(event.eventId)}
					onViewDetails={() => onViewDetails(event.eventId)}
				/>
			))}
		</div>
	);
}

export default EventList;
