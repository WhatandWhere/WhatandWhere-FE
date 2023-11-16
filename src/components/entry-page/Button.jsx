import React from "react";
import "../design-files-css/entry-page/Button.css";

const Button = ({ children, buttonStyle, onClick }) => (
	<button onClick={onClick} type="button" className={buttonStyle}>
		{children}
	</button>
);

export default Button;
