" use client";
import React from "react";
import FixedNavbar from "../client/fixedNavbar";

export default function NavbarWrapper() {
  return (
    <div className="z-50 fixed top-0 left-0 right-0   w-full  ">
      <FixedNavbar />
    </div>
  );
}
