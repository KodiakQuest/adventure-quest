"use client";

import { useState } from "react";

export default function Input() {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (value.toLowerCase() !== "https://adventurequest.com/2k23l3") {
      alert("Entered link is not valid");
      return;
    }

    window.location.href = "/level-2";
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter text here"
          className="mt-1 w-full rounded-md border-gray-400 shadow-sm sm:text-sm md:text-base mb-6"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-400 text-white px-6 py-2 rounded-md text-lg hover:bg-blue-500 duration-300"
        >
          Next &rarr;
        </button>
      </form>
    </div>
  );
}
