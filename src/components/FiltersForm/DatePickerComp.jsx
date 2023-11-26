import { React, useState } from "react";
import { DatePicker } from "antd";
import "../design-files-css/FiltersForm/DatePickerComp.css";

const { RangePicker } = DatePicker;

export default function DatePickerComp({ setDateFilter }) {
	const [dates, setDates] = useState([]);

	return (
		<div className="date-container">
			<h3>Date of event</h3>
			<RangePicker
				size="middle"
				onChange={(values) => {
					if (values != null) {
						const value1 = values[0].format("YYYY-MM-DD");
						const value2 = values[1].format("YYYY-MM-DD");
						setDateFilter([value1, value2]);
						setDates([value1, value2]);
					} else {
						setDateFilter([null, null]);
					}
				}}
			/>
		</div>
	);
}
