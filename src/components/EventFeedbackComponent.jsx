import React, { useState } from "react";
import "./design-files-css/EventFeedbackComponent.css";

const EventFeedbackComponent = ({ onFeedbackSubmit, onCancel }) => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleStarClick = (value) => {
    setRating(value);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = () => {
    // Add logic to submit the feedback (rating and comment)
    console.log("Rating:", rating);
    console.log("Feedback:", feedback);

    // Pass the feedback data to the parent component
    onFeedbackSubmit({ rating, feedback });

    // You can implement the actual submission logic here
  };

  const handleCancel = () => {
    // Add logic to handle cancellation
    // This can include resetting the state or closing the feedback form
    // For now, it's just a placeholder function
    console.log("Feedback submission canceled");
    onCancel();
  };

  return (
    <div className="event-feedback-container">
      <h3>Event Feedback</h3>
      <div className="rating-container">
        <label>Rating:</label>
        <div className="star-container">
          {[1, 2, 3, 4, 5].map((value) => (
            <span
              key={value}
              className={`star ${value <= rating ? "checked" : ""}`}
              onClick={() => handleStarClick(value)}
            >
              &#9733;
            </span>
          ))}
        </div>
      </div>
      <textarea
        placeholder="Add your feedback..."
        value={feedback}
        onChange={handleFeedbackChange}
      />
      <div className="button-container">
        <button type="button" className="submit-button" onClick={handleSubmit}>
          Submit Feedback
        </button>
        <button type="button" className="cancel-button" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EventFeedbackComponent;
