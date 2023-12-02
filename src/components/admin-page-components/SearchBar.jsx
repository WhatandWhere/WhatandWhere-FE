import React from "react";
import { Container, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { createTheme } from "@mui/material/styles";
import "../design-files-css/admin-page-css/SearchBar.css";

export default function SearchBar({ value, onChange }) {
	const handleChange = (event) => {
		onChange(event.target.value);
	};

	return (
		<Container maxWidth="md" className="search-bar-container">
			<TextField
				id="search"
				type="warning"
				color="error"
				label="Search"
				value={value}
				onChange={handleChange}
				className="search-bar"
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<SearchIcon className="search-bar-icon" />
						</InputAdornment>
					),
					className: "search-bar-input",
				}}
				variant="filled"
			/>
		</Container>
	);
}
