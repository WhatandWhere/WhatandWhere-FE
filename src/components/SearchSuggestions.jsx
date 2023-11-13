import React from "react";
import "./design-files-css/SearchSuggestions.css";

function SearchSuggestions({ suggestions, onSuggestionClick }) {
	return (
		<ul className="search-suggestions">
			{suggestions.map((suggestion, index) => (
				<li key={index} onClick={() => onSuggestionClick(suggestion)}>
					{suggestion}
				</li>
			))}
		</ul>
	);
}

export default SearchSuggestions;
