import React from "react";
import { Annie_Use_Your_Telescope } from "next/font/google";
import StepCard from "../server/workflow/stepCard";
const annie = Annie_Use_Your_Telescope({ subsets: ["latin"], weight: "400" });

export default function Workflow() {
  return (
    <div className="w-full lg:p-10 ">
      <span className="flex flex-col leading-6 text-backgroundDark dark:text-backgroundLight">
        <span className="text-[16px]">Here&apos;s how my </span>
        <span className="text-4xl font-bold">Workflow looks like</span>
        <span className={`${annie.className} text-xl`}>
          "This is how the magic happens"
        </span>
      </span>

      <div className="w-full py-5 flex flex-col gap-8">
        <StepCard />
        <StepCard />
      </div>
    </div>
  );
}
