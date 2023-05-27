"use client";
import { Briefcase, GraduationCap } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import React from "react";
interface Props {
  right?: boolean;
  date: string;
  data: string;
  grades?: string;
  isEdu?: boolean;
}

export default function TimeLineCard({
  right = false,
  data,
  date,
  grades,
  isEdu = true,
}: Props) {
  if (right === true) {
    return (
      <>
        <div className=""></div>
        <div className=" relative flex items-center justify-center">
          <div className="absolute top-8 right-2 lg:text-lg text-md   ">
            {isEdu ? (
              <GraduationCap className="lg:text-lg text-md text-backgroundDark dark:text-backgroundLight" />
            ) : (
              <Briefcase className="lg:text-lg text-md" />
            )}
          </div>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut" }}
            viewport={{ once: true }}
            className="h-full w-[2px]   bg-backgroundDark dark:bg-borders-dark"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className=" flex lg:p-2 lg:px-4  flex-col gap-1 items-start lg:border dark:border-borders-dark rounded-md lg:my-8 lg:border-b-2  dark:text-backgroundLight"
        >
          <span className="lg:text-xl text-xs font-bold text-main-theme">
            {date}
          </span>
          <p className="text-left tracking-wider lg:text-md text-xs">{data}</p>
          <span className="lg:text-sm font-bold tracking-wider text-xs text-right">
            Grade | {grades}
          </span>
        </motion.div>
      </>
    );
  }
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className=" flex lg:p-2 lg:px-4  flex-col items-end lg:border  dark:border-borders-dark rounded-md my-8 lg:border-b-2 dark:text-backgroundLight"
      >
        <span className="lg:text-xl text-xs font-bold text-right text-main-theme">
          {date}
        </span>
        <p className="text-right tracking-wider lg:text-md text-xs">{data}</p>
        {grades !== undefined && (
          <span className="lg:text-sm font-bold tracking-wider text-right text-xs">
            Grade | {grades}
          </span>
        )}
      </motion.div>
      <div className=" relative flex items-center justify-center">
        <div className="absolute top-8 left-2 text-backgroundDark dark:text-backgroundLight  ">
          {isEdu ? (
            <GraduationCap className="lg:text-lg text-md" />
          ) : (
            <Briefcase className="lg:text-lg text-md" />
          )}
        </div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut" }}
          viewport={{ once: true }}
          className="h-full w-[2px]  bg-backgroundDark dark:bg-borders-dark"
        />
      </div>
      <div className=""></div>
    </>
  );
}
