import React, { useState } from 'react';
import '../components/design-files-css/FilterComponent.css';
import DoubleSlider from './ui/DoubleSlider';

const FilterComponent = () => {
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
   // method to get min and max fee from Double Slider MUI component
   function getRangesFromSliders(values) {
    return {
      minFee: values[0],
      maxFee: values[1],
    };
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
      <div className='slider'>
        <DoubleSlider getRangesFromSliders={getRangesFromSliders}></DoubleSlider>
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