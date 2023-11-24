import React, { useEffect } from "react";
import Button from "../entry-page/Button";
import "../design-files-css/FiltersForm/FiltersForm.css";
import RangeValueComp from "./RangeValueComp";
import DropdownComp from "./DropdownComp";
import DatePickerComp from "./DatePickerComp";
// eslint-disable-next-line import/order
import axios from "axios";
import { backendLink } from "../../action/authActions";

export default function FiltersForm({ setEvents }) {
	const [dateFilter, setDateFilter] = React.useState({
		startDate: null,
		endDate: null,
	});
	const [enteranceFee, setEnteranceFee] = React.useState({
		minValue: 0,
		maxValue: 400,
	});
	const [attendeeCount, setAttendeeCount] = React.useState({
		minValue: 0,
		maxValue: 400,
	});
	const [category, setCategory] = React.useState([]);

	useEffect(() => {
		console.log(dateFilter);
	}, [dateFilter]);
	const handelApplyFilters = () => {
		axios
			.get(`${backendLink}/api/events`, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
				},
				params: {
					startDate: dateFilter.startDate ? dateFilter.startDate : null,
					endDate: dateFilter.endDate ? dateFilter.endDate : null,
					minFee: enteranceFee.minValue !== null ? enteranceFee.minValue : null,
					maxFee: enteranceFee.maxValue !== null ? enteranceFee.maxValue : null,
					minAttendeeCount:
						attendeeCount.minValue != null ? attendeeCount.minValue : null,
					maxAttendeeCount:
						attendeeCount.maxValue !== null ? attendeeCount.maxValue : null,
					categoryName: category.length !== 0 ? category : null,
				},
			})
			.then((res) => {
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
		axios
			.get(`${backendLink}/api/events`, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
				},
			})
			.then((res) => {
				console.log(res.data);
				setEvents(res.data);
			});
	};
	const handelEntranceFee = (event) => {
		setEnteranceFee({
			minValue: event[0],
			maxValue: event[1],
		});
	};
	const handelAttendeeCount = (event) => {
		setAttendeeCount({
			minValue: event[0],
			maxValue: event[1],
		});
	};
	const handelCategoryFilter = (event) => {
		const categories = event.map((category) => category.value);
		console.log(categories);
		setCategory(categories);
	};
	return (
		<section className="filters-form-container">
			<DatePickerComp setDateFilter={setDateFilter} />
			<RangeValueComp
				minValue={0}
				maxValue={400}
				unit="zł"
				secondaryInfo="Choose suitable range for you"
				handelChange={handelEntranceFee}
			>
				Entrance Fee
			</RangeValueComp>
			<RangeValueComp
				minValue={0}
				maxValue={400}
				unit="members"
				secondaryInfo="Choose number of visitors"
				handelChange={handelAttendeeCount}
			>
				Attendee count
			</RangeValueComp>
			<DropdownComp handelChange={handelCategoryFilter} />

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
