import React from "react";

function StarRating({ rating }) {
	const stars = [];
	for (let i = 1; i <= 5; i += 1) {
		if (i <= rating) {
			stars.push(
				<span key={i} className="star filled">
					★
				</span>
			);
		} else {
			stars.push(
				<span key={i} className="star">
					☆
				</span>
			);
		}
	}

	return <div className="star-rating">{stars}</div>;
}

export default StarRating;
