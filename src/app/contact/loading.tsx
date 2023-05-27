import React from "react";
import { DotLoader } from "react-spinners";

export default function loading() {
  return (
    <div className="w-screen h-screen flex items-center justify-center dark:bg-backgroundDark bg-backgroundLight">
      <DotLoader className="dark:invert" />
    </div>
  );
}
