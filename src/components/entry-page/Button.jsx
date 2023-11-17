import React from "react";
import { Link } from "react-router-dom";
import "../design-files-css/entry-page/Button.css";

export default function Button({ children, buttonStyle, buttonLink }) {
	return (
		<Link to={buttonLink}>
			<button className={buttonStyle} type="button">
				{children}
			</button>
		</Link>
	);
}
