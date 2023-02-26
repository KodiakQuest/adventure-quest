"use client";

import Image from "next/image";
import Slider from "../components/Slider";
import { useState } from "react";
import Link from "next/link";

export default function Level2() {
  const [range, setRange] = useState<string>("78");
  const [slider1Value, setSlider1Value] = useState(0);
  const [slider2Value, setSlider2Value] = useState(0);
  const [slider3Value, setSlider3Value] = useState(0);

  const linkToShow =
    slider1Value === 3 && slider2Value === 7 && slider3Value === 10
      ? "https://example.com"
      : null;

  return (
    <div className="w-screen h-screen sm:flex  sm:justify-evenly items-center p-4">
      <div className="sm:w-3/6">
        <h1 className="text-blue-500 text-4xl font-semibold p-2 w-fit">
          Description
        </h1>
        <p className="mt-6">
          Below are ages of three brothers. If you arrange their ages correctly
          you will get next clue
          <br />
          Here are the hints for their ages-
          <br />
          1)Last brother is of highest age.
          <br />
          2)Middle brother age is more than half age but less than 3/4th age
          <br />
          3)First brother is below half age.
        </p>
      </div>

      <div className="space-y-10 mt-4">
        <div className="relative">
          <Link
            href={"/level-3"}
            className={`absolute  top-1/2 right-1/2 translate-x-1/2 translate-y-1/2 text-white px-6 py-2 rounded-md text-lg hover:bg-blue-500 duration-300 ${
              linkToShow == null ? "hidden" : "visible"
            }`}
          >
            {linkToShow && (
              <div
                className={`${
                  linkToShow == null
                    ? "opacity-0"
                    : " bg-blue-500 p-2 rounded-sm"
                }`}
              >
                <div>Link to show</div>
              </div>
            )}
          </Link>
          <Image
            alt="placeholder image"
            width={500}
            height={500}
            src={"/image.jpg"}
            blurDataURL="data:..."
            className={`pointer-events-none 
			`}
          />
        </div>
        <div className="flex">
          <label>Slider 1:</label>
          <input
            type="range"
            min="0"
            max="10"
            value={slider1Value}
            onChange={(e) => setSlider1Value(parseInt(e.target.value))}
          />
          <div className="ml-5 bg-blue-500 w-6 text-white text-center">
            {slider1Value}
          </div>
        </div>
        <div className="flex">
          <label>Slider 2:</label>
          <input
            type="range"
            min="0"
            max="10"
            value={slider2Value}
            onChange={(e) => setSlider2Value(parseInt(e.target.value))}
          />
          <div className="ml-5 bg-blue-500 w-6 text-white text-center">
            {slider2Value}
          </div>
        </div>
        <div className="flex">
          <label>Slider 3:</label>
          <input
            type="range"
            min="0"
            max="10"
            value={slider3Value}
            onChange={(e) => setSlider3Value(parseInt(e.target.value))}
          />
          <div className="ml-5 bg-blue-500 w-6 text-white text-center">
            {slider3Value}
          </div>
        </div>
      </div>
    </div>
  );
}
