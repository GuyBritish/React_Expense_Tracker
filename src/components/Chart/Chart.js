import React from "react";

import ChartBar from "./ChartBar";

import "./Chart.css";

function Chart(props) {
	const valueList = props.dataPoints.map((data) => data.value);
	const maxExpense = Math.max(...valueList);
	return (
		<div className="chart">
			{props.dataPoints.map((dataPoint) => (
				<ChartBar
					key={dataPoint.label}
					value={dataPoint.value}
					maxValue={maxExpense}
					label={dataPoint.label}
				/>
			))}
		</div>
	);
}

export default Chart;
