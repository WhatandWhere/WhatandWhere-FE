import React, { useEffect } from "react";
import Button from "../entry-page/Button";
import "../design-files-css/FiltersForm/FiltersForm.css";
import RangeValueComp from "./RangeValueComp";
import DropdownComp from "./DropdownComp";
import DatePickerComp from "./DatePickerComp";
// eslint-disable-next-line import/order
import axios from "axios";

export default function FiltersForm({ setEvents }) {
	const [dateFilter, setDateFilter] = React.useState({
		startDate: null,
		endDate: null,
	});
	const [enteranceFee, setEnteranceFee] = React.useState({
		minValue: 0,
		maxValue: 10000,
	});
	const [attendeeCount, setAttendeeCount] = React.useState({
		minValue: 0,
		maxValue: 10000,
	});

	useEffect(() => {
		console.log(dateFilter);
	}, [dateFilter]);
	const handelApplyFilters = () => {
		axios.get(`${process.env.BACK_URL}/api/events`, {}).then((res) => {
			console.log(res.data);
			setEvents(res.data);
		});
	};
	const handelResetFilters = () => {
		setDateFilter({
			startDate: null,
			endDate: null,
		});
		setEnteranceFee({
			minValue: 0,
			maxValue: 10000,
		});
		setAttendeeCount({
			minValue: 0,
			maxValue: 10000,
		});
	};
	return (
		<section className="filters-form-container">
			<DatePickerComp setDateFilter={setDateFilter} />
			<RangeValueComp
				minValue={0}
				maxValue={10000}
				unit="zł"
				secondaryInfo="Choose suitable range for you"
				setEnteranceFee={setEnteranceFee}
			>
				Entrance Fee
			</RangeValueComp>
			<RangeValueComp
				minValue={0}
				maxValue={10000}
				unit="members"
				secondaryInfo="Choose number of visitors"
				setAttendeeCount={setAttendeeCount}
			>
				Attendee count
			</RangeValueComp>
			<DropdownComp />

			<div className="buttons-container">
				<Button buttonStyle="primary-medium" onClick={() => handelApplyFilters()}>
					Apply filters
				</Button>
				<Button buttonStyle="primary-medium" onClick={() => handelResetFilters()}>
					Reset Filters
				</Button>
			</div>
		</section>
	);
}
