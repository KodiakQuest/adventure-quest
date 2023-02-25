import Link from "next/link";

export default function Page() {
	return (
		<div className="w-screen h-screen flex flex-col justify-center items-center">
			<div className="space-y-10 flex flex-col items-center md:w-1/3 sm:w-full">
				<Link href={"/sample.pdf"} download>
					<button className="bg-blue-400 text-white px-6 py-2 rounded-md text-lg hover:bg-blue-500 duration-300">
						Download pdf
					</button>
				</Link>
				<input
					type="text"
					placeholder="Enter text here"
					className="mt-1 w-full rounded-md border-gray-400 shadow-sm sm:text-sm md:text-base"
				/>
				<button className="bg-blue-400 text-white px-6 py-2 rounded-md text-lg hover:bg-blue-500 duration-300">
					Verify the code
				</button>
			</div>
		</div>
	);
}
