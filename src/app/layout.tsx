import { Metadata } from "next";
import "../styles/globals.css";
import { Anybody } from "next/font/google";
import { NavbarWrapper,Footer } from "@/components";
import Providers from "../api-fetch/providers";


const anyobody = Anybody({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Diptanshu Mahish",
  description: "Diptanshu Mahish | UI/UX",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
  },
  appleWebApp: true,

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    
  
  return (
    <html lang="en">
      <body className={`${anyobody.className} w-full   `}>
        <Providers>
          <NavbarWrapper />
          <div className="lg:pt-[76px] pt-[46px] ">{children}</div>
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
