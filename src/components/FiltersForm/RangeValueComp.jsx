import { React, useState } from "react";
import Slider from "react-slider";

import "../design-files-css/FiltersForm/RangeValueComp.css";

let MIN = 5;
let MAX = 100;
export default function RangeValueComp({
	children,
	minValue,
	maxValue,
	unit,
	secondaryInfo,
	handelChange,
}) {
	const [values, setValues] = useState([MIN, MAX]);

	MIN = minValue;
	MAX = maxValue;

	return (
		<div className="range-container">
			<h3>{children}</h3>
			<h4>{secondaryInfo}</h4>
			<div>
				<div className="values">
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
				className="slider"
				onChange={(event) => {
					console.log("event", event);
					setValues([event[0], event[1]]);
					handelChange(event);
				}}
				value={values}
				min={MIN}
				max={MAX}
			/>
		</div>
	);
}
