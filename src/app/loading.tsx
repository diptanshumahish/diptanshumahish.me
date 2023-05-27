import React from "react";
import BarLoader from "react-spinners/BarLoader";

export default function Loading() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-backgroundLight dark:bg-backgroundDark">
      <BarLoader className="dark:invert" />
    </div>
  );
}
