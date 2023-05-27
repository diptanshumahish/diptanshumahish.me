import React from "react";
import { Annie_Use_Your_Telescope } from "next/font/google";
import Timeline from "./Timeline";
const annie = Annie_Use_Your_Telescope({ subsets: ["latin"], weight: "400" });

export default function Education() {
  return (
    <div className="   w-full lg:p-10 p-5 text-backgroundDark dark:text-backgroundLight">
      <div className="w-[40%] flex flex-col ">
        <span className="w-[20%] lg:hidden h-[2px] rounded-md bg-backgroundDark dark:bg-backgroundLight my-2"></span>
        <span>And about my </span>
        <span className="text-4xl font-bold">Academic Qualifications</span>
        <span className={`${annie.className} lg:text-2xl`}>
          &quot;Not much though&quot;
        </span>
      </div>

      <Timeline />
    </div>
  );
}
