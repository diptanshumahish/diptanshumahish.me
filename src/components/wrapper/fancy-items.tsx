"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import SmallBanners from "../server/banner/small-banners";
import Image from "next/image";

import {
  Aperture,
  AppStoreLogo,
  DeviceMobile,
  FigmaLogo,
  MusicNote,
} from "@phosphor-icons/react";
import { Anonymous_Pro } from "next/font/google";
const annie = Anonymous_Pro({ subsets: ["latin"], weight: "400" });

export default function FancyItems() {
  let { scrollYProgress } = useScroll();
  let fig = useTransform(scrollYProgress, [0, 0.5], ["0%", "40%"]);
  let mus = useTransform(scrollYProgress, [0, 0.5], ["0%", "80%"]);
  let app = useTransform(scrollYProgress, [0, 0.5], ["0%", "75%"]);
  let mock = useTransform(scrollYProgress, [0, 0.5], ["0%", "90%"]);
  let web = useTransform(scrollYProgress, [0, 0.5], ["0%", "110%"]);
  let ui = useTransform(scrollYProgress, [0, 0.5], ["0%", "30%"]);
  return (
    <AnimatePresence>
      <div className="w-[90%] lg:w-unset grid grid-cols-3 gap-4 grid-flow-row  ">
        <motion.div
          style={{ y: fig }}
          className="row-span-3 bg-sec-theme rounded-xl flex flex-col items-center justify-center border-2 border-backgroundDark dark:border-borders-dark border-b-4 lg:text-4xl"
        >
          <span className="flex items-center ">
            {" "}
            <FigmaLogo />
            Figma
          </span>
          <span className={`${annie.className} lg:text-xl`}>Its love !</span>
        </motion.div>
        <motion.div style={{ y: app }} className="col-span-2">
          <SmallBanners
            content="Mobile Apps"
            icon={<AppStoreLogo />}
            randomNumber={1}
          />
        </motion.div>
        <motion.div style={{ y: mock }} className="row-span-2">
          <SmallBanners
            content="Mockups"
            icon={<DeviceMobile />}
            randomNumber={3}
          />
        </motion.div>
        <motion.div
          style={{ y: ui }}
          className="rounded-xl row-span-4 border-2  border-backgroundDark dark:border-borders-dark border-b-4  bg-main-theme flex items-center justify-center flex-col"
        >
          <Image
            src="/trans.svg"
            height={90}
            width={90}
            alt="uiuxwithdiptanshu"
            className="aspect-square"
          />
          <span>Let&apos;s do it !</span>
        </motion.div>
        <motion.div style={{ y: mus }} className="col-span-2 ">
          <SmallBanners content="Music" icon={<MusicNote />} randomNumber={3} />
        </motion.div>
        <motion.div style={{ y: web }} className="col-span-2">
          <SmallBanners
            content="Websites"
            icon={<Aperture />}
            randomNumber={2}
          />
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
