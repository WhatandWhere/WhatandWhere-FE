import React, { useState } from "react";
import EventListMainPage from "./EventListMainPage";
import MapComponent from "./MapComponent";
import AddEventModal from "./AddEventModal";
import NavBar from "./entry-page/Navbar";
import FiltersForm from "./FiltersForm/FiltersForm";
import "./design-files-css/MainPageNew.css";

function MainComponent() {
	const [isEditMode, setIsEditMode] = useState(false);
	const [newEventLocation, setNewEventLocation] = useState(null);
	const [eventMarkers, setEventMarkers] = useState([]);
	const [buttonClicked, setButtonClicked] = useState(false);

	const toggleEditMode = () => {
		setIsEditMode(!isEditMode);
		setButtonClicked(true);
	};

	const handleMapClick = (e) => {
		if (isEditMode) {
			setNewEventLocation(e.latlng);
		}
	};

	const handleCreateEvent = (newEvent) => {
		if (newEventLocation) {
			// Create a new event marker using the location and event details
			const eventMarker = {
				location: newEventLocation,
				name: newEvent.name,
				date: newEvent.date,
				description: newEvent.description,
			};

			// Add the event marker to the state or send it to a database
			setEventMarkers([...eventMarkers, eventMarker]);

			// Close the modal
			setNewEventLocation(null);
		}
	};

	// return (
	// 	<div className="main-page-all">
	// 		<div className="top-bar">
	// 			<NavBar />
	// 		</div>

	// 		<div className="filter-section">
	// 			<FiltersForm />
	// 		</div>

	// 		<div className="map-section">
	// 			<MapComponent onMapClick={handleMapClick} newEventLocation={newEventLocation} />
	// 		</div>
	// 		<button
	// 			type="button"
	// 			onClick={toggleEditMode}
	// 			className={
	// 				// eslint-disable-next-line no-nested-ternary
	// 				buttonClicked
	// 					? isEditMode
	// 						? "add-edit-event-button-clicked"
	// 						: "add-edit-event-button"
	// 					: "add-edit-event-button"
	// 			}
	// 		>
	// 			{isEditMode ? "Disable Edit Mode" : "Enable Edit Mode"}
	// 		</button>

	// 		<div className="list-section">
	// 			<EventListMainPage />
	// 		</div>

	// 		{isEditMode && newEventLocation && (
	// 			<AddEventModal
	// 				isOpen
	// 				onClose={() => setNewEventLocation(null)}
	// 				onSave={handleCreateEvent}
	// 				location={newEventLocation}
	// 			/>
	// 		)}
	// 	</div>
	// );

	return (
		<div className="main-page-container">
			<NavBar />
			<div className="filters-map-section">
				<div className="filters-section">
					<FiltersForm />
				</div>
				<div className="map-component">
					<MapComponent onMapClick={handleMapClick} newEventLocation={newEventLocation} />
				</div>
			</div>

			<button
				type="button"
				onClick={toggleEditMode}
				className={
					// eslint-disable-next-line no-nested-ternary
					buttonClicked
						? isEditMode
							? "add-edit-event-button-clicked"
							: "add-edit-event-button"
						: "add-edit-event-button"
				}
			>
				{isEditMode ? "Disable Edit Mode" : "Enable Edit Mode"}
			</button>

			<div className="list-section">
				<EventListMainPage />
			</div>

			{isEditMode && newEventLocation && (
				<AddEventModal
					isOpen
					onClose={() => setNewEventLocation(null)}
					onSave={handleCreateEvent}
					location={newEventLocation}
				/>
			)}
		</div>
	);
}

export default MainComponent;
