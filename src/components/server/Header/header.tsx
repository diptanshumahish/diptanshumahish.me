import { FanctText, FancyItems, FloatingSocials } from "@/components";
import React from "react";
import { Anonymous_Pro } from "next/font/google";
const annie = Anonymous_Pro({ subsets: ["latin"], weight: "400" });
import Link from "next/link";
import ParralBack from "./parralBack";

export default function Header() {
  return (
    <div className="grid overflow-hidden  lg:grid-cols-2 md:grid-cols-1 min-h-[800px] lg:h-[92vh]  border-b border-backgroundDark dark:border-borders-dark ">
      <div className="overflow-hidden relative  border-0 lg:border-r border-b lg:border-b-0  h-[100vh] lg:h-auto dark:border-borders-dark  flex w-[100vw] lg:w-unset items-center justify-center flex-col gap-2 ">
        <div className="absolute lg:top-0 lg:left-0 top-20 left-0 ">
          <span className="lg:p-10 p-4 flex flex-col text-backgroundDark dark:text-backgroundLight ">
            <span className="lg:text-3xl text-xl font-bold tracking-tight">
              Great ! you made it till here
            </span>
            <span className={`${annie.className} lg:text-2xl text-lg`}>
              Hope you like it here :)
            </span>
          </span>
        </div>
        <FancyItems />
        <FanctText content='"All bout me !"' />
        <div className="absolute lg:bottom-0 lg:right-0 bottom-20 right-10 ">
          <span className="lg:p-10 flex flex-col items-end   text-backgroundDark dark:text-backgroundLight ">
            <span className="lg:text-3xl text-xl  font-bold tracking-tight">
              Wanna work with me?
            </span>
            <span className={`${annie.className} lg:text-2xl text-lg`}>
              Drop a Hi maybe?{" "}
              <Link
                href="/"
                className="bg-main-theme px-4 text-backgroundDark rounded-md border border-backgroundDark hover:animate-bounce"
              >
                Here !
              </Link>
            </span>
          </span>
        </div>
      </div>
      <div className="h-[100vh] lg:h-auto relative flex p-10 items-center justify-start ">
        <FloatingSocials />
        <ParralBack />
        <div className="z-10 text-backgroundDark dark:text-backgroundLight flex flex-col lg:text-3xl text-[20px] lg:leading-tight">
          Hey there, I&apos;m{" "}
          <h1>
            <Link className="lg:text-4xl text-[30px]  font-bold" href="/">
              Diptanshu Mahish.
            </Link>
          </h1>
          <p className={`${annie.className} lg:text-xl text-md lg:py-2`}>
            A <span className="underline">Front-end developer</span>, a{" "}
            <span className="underline">UI/UX designer</span>, a musician, a
            digital artist and much more. Besides coding all day, I read story
            books, listen to music or maybe sometimes you can find me out
            roaming here and there.
          </p>
        </div>
      </div>
    </div>
  );
}
