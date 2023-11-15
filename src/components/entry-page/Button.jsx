import React from "react";
import { Link } from "react-router-dom";
import "../../components/design-files-css/entry-page/Button.css";

export const Button = ({ children, buttonStyle, buttonLink }) => {
  return (
    <Link to={buttonLink ? buttonLink : ""}>
      <button className={buttonStyle}>{children}</button>
    </Link>
  );
};
