import React from 'react';
import '../components/design-files-css/FilterComponent.css';

const FilterComponent = () => {
  return (
      <div className="filters-section">
        <form>
          <div>
            <input type="text" placeholder="Date range" />
          </div>
          <div>
            <input type="text" placeholder="Fee range" />
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