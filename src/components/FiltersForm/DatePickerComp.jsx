import React from "react";
import moment from "moment";
import { useState } from "react";
import { DatePicker } from "antd";
import "../design-files-css/FiltersForm/DatePickerComp.css";
const { RangePicker } = DatePicker;

export default function DatePickerComp() {
  const [dates, setDates] = useState([]);

  return (
    <div className="date-container">
      <h3>Date of event</h3>
      <RangePicker
        onChange={(values) => {
          const value1 = moment(values[0].format("DD-MM-YYYY"));
          setDates(
            values.map((item) => {
              return moment(item).format("DD-MM-YYYY");
            })
          );
        }}
      />
    </div>
  );
}
