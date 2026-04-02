"use client";

import { useState, useEffect, useRef } from "react";
import DestinationBentoGrid from "@/components/card/DestinationBentoGrid";
import DestinationSelection from "@/components/selection/DestinationSelection";
import { Icon } from "@/components/ui/Icon";
import { DestinationsData } from "@/types";
import { regions } from "@/lib/constants";
import RegionIcon, { RegionType } from "../ui/Region";

interface PopularDestinationsClientProps {
  heading: string;
  subheading: string;
  initialData: DestinationsData;
  initialMonth?: string;
}

export default function PopularDestinationsClient({
  heading,
  subheading,
  initialData,
  initialMonth = "January",
}: PopularDestinationsClientProps) {
  const [currentSelectionText, setCurrentSelectionText] =
    useState<string>(initialMonth);
  const [isSelectionVisible, setIsSelectionVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const selectionRef = useRef<HTMLDivElement>(null);
  const selectionBoxRef = useRef<HTMLDivElement>(null);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isRegion = () => {
    return regions.includes(currentSelectionText);
  };

  // Show selection box when hovering, with delay before hiding
  useEffect(() => {
    if (isHovering) {
      // Show immediately when hovering starts
      setIsSelectionVisible(true);

      // Clear any existing timeout
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
        hideTimeoutRef.current = null;
      }
    } else {
      // Set a timeout to hide after hover ends
      hideTimeoutRef.current = setTimeout(() => {
        setIsSelectionVisible(false);
      }, 1000);
    }

    // Cleanup function
    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, [isHovering]);

  const handleSelectionChange = (selection: string) => {
    setCurrentSelectionText(selection);
    setIsSelectionVisible(false);
    setIsHovering(false);

    // Clear any pending timeouts
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  // Get current data based on selection
  const currentData =
    initialData?.[currentSelectionText.toLowerCase() as keyof DestinationsData];

  if (!currentData) {
    return (
      <section className="bg-bridalHealth px-4 py-16 text-center">
        <p className="text-scorpion">No data available for {currentSelectionText}</p>
      </section>
    );
  }

  return (
    <section className="bg-bridalHealth px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12 md:py-16 w-full font-albertsans">
      <div className="flex flex-col gap-2 mx-auto max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-7xl">
        <div className="flex flex-col sm:flex-row items-start w-full">
          <div className="flex flex-col gap-2 w-full">
            <h2 className="flex flex-wrap items-center gap-2 font-black text-william text-2xl sm:text-3xl md:text-4xl leading-tight">
              {heading}{" "}
              <div
                ref={selectionRef}
                className="inline-block relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <span className="flex gap-2 underline cursor-pointer">
                  {isSelectionVisible
                    ? "Month / Region "
                    : currentSelectionText}
                  {isRegion() && !isSelectionVisible && (
                    <RegionIcon
                      region={currentSelectionText as RegionType}
                      height={28}
                      width={32}
                      className="sm:w-10 sm:h-9"
                      fill="#345B63"
                      aria-hidden="true"
                    />
                  )}
                  <Icon
                    name="right-arrow"
                    width={20}
                    height={20}
                    className={`ml-1 w-4 transition-transform duration-300 ${isSelectionVisible ? "-rotate-90" : "rotate-90"
                      } origin-center`}
                    aria-hidden="true"
                  />
                </span>
              </div>
            </h2>
            <p className="font-medium text-scorpion text-base sm:text-lg md:text-xl">
              {subheading} {isRegion() ? "in this region" : "this month"}
            </p>
          </div>
        </div>

        <div className="relative mt-6 sm:mt-8 md:mt-10">
          <div
            ref={selectionBoxRef}
            className={`top-0 left-0 z-50 absolute w-full transition-all duration-300 ease-in-out ${isSelectionVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4 pointer-events-none"
              }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <DestinationSelection onSelect={handleSelectionChange} />
          </div>

          <DestinationBentoGrid
            destinations={currentData.destinations}
            ctaCard={currentData.ctaCard}
          />
        </div>
      </div>
    </section>
  );
}
