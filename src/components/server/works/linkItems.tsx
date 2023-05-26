"use client";
import React from "react";
import Link from "next/link";
import { CaretRight, LinkSimple } from "@phosphor-icons/react";
interface Props {
  date: string;
  link: string;
}

export default function LinkItems({ link, date }: Props) {
  return (
    <div className="w-full flex justify-between items-center lg:text-lg text-xs">
      <Link
        href={link}
        className="bg-sec-theme border flex items-center w-fit text-backgroundDark px-2 py-1 rounded-md gap-2"
      >
        <span>Live link</span>
        <CaretRight/>
      </Link>
      <span>{date}</span>
    </div>
  );
}
