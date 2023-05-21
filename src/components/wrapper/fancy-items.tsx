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
import { Annie_Use_Your_Telescope } from "next/font/google";
const annie = Annie_Use_Your_Telescope({ subsets: ["latin"], weight: "400" });
import {
  Aperture,
  AppStoreLogo,
  DeviceMobile,
  FigmaLogo,
  MusicNote,
} from "@phosphor-icons/react";

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
          className="row-span-3 bg-sec-theme rounded-xl flex flex-col items-center justify-center border-2 border-backgroundDark lg:text-4xl"
        >
          <span className="flex items-center">
            {" "}
            <FigmaLogo />
            Figma
          </span>
          <span className={`${annie.className} text-xl`}>Its love !</span>
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
          className="rounded-xl row-span-4 border-2  border-backgroundDark bg-main-theme flex items-center justify-center flex-col"
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
            randomNumber={4}
          />
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
