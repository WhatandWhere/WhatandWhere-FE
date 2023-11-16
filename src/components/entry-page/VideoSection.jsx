import React from "react";
import { Link } from "react-scroll";
import "../design-files-css/entry-page/VideoSection.css";
import backgroundVideo from "../../imgs/background-video.mp4";

export default function HeroSection() {
	return (
		<div className="video-container">
			<video src={backgroundVideo} autoPlay loop muted />
			<h1>The best events in Poland</h1>
			<p>What are you waiting for?</p>
			<div className="video-btns">
				<Link
					to="g-container"
					spy
					smooth
					offset={50}
					duration={500}
					className="btn-get-started"
				>
					Get started
				</Link>
			</div>
		</div>
	);
}
