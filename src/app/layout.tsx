import type { Metadata } from "next";
import "./globals.css";
import localfont from "next/font/local";
import { Inter, Albert_Sans, DM_Sans } from "next/font/google";
import Footer from "@/sections/global/Footer";
import StickyNavWrapper from "@/sections/global/StickyNavWrapper";

const clashDisplayFont = localfont({
  src: "/fonts/clash-display/ClashDisplay-Variable.ttf",
  weight: "500",
  variable: "--font-clashdisplay",
});
const cabinetGroteskFont = localfont({
  src: "/fonts/cabinet-grotesk/CabinetGrotesk-Variable.ttf",
  weight: "500",
  variable: "--font-cabinetgrotesk",
});
const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const albertSansFont = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albertsans",
});
const dmSansFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmsans",
});
export const metadata: Metadata = {
  title: "Peacock Vacations",
  description: "Peacock Vacations - Your Gateway to Exotic Travel Experiences",
  icons: {
    icon: "/peacock-vacations.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${clashDisplayFont.variable} ${cabinetGroteskFont.variable} ${interFont.variable} ${albertSansFont.variable} ${dmSansFont.variable}`}
      >
        <StickyNavWrapper />
        {children}
        <Footer />
      </body>
    </html>
  );
}
