" use client";
import React from "react";
import FixedNavbar from "../client/fixedNavbar";

export default function NavbarWrapper() {
  return (
    <div className=" fixed top-0 left-0 right-0  w-full z-50 ">
      <FixedNavbar />
    </div>
  );
}
