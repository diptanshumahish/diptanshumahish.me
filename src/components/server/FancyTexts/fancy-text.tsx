"use client";
import React from "react";
import { Nanum_Pen_Script } from "next/font/google";
import { useScroll, useTransform, motion } from "framer-motion";

const annie = Nanum_Pen_Script({ subsets: ["latin"], weight: "400" });
interface Props {
  content: string;
}

export default function FanctText({ content }: Props) {
  let { scrollYProgress } = useScroll();
  let fig = useTransform(scrollYProgress, [0, 1], ["0%", "400%"]);
  return (
    <motion.div
      style={{ y: fig }}
      className={`${annie.className} text-2xl text-backgroundDark dark:text-backgroundLight`}
    >
      {content}
    </motion.div>
  );
}
