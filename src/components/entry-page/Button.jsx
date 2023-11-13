import React from "react";
import "../design-files-css/entry-page/Button.css";

export function Button({ children, buttonStyle, onClick }) {
	return (
		<button onClick={onClick} type="button" className={buttonStyle}>
			{children}
		</button>
	);
}
