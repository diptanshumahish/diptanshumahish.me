"use client";
import React from "react";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";

export default function DesParralBack() {
  let { scrollYProgress } = useScroll();
  let par = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  return (
    <motion.span
      style={{ y: par }}
      className="absolute top-0 left-0  opacity-20"
    >
      <Image
        src="/testback.svg"
        alt="design"
        height={900}
        width={900}
        className="lg:w-[100%] object-cover  lg:h-auto h-[100vh] w-auto dark:invert "
      />
    </motion.span>
  );
}
