import React from 'react';
import EventListMainPage from "./EventListMainPage";

const MainComponent = () => {
    return (
      <div>
        {/* Top Bar Section */}
        <div className="top-bar">
          {/* Your top bar content goes here */}
        </div>
  
        {/* Map Section */}
        <div className="map-section">
          {/* Your map content goes here */}
        </div>
  
        {/* Filters Section */}
        <div className="filters-section">
          {/* Your filters content goes here */}
        </div>
  
        {/* List Section */}
        <div className="list-section">
          <EventListMainPage />
        </div>
      </div>
    );
  };
  
  export default MainComponent;
  