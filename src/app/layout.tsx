import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Peacock Vacations",
  description: "Peacock Vacations - Your Gateway to Exotic Travel Experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/icons/peacock-vacations-logo.svg" />
      <body>{children}</body>
    </html>
  );
}
