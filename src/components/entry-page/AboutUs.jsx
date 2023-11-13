import React from "react";
import "../design-files-css/entry-page/AboutUs.css";
import "../design-files-css/entry-page/Button.css";

export default function AboutUs() {
	return (
		<section className="g-wrapper">
			<div className="g-container">
				<div className="inner-container">
					<span className="primaryText">About us</span>
					<span className="secondaryText">
						WhatAndWhere is a website for finding and participating in events in{" "}
						<strong>Poland</strong>. On our site, you can find and take part in{" "}
						<strong>various events</strong> throughout the country. Find your next
						unique experience on <strong>WhatAndWhere</strong>!
					</span>
				</div>
				<div className="btns">
					<a href="/login" className="primary-large">
						Login
					</a>
					<a href="/signup" className="primary-large">
						Sign up
					</a>
				</div>
			</div>
		</section>
	);
}
