import React from "react";
import StarRating from "./StarRating";
import "../design-files-css/event-info-page/Comment.css";

function Comment({ username, text, rating }) {
	return (
		<div className="comment">
			<div className="username">
				<h2>{username}</h2>
			</div>
			<div className="comment-text">
				<h1>{text}</h1>
			</div>
			<StarRating rating={rating} />
		</div>
	);
}

export default Comment;
