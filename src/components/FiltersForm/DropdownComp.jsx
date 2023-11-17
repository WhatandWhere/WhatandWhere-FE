import { React, useState } from "react";
import Select from "react-select";

import "../design-files-css/FiltersForm/DropdownComp.css";

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

	const multi = true;

	return (
		<div className="category-container">
			<h3>Category</h3>
			<Select
				options={options}
				value={selectedOptions}
				onChange={handleChange}
				isMulti={multi}
				isOptionDisabled={(option) => selectedOptions.length >= 3}
			/>
		</div>
	);
}
