import { Inter } from "@next/font/google";
import Link from "next/link";
import Input from "./components/Input";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="h-screen w-screen flex flex-col items-center">
      <div className="py-20 px-10 h-full sm:w-full md:w-1/2 space-y-4 text-center">
        <span className="text-center sm:text-base md:text-xl lg:text-xl">
          {"Click "}
          <Link
            href={"https://youtu.be/d_mQQWnT8qU"}
            target="_blank"
            className="underline text-blue-500"
          >
            here
          </Link>
          {" to watch the video"}
        </span>
        <div>
          <p className="my-5">
            MENTION THE CLUE YOU GOT BEFORE TO VERIFY AND TO REACH NEXT LEVEL
          </p>
          <Input />
        </div>
      </div>
    </main>
  );
}
