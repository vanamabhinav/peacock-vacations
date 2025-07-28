"use client";

import { useState } from "react";
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
    if (activeMap === location) setActiveMap("all");
    else {
      setActiveMap(location);
    }
  };
  const cardData: IndiaMapRegionData | undefined = regionData[activeMap];
  return (
    <div className="grid grid-cols-2 bg-white p-8 rounded-[20px] h-[45rem] font-albertsans">
      <div className="flex justify-center items-center px-20 w-full h-full">
        <IndiaMapComponent
          handleMapClick={handleMapClick}
          map_dimensions={map_dimensions}
          activeMap={activeMap}
        />
      </div>

      {activeMap === "all" ? (
        <IndiaMapDescription
          heading={indiaData.heading}
          description={indiaData.description}
        />
      ) : (
        cardData && <DestinationCard {...cardData} />
      )}
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
    <div className="flex flex-col justify-center items-center bg-bridalHealth px-11 py-5 border-[rgba(255,199,126,0.18)] border-1 rounded-[6px] w-full h-full">
      <h2 className="font-bold text-black text-3xl leading-normal">India</h2>
      <Icon name="india-flag" className="py-3 w-[20rem] h-auto" />
      <div className="text-center">
        <h3 className="font-medium text-[18px] text-black text-center leading-normal">
          {heading}
        </h3>
        <p className="font-albertsans font-normal text-black text-base text-justify leading-normal">
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
  return (
    <div className="relative space-y-4 bg-bridalHealth p-11 border-[rgba(255,199,126,0.18)] border-1 rounded-[6px] text-black">
      <div>
        <h3 className="font-bold text-black text-4xl not-italic leading-normal">
          {destination}
        </h3>
        <p className="font-normal text-bigstone text-xl not-italic leading-0">
          {tagline}
        </p>
      </div>

      <div className="text-xl">
        <p className="font-medium">Best time to visit {bestTime}</p>
        <p className="text-yellow-600">
          <Icon name="weather-sunny" className="w-6 h-6 text-sandybrown" />{" "}
          {temperatureRange}
        </p>
      </div>
      <div className="mb-1">
        <p className="font-medium text-black text-xl">
          Why visit{" "}
          {destination.charAt(0).toUpperCase() +
            destination.slice(1).toLowerCase()}
        </p>
        <p className="mt-1 font-normal text-[15px] text-scorpion italic leading-normal">
          “{quote}”
        </p>
      </div>

      <p className="text-gray-700 text-base text-justify">{description}</p>

      <div>
        <h3 className="font-semibold text-[18px]">Top Attractions</h3>
        <ul className="ml-5 text-black text-base list-disc">
          {attractions.map((item, idx) => (
            <li key={idx}>
              <span className="font-medium">{item.name}</span> –{" "}
              {item.description}
            </li>
          ))}
        </ul>
      </div>

      <a
        href={exploreLink}
        className="inline-flex right-11 bottom-5.5 absolute items-center gap-2 bg-bigstone mt-3 px-[25px] py-[10px] rounded-full text-white text-sm transition"
      >
        Explore Packages <Icon name="chevron" className="w-2 h-2" />
      </a>
    </div>
  );
}

export default IndiaMapSectionClient;
