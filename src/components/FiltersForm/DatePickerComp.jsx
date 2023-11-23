import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { DatePicker } from "antd";
import "../design-files-css/FiltersForm/DatePickerComp.css";

const { RangePicker } = DatePicker;

export default function DatePickerComp({ setDateFilter }) {
	return (
		<div className="date-container">
			<h3>Date of event</h3>
			<RangePicker
				size="middle"
				onChange={(date) => {
					setDateFilter({
						startDate: date[0].$d,
						endDate: date[1].$d,
					});
				}}
			/>
		</div>
	);
}
