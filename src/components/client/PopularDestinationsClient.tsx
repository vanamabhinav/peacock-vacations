"use client";

import { useState, useEffect, useRef } from "react";
import DestinationBentoGrid from "@/components/card/DestinationBentoGrid";
import DestinationSelection from "@/components/selection/DestinationSelection";
import { Icon } from "@/components/ui/Icon";
import { DestinationsData } from "@/types";
import { regions } from "@/lib/constants";

interface PopularDestinationsClientProps {
  initialData: DestinationsData;
  initialMonth?: string;
}

export default function PopularDestinationsClient({
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
    initialData[currentSelectionText.toLowerCase() as keyof DestinationsData] ||
    initialData.january;

  return (
    <section className="flex justify-center bg-bridalHealth p-16">
      <div className="flex flex-col justify-center gap-2 w-[72rem]">
        <div className="flex items-start w-full h-fit">
          <div className="flex flex-col gap-2">
            <h2 className="flex items-center gap-2 font-black text-bigstone text-4xl leading-none tracking-normal">
              Popular Destinations in{" "}
              <div
                ref={selectionRef}
                className="inline-block relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <span className="group flex gap-2 underline cursor-pointer">
                  {isSelectionVisible
                    ? "Month / Region "
                    : currentSelectionText}
                  <Icon
                    name="homepage/right-arrow"
                    width={20}
                    height={20}
                    className={`ml-1 w-4 transform transition-transform duration-300 ${
                      isSelectionVisible ? "-rotate-90" : "rotate-90"
                    } origin-center`}
                  />
                </span>
              </div>
            </h2>
            <p className="font-normal text-scorpion text-xl">
              Discover the top places to visit{" "}
              {isRegion() ? "in this region" : "this month"}
            </p>
          </div>
        </div>

        <div className="relative mt-10">
          <div
            ref={selectionBoxRef}
            className={`top-0 left-0 z-50 absolute w-full transform transition-all duration-300 ease-in-out ${
              isSelectionVisible
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
            cardText={currentData.cardText}
          />
        </div>
      </div>
    </section>
  );
}
