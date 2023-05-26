"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";

const queryClient = new QueryClient();
export default function Providers({ children }: React.PropsWithChildren) {
  useEffect(() => {
    const theme = localStorage.getItem("themeMode");
    if (theme === "true") {
      document.body.classList.add("dark");
    }
  }, []);
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
