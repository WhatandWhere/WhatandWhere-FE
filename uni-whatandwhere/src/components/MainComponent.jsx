import React from 'react';
import MapComponent from '../components/MapComponent.jsx';

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
          <MapComponent />
        </div>
  
        {/* Filters Section */}
        <div className="filters-section">
          {/* Your filters content goes here */}
        </div>
  
        {/* List Section */}
        <div className="list-section">
          {/* Your list content goes here */}
        </div>
      </div>
    );
  };
  
  export default MainComponent;
  