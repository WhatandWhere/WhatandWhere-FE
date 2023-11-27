import React from "react";
import "./design-files-css/EventDetailsModal.css";

// const EventDetailsModal = ({ isOpen, onClose, eventData }) => {
// 	if (!isOpen) {
// 		return null;
// 	}

// 	return (
// 		<div className={`modal ${isOpen ? "open" : ""}`}>
// 			<div className="modal-content">
// 				<button className="close-button" type="button" onClick={onClose}>
// 					&times;
// 				</button>
// 				<div className="left-half">
// 					{/* Add content for image previews and description here */}
// 				</div>
// 				<div className="right-half">
// 					<h2>Event Details</h2>
// 					{/* Display event details using eventData */}
// 					<p>
// 						<strong>Event Name:</strong> {eventData.eventName}
// 					</p>
// 					<p>
// 						<strong>Event Start Date:</strong> {eventData.eventStartDate}
// 					</p>
// 					<p>
// 						<strong>Event End Date:</strong> {eventData.eventEndDate}
// 					</p>
// 					<p>
// 						<strong>Event Time:</strong> {eventData.eventTime}
// 					</p>
// 					<p>
// 						<strong>Event Fee:</strong> {eventData.eventFee}
// 					</p>
// 					<p>
// 						<strong>Category:</strong> {eventData.eventCategory}
// 					</p>
// 					<p>
// 						<strong>Subcategory:</strong> {eventData.eventSubcategory}
// 					</p>
// 					<p>
// 						<strong>Place Type:</strong> {eventData.eventPlaceType}
// 					</p>
// 					<p>
// 						<strong>Event Location:</strong> {eventData.eventLocation}
// 					</p>
// 					<p>
// 						<strong>Planned Participants:</strong> {eventData.plannedParticipants}
// 					</p>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

function EventDetailsModal({ isOpen, onClose, eventData }) {
	if (!isOpen) {
		return null;
	}

	return (
		<div className={`modal ${isOpen ? "open" : ""}`}>
			<div className="modal-content">
				<button className="close-button" type="button" onClick={onClose}>
					&times;
				</button>
				<div className="left-half">
					{/* Add content for image previews and description here */}
				</div>
				<div className="right-half">
					<h2>Event Details</h2>
					{/* Display event details using eventData */}
					<p>
						<strong>Event Name:</strong> {eventData.eventName}
					</p>
					<p>
						<strong>Event Start Date:</strong> {eventData.eventStartDate}
					</p>
					<p>
						<strong>Event End Date:</strong> {eventData.eventEndDate}
					</p>
					<p>
						<strong>Event Time:</strong> {eventData.eventTime}
					</p>
					<p>
						<strong>Event Fee:</strong> {eventData.eventFee}
					</p>
					<p>
						<strong>Category:</strong> {eventData.eventCategory}
					</p>
					<p>
						<strong>Subcategory:</strong> {eventData.eventSubcategory}
					</p>
					<p>
						<strong>Place Type:</strong> {eventData.eventPlaceType}
					</p>
					<p>
						<strong>Event Location:</strong> {eventData.eventLocation}
					</p>
					<p>
						<strong>Planned Participants:</strong> {eventData.plannedParticipants}
					</p>
				</div>
			</div>
		</div>
	);
}

export default EventDetailsModal;
