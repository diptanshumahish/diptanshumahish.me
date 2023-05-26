import React from "react";
import WorkCards from "./workCards";

export default function Work() {
  return (
    <div className="w-full lg:p-10 p-5 flex flex-col gap-4 text-backgroundDark dark:text-backgroundLight">
      <div className="w-full flex justify-between items-center">
        <div className="w-full flex flex-col ">
          <span>Some of my </span>
          <span className="lg:text-3xl font-bold">Selected Works</span>
        </div>
        <button className="bg-backgroundDark w-auto rounded-md flex lg:p-2 lg:px-4 p-2 text-backgroundLight justify-center">
          <span>More</span>
        </button>
      </div>

      {/* render cards  */}
      <WorkCards
        cards={[
          {
            name: "Warrior's Group Website",
            date: "28th September, 2022",
            details:
              "The official website Of Warriors's Group LLC. This website is meant to attract potential customers needing staffing and recruitment solutions to get their technical and non technical solutions with  ease.",
            imageLink: "/trans.svg",
            liveLink: "",
            technologies: "Nextjs,CSS, Formsubmit",
          },
          {
            name: "Warrior's Group Website",
            date: "28th September, 2022",
            details:
              "The official website Of Warriors's Group LLC. This website is meant to attract potential customers needing staffing and recruitment solutions to get their technical and non technical solutions with  ease.",
            imageLink: "/trans.svg",
            liveLink: "",
            technologies: "Nextjs,CSS, Formsubmit",
          },
          {
            name: "Warrior's Group Website",
            date: "28th September, 2022",
            details:
              "The official website Of Warriors's Group LLC. This website is meant to attract potential customers needing staffing and recruitment solutions to get their technical and non technical solutions with  ease.",
            imageLink: "/trans.svg",
            liveLink: "",
            technologies: "Nextjs,CSS, Formsubmit",
          },
          {
            name: "Warrior's Group Website",
            date: "28th September, 2022",
            details:
              "The official website Of Warriors's Group LLC. This website is meant to attract potential customers needing staffing and recruitment solutions to get their technical and non technical solutions with  ease.",
            imageLink: "/trans.svg",
            liveLink: "",
            technologies: "Nextjs,CSS, Formsubmit",
          },
        ]}
      />
    </div>
  );
}
