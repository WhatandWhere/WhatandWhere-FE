import React from "react";
import "../design-files-css/FiltersForm/DropdownComp.css";
import Select from "react-select";
import { useState } from "react";

const options = [
  { value: "sport", label: "Sport" },
  { value: "music", label: "Music" },
  { value: "party", label: "Party" },
  { value: "programming", label: "Programming" },
  { value: "books", label: "Books" },
  { value: "camping", label: "Camping" },
];

export default function DropdownComp() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (selectedOption) => {
    setSelectedOptions(selectedOption);
  };

  return (
    <div className="category-container">
      <h3>Category</h3>
      <Select
        options={options}
        value={selectedOptions}
        onChange={handleChange}
        isMulti={true}
        isOptionDisabled={(option) => selectedOptions.length >= 3}
      />
    </div>
  );
}
