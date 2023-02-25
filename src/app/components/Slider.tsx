"use client";

// import { useState } from "react";

export default function Slider({
	range,
	setRange,
}: {
	range: string;
	setRange: Function;
}) {
	// const [range, setRange] = useState("50");

	return (
		<input
			onChange={(e) => setRange(e.target.value)}
			type="range"
			value={range}
			min="1"
			max="100"
			className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer "
		/>
	);
}
