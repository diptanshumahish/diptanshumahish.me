import { FanctText, FancyItems, FloatingSocials } from "@/components";
import React from "react";
import { Annie_Use_Your_Telescope } from "next/font/google";
const annie = Annie_Use_Your_Telescope({ subsets: ["latin"], weight: "400" });
import Link from "next/link";
import ParralBack from "./parralBack";
import DesParralBack from "./desParBack";

export default function Header() {
  return (
    <div className="grid overflow-hidden z-0 lg:grid-cols-2 md:grid-cols-1 min-h-[800px] lg:h-[92vh]  border-b ">
      <div className="overflow-hidden relative  border-0 lg:border-r border-b lg:border-b-0  h-[100vh] lg:h-auto dark:border-backgroundLight  flex w-[100vw] lg:w-unset items-center justify-center flex-col gap-2 ">
        <DesParralBack />
        <div className="absolute lg:top-0 lg:left-0 top-20 left-0 ">
          <span className="lg:p-10 p-4 flex flex-col ">
            <span className="lg:text-6xl text-xl font-bold tracking-tight">
              Some Designing?
            </span>
            <span className={`${annie.className} lg:text-2xl text-lg`}>
              This text is just for looking cool
            </span>
          </span>
        </div>
        <FancyItems />
        <FanctText content='"All bout me !"' />
        <div className="absolute lg:bottom-0 lg:right-0 bottom-20 right-10 ">
          <span className="lg:p-10 flex flex-col items-end ">
            <span className="lg:text-6xl text-xl  font-bold tracking-tight">
              Wanna work with me?
            </span>
            <span className={`${annie.className} lg:text-2xl text-xl`}>
              Drop a Hi maybe?{" "}
              <Link
                href="/"
                className="bg-main-theme px-4 rounded-md border border-backgroundDark hover:animate-bounce"
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
        <div className="flex flex-col lg:text-[50px] text-[20px] lg:leading-tight">
          <span>Hey there,</span>
          <span>
            It&apos;s{" "}
            <Link className="lg:text-[90px] text-[30px]  font-bold" href="">
              <span className="border border-main-theme  px-6 py-2 rounded-md border-l-4 border-b-4">
                Diptanshu
              </span>{" "}
              Mahish.
            </Link>
          </span>
          <span className={`${annie.className} lg:text-3xl text-xl`}>
            a UI/UX designer, Web and App developer and also a musician.
          </span>
        </div>
      </div>
    </div>
  );
}
