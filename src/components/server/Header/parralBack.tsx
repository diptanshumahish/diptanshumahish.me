"use client";
import React from "react";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";

export default function ParralBack() {
  let { scrollYProgress } = useScroll();
  let par = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  return (
    <motion.span
      style={{ y: par }}
      className="absolute top-0 left-0 opacity-10"
    >
      <Image
        src="/bak.png"
        alt="design"
        height={900}
        width={900}
        className="w-[100%] h-auto"
      />
    </motion.span>
  );
}
