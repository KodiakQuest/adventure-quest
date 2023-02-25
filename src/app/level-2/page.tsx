"use client";

import Image from "next/image";
import Slider from "../components/Slider";
import { useState } from "react";
import Link from "next/link";

export default function Level2() {
	const [range, setRange] = useState<string>("78");

	return (
		<div className="w-screen h-screen flex flex-col justify-center items-center">
			<div className="space-y-10">
				<div className="relative">
					<Link
						href={"/level-3"}
						className="absolute top-1/2 right-1/2 translate-x-1/2 translate-y-1/2 bg-blue-400 text-white px-6 py-2 rounded-md text-lg hover:bg-blue-500 duration-300"
						style={{ opacity: 1 - Number(range) / 100 }}
					>
						Next &rarr;
					</Link>
					<Image
						alt="placeholder image"
						width={500}
						height={500}
						src={"/image.jpg"}
						placeholder="blur"
						blurDataURL="data:..."
						style={{ opacity: Number(range) / 100 }}
						className="pointer-events-none"
					/>
				</div>
				<div className="">
					<Slider range={range} setRange={setRange} />
				</div>
			</div>
		</div>
	);
}
