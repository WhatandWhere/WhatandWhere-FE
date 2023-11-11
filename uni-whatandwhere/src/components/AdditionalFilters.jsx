import React from 'react';
import DropdownSelector from './DropdownSelector';

const AdditionalFilters = ({ onFilterChange, allFilters }) => {
  // Assuming `allFilters` is an array of objects with `name` and `options` properties
  return (
    <div className="additional-filters">
      {allFilters.map((filter) => (
        <DropdownSelector
          key={filter.name}
          placeholder={filter.name}
          items={filter.options}
          onSelect={(value) => onFilterChange(filter.name, value)}
        />
      ))}
    </div>
  );
};

export default AdditionalFilters;