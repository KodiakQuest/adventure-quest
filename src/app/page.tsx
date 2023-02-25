import { Inter } from "@next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main className="h-screen w-screen flex flex-col items-center">
			<div className="py-20 px-10 h-full sm:w-full md:w-1/2 space-y-4 text-center">
				<span className="text-center sm:text-base md:text-xl lg:text-xl">
					{"Click "}
					<Link
						href={"https://www.youtube.com/"}
						target="_blank"
						className="underline text-blue-500"
					>
						here
					</Link>
					{" to watch the video"}
				</span>
				<div>
					<input
						type="text"
						placeholder="Enter text here"
						className="mt-1 w-full rounded-md border-gray-400 shadow-sm sm:text-sm md:text-base mb-6"
					/>
					<Link
						href={"/level-2"}
						className="bg-blue-400 text-white px-6 py-2 rounded-md text-lg hover:bg-blue-500 duration-300"
					>
						Next &rarr;
					</Link>
				</div>
			</div>
		</main>
	);
}
