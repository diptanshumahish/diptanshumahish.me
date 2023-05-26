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
  type: string;
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
  type,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className=" hidden-scroll overflow-hidden relative snap-center snap-always border border-backgroundDark dark:border-borders-dark lg:p-6 p-2 lg:min-w-[60%] lg:max-w-[60%] min-w-full z-20  rounded-md  flex flex-col justify-between  "
    >
      <div className="absolute top-0 right-0 p-2 bg-main-theme text-backgroundDark lg:text-md text-xs  border-l border-b">
        {type}
      </div>
      <div className="lg:gap-4 gap-3 flex flex-col pb-2 ">
        <h3 className="lg:text-2xl font-bold w-[70%]">{name}</h3>
        <div className="">
          <span className="border  b p-2  rounded-sm lg:text-xl text-xs">
            {technologies}
          </span>
        </div>
        <div className="w-full flex justify-between lg:items-center lg:flex-row flex-col-reverse lg:gap-0 gap-2 ">
          <p className="lg:w-[60%]  text-xs lg:text-lg">{details}</p>
          <div className="lg:w-[20%] w-[30%]">
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
      </div>
      <div className="flex flex-col gap-2">
        <hr />
        <LinkItems date={date} link={liveLink} />
      </div>
    </motion.div>
  );
}
