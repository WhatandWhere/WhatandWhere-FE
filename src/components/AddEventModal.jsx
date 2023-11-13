import React, { useState, useEffect } from 'react';
import '../components/design-files-css/AddEventModal.css';

const AddEventModal = ({ isOpen, onClose, onSave, location }) => {
  const [eventName, setEventName] = useState('');
  const [eventStartDate, setEventStartDate] = useState('');
  const [eventEndDate, setEventEndDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [eventFee, setEventFee] = useState(1); // Default value for event fee
  const [eventCategory, setEventCategory] = useState('');
  const [eventSubcategory, setEventSubcategory] = useState('');
  const [eventPlaceType, setEventPlaceType] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [plannedParticipants, setPlannedParticipants] = useState(1); // Default value for planned participants
  const [eventDescription, setEventDescription] = useState('');
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
    const updatedImages = [...eventImages.filter((_, i) => !removedImages.includes(i)), ...newImages];
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

  const handleSave = () => {
    onSave({
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
    });

    onClose();
  };

  return (
    <div
      className={`modal ${isOpen ? 'open' : ''}`}
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
          <label>
            Event Image (Max 3 images, 2MB each):
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              multiple // Allow multiple file selection
            />
          </label>
          {imagePreviews.map((preview, index) => (
            <div key={index} className="image-preview-container">
              <img src={preview.src} alt={`Preview ${index + 1}`} className="image-preview" />
              <button
                type="button"
                className="remove-button"
                onClick={() => handleRemoveImage(index)}
              >
                &times;
              </button>
            </div>
          ))}
          <label>
            Event Description:
            <textarea
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
            ></textarea>
          </label>
          <button onClick={handleSave}>Save Event</button>
        </div>
        <div className="right-half">
          <h2>Create a New Event</h2>
          <label>
            Event Name:
            <input type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} />
          </label>
          <label>
            Event Start Date:
            <input
              type="date"
              value={eventStartDate}
              onChange={(e) => setEventStartDate(e.target.value)}
            />
          </label>
          <label>
            Event End Date:
            <input
              type="date"
              value={eventEndDate}
              onChange={(e) => setEventEndDate(e.target.value)}
            />
          </label>
          <label>
            Event Time:
            <input type="time" value={eventTime} onChange={(e) => setEventTime(e.target.value)} />
          </label>
          <label>
            Event Fee:
            <select value={eventFee} onChange={(e) => setEventFee(parseInt(e.target.value))}>
              <option value={1}>Level 1</option>
              <option value={2}>Level 2</option>
              <option value={3}>Level 3</option>
              <option value={4}>Level 4</option>
              <option value={5}>Level 5</option>
            </select>
          </label>
          <label>
            Event Category:
            <select value={eventCategory} onChange={(e) => setEventCategory(e.target.value)}>
              {/* Add category options based on your requirements */}
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
              {/* ... (add more options) */}
            </select>
          </label>
          <label>
            Event Subcategory:
            <select value={eventSubcategory} onChange={(e) => setEventSubcategory(e.target.value)}>
              {/* Add subcategory options based on your requirements */}
              <option value="subcategory1">Subcategory 1</option>
              <option value="subcategory2">Subcategory 2</option>
              {/* ... (add more options) */}
            </select>
          </label>
          <label>
            Event Place Type:
            <select value={eventPlaceType} onChange={(e) => setEventPlaceType(e.target.value)}>
              {/* Add place type options based on your requirements */}
              <option value="placeType1">Place Type 1</option>
              <option value="placeType2">Place Type 2</option>
              {/* ... (add more options) */}
            </select>
          </label>
          <label>
            Event Location:
            <input type="text" value={eventLocation} readOnly />
          </label>
          <label>
            Planned Participants (1-5):
            <input
              type="range"
              min="1"
              max="5"
              value={plannedParticipants}
              onChange={(e) => setPlannedParticipants(parseInt(e.target.value))}
            />
            {plannedParticipants}
          </label>
        </div>
      </div>
    </div>
  );
};

export default AddEventModal;
