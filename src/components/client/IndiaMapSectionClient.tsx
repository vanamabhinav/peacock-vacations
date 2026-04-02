"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";
import IndiaMapComponent from "./IndiaMapComponent";
import { Icon } from "../ui/Icon";
import { IndiaMapSectionData, IndiaMapRegionData } from "@/types";

export type MapType =
  | "all"
  | "delhi"
  | "telangana"
  | "puri"
  | "kerala"
  | "goa"
  | "mumbai";

function IndiaMapSectionClient({ indiaData, regionData }: IndiaMapSectionData) {
  const [activeMap, setActiveMap] = useState<MapType>("all");

  const locations: { id: MapType; label: string }[] = [
    { id: "delhi", label: "Delhi" },
    { id: "goa", label: "Goa" },
    { id: "kerala", label: "Kerala" },
    { id: "telangana", label: "Telangana" },
    { id: "puri", label: "Puri" },
    { id: "mumbai", label: "Mumbai" },
    { id: "all", label: "India" },
  ];

  const map_dimensions: { location: MapType; className: string }[] = [
    { location: "delhi", className: "top-[18%] left-[34%]  w-[30%] h-[10%]" },
    { location: "puri", className: "top-[52%] left-[60%]  w-[22%] h-[14%]" },
    {
      location: "telangana",
      className: "top-[62%] left-[40%]  w-[28%] h-[14%]",
    },
    {
      location: "goa",
      className: "top-[68%] left-[10%]  w-[16%] h-[10%]",
    },
    {
      location: "mumbai",
      className: "top-[54%] left-[6%]  w-[16%] h-[10%]",
    },
    {
      location: "kerala",
      className: "top-[90%] left-[30%]  w-[24%] h-[10%]",
    },
  ];

  const handleMapClick = (location: MapType) => {
    setActiveMap(location);
  };

  const cardData: IndiaMapRegionData | undefined = regionData[activeMap];

  return (
    <div className="flex flex-col gap-6 mx-auto w-full max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-7xl font-albertsans">
      {/* Mobile Heading and Tiles */}
      <div className="flex flex-col gap-4">
        <h2 className="md:hidden font-black text-[#1a3642] text-2xl">Know More Info</h2>
        <div className="flex flex-wrap gap-2 md:hidden">
          {locations.map((loc) => (
            <button
              key={loc.id}
              onClick={() => setActiveMap(loc.id)}
              className={twMerge(
                "px-5 py-2 rounded-full text-sm font-bold transition-all border",
                activeMap === loc.id
                  ? loc.id === "all" ? "bg-[#ffc77e] text-[#1a3642] border-[#ffc77e]" : "bg-white text-[#345b63] border-[#345b63]"
                  : "bg-[#345b63] text-white border-[#345b63]"
              )}
            >
              {loc.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 bg-white md:p-8 rounded-[20px] w-full gap-8">
        {/* Desktop Map - hidden on mobile, will show below content */}
        <div className="hidden md:flex justify-center items-center px-10 lg:px-20 w-full h-full">
          <IndiaMapComponent
            handleMapClick={handleMapClick}
            map_dimensions={map_dimensions}
            activeMap={activeMap}
          />
        </div>

        <div className="flex flex-col gap-6">
          {activeMap === "all" ? (
            <IndiaMapDescription
              heading={indiaData.heading}
              description={indiaData.description}
            />
          ) : (
            cardData && <DestinationCard {...cardData} />
          )}

          {/* Mobile Map - shown below content */}
          <div className="md:hidden flex justify-center items-center p-4 w-full">
            <IndiaMapComponent
              handleMapClick={handleMapClick}
              map_dimensions={map_dimensions}
              activeMap={activeMap}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function IndiaMapDescription({
  heading,
  description,
}: {
  heading: string;
  description: string;
}) {
  return (
    <div className="flex flex-col justify-center items-center bg-[#fdfaf5] p-6 sm:p-11 rounded-[6px] w-full h-full">
      <div className="flex items-center gap-3 mb-2">
        <h2 className="font-black text-black text-3xl">India</h2>
        <Icon name="india-flag" className="w-10 h-8 rounded shadow-sm" />
      </div>
      <div className="text-left md:text-center w-full">
        <h3 className="font-black text-xl text-black mb-3">
          {heading}
        </h3>
        <p className="font-albertsans font-normal text-black/80 text-sm sm:text-base text-justify leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

function DestinationCard({
  destination,
  tagline,
  bestTime,
  temperatureRange,
  quote,
  description,
  attractions,
  exploreLink,
}: IndiaMapRegionData) {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  return (
    <div className="relative space-y-5 bg-[#fdfaf5] p-6 sm:p-11 rounded-[6px] text-black h-full">
      <div className="flex flex-col gap-1">
        <h3 className="font-black text-black text-3xl sm:text-4xl uppercase tracking-tighter">
          {destination}
        </h3>
        <p className="font-medium text-bigstone text-lg sm:text-xl leading-tight">
          {tagline}
        </p>
      </div>

      <div className="flex flex-col gap-1">
        <p className="font-black text-sm uppercase tracking-wider text-gray-500">Best time to visit</p>
        <p className="font-bold text-lg">{bestTime}</p>
        <div className="flex items-center gap-2 text-[#f1aa4c]">
          <Icon name="weather-sunny" className="w-5 h-5" />
          <span className="font-bold">{temperatureRange}</span>
        </div>
      </div>

      <div className="space-y-2">
        <p className="font-black text-lg text-black">
          Why Visit {destination}?
        </p>
        <p className="font-medium text-sm text-scorpion italic leading-snug">
          &ldquo;{quote}&rdquo;
        </p>
        <p className="text-gray-700 text-sm sm:text-base text-justify leading-relaxed">{description}</p>
      </div>

      {/* Accordion for Top Attractions */}
      <div className="border-t border-gray-200 pt-4">
        <button
          onClick={() => setIsAccordionOpen(!isAccordionOpen)}
          className="flex justify-between items-center w-full group"
        >
          <h3 className="font-black text-xl">Top Attractions</h3>
          <Icon
            name="chevron"
            className={twMerge(
              "w-5 h-5 transition-transform duration-300",
              isAccordionOpen ? "rotate-180" : "rotate-0"
            )}
          />
        </button>
        <div
          className={twMerge(
            "overflow-hidden transition-all duration-300",
            isAccordionOpen ? "max-h-[1000px] mt-4 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <ul className="space-y-3">
            {attractions.map((item, idx) => (
              <li key={idx} className="flex flex-col gap-0.5">
                <span className="font-bold text-sm">• {item.name}</span>
                <p className="text-[12px] text-gray-600 ml-4 leading-normal">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-4">
        <a
          href={exploreLink}
          className="inline-flex items-center gap-2 bg-[#1a3642] px-8 py-3 rounded-full text-white font-bold text-sm transition-all hover:bg-[#254d5e]"
        >
          Explore Packages <Icon name="right-arrow" className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

export default IndiaMapSectionClient;
