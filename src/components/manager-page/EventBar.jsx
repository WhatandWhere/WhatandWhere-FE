import React from "react";
import { ListItem, IconButton } from "@mui/material";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import "../design-files-css/manager-page/EventBar.css";

function EventBar({ event, onAccept, onReject, onViewDetails }) {
	return (
		<ListItem className="event-bar">
			<div className="event-name">{event.eventName}</div>
			<div className="action-buttons">
				<IconButton onClick={onViewDetails} className="event-bar-icon-view-details">
					<VisibilityRoundedIcon />
				</IconButton>
				<IconButton onClick={onAccept} className="event-bar-icon-accept">
					<CheckRoundedIcon />
				</IconButton>
				<IconButton onClick={onReject} className="event-bar-icon-reject">
					<ClearRoundedIcon />
				</IconButton>
			</div>
		</ListItem>
	);
}

export default EventBar;
