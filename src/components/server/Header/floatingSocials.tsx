"use client";
import React from "react";
import Link from "next/link";
import { InstagramLogo, GithubLogo, MediumLogo } from "@phosphor-icons/react";
import { Annie_Use_Your_Telescope } from "next/font/google";
const annie = Annie_Use_Your_Telescope({ subsets: ["latin"], weight: "400" });
export default function FloatingSocials() {
  return (
    <div
      className={`${annie.className} z-50 bg-backgroundLight  fixed lg:top-28 top-14 right-2 lg:right-10 flex border py-2 px-4 border-b-2 lg:text-[24px] text-[12px] rounded-md gap-6 `}
    >
      <Link href="" className="flex flex-col items-center ">
        <InstagramLogo />
        Insta
      </Link>

      <Link href="" className="flex flex-col items-center">
        <GithubLogo />
        Github
      </Link>
      <Link href="" className="flex flex-col items-center">
        <MediumLogo />
        Medium
      </Link>
    </div>
  );
}
