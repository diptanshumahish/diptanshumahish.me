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
  type:string
  colors: string[];
}

export default function Workcard({
  date,
  details,
  imageLink,
  liveLink,
  name,
  technologies,
  colors,
  type
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className=" hidden-scroll overflow-hidden relative snap-center snap-always border border-backgroundDark dark:border-borders-dark lg:p-6 p-2 lg:min-w-[60%] lg:max-w-[60%] min-w-full z-20  rounded-md  flex flex-col lg:gap-4 gap-2 "
    >
      <div className="absolute top-0 right-0 p-2 bg-main-theme text-backgroundDark  border-l border-b">
        {type}
      </div>
      <h3 className="lg:text-2xl font-bold">{name}</h3>
      <div>
        <span className="border  b p-2  rounded-sm lg:text-xl text-xs">
          {technologies}
        </span>
      </div>
      <div className="w-full flex justify-between items-center">
        <p className="lg:w-[60%] w-[80%] text-xs lg:text-lg">{details}</p>
        <div className="w-[20%]">
          <WorkImage imageLink={imageLink} />
        </div>
      </div>
      <div className="flex gap-2">
        {colors.map((ele, idx) => {
          return (
            <span
              className={`h-8 w-8 rounded-full  flex border`}
              style={{ backgroundColor: `${ele}` }}
              key={idx}
            />
          );
        })}
      </div>
      <hr />
      <LinkItems date={date} link={liveLink} />
    </motion.div>
  );
}
