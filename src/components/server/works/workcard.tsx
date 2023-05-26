import React from "react";
import Link from "next/link";
import WorkImage from "./workImage";
import LinkItems from "./linkItems";
import { motion } from "framer-motion";
interface Props {
  name: string;
  technologies: string;
  details: string;
  imageLink: string;
  liveLink: string;
  date: string;
}

export default function Workcard({
  date,
  details,
  imageLink,
  liveLink,
  name,
  technologies,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className=" hidden-scroll snap-center snap-always lg:p-6 p-2 lg:min-w-[60%] lg:max-w-[60%] min-w-full z-20 bg-backgroundDark dark:bg-backgroundLight dark:text-backgroundDark rounded-md text-backgroundLight flex flex-col lg:gap-4 gap-2 "
    >
      <h3 className="lg:text-2xl font-bold">{name}</h3>
      <div>
        <span className="border border-borders-dark dark:border-backgroundDark b p-2  rounded-sm lg:text-xl text-xs">
          {technologies}
        </span>
      </div>
      <div className="w-full flex justify-between items-center">
        <span className="lg:w-[50%] w-[80%] text-xs lg:text-lg">{details}</span>
        <div className="w-[20%]">
          <WorkImage imageLink={imageLink} />
        </div>
      </div>
      <hr />
      <LinkItems date={date} link={liveLink} />
    </motion.div>
  );
}
