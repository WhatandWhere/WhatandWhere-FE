import React from "react";
import "./design-files-css/EventDetailsModal.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EventFeedbackComponent from "./EventFeedbackComponent";

const EventDetailsModal = ({ isOpen, onClose, eventData }) => {
  if (!isOpen || !eventData) {
    return null;
  }

  const {
    eventName,
    eventStartDate,
    eventEndDate,
    eventTime,
    eventFee,
    eventCategory,
    eventSubcategory,
    eventPlaceType,
    eventLocation,
    plannedParticipants,
    eventImages,
  } = eventData;

  const handleLocationButtonClick = async () => {
    try {
		const shareData = {
			title: "Event Location",
			text: `Check out the location of the event: ${eventLocation}`,
		};

		await navigator.share(shareData);
		} catch (error) {
		// Handle errors or fallback to a different approach (e.g., opening a specific URL)
		console.error("Sharing failed:", error);

		// Fallback: Open a specific URL (Google Maps in this example)
		const fallbackUrl = `https://maps.google.com?q=${encodeURIComponent(eventLocation)}`;
		window.open(fallbackUrl, "_blank");
		}
	};

  //Settings for slick(images preview)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <button type="button" className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="left-half">
          <Slider {...settings}>
            {eventImages.map((image, index) => (
              <div key={index}>
                <img className="event-images" src={image} alt={`${eventName} - Image ${index + 1}`} />
              </div>
            ))}
          </Slider>
          <p className="event-description">{eventData.description}</p>
          <EventFeedbackComponent onFeedbackSubmit={onFeedbackSubmit} />
        </div>
        <div className="right-half">
          <h2>Event Details</h2>
          <label htmlFor="event-name">
            <strong>Event Name:</strong>
            <input type="text" id="event-name" value={eventName} disabled />
          </label>
          <label htmlFor="event-start-date">
            <strong>Event Start Date:</strong>
            <input type="date" id="event-start-date" value={eventStartDate} disabled />
          </label>
          <label htmlFor="event-end-date">
            <strong>Event End Date:</strong>
            <input type="date" id="event-end-date" value={eventEndDate} disabled />
          </label>
          <label htmlFor="event-time">
            <strong>Event Time:</strong>
            <input type="time" id="event-time" value={eventTime} disabled />
          </label>
          <label htmlFor="event-fee">
            <strong>Event Fee:</strong>
            <input type="text" id="event-fee" value={eventFee} disabled />
          </label>
          <label htmlFor="event-category">
            <strong>Category:</strong>
            <input type="text" id="event-category" value={eventCategory} disabled />
          </label>
          <label htmlFor="event-subcategory">
            <strong>Subcategory:</strong>
            <input type="text" id="event-subcategory" value={eventSubcategory} disabled />
          </label>
          <label htmlFor="event-place-type">
            <strong>Place Type:</strong>
            <input type="text" id="event-place-type" value={eventPlaceType} disabled />
          </label>
          <label htmlFor="event-location">
			<strong>Event Location:</strong>
				<button id="event-location" type="button" onClick={handleLocationButtonClick}>
					View Location
				</button>
          </label>
          <label htmlFor="planned-participants">
            <strong>Planned Participants:</strong>
            <input type="text" id="planned-participants" value={plannedParticipants} disabled />
          </label>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsModal;
