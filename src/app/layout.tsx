import { Metadata } from "next";
import "../styles/globals.css";
import { Anybody } from "next/font/google";
import { NavbarWrapper, Footer } from "@/components";
import Providers from "../api-fetch/providers";

const anyobody = Anybody({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Diptanshu Mahish | Portfolio",
  description:
    "Diptanshu Mahish | Portfolio website. I'm a web and app development enthusiast. ",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
  },
  authors: [
    { name: "Diptanshu Mahish", url: "https://heydiptanshu.vercel.app" },
  ],
  category: "Portfolio Websites",
  themeColor: "#EA899A",
  abstract:
    "Diptanshu Mahish | Portfolio Website | UI/UX | Front end developer | Flutter | NextJS",
  keywords: [
    "Diptanshu Mahish",
    "diptanshumahish",
    "diptanshumahish2016@gmail.com",
    "Dip",
    "UI UX Diptanshu",
    "Nextjs Diptanshu Mahish",
  ],
  robots: { follow: true },
  viewport: { width: "device-width", initialScale: 1 },
  assets: "https://heydiptanshu.vercel.app/banner.png",
  twitter: {
    card: "summary_large_image",
    site: "https://heydiptanshu.vercel.app",
    creator: "@DiptanshuMahis5",
    images: "https://heydiptanshu.vercel.app/banner.png",
  },

  classification: "Portfolio Website",
  appleWebApp: true,
  applicationName: "Diptanshu Mahish | Portfolio",
  openGraph: {
    type: "website",
    countryName: "India",
    emails: ["diptanshumahish2016@gmail.com"],
    title: "Diptanshu Mahish | Portfolio",
    url: "https://heydiptanshu.vercel.app",
    siteName: "Diptanshu Mahish",
    images: ["https://heydiptanshu.vercel.app/banner.png"],
    description:
      "Diptanshu Mahish | Portfolio website. I'm a web and app development enthusiast. ",
    determiner: "the",
    locale: "IN",
    alternateLocale: "US",
  },
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
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
