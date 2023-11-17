import React from "react";
import Button from "../entry-page/Button";
import DatePickerComp from "./DatePickerComp";
import DropdownComp from "./DropdownComp";
import RangeValueComp from "./RangeValueComp";

import "../design-files-css/FiltersForm/FiltersForm.css";

export default function FiltersForm() {
	return (
		<section className="form-container">
			<DatePickerComp />
			<RangeValueComp
				minValue={5}
				maxValue={400}
				unit="zł"
				secondaryInfo="Choose suitable range for you"
			>
				Entrance Fee
			</RangeValueComp>
			<RangeValueComp
				minValue={5}
				maxValue={1000}
				unit="members"
				secondaryInfo="Choose number of visitors"
			>
				Attendee count
			</RangeValueComp>
			<DropdownComp />

			<div className="buttons-container">
				<Button buttonStyle="primary-medium">Apply filters</Button>
				<Button buttonStyle="primary-medium">Reset filters</Button>
			</div>
		</section>
	);
}