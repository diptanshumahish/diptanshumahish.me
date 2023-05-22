import { Metadata } from "next";
import "../styles/globals.css";
import { Anybody } from "next/font/google";
import { NavbarWrapper } from "@/components";
import Providers from "./providers";

const anyobody = Anybody({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UI / UX with Diptanshu",
  description: "Diptanshu Mahish | UI/UX",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body className={`${anyobody.className} w-full`}>
        <Providers>
          <NavbarWrapper />
          <div className="lg:pt-[76px] pt-[46px] ">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
