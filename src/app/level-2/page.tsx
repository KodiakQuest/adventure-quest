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
					style={{ opacity: Number(range) / 100 }}
				/>
			</div>

			<Slider range={range} setRange={setRange} />
		</div>
	);
}
