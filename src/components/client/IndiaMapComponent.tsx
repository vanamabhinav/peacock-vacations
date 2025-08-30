"use client";
import React from "react";
import IndiaMapIcon from "../ui/IndiaMapIcon";
import { twMerge } from "tailwind-merge";
import { Icon } from "../ui/Icon";
import { MapType } from "./IndiaMapSectionClient";

function IndiaMapComponent({
  handleMapClick,
  activeMap,
  map_dimensions,
}: {
  handleMapClick: (Location: MapType) => void;
  activeMap: MapType;
  map_dimensions: {
    location: MapType;
    className: string;
  }[];
}) {
  return (
    <div className="relative w-full h-auto">
      <IndiaMapIcon map={activeMap} />
      {map_dimensions.map((map_dimension, idx) => {
        return (
          <div
            key={idx}
            className={twMerge(
              "z-10 absolute cursor-pointer",
              map_dimension.className
            )}
            onClick={() => handleMapClick(map_dimension.location)}
          ></div>
        );
      })}

      <Icon
        name="map_direction"
        className="right-[20%] bottom-[0%] absolute w-32 h-32"
      />
    </div>
  );
}

export default IndiaMapComponent;
