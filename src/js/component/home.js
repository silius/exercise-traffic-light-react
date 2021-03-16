import React, { useState, useEffect } from "react";

//create your first component

export function Home() {
	const [color, setColor] = useState("red");

	let redExtraClass = "";
	if (color == "red") redExtraClass = "choice";
	let yellowExtraClass = "";
	if (color == "yellow") yellowExtraClass = "choice";
	let greenExtraClass = "";
	if (color == "green") greenExtraClass = "choice";
	return (
		<div>
			<div id="trafficTop"></div>
			<div id="container">
				<div
					className={"red light " + redExtraClass}
					onClick={() => setColor("red")}></div>
				<div
					className={"yellow light " + yellowExtraClass}
					onClick={() => setColor("yellow")}></div>
				<div
					className={"green light " + greenExtraClass}
					onClick={() => setColor("green")}></div>
			</div>
		</div>
	);
}
