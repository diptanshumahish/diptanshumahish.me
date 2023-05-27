import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full bg-backgroundLight dark:bg-backgroundDark text-backgroundDark dark:text-backgroundLight border-t border-backgroundDark dark:border-borders-dark lg:p-10 p-5 flex flex-col transition-colors">
      <span className="text-center w-full lg:text-lg tracking-wide">
        &copy; Diptanshu mahish 2023.
      </span>
      <div className="p-5 border rounded-md flex flex-col gap-4">
        <span className="flex flex-col leading-6">
          interested in{" "}
          <span className="lg:text-4xl text-2xl font-bold">
            hiring me as an intern or full-time?
          </span>{" "}
          <Link
            href=""
            className="bg-main-theme px-2 py-1 rounded-md border w-fit lg:text-xl dark:text-backgroundDark"
          >
            Contact me here
          </Link>
        </span>

        <span className="flex flex-col leading-6">
          Wanna get your{" "}
          <span className="lg:text-4xl text-2xl font-bold">
            website / app built through me?
          </span>
          <Link
            href=""
            className="bg-sec-theme px-2 py-1 rounded-md border w-fit lg:text-xl dark:text-backgroundDark"
          >
            Connect now
          </Link>
        </span>
        <span className="flex flex-col lg:w-[40%] opacity-90">
          <span className="text-xl">About this website </span>
          <span className="text-sm">
            I built this website entirely using{" "}
            <span className="dark:text-main-theme font-bold underline text-backgroundDark">
              NextJS
            </span>
            , For styling I have used{" "}
            <span className="dark:text-main-theme font-bold underline text-backgroundDark">
              Tailwind CSS
            </span>
            . All forms in this website are sent through{" "}
            <span className="dark:text-main-theme font-bold underline text-backgroundDark">
              Formsubmit
            </span>
            . I did the prototyping and designing using{" "}
            <span className="dark:text-main-theme font-bold underline text-backgroundDark">
              Figma
            </span>{" "}
            and the hosting is thorugh{" "}
            <span className="dark:text-main-theme font-bold underline text-backgroundDark">
              Vercel
            </span>
          </span>
        </span>
        <span>By the way thanks for coming here :) Hope you liked it.</span>
      </div>
    </div>
  );
}
