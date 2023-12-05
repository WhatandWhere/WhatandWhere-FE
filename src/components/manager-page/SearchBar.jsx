import React from "react";
import { Container, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "../design-files-css/manager-page/SearchBar.css";

export default function SearchBar({ value, onChange }) {
	const handleChange = (event) => {
		onChange(event.target.value);
	};

	return (
		<Container maxWidth="md" className="manager-search-bar-container">
			<TextField
				id="manager-search"
				type="search"
				color="primary"
				label="Search Events"
				value={value}
				onChange={handleChange}
				className="manager-search-bar"
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<SearchIcon className="manager-search-bar-icon" />
						</InputAdornment>
					),
					className: "manager-search-bar-input",
				}}
				variant="outlined"
			/>
		</Container>
	);
}
