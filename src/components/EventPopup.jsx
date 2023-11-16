import React from "react";
import EventTags from "./EventTags";
import "./design-files-css/EventPopup.css";

const EventPopup = ({ event, onPopupClick }) => {
  return (
    <div className="event-popup" onClick={() => onPopupClick(event)}>
      <img className="event-image" src={event.image} alt={event.name} />
      <h3 className="event-name">{event.name}</h3>
      <p className="event-description">{event.description}</p>
      <EventTags tags={event.tags} />
    </div>
  );
};

export default EventPopup;
