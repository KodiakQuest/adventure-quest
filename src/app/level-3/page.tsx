import Link from "next/link";

export default function Page() {
	return (
		<div className="w-screen h-screen flex flex-col justify-center items-center">
			<Link href={"/sample.pdf"} download>
				<button className="bg-blue-400 text-white px-6 py-2 rounded-md text-lg hover:bg-blue-500 duration-300">
					Download pdf
				</button>
			</Link>
		</div>
	);
}
