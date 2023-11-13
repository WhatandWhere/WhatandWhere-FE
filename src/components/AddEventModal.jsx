import React, { useEffect, useState } from "react";
import "./design-files-css/AddEventModal.css";

function AddEventModal({ isOpen, onClose, onSave, location }) {
	const [eventName, setEventName] = useState("");
	const [eventDate, setEventDate] = useState("");
	const [eventDescription, setEventDescription] = useState("");
	const [eventLocation, setEventLocation] = useState(""); // Define event location state

	// Automatically fill the location input field
	useEffect(() => {
		if (location) {
			// Format the location for display (e.g., latitude and longitude)
			const locationText = `Latitude: ${location.lat}, Longitude: ${location.lng}`;
			setEventLocation(locationText);
		}
	}, [location]);

	const handleSave = () => {
		// You can add validation and data processing here
		onSave({
			name: eventName,
			date: eventDate,
			description: eventDescription,
			location: eventLocation, // Pass the location data to the onSave function
		});

		// Close the modal
		onClose();
	};

	return (
		<div className={`modal ${isOpen ? "open" : ""}`}>
			<div className="modal-content">
				<h2>Create a New Event</h2>
				<label htmlFor="1">
					Event Name:
					<input
						id="1"
						type="text"
						value={eventName}
						onChange={(e) => setEventName(e.target.value)}
					/>
				</label>
				<label htmlFor="2">
					Event Date:
					<input
						id="2"
						type="date"
						value={eventDate}
						onChange={(e) => setEventDate(e.target.value)}
					/>
				</label>
				<label htmlFor="3">
					Event Description:
					<textarea
						id="3"
						value={eventDescription}
						onChange={(e) => setEventDescription(e.target.value)}
					/>
				</label>
				<label htmlFor="4">
					Event Location:
					<input id="4" type="text" value={eventLocation} readOnly />
				</label>
				<button type="button" onClick={handleSave}>
					Save Event
				</button>
			</div>
		</div>
	);
}

export default AddEventModal;
