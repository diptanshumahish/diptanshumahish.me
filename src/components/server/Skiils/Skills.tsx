import React from "react";
import { Annie_Use_Your_Telescope } from "next/font/google";
import TechSkills from "./TechSkills";
const annie = Annie_Use_Your_Telescope({ subsets: ["latin"], weight: "400" });
import Image from "next/image";

export default function Skills() {
  return (
    <div className="w-full relative  lg:p-10 p-5 flex flex-col gap-4 text-backgroundDark dark:text-backgroundLight">
      <div className="w-full flex flex-col ">
        <span className="w-[20%] lg:hidden h-[2px] rounded-md bg-backgroundDark dark:bg-backgroundLight my-2"></span>
        <span>Here are my </span>
        <span className="text-4xl font-bold">Skills (Tech / Non Tech)</span>
        <span className={`${annie.className} lg:text-2xl`}>
          &quot;I just get the job done!&quot;
        </span>
      </div>

      <div className="w-full flex items-center">
        <div>
          <div className="py-4">
            <span className="lg:text-xl">Technical Skills</span>
            <TechSkills
              skills={[
                "NEXT JS",
                "REACT JS",
                "FIGMA",
                "JAVASCRIPT",
                "VANILLA CSS",
                "HTML",
                "TAILWIND",
                "GIT",
                "GITHUB",
              ]}
            />
          </div>
          <div className="py-2">
            <span className="lg:text-xl">Non Technical Skills</span>
            <TechSkills
              isNonTech={true}
              skills={[
                "Public Speaking",
                "Teamwork",
                "Fluent English",
                "Writings",
              ]}
            />
          </div>
        </div>
        <Image
          src="/logos/randomLogos.svg"
          width={600}
          height={600}
          alt="random brand logos"
          className="lg:w-[40%] lg
          :opacity-100 opacity-20  z-0 h-[80%] absolute right-0 dark:invert object-cover bg-fixed"
        />
      </div>
    </div>
  );
}
