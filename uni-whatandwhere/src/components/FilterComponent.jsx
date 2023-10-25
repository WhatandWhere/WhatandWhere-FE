import React, { useState } from 'react';
import '../components/design-files-css/FilterComponent.css';

const FilterComponent = () => {
  const [feeRange, setFeeRange] = useState(100);
  const [dateRange, setDateRange] = useState({
    startDate: '',
    endDate: '',
  });

  const handleDateChange = (event) => {
    const { name, value } = event.target;
    setDateRange({
      ...dateRange,
      [name]: value,
    });
  };
  function handleFeeChange(event) {
    setFeeRange(event.target.value);
  }
  return (
    <div className="filters-section">
    <form>
      <div className="filter-date">
        <input
          type="date"
          name="startDate"
          value={dateRange.startDate}
          onChange={handleDateChange}
        />
        <input
          type="date"
          name="endDate"
          value={dateRange.endDate}
          onChange={handleDateChange}
        />
      </div>
      <div>
        <input
          type="range"
          min="0"
          max="1000"
          value={feeRange}
          onChange={handleFeeChange}
        />
        <div className="fee-range">
          <span>Fee range: ${feeRange}</span>
        </div>
      </div>
      <div>
        <input type="text" placeholder="Attendee planned" />
      </div>
      <div>
        <input type="text" placeholder="Location range/territory" />
      </div>
      <div>
        <input type="text" placeholder="Event category" />
      </div>
      <div>
        <button className="filter-btn add-filters-btn">
          Add more filters if needed
        </button>
      </div>
      <div className="util-flex-container">
        <button className="filter-btn filter-btn--mode" type="submit">
          Apply filters
        </button>
        <button className="filter-btn filter-btn--mode">
          Reset filters
        </button>
      </div>
    </form>
  </div>
  );
};

export default FilterComponent;