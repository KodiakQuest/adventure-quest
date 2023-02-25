"use client";

import Image from "next/image";
import Slider from "../components/Slider";
import { useState } from "react";

export default function Level2() {
	const [range, setRange] = useState<string>("50");

	return (
		<div className="w-screen h-screen">
			<div>
				<Image
					alt="placeholder image"
					width={500}
					height={500}
					src={"/image.jpg"}
					placeholder="blur"
					blurDataURL="data:..."
					className={`opacity-[${Number(range) / 100}]`}
				/>
			</div>

			<p className="opacity-30">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit.
				Deleniti, delectus.
			</p>
			{/* {range} */}
			{Number(range) / 100}
			<Slider range={range} setRange={setRange} />
		</div>
	);
}
