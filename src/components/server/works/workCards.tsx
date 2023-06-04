"use client";
import React from "react";
import Workcard from "./workcard";
import { motion } from "framer-motion";
import { CaretCircleRight } from "@phosphor-icons/react";
interface Props {
  cards: {
    name: string;
    technologies: string[];
    details: string;
    imageLink: string;
    liveLink: string;
    date: string;
    mobImage: string;
    type: string;
    invert?: boolean;
    colors: string[];
  }[];
}

export default function WorkCards({ cards }: Props) {
  return (
    <>
      <motion.div className="flex relative  flex-col gap-4 lg:gap-8">
        {cards.map((ele, idx) => {
          return (
            <Workcard
              date={ele.date}
              mobImage={ele.mobImage}
              type={ele.type}
              details={ele.details}
              imageLink={ele.imageLink}
              liveLink={ele.liveLink}
              name={ele.name}
              technologies={ele.technologies}
              colors={ele.colors}
              invert={ele.invert}
              key={idx}
            />
          );
        })}
      </motion.div>
    </>
  );
}
