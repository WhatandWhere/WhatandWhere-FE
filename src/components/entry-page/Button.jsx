import React from "react";
import { Link } from "react-router-dom";
import "../design-files-css/entry-page/Button.css";

export function Button({ children, buttonStyle }) {
	return (
		<Link to="/">
			<button type="button" className={buttonStyle}>
				{children}
			</button>
		</Link>
	);
}
