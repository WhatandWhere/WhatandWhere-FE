import React from "react";
import "../design-files-css/FiltersForm/FiltersForm.css";
import DateRangeComp from "./DateRangeComp";
import RangeValueComp from "./RangeValueComp";
import DropdownComp from "../FiltersForm/DropdownComp.jsx";

export default function FiltersForm() {
  return (
    <section className="form-container">
      <DateRangeComp />
      <RangeValueComp minValue={5} maxValue={400} unit="zl">
        Entrance Fee
      </RangeValueComp>
      <RangeValueComp minValue={5} maxValue={1000} unit="members">
        Attendee count
      </RangeValueComp>
      <DropdownComp />
    </section>
  );
}
