import React from "react";
import TimeLineCard from "./TimeLineCard";

export default function Timeline() {
  return (
    <div
      className="w-full lg:px-[20%] mt-5 lg:py-10 py-5   grid lg:border dark:border-borders-dark rounded-md"
      style={{ gridTemplateColumns: "5fr 0.5fr 5fr" }}
    >
      <>
        <span />
        <span className="text-center tracking-wider">PRESENT</span>
        <span />
      </>
      <TimeLineCard
        data="Front-end Intern at Fyipen "
        date="April 2023 - Present"
        isEdu={false}
      />
      <TimeLineCard
        data="Pursuing my B.Tech in Computer Science and Engineering at Academy Of Technology, Adisapatagram "
        date="November, 2021 - Present "
        grades="9.5"
        right={true}
      />
      <TimeLineCard
        data="Done with my High School (class 12), from Delhi Public School, North Kolkata, under the CBSE Board"
        date="June 2021"
        grades="93% (science stream)"
      />
      <TimeLineCard
        data="Done with my Seconday School (class 10), from Delhi Public School, North Kolkata, under the CBSE Board"
        date="March 2019"
        grades="95%"
        right={true}
      />
      <>
        <span />
        <span className="text-center tracking-wider">PAST</span>
        <span />
      </>
    </div>
  );
}
