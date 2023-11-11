import React, { useState } from 'react';
import '../components/design-files-css/FilterComponent.css';
import DoubleSlider from './ui/DoubleSlider';
import DropdownSelector from './DropdownSelector';
import DropdownFilter from './DropdownFilter';
import AdditionalFilters from './AdditionalFilters';
import TodayFilterComponent from './TodayFilterComponent';

const countriesAndCities = {
  Poland: ['Warsaw', 'Krakow', 'Wroclaw'],
  USA: ['New York', 'Los Angeles', 'Chicago'],
};

const eventCategories = [
  'Music',
  'Sports',
  'Theater',
  'Workshops',
  'Conferences',
  'Exhibitions',
];

let filters = ['Filter', 'Filter2', 'Filter3', 'Filter4', 'Filter5', 'Filter6'];

const FilterComponent = () => {
  const [dateRange, setDateRange] = useState({
    startDate: '',
    endDate: '',
  });

  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [newFilters, setNewFilters] = useState([]);

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

  const handleFilterToday = (event) => {
    if(event.target.checked) {
      const today = new Date();
      const formattedToday = today.toISOString().split('T')[0];
      setDateRange({
        startDate: formattedToday,
        endDate: formattedToday
      });
    } else {
      setDateRange({
        startDate: '',
        endDate: ''
      });
    }
  };

  const handleDateChange = (event) => {
    const { name, value } = event.target;
    setDateRange(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleNewFilter = (event) => {
    setNewFilters((filters) => [...filters, event]);
    filters = filters.filter((filter) => filter !== event);
  };

  function getRangesFromSliders(values) {
    return {
      minFee: values[0],
      maxFee: values[1],
    };
  }

  const handleAdditionalFilterChange = (filterData) => {
    // Handle the additional filter data here
  };

  return (
    <form>
        <div className="filters-section">
        <div className='today-filter-section'>
            <TodayFilterComponent onFilterToday={handleFilterToday} />
            </div>
        <div className="filter-date">
          <label className="date-label">Date From</label>
          <input
            type="date"
            name="startDate"
            value={dateRange.startDate}
            onChange={handleDateChange}
            max={maxDateForStartDate} // Set the max attribute
          />
          <label className="date-label">Date To</label>
          <input
            type="date"
            name="endDate"
            value={dateRange.endDate}
            onChange={handleDateChange}
            min={minDateForEndDate} // Set the min attribute
          />
        </div>
 
        <div className="slider">
          <div>
            <label className="slider-label">Fee Range</label>
          </div>
          <DoubleSlider
            getRangesFromSliders={getRangesFromSliders}
          ></DoubleSlider>
        </div>
        <div className="slider">
          <div>
            <label className="slider-label">Attendee Planned</label>
          </div>
          <DoubleSlider
            getRangesFromSliders={getRangesFromSliders}
          ></DoubleSlider>
        </div>
        <div className="util-flex-container ">
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
        </div>
        <div className="util-flex-container">
          <DropdownSelector
            items={eventCategories}
            placeholder="Select Event Category"
            onSelect={setSelectedCategory}
          />
          <DropdownSelector
            // TODO Change this array
            items={eventCategories}
            placeholder="Select Sub-Event Category"
            onSelect={setSelectedCategory}
          />
        </div>
        <div>
          {newFilters && (
            <AdditionalFilters
              onFilterChange={handleAdditionalFilterChange}
              allFilters={newFilters}
            />
          )}
          <DropdownFilter
            items={filters}
            placeholder="Add more filters if needed"
            onSelect={handleNewFilter}
          />
        </div>
        <div className="util-flex-container">
                <button className="filter-btn filter-btn--mode">Apply filters</button>
                <button className="filter-btn filter-btn--mode">Reset filters</button>
        </div>
        </div>
    </form>
  );
};

export default FilterComponent;
