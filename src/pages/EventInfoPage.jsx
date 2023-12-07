import { useState, useEffect, React } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { backendLink } from "../action/authActions";
import Spinner from "../components/Spinner";
import NavBar from "../components/entry-page/Navbar";
import "../components/design-files-css/event-info-page.css";
import Comment from "../components/event-info-page/Comment";
import InputComment from "../components/event-info-page/InputComment";

const commentData = [
	{ username: "Anton", text: "I want to see Atahan on this event", rating: 5 },
	{ username: "Max", text: "I want to add css to this page. It would be great!", rating: 5 },
	{ username: "Andrii", text: "What the fuck is going on???", rating: 2 },
	{ username: "Dima", text: "The worst event in the world", rating: 1 },
];

function EventInfoPage() {
	const { eventId } = useParams();
	const [event, setEvent] = useState({});
	const [attending, setAttending] = useState(false);
	const [favourite, setFavourite] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		axios
			.request(`${backendLink}/api/events/getEvent/${eventId}`, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
				},
			})
			.then((res) => {
				console.log(res.data);
				setEvent(res.data);
				setIsLoading(false);
			})
			.catch((error) => {
				console.error("Error fetching event data", error);
				setIsLoading(false);
			});
	}, [eventId]);

	if (isLoading) {
		return <Spinner />;
	}

	function handleAttendingEvent() {
		setAttending(!attending);
	}

	function handleFavouriteEvent() {
		setFavourite(!favourite);
	}

	return (
		<div className="event-page-container">
			<NavBar />
			<div className="event-info-container">
				<h1>{event.eventName}</h1>
				<img src={event.eventImages[0].url} alt="xyi" />
				<h2>{event.eventDescription}</h2>
				<h2>{event.eventDate}</h2>
				<h2>{event.eventTime}</h2>
				<h2>{event.eventFee}</h2>
				{/* <h2>{event.categories}</h2> */}
				<h2>{event.eventPlaceType}</h2>
				<h2>{event.creatorId ? event.creatorId : "no-creator"}</h2>
				<h2>{event.eventLocation}</h2>
				<h2>{event.eventParticipants}</h2>
				<h2>{event.eventAttendeeCount}</h2>
			</div>

			<div className="button-container">
				<button
					className={`icon-button ${attending ? "active" : "checkmark-button"}`}
					type="submit"
					onClick={handleAttendingEvent}
				>
					<span className="icon">✓</span>
				</button>

				<button
					className={`icon-button ${favourite ? "active" : "star-button"}`}
					type="submit"
					onClick={handleFavouriteEvent}
				>
					<span className="icon">★</span>
				</button>
			</div>

			<div className="comment-section">
				{commentData.map((comment) => (
					<Comment
						username={comment.username}
						text={comment.text}
						rating={comment.rating}
					/>
				))}
				<InputComment />
			</div>
		</div>
	);
}

export default EventInfoPage;
