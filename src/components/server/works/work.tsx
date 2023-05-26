import React from "react";
import Workcard from "./workcard";

export default function Work() {
  return (
    <div className="w-full lg:p-10">
      <div className="w-full flex justify-between items-center">
        <div className="w-full flex flex-col ">
          <span>Some of my </span>
          <span className="lg:text-3xl font-bold">Selected Works</span>
        </div>
        <button className="bg-backgroundDark w-auto rounded-md flex lg:p-2 lg:px-4 text-backgroundLight justify-center">
          <span>More</span>
        </button>
      </div>

      {/* render cards  */}
      <Workcard />
    </div>
  );
}
