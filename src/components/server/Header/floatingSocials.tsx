"use client";
import React from "react";
import Link from "next/link";
import { InstagramLogo, GithubLogo, MediumLogo } from "@phosphor-icons/react";
import { Anonymous_Pro } from "next/font/google";
const annie = Anonymous_Pro({ subsets: ["latin"], weight: "400" });
export default function FloatingSocials() {
  return (
    <div
      id="flt"
      className={`${annie.className} transition-colors z-40 bg-backgroundLight dark:bg-backgroundDark dark:text-backgroundLight  fixed lg:top-28 top-20 right-2 lg:right-10 flex border py-2 px-4 border-b-2 dark:border-borders-dark lg:text-[20px] text-[12px] rounded-md gap-6 `}
    >
      <Link
        href="https://www.instagram.com/_diptanshuu_/"
        className="flex flex-col items-center "
      >
        <InstagramLogo />
        Insta
      </Link>

      <Link
        href="https://github.com/diptanshumahish"
        className="flex flex-col items-center"
      >
        <GithubLogo />
        Github
      </Link>
      <Link
        href="https://medium.com/@uiuxwithdiptanshu"
        className="flex flex-col items-center"
      >
        <MediumLogo />
        Medium
      </Link>
    </div>
  );
}
