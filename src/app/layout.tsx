import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Peacock Vacations",
  description: "Peacock Vacations - Your Gateway to Exotic Travel Experiences",
  icons: {
    icon: "/icons/peacock-vacations-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
