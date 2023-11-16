import React, { useState, useEffect } from "react";
import "./design-files-css/AddEventModal.css";
import Slider from "./AddEventModalSlider";

const AddEventModal = ({ isOpen, onClose, onSave, location }) => {
	const [eventName, setEventName] = useState("");
	const [eventStartDate, setEventStartDate] = useState("");
	const [eventEndDate, setEventEndDate] = useState("");
	const [eventTime, setEventTime] = useState("");
	const [eventFee, setEventFee] = useState(0); // Default value for event fee
	const [eventCategory, setEventCategory] = useState("");
	const [eventSubcategory, setEventSubcategory] = useState("");
	const [eventPlaceType, setEventPlaceType] = useState("");
	const [eventLocation, setEventLocation] = useState("");
	const [plannedParticipants, setPlannedParticipants] = useState(0); // Default value for planned participants
	const [eventDescription, setEventDescription] = useState("");
	const [eventImages, setEventImages] = useState([]); // Use an array for multiple images
	const [imagePreviews, setImagePreviews] = useState([]); // State to store image previews
	const [removedImages, setRemovedImages] = useState([]);

	const handleImageChange = (e) => {
		const selectedImages = Array.from(e.target.files);
		const limitedImages = selectedImages.slice(0, 3);

		// Update the state with the selected images
		setEventImages(limitedImages);

		// Generate image previews
		const previews = [];
		for (const image of limitedImages) {
			const reader = new FileReader();
			reader.onload = (e) => {
				previews.push({
					src: e.target.result,
					file: image,
				});
				if (previews.length === limitedImages.length) {
					setImagePreviews(previews);
				}
			};
			reader.readAsDataURL(image);
		}
	};

	const handleRemoveImage = (index) => {
		const updatedPreviews = [...imagePreviews];
		updatedPreviews.splice(index, 1);
		setImagePreviews(updatedPreviews);

		// Remove the corresponding image from eventImages
		const updatedImages = eventImages.filter((_, i) => i !== index);
		setEventImages(updatedImages);
	};

	const handleDrop = (e) => {
		e.preventDefault();
		e.stopPropagation();

		const droppedFiles = Array.from(e.dataTransfer.files);
		const newImages = droppedFiles.slice(0, 3);

		// Check image sizes
		const invalidImages = newImages.filter((image) => image.size > 2 * 1024 * 1024); // 2MB limit
		if (invalidImages.length > 0) {
			// Display error message to the user
			alert("Image size exceeds the 2MB limit. Please choose smaller images.");
			return;
		}

		// Append new images to existing ones, excluding removed ones
		const updatedImages = [
			...eventImages.filter((_, i) => !removedImages.includes(i)),
			...newImages,
		];
		setEventImages(updatedImages);

		const previews = [];
		for (const image of updatedImages) {
			const reader = new FileReader();
			reader.onload = (event) => {
				previews.push({
					src: event.target.result,
					file: image,
				});
				if (previews.length === updatedImages.length) {
					setImagePreviews(previews);
				}
			};
			reader.readAsDataURL(image);
		}
	};

	const handleDragOver = (e) => {
		e.preventDefault();
		e.stopPropagation();
	};

	const handleDragEnter = (e) => {
		e.preventDefault();
		e.stopPropagation();
	};

	const handleDragLeave = (e) => {
		e.preventDefault();
		e.stopPropagation();
	};

	useEffect(() => {
		if (location) {
			const locationText = `Latitude: ${location.lat}, Longitude: ${location.lng}`;
			setEventLocation(locationText);
		}
	}, [location]);

	const [buttonText, setButtonText] = useState("Save Event");
	const participantValues = [1, 5, 10, 20, 50, 100];

	useEffect(() => {
		const maxParticipantValue = Math.max(...participantValues);
		// Update the button text based on the plannedParticipants value
		if (plannedParticipants >= maxParticipantValue) {
			setButtonText("Send Request");
		} else {
			setButtonText("Save Event");
		}
	}, [plannedParticipants]);

	const [warningMessage, setWarningMessage] = useState("");

	const sendRequestToTerritoryManager = () => {
		// Implement the logic to send a request to the territory manager here
		// For example, you can make an API call or perform any necessary actions
		// You may also show a confirmation message to the user
		alert("Request sent to the territory manager");
		// Optionally, perform additional actions or UI updates
	};

	const handleSave = () => {
		// Validate required fields
		if (!eventName || !eventStartDate || !eventEndDate || !eventPlaceType) {
			setWarningMessage("Please fill in all required fields.");
			return;
		}

		// Check if the plannedParticipants slider is at its maximum value
		if (plannedParticipants >= Math.max(...participantValues)) {
			// Send a request to the territory manager
			sendRequestToTerritoryManager();
			// Optionally, you can also show a confirmation message or perform additional actions
			// Reset warning message after handling the request
			setWarningMessage("");
		} else {
			// Prepare the event data
			const eventData = {
				name: eventName,
				startDate: eventStartDate,
				endDate: eventEndDate,
				time: eventTime,
				fee: eventFee,
				category: eventCategory,
				subcategory: eventSubcategory,
				placeType: eventPlaceType,
				location: eventLocation,
				plannedParticipants: plannedParticipants,
				image: eventImages,
				description: eventDescription,
			};

			// Call the onSave function with the event data
			onSave(eventData);

			// Reset warning message after successful save
			setWarningMessage("");
		}

		// Close the modal
		onClose();
	};

	const [selectedCategory, setSelectedCategory] = useState("");
	const [subcategories, setSubcategories] = useState([]);
	const [selectedSubcategory, setSelectedSubcategory] = useState("");

	// Data structure for categories and subcategories
	const categoryData = {
		music: ["pop", "rock", "hip-hop"],
		sports: ["basketball", "soccer", "tennis"],
		// Add more categories and subcategories as needed
	};

	const handleCategoryChange = (category) => {
		setSelectedCategory(category);
		setSubcategories(categoryData[category] || []);
	};

	const eventFeeValues = ["Free", 5, 10, 20, 50, 100, 200, 300, 400, "500+"];

	const today = new Date().toISOString().split("T")[0];
	const isEndDateDisabled = !eventStartDate;

	const placeTypes = ["Indoor", "Outdoor"];

	const handlePlaceTypeChange = (selectedPlaceType) => {
		setEventPlaceType(selectedPlaceType);
	};

	return (
		<div
			className={`modal ${isOpen ? "open" : ""}`}
			onDrop={handleDrop}
			onDragOver={handleDragOver}
			onDragEnter={handleDragEnter}
			onDragLeave={handleDragLeave}
		>
			<div className="modal-content">
				<button className="close-button" onClick={onClose}>
					&times;
				</button>
				<div className="left-half">
					<label htmlFor="event-image">
						Event Image (Max 3 images, 2MB each)
						<input
							id="event-image"
							type="file"
							accept="image/*"
							onChange={handleImageChange}
							multiple // Allow multiple file selection
						/>
					</label>
					{imagePreviews.map((preview, index) => (
						<div key={index} className="image-preview-container">
							<img
								src={preview.src}
								alt={`Preview ${index + 1}`}
								className="image-preview"
							/>
							<button
								type="button"
								className="remove-button"
								onClick={() => handleRemoveImage(index)}
							>
								&times;
							</button>
						</div>
					))}
					<label htmlFor="event-description">
						Event Description
						<textarea
							id="event-description"
							value={eventDescription}
							onChange={(e) => setEventDescription(e.target.value)}
						></textarea>
					</label>
					<button onClick={handleSave}>{buttonText}</button>
					{warningMessage && <p style={{ color: "red" }}>{warningMessage}</p>}
				</div>
				<div className="right-half">
					<h2>Create a New Event</h2>
					<label htmlFor="event-name">
						Event Name
						<input
							id="event-name"
							type="text"
							value={eventName}
							onChange={(e) => setEventName(e.target.value)}
							required
						/>
					</label>
					<div className="modal-date-inputs">
						<label htmlFor="event-start-date">
							Event Start Date
							<input
								id="event-start-date"
								type="date"
								value={eventStartDate}
								min={today}
								onChange={(e) => setEventStartDate(e.target.value)}
								required
							/>
						</label>
						<label htmlFor="event-end-date">
							Event End Date
							<input
								id="event-end-date"
								type="date"
								value={eventEndDate}
								min={eventStartDate || today}
								disabled={isEndDateDisabled}
								onChange={(e) => setEventEndDate(e.target.value)}
								required
							/>
						</label>
					</div>
					<label htmlFor="event-time">
						Event Time
						<input
							id="event-time"
							type="time"
							value={eventTime}
							onChange={(e) => setEventTime(e.target.value)}
						/>
					</label>
					<label htmlFor="event-fee">
						Event Fee
						<Slider
							id="event-fee"
							values={eventFeeValues}
							value={eventFee}
							onChange={setEventFee}
							required
						/>
					</label>
					<label htmlFor="event-category">
						Category
						<select
							id="event-category"
							value={selectedCategory}
							onChange={(e) => handleCategoryChange(e.target.value)}
							required
						>
							<option value="">Select Category</option>
							{Object.keys(categoryData).map((category) => (
								<option key={category} value={category}>
									{category}
								</option>
							))}
						</select>
					</label>
					{selectedCategory && (
						<label htmlFor="event-subcategory">
							Subcategory
							<select
								id="event-subcategory"
								value={selectedSubcategory}
								onChange={(e) => setSelectedSubcategory(e.target.value)}
							>
								<option value="">Select Subcategory</option>
								{subcategories.map((subcategory) => (
									<option key={subcategory} value={subcategory}>
										{subcategory}
									</option>
								))}
							</select>
						</label>
					)}

					<label htmlFor="event-place-type">
						Event Place Type
						<select
							id="event-place-type"
							value={eventPlaceType}
							onChange={(e) => handlePlaceTypeChange(e.target.value)}
							required
						>
							<option value="" disabled>
								Select a Place Type
							</option>
							{placeTypes.map((type) => (
								<option key={type} value={type}>
									{type}
								</option>
							))}
						</select>
					</label>
					<label htmlFor="event-location">
						Event Location
						<input id="event-location" type="text" value={eventLocation} readOnly />
					</label>
					<label htmlFor="event-planned-participants">
						Planned Participants
						<Slider
							id="event-planned-participants"
							values={participantValues}
							value={plannedParticipants}
							onChange={setPlannedParticipants}
							required
						/>
					</label>
				</div>
			</div>
		</div>
	);
};

export default AddEventModal;
