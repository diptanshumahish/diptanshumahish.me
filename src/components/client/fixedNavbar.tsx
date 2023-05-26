"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  Check,
  Handshake,
  List,
  Sun,
  XCircle,
} from "@phosphor-icons/react";
import { apiCall, defaultQuote } from "@/api-fetch/quotesApi";
import { useQuery } from "@tanstack/react-query";
import Hydrate from "@/api-fetch/hydrateClient";

export default function FixedNavbar() {
  const { data, status } = useQuery({
    queryKey: ["quotes"],
    queryFn: apiCall,
    initialData: defaultQuote,
  });

  if (status === "error") {
    return <p>error</p>;
  }

  return (
    <>
      {/* mobile navbar */}
      <div
        id="mobNav"
        className="fixed transition-all hidden inset-0 h-screen bg-backgroundLight dark:bg-backgroundDark dark:text-backgroundLight text-backgroundDark z-50 p-5  flex-col gap-4"
      >
        <div className="justify-between w-full flex items-center text-[20px]">
          <span>Actions</span>
          <button
            onClick={() => {
              document.getElementById("mobNav")?.classList.add("hidden");
            }}
          >
            <XCircle />
          </button>
        </div>
        <div className="flex flex-col ">
          <button
            className="flex justify-between w-full items-center border-y p-2"
            onClick={() => {
              if (localStorage.getItem("themeMode") === "true") {
                document.body.classList.remove("dark");
                localStorage.setItem("themeMode", "false");
              } else if (localStorage.getItem("themeMode") === "false") {
                window.document.body.classList.add("dark");
                localStorage.setItem("themeMode", "true");
              }

              if (localStorage.getItem("themeMode") === null) {
                document.body.classList.add("dark");
                localStorage.setItem("themeMode", "true");
              }
            }}
          >
            <span>Change Theme</span>
            <span>
              <Sun />
            </span>
          </button>
          <button className="flex justify-between w-full items-center border-b p-2">
            <span>My works</span>
            <span>
              <Briefcase />
            </span>
          </button>
          <button className="flex justify-between w-full items-center border-b p-2">
            <span>Contact Me</span>
            <span>
              <Handshake />
            </span>
          </button>
        </div>
      </div>
      <nav className=" transition-colors grid grid-cols-navMob lg:grid-cols-navDesk  bg-backgroundLight border-backgroundDark  border-0 border-b dark:bg-backgroundDark dark:border-borders-dark text-backgroundDark dark:text-backgroundLight ">
        {/* logo and branding  */}
        <div className="flex  items-center lg:justify-center border-backgroundDark dark:border-borders-dark border-0  border-r py-4  px-4 ">
          <div className="flex items-center  lg:gap-5 gap-2">
            <Image
              src="/trans.svg"
              height={60}
              width={60}
              alt="uiuxwithdiptanshu"
              className="aspect-square lg:h-[60px] h-[30px] w-auto dark:invert"
            />
            <Link href="/" className="lg:text-2xl ">
              Diptanshu Mahish
            </Link>
          </div>
        </div>
        {/* quote of the day  */}

        <Hydrate>
          <div className="p-2  px-4 hidden lg:flex justify-between items-center border-backgroundDark border-0  border-r  dark:border-borders-dark">
            <span className="text-lg">{JSON.stringify(data?.[0].content)}</span>
            <span className="flex flex-col text-right">
              <span className="font-semibold">quote of the day</span>
              <span className=" text-[12px]">{data?.[0].author}</span>
            </span>
          </div>
        </Hydrate>

        {/* action buttons  */}
        <div
          className="lg:grid w-full text-[12px] md:text-[18px] hidden  "
          style={{ gridTemplateColumns: "1fr 1fr 1fr" }}
        >
          <button
            onClick={() => {
              if (localStorage.getItem("themeMode") === "true") {
                document.body.classList.remove("dark");
                localStorage.setItem("themeMode", "false");
              } else if (localStorage.getItem("themeMode") === "false") {
                window.document.body.classList.add("dark");
                localStorage.setItem("themeMode", "true");
              }

              if (localStorage.getItem("themeMode") === null) {
                document.body.classList.add("dark");
                localStorage.setItem("themeMode", "true");
              }
            }}
            className="border-backgroundDark dark:border-borders-dark border-0 hover:bg-main-theme  border-r flex flex-col items-center justify-center "
          >
            <Sun className="hidden lg:block dark:rotate-90 transition-transform" />
            <span>Theme</span>
          </button>
          <button className="border-backgroundDark dark:border-borders-dark border-0 hover:bg-main-theme  border-r flex flex-col items-center justify-center ">
            <Check className="hidden lg:block" />
            <span>Works</span>
          </button>
          <button className="hover:bg-main-theme">Contact</button>
        </div>
        <button
          className="flex items-center justify-center"
          onClick={() => {
            document.getElementById("mobNav")?.classList.remove("hidden");
            document.getElementById("mobNav")?.classList.add("flex");
          }}
        >
          <List />
        </button>
      </nav>
    </>
  );
}
