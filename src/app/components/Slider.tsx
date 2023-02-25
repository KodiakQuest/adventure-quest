"use client";

// import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";

export default function Slider({
	range,
	setRange,
}: {
	range: string;
	setRange: Dispatch<SetStateAction<string>>;
}) {
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
