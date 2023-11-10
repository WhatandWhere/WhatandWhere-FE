import React, { useState } from 'react';
import ImageUpload from './ImageUpload'; // Assuming this is already created
import FormButton from './ui/FormButton'; // Importing your FormButton component
import '../components/design-files-css/EventAddPage.css'; // Assuming this contains your page styles
import DropdownSelector from './DropdownSelector';
const EventAddPage = () => {
  // State for the event details
  const [eventDetails, setEventDetails] = useState({
    name: '',
    description: '',
    date: '',
    time: '',
    fee: '',
    category: '',
    placeType: '',
    location: '',
    participants: '',
    images: [], // Changed to an array to hold multiple images
  });
  // State related to dates
  const [dateRange, setDateRange] = useState({
    startDate: '',
    endDate: '',
  });
  const [timeRange, setTimeRange] = useState({
    startTime: '',
    endTime: '',
  });
  let minDateForEndDate = '';
  let maxDateForStartDate = '';

  if (dateRange.startDate) {
    const nextDayFromDate = new Date(dateRange.startDate);
    nextDayFromDate.setDate(nextDayFromDate.getDate() + 1);
    minDateForEndDate = nextDayFromDate.toISOString().split('T')[0];
  }

  if (dateRange.endDate) {
    const previousDayToDate = new Date(dateRange.endDate);
    previousDayToDate.setDate(previousDayToDate.getDate() - 1);
    maxDateForStartDate = previousDayToDate.toISOString().split('T')[0];
  }
  const eventCategories = [
    'Music',
    'Sports',
    'Theater',
    'Workshops',
    'Conferences',
    'Exhibitions',
  ];


  // State related to country and city selection
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  // Handlers


  const handleCountryChange = (selectedCountry) => {
    setSelectedCountry(selectedCountry);
    setSelectedCity(''); // Reset city selection when country changes
  };

  const handleCityChange = (selectedCity) => {
    setSelectedCity(selectedCity);
  };

  // Handlers for setting event details
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };
  // Define the countries and cities object
  const countriesAndCities = {
    Poland: ['Warsaw', 'Krakow', 'Wroclaw'],
    USA: ['New York', 'Los Angeles', 'Chicago'],
    // Add more countries and cities as needed
  };

  // Handler for setting images
  const handleImageChange = (newImages) => {
    setEventDetails((prevDetails) => ({
      ...prevDetails,
      images: newImages,
    }));
  };
  const handleDateChange = (event) => {
    const { name, value } = event.target;
    setDateRange(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle event creation goes here
    console.log('Event created:', eventDetails);
  };

  return (
    <form className="event-add-page" onSubmit={handleSubmit}>
      <div className="left-panel">
        <ImageUpload
          images={eventDetails.images}
          onImagesChange={handleImageChange}
        />
        <textarea
          name="description"
          placeholder="Describe the event..."
          value={eventDetails.description}
          onChange={handleInputChange}
          className="event-description"
        />
        <div className='Create-Event-btn'>
          <FormButton>Create Event</FormButton>
        </div>
      </div>
      <div className="right-panel">
        <input
          type="text"
          name="name"
          placeholder="Event Name"
          value={eventDetails.name}
          onChange={handleInputChange}
          className="event-input"
        />




        <input
          type="text"
          name="fee"
          placeholder="Fee"
          value={eventDetails.fee}
          onChange={handleInputChange}
          className="event-input"
        />
        <DropdownSelector
          items={eventCategories}
          placeholder="Select Event Category"
          onSelect={setSelectedCategory}
        />
        <input
          type="text"
          name="placeType"
          placeholder="Place Type"
          value={eventDetails.placeType}
          onChange={handleInputChange}
          className="event-input"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={eventDetails.location}
          onChange={handleInputChange}
          className="event-input"
        />
        <input
          type="number"
          name="participants"
          placeholder="Max Participants"
          value={eventDetails.participants}
          onChange={handleInputChange}
          className="event-input"
        />
        <DropdownSelector
          items={Object.keys(countriesAndCities)}
          placeholder="Country"
          onSelect={handleCountryChange}
        />
        <DropdownSelector
          items={selectedCountry ? countriesAndCities[selectedCountry] : []}
          placeholder="City"
          onSelect={handleCityChange}
        />

        <div className="time-input-wrapper"> {/* You might need to add this wrapper */}
          <input
            type="time"
            name="startTime"
            value={timeRange.startTime}
            onChange={(e) => setTimeRange({ ...timeRange, startTime: e.target.value })}
            className="event-input"
            max={timeRange.endTime || ''} // Add this line to ensure start time is not after end time
          />
          <input
            type="time"
            name="endTime"
            value={timeRange.endTime}
            onChange={(e) => setTimeRange({ ...timeRange, endTime: e.target.value })}
            className="event-input"
            min={timeRange.startTime || ''} // Add this line to ensure end time is not before start time
          />
        </div>
        <div className="date-input-wrapper">
          <input
            type="date"
            className="event-input"
            name="startDate"
            value={dateRange.startDate}
            onChange={handleDateChange}
            placeholder="Start Date"
            max={dateRange.endDate ? maxDateForStartDate : undefined} // Add this line
          />
          <input
            type="date"
            className="event-input"
            name="endDate"
            value={dateRange.endDate}
            onChange={handleDateChange}
            placeholder="End Date"
            min={dateRange.startDate ? minDateForEndDate : undefined} // And this line
          />
        </div>
      </div>
    </form>
  );
};

export default EventAddPage;



