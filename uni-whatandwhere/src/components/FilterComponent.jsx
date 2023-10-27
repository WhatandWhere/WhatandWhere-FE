import React, { useState } from 'react';
import '../components/design-files-css/FilterComponent.css';
import DoubleSlider from './ui/DoubleSlider';
import DropdownSelector from './DropdownSelector';
import AdditionalFilters from './AdditionalFilters';

const countriesAndCities = {
  Poland: ['Warsaw', 'Krakow', 'Wroclaw'],
  USA: ['New York', 'Los Angeles', 'Chicago'],
};

const eventCategories = ['Music', 'Sports', 'Theater', 'Workshops', 'Conferences', 'Exhibitions'];


const FilterComponent = () => {
  const [dateRange, setDateRange] = useState({
    startDate: '',
    endDate: '',
  });

  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showAdditionalFilters, setShowAdditionalFilters] = useState(false);


  const handleDateChange = (event) => {
    const { name, value } = event.target;
    setDateRange({
      ...dateRange,
      [name]: value,
    });
  };

  function getRangesFromSliders(values) {
    return {
      minFee: values[0],
      maxFee: values[1],
    };
  }


  const handleAdditionalFilterChange = (filterData) => {
      // Handle the additional filter data here
      // You can set it to a state or directly use it to filter events
  };
    return (
      <div className="filters-section">
        <form>
          <div className="filter-date">
            <label className="date-label">Date From</label> {/* Added label for Date From */}
            <input
              type="date"
              name="startDate"
              value={dateRange.startDate}
              onChange={handleDateChange}
            />
            <label className="date-label">Date To</label> {/* Date To */}
            <input
              type="date"
              name="endDate"
              value={dateRange.endDate}
              onChange={handleDateChange}
            />
          </div>
          <div className='slider'><div>
  <label className="slider-label">Fee Range</label></div>
  <DoubleSlider getRangesFromSliders={getRangesFromSliders}></DoubleSlider>
</div>
<div className='slider'><div>
  <label className="slider-label">Attendee Planned</label></div>
  <DoubleSlider getRangesFromSliders={getRangesFromSliders}></DoubleSlider>
</div>

      <DropdownSelector 
        items={Object.keys(countriesAndCities)} 
        placeholder="Select Country"
        onSelect={setSelectedCountry}
      />
      <DropdownSelector 
        items={countriesAndCities[selectedCountry] || []} 
        placeholder="Select City"
        onSelect={setSelectedCity}
      />
      <div>
          <DropdownSelector 
            items={eventCategories}
            placeholder="Select Event Category"
            onSelect={setSelectedCategory}
          />
        </div>
      <div>
      {showAdditionalFilters && (
            <AdditionalFilters onFilterChange={handleAdditionalFilterChange} />
        )}

        <button className="filter-btn add-filters-btn" onClick={() => setShowAdditionalFilters(!showAdditionalFilters)}>
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