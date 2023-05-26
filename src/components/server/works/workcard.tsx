import React from "react";
import Link from "next/link";
import WorkImage from "./workImage";
import LinkItems from "./linkItems";
import { motion } from "framer-motion";

export default function Workcard() {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className=" hidden-scroll snap-center snap-always lg:p-6 p-2 lg:min-w-[60%] lg:max-w-[60%] min-w-full z-20 bg-backgroundDark dark:bg-backgroundLight dark:text-backgroundDark rounded-md text-backgroundLight flex flex-col lg:gap-4 gap-2 "
    >
      <h3 className="lg:text-2xl font-bold">Warrior&apos;s Group Website</h3>
      <div>
        <span className="border border-borders-dark b p-2  rounded-sm lg:text-md text-xs">
          NextJs, Formsubmit
        </span>
      </div>
      <div className="w-full flex justify-between items-center">
        <span className="lg:w-[50%] w-[80%] text-xs">
          The official website Of Warriors&apos;s Group LLC. This website is
          meant to attract potential customers needing staffing and recruitment
          solutions to get their technical and non technical solutions with
          ease.
        </span>
        <div className="w-[20%]">
          <WorkImage imageLink="/trans.svg" />
        </div>
      </div>
      <hr />
      <LinkItems />
    </motion.div>
  );
}
