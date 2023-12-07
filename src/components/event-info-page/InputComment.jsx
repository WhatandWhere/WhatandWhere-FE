import { React, useState } from "react";
import "../design-files-css/event-info-page/InputComment.css";

function InputComment() {
	const [comment, setComment] = useState("");

	const onChangeHandler = (e) => {
		setComment(e.target.value);
	};

	return (
		<div className="input-container">
			<div className="comment-flexbox">
				<h3 className="comment-text">Comment</h3>
				<textarea className="input-box" />
				<button className="comment-button" type="submit">
					Submit
				</button>
			</div>
		</div>
	);
}

export default InputComment;
