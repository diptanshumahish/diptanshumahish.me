import React from "react";
import { Annie_Use_Your_Telescope } from "next/font/google";
import StepCard from "../server/workflow/stepCard";
const annie = Annie_Use_Your_Telescope({ subsets: ["latin"], weight: "400" });

export default function Workflow() {
  return (
    <div className="w-full lg:p-10 p-5 ">
      <span className="flex flex-col leading-6 text-backgroundDark dark:text-backgroundLight">
        <span className="w-[20%] lg:hidden h-[2px] rounded-md bg-backgroundDark dark:bg-backgroundLight my-2"></span>

        <span className="text-[16px]">Here&apos;s how my </span>
        <span className="text-4xl font-bold">Workflow looks like</span>
        <span className={`${annie.className} text-xl`}>
          &quot;This is how the magic happens&quot;
        </span>
      </span>

      <div className="w-full py-5 flex flex-col gap-8">
        <StepCard
          stepDet="  This is one of the most important yet overlooked steps , when working
        with any project, I believe understanding the client/project
        requirements is a major part of a sucessful project. Also I make sure
        that I give ample time to this before I start with a project. After all
        quality over quantity ✨"
          stepImage="/step1.svg"
          stepName="Task Collection"
          stepNum={1}
          stepSub="This is where it all begins"
          stepTime="few hours to a day"
          key="work 1"
        />
        <StepCard
          stepDet="If the client has already provided a design layout then I skip this step,
           but if there's a need to make a design, for the UI of the webpage / app then I begin with this step. 
           I generally start by looking up on the web on various reference designs. I take in some ideas and inspiration,
            and then proceed to make an entirely original design for your requirements. After the prototyping is done, you get to see the eyecandy mockups  "
          stepImage="/step2.svg"
          stepName="Designing and wireframing"
          stepNum={2}
          stepSub="The eye candy step!"
          stepTime="few hours to a day/week"
          key="work 2"
        />
        <StepCard
          stepDet="The coding part begins here! I generally use NextJS for websites and Flutter for making my apps.
           Here I mainly work with the front end UI of the page / app. I follow all major and clean principles while
            coding so that your users can get the best and optimised results that they enjoy ^^ "
          stepImage="/step3.svg"
          stepName="Frontend UI"
          stepNum={3}
          stepSub="This is what you see!"
          stepTime="2-3 days, or a few weeks"
          key="work 3"
        />
        <StepCard
          stepDet="Here comes the end of an amazing journey, Here I make minor changes as required, connect the backend
           (if any) and deploy / publish your website / app. You get all the source code files for the enitire projects
            along with all image / video assets."
          stepImage="/step4.svg"
          stepName="Live website / app"
          stepNum={4}
          stepSub="Here we bring your stuff to life!"
          stepTime="2-4 days, or a few weeks"
          key="work 4"
        />
      </div>
    </div>
  );
}
