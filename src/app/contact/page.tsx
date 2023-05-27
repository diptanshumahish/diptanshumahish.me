"use client";
import React from "react";
import { ClimbingBoxLoader } from "react-spinners";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-backgroundLight dark:bg-backgroundDark text-backgroundDark dark:text-backgroundLight">
      <span className="flex flex-col items-center gap-4">
        <ClimbingBoxLoader color="#EA899A" />
        Under Construction, come back soon again
        <Link
          href="/"
          className="bg-backgroundDark dark:bg-backgroundLight px-2 py-1 rounded-md text-backgroundLight dark:text-backgroundDark"
        >
          Back to main{" "}
        </Link>
      </span>
    </div>
  );
}
