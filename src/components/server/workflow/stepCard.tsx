"use client";
import React from "react";
import { Annie_Use_Your_Telescope } from "next/font/google";
const annie = Annie_Use_Your_Telescope({ subsets: ["latin"], weight: "400" });
import { backIn, easeInOut, motion } from "framer-motion";
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
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="relative w-full flex flex-col gap-4 border border-backgroundDark dark:border-borders-dark lg:border-b-4 border-b-2 rounded-lg md:p-8 p-[14px]"
    >
      <div className="w-full flex md:flex-row flex-col gap-2 items-start justify-between md:gap-0  md:items-center border-b border-backgroundLight dark:border-borders-dark   pb-5">
        <div className="bg-backgroundDark dark:bg-backgroundLight lg:text-lg w-fit lg:py-2 lg:px-12 py-2 px-4 text-backgroundLight dark:text-backgroundDark rounded-lg">
          Step {stepNum}.
        </div>
        <div className=" flex flex-col md:items-end text-backgroundDark  bg-sec-theme lg:p-2 lg:px-4 p-1 px-2 rounded-md border dark:border-borders-dark">
          <span className="font-bold lg:text-xl text-sm">{stepName}</span>
          <span className={`${annie.className} lg:text-xl text-xs`}>
            {stepSub}
          </span>
        </div>
      </div>

      <StepCardImage imageLink={stepImage} />

      <hr className="text-backgroundDark dark:text-borders-dark" />
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", bounce: backIn }}
        viewport={{ once: true }}
        className="lg:text-lg text-sm overflow-y-hidden text-backgroundDark dark:text-backgroundLight"
      >
        {stepDet}
      </motion.div>
      <div>
        <span className="bg-main-theme px-4 py-2 rounded-lg border  lg:gap-2 flex md:flex-row flex-col ">
          <span className="font-bold lg:text-sm text-xs">
            Time I spend on this :
          </span>
          <span className="text-xs lg:text-sm "> {stepTime}</span>
        </span>
      </div>
    </motion.div>
  );
}
