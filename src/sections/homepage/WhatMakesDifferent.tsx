import UspCard from "@/components/card/UspCard";
import { UspCardType, WhatMakesUsDifferentSectionData } from "@/types";
import Link from "next/link";

export default function WhatMakesDifferent({
  heading,
  subheading,
  ctaText,
  ctaLink,
  cards,
}: WhatMakesUsDifferentSectionData) {
  return (
    <div
      className="flex justify-center bg-white p-16"
      style={{ boxShadow: "0px 0px 15px 0px rgba(0, 0, 0, 0.07) inset" }}
    >
      <section
        className="flex flex-col gap-10 w-[72rem]"
        aria-label="Travel by Theme - Curated India Travel Packages"
      >
        {/* Header Section with Navigation Buttons */}
        <div className="grid grid-cols-12">
          <div className="flex flex-col gap-2 col-span-9">
            <h2 className="font-bold text-william text-4xl">{heading}</h2>
            <p className="text-scorpion text-xl">{subheading}</p>
          </div>
          <div className="flex justify-center items-center col-span-1 col-start-12">
            <Link
              href={ctaLink}
              className="bg-bigstone hover:bg-bigstone/90 px-7 py-3 rounded-3xl h-12 text-white text-nowrap transition-all duration-300"
            >
              {ctaText}
            </Link>
          </div>
        </div>

        <div className="flex justify-center items-center gap-6">
          {cards.map((card: UspCardType, index: number) => (
            <UspCard key={index} data={card} />
          ))}
        </div>
      </section>
    </div>
  );
}
