"use client";
import Link from "next/link";

import { FormEvent, useState } from "react";

export default function Page() {
  const [value, setValue] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value != "https://youtube.com/shorts/Ny-0p7_gmuo?feature=share") {
      alert("Entered link is not valid");
      return;
    }
    window.location.href =
      "https://youtube.com/shorts/Ny-0p7_gmuo?feature=share";
  };
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="space-y-10 flex flex-col items-center md:w-1/3 sm:w-full">
        <Link href={"/strides.pdf"} download>
          <button className="bg-blue-400 text-white px-6 py-2 rounded-md text-lg hover:bg-blue-500 duration-300">
            Download pdf
          </button>
        </Link>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col items-center w-full"
        >
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter text here"
            required
            className="mt-1 w-full rounded-md border-gray-400 shadow-sm sm:text-sm md:text-base"
          />
          <button
            type="submit"
            className="mt-5 bg-blue-400 w-fit text-white px-6 py-2 rounded-md text-lg hover:bg-blue-500 duration-300"
          >
            Verify the code
          </button>
        </form>
      </div>
    </div>
  );
}
