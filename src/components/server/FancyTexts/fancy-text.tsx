"use client";
import React from "react";
import { Annie_Use_Your_Telescope } from "next/font/google";
import { useScroll, useTransform, motion } from "framer-motion";

const annie = Annie_Use_Your_Telescope({ subsets: ["latin"], weight: "400" });
interface Props {
  content: string;
}

export default function FanctText({ content }: Props) {
  let { scrollYProgress } = useScroll();
  let fig = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  return (
    <motion.div style={{ y: fig }} className={`${annie.className} text-2xl`}>
      {content}
    </motion.div>
  );
}
