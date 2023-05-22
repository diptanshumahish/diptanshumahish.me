"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, Moon, Sun } from "@phosphor-icons/react";
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
    <nav className=" transition-colors grid grid-cols-navMob lg:grid-cols-navDesk  bg-backgroundLight border-backgroundDark  border-0 border-b dark:bg-backgroundDark dark:border-borders-dark text-backgroundDark dark:text-backgroundLight ">
      {/* logo and branding  */}
      <div className="flex  items-center lg:justify-center border-backgroundDark dark:border-borders-dark border-0  border-r py-2 lg:px-4">
        <div className="flex items-center  lg:gap-5 gap-2">
          <Image
            src="/trans.svg"
            height={60}
            width={60}
            alt="uiuxwithdiptanshu"
            className="aspect-square lg:h-[60px] h-[30px] dark:invert"
          />
          <Link href="/" className="lg:text-2xl ">
            UIUXwithdiptanshu
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
        className="grid w-full text-[12px] md:text-[18px]  "
        style={{ gridTemplateColumns: "1fr 1fr 1fr" }}
      >
        <button
          onClick={() => {
            if (localStorage.getItem("themeMode") === "true") {
              window.document.body.classList.remove("dark");
              localStorage.setItem("themeMode", "false");
            } else if (localStorage.getItem("themeMode") === "false") {
              window.document.body.classList.add("dark");
              localStorage.setItem("themeMode", "true");
            }

            if (localStorage.getItem("themeMode") === null) {
              window.document.body.classList.add("dark");
              localStorage.setItem("themeMode", "true");
            }
          }}
          className="border-backgroundDark dark:border-borders-dark border-0 hover:bg-main-theme  border-r flex flex-col items-center justify-center "
        >
          <Sun className="hidden lg:block" />
          <span>Theme</span>
        </button>
        <button className="border-backgroundDark dark:border-borders-dark border-0 hover:bg-main-theme  border-r flex flex-col items-center justify-center ">
          <Check className="hidden lg:block" />
          <span>Works</span>
        </button>
        <button className="hover:bg-main-theme">Contact</button>
      </div>
    </nav>
  );
}
