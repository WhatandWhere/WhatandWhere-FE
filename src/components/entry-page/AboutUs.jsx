import React from "react";
import "../design-files-css/entry-page/AboutUs.css";
import "../design-files-css/entry-page/Button.css";
import Button from "./Button";

export default function AboutUs() {
	return (
		<section className="g-wrapper">
			<div className="g-container">
				<div className="inner-container">
					<span className="primaryText">About us</span>
					<span className="secondaryText">
						WhatAndWhere is more than event discovery; it's a platform for finding and
						creating unique experiences in Poland. Explore diverse events or publish
						your own, shaping the future of experiences. Join us, where you're not just
						an attendee but an architect of unforgettable moments on WhatAndWhere,
						turning every event into an extraordinary adventure.
					</span>
				</div>
				<div className="btns">
					<Button buttonStyle="primary-large">Login</Button>
					<Button buttonStyle="primary-large">Sign up</Button>
				</div>
			</div>
		</section>
	);
}
