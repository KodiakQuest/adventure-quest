"use client";

import React, { useEffect, useState } from "react";

function Counter() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCount((prevCount) => prevCount + 1);
		}, 1000);

		return () => clearInterval(interval);
	}, [count]);

	return <div>{count}</div>;
}

export default Counter;
