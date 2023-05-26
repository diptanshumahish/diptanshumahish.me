"use client";
import React from "react";
import Workcard from "./workcard";
import { motion } from "framer-motion";
import { CaretCircleRight } from "@phosphor-icons/react";
interface Props {
  cards: {
    name: string;
    technologies: string;
    details: string;
    imageLink: string;
    liveLink: string;
    date: string;
  }[];
}

export default function WorkCards({ cards }: Props) {
  return (
    <>
      <motion.div className="flex relative  gap-2 overflow-y-hidden z-10 snap-mandatory hidden-scroll snap-x  snap-start">
        {cards.map((ele, idx) => {
          return <Workcard key={idx} />;
        })}
      </motion.div>
    </>
  );
}
