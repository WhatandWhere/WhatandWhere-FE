import { React, useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import { backendLink } from "../../action/authActions";
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
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		axios.get(`${backendLink}/api/category`, {}).then((categories) => {
			console.log(categories.data);
			const categoryList = categories.data.map((category) => ({
				value: category.categoryName,
				label: category.categoryName,
			}));
			setCategories(categoryList);
		});
	}, []);

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
				options={categories}
				value={selectedOptions}
				onChange={handleChange}
				isMulti={multi}
				isOptionDisabled={(option) => selectedOptions.length >= 3}
			/>
		</div>
	);
}
