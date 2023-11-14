import "../design-files-css/FiltersForm/RangeValueComp.css";
import Slider from "react-slider";
import { useState } from "react";
import React from "react";
var MIN = 5;
var MAX = 100;
export default function RangeValueComp({
  children,
  minValue,
  maxValue,
  unit,
  secondaryInfo,
}) {
  const [values, setValues] = useState([MIN, MAX]);

  MIN = minValue ? minValue : 5;
  MAX = maxValue ? maxValue : 100;

  return (
    <div className="range-container">
      <h3>{children}</h3>
      <h4>{secondaryInfo}</h4>
      <div>
        <div className={"values"}>
          {values[0]} - {values[1]} {unit}
        </div>
      </div>

      {/* <div className="input-form">
        <h4>
          From: <input value={values[0]}></input>
        </h4>
        <h4>
          To: <input value={values[1]}></input>
        </h4>
      </div> */}

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
