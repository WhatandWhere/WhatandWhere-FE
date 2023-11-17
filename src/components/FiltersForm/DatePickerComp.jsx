import React from "react";
import { DatePicker } from "antd";
import "../design-files-css/FiltersForm/DatePickerComp.css";

const { RangePicker } = DatePicker;

export default function DatePickerComp() {
	return (
		<div className="date-container">
			<h3>Date of event</h3>
			<RangePicker size="middle" />
		</div>
	);
}
