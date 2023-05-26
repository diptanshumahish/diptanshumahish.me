import React from "react";
import BarLoader from "react-spinners/BarLoader";

export default function Loading() {
  return (
    <div className="w-[100vh] h-[100vh] flex items-center justify-center">
      <div>
        <BarLoader />
      </div>
    </div>
  );
}
