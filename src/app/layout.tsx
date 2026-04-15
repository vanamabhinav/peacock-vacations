import type { Metadata } from "next";
import "./globals.css";
import { Kalnia, Poppins, Albert_Sans } from "next/font/google";
import Footer from "@/sections/global/Footer";
import StickyNavWrapper from "@/sections/global/StickyNavWrapper";
import { CurrencyProvider } from "@/contexts/CurrencyContext";

const kalniaFont = Kalnia({
  subsets: ["latin"],
  variable: "--font-kalnia",
  weight: ["400", "500", "600", "700"],
});

const poppinsFont = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const albertSansFont = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albertsans",
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
        className={`${kalniaFont.variable} ${poppinsFont.variable} ${albertSansFont.variable} font-albertsans antialiased text-[#345b63]`}
      >
        <CurrencyProvider>
          <StickyNavWrapper />
          {children}
          <Footer />
        </CurrencyProvider>
      </body>
    </html>
  );
}
