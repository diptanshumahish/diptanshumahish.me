"use client";
import React from "react";
import { motion } from "framer-motion";
interface Props {
  skills: string[];
  isNonTech?: boolean;
}

export default function TechSkills({ skills, isNonTech = false }: Props) {
  return (
    <div className="py-2 z-10 tracking-widest lg:text-md text-xs flex gap-3 w-full flex-wrap">
      {skills.map((ele, idx) => {
        return (
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.09 }}
            key={idx}
            className={` ${
              isNonTech ? "bg-sec-theme" : "bg-main-theme"
            } border dark p-1 px-2 rounded-md text-backgroundDark z-10`}
          >
            {ele}
          </motion.span>
        );
      })}
    </div>
  );
}
