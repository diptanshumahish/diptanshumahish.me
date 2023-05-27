"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";

const queryClient = new QueryClient();
export default function Providers({ children }: React.PropsWithChildren) {
  var tempScroll: number = 0;
  useEffect(() => {
    const theme = localStorage.getItem("themeMode");
    if (theme === "true") {
      document.body.classList.add("dark");
    }
    window.onscroll = () => {
      var currentScroll = window.scrollY;
      if (tempScroll > currentScroll) {
        document.getElementById("flt")?.classList.remove("hidden");
      } else {
        document.getElementById("flt")?.classList.add("hidden");
      }
      tempScroll = currentScroll;
    };
  }, []);
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
