import React from "react";

function Slider({ values, value, onChange, id }) {
	return (
		<div className="tooltip">
			<input
				id={id}
				type="range"
				min={0}
				max={values.length - 1}
				step={1}
				value={value}
				onChange={(e) => onChange(e.target.value)}
			/>
			<div className="tooltip-text">{values[value]}</div>
		</div>
	);
}

export default Slider;
