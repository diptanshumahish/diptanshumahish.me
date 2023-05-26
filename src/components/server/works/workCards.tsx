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
    type: string;
    colors: string[];
  }[];
}

export default function WorkCards({ cards }: Props) {
  return (
    <>
      <motion.div className="flex relative  lg:gap-10 gap-2 overflow-y-hidden z-10 snap-mandatory hidden-scroll snap-x  snap-start">
        {cards.map((ele, idx) => {
          return (
            <Workcard
              date={ele.date}
              type={ele.type}
              details={ele.details}
              imageLink={ele.imageLink}
              liveLink={ele.liveLink}
              name={ele.name}
              technologies={ele.technologies}
              colors={ele.colors}
              key={idx}
            />
          );
        })}
      </motion.div>
    </>
  );
}
