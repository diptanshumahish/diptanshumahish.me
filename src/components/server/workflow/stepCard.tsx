import React from "react";
import { Annie_Use_Your_Telescope } from "next/font/google";
const annie = Annie_Use_Your_Telescope({ subsets: ["latin"], weight: "400" });
import Image from "next/image";
interface Props {}

export default function StepCard() {
  return (
    <div className="w-full flex flex-col gap-4 border border-backgroundDark dark:border-borders-dark rounded-lg p-8">
      <div className="w-full flex justify-between items-center border-b border-backgroundLight dark:border-borders-dark  pb-5">
        <div className="bg-backgroundDark dark:bg-backgroundLight text-xl w-fit py-4 px-16 text-backgroundLight dark:text-backgroundDark rounded-lg">
          Step 1.
        </div>
        <div className=" flex flex-col items-end text-backgroundDark dark:text-backgroundLight">
          <span className="font-bold text-2xl">Task Collection</span>
          <span className={`${annie.className} text-xl`}>
            This is where it all starts
          </span>
        </div>
      </div>
      <Image
        src="/step1.svg"
        width={1920}
        height={200}
        alt="step 1"
        className="w-full h-auto dark:invert "
      />
      <hr className="text-backgroundDark dark:text-borders-dark" />
      <div className="text-lg text-backgroundDark dark:text-backgroundLight">
        This is one of the{" "}
        <span className="font-semibold underline">
          most important yet overlooked steps
        </span>
        , when working with any project, I believe understanding the
        client/project requirements is a major part of a sucessful project. Also
        I make sure that I give ample time to this before I start with a
        project. After all quality over quantity ✨
      </div>
    </div>
  );
}
