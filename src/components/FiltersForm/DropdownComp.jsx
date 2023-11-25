import { React, useState } from "react";
import Select from "react-select";

import "../design-files-css/FiltersForm/DropdownComp.css";

const options = [
	{ value: "Sport", label: "Sport" },
	{ value: "Music", label: "Music" },
	{ value: "Party", label: "Party" },
	{ value: "Programming", label: "Programming" },
	{ value: "Books", label: "Books" },
	{ value: "Camping", label: "Camping" },
];

export default function DropdownComp({ handelChange }) {
	const [selectedOptions, setSelectedOptions] = useState([]);

	const handleChange = (selectedOption) => {
		setSelectedOptions(selectedOption);
		console.log("Option selected:", selectedOption);
		handelChange(selectedOption);
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
