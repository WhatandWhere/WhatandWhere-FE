import "../design-files-css/FiltersForm/RangeValueComp.css";
import Slider from "react-slider";
import { useState } from "react";
import React from "react";

var MIN = 5;
var MAX = 100;

export default function RangeValueComp({ children, minValue, maxValue, unit }) {
  const [values, setValues] = useState([MIN, MAX]);

  MIN = minValue ? minValue : 5;
  MAX = maxValue ? maxValue : 100;

  return (
    <div className="box">
      <h3>{children}</h3>
      <div>
        <div className={"values"}>
          {values[0]} - {values[1]} {unit}
        </div>
      </div>

      <Slider
        className={"slider"}
        onChange={setValues}
        value={values}
        min={MIN}
        max={MAX}
      />
    </div>
  );
}
