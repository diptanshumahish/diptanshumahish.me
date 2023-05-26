"use client";
import React from "react";
import Link from "next/link";
import { LinkSimple } from "@phosphor-icons/react";
interface Props {
  date: string;
  link: string;
}

export default function LinkItems({ link, date }: Props) {
  return (
    <div className="w-full flex justify-between items-center lg:text-lg text-xs">
      <Link
        href={link}
        className="bg-backgroundLight dark:bg-backgroundDark dark:text-backgroundLight flex items-center w-fit text-backgroundDark px-2 py-1 rounded-md gap-2"
      >
        <span>Live link</span>
        <LinkSimple />
      </Link>
      <span>{date}</span>
    </div>
  );
}
