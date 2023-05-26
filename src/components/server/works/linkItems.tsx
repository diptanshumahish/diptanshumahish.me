"use client";
import React from "react";
import Link from "next/link";
import { LinkSimple } from "@phosphor-icons/react";

export default function LinkItems() {
  return (
    <div className="w-full flex justify-between items-center lg:text-md text-xs">
      <Link
        href=""
        className="bg-backgroundLight flex items-center w-fit text-backgroundDark px-2 py-1 rounded-sm gap-2"
      >
        <span>Live link</span>
        <LinkSimple />
      </Link>
      <span>7th October, 2022</span>
    </div>
  );
}
