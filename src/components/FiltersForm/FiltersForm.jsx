import React from "react";
import Button from "../entry-page/Button";
import "../design-files-css/FiltersForm/FiltersForm.css";
import RangeValueComp from "./RangeValueComp";
import DropdownComp from "./DropdownComp";
import DatePickerComp from "./DatePickerComp";

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
				<Button buttonStyle="primary-medium">Reset Filters</Button>
			</div>
		</section>
	);
}
