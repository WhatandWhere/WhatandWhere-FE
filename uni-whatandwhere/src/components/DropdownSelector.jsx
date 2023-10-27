import React, { useState } from 'react';

const DropdownSelector = ({ items, placeholder, onSelect }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  const handleButtonClick = (event) => {
    event.preventDefault();
    setShowDropdown(!showDropdown);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowDropdown(false);
    onSelect(item);
  };

  return (
    <div className="dropdown-selector">
      <button 
        className="dropdown-button" 
        onClick={handleButtonClick}
      >
        {selectedItem || placeholder}
      </button>

      {showDropdown && (
        <div className="dropdown-list">
          {items.map(item => (
            <div 
              key={item} 
              className="dropdown-item"
              onClick={() => handleItemClick(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownSelector;
