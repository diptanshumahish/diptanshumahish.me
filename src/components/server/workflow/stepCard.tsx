import React from "react";
import { Annie_Use_Your_Telescope } from "next/font/google";
const annie = Annie_Use_Your_Telescope({ subsets: ["latin"], weight: "400" });
import Image from "next/image";
import StepCardImage from "./stepCardImage";
interface Props {
  stepNum: number;
  stepName: string;
  stepSub: string;
  stepImage: string;
  stepDet: string;
  stepTime: string;
}

export default function StepCard({
  stepDet,
  stepImage,
  stepName,
  stepNum,
  stepSub,
  stepTime,
}: Props) {
  return (
    <div className="relative w-full flex flex-col gap-4 border border-backgroundDark dark:border-borders-dark lg:border-b-4 border-b-2 rounded-lg md:p-8 p-[14px]">
      <div className="w-full flex md:flex-row flex-col gap-2 items-start justify-between md:gap-0  md:items-center border-b border-backgroundLight dark:border-borders-dark   pb-5">
        <div className="bg-backgroundDark dark:bg-backgroundLight lg:text-lg w-fit lg:py-2 lg:px-12 py-2 px-4 text-backgroundLight dark:text-backgroundDark rounded-lg">
          Step {stepNum}.
        </div>
        <div className=" flex flex-col md:items-end text-backgroundDark  bg-sec-theme p-2 px-4 rounded-md border dark:border-borders-dark">
          <span className="font-bold lg:text-xl text-sm">{stepName}</span>
          <span className={`${annie.className} lg:text-xl text-sm`}>
            {stepSub}
          </span>
        </div>
      </div>
      <StepCardImage imageLink={stepImage} />
      <hr className="text-backgroundDark dark:text-borders-dark" />
      <div className="lg:text-lg text-sm text-backgroundDark dark:text-backgroundLight">
        {stepDet}
      </div>
      <div>
        <span className="bg-main-theme px-4 py-2 rounded-lg border  lg:gap-2 flex md:flex-row flex-col ">
          <span className="font-bold lg:text-sm text-xs">
            Time I spend on this :
          </span>
          <span className="text-xs lg:text-sm "> {stepTime}</span>
        </span>
      </div>
    </div>
  );
}
