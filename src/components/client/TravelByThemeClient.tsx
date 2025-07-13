"use client";

import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Icon } from "../ui/Icon";
import TravelThemeSelection from "../selection/TravelThemeSelection";
import TravelByThemeCard from "../card/TravelByThemeCard";
import SwiperSlider, { SwiperSliderHandle } from "../slider/SwiperSlider";
import { TravelThemeData } from "@/types";

export default function TravelByThemeClient({ themeData }: TravelThemeData) {
  const sliderRef = useRef<SwiperSliderHandle>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selectedThemes, setSelectedThemes] = useState<string[]>(["honeymoon"]);

  const travelThemes = [
    { id: "honeymoon", label: "Honeymoon", icon: "homepage/honeymoon" },
    { id: "adventure", label: "Adventure", icon: "homepage/adventure" },
    { id: "beach", label: "Beach", icon: "homepage/beach" },
    { id: "luxury", label: "Luxury", icon: "homepage/luxury" },
    { id: "pilgrimage", label: "Pilgrimage", icon: "homepage/piligrimage" },
    { id: "solo", label: "Solo Travel", icon: "homepage/solo" },
    { id: "resort", label: "Resort", icon: "homepage/resort" },
  ];

  const handleScrollStateChange = (left: boolean, right: boolean) => {
    setCanScrollLeft(left);
    setCanScrollRight(right);
  };

  const handleThemeSelectionChange = (newSelectedThemes: string[]) => {
    setSelectedThemes(newSelectedThemes);
    // Reset slider to beginning when themes change
    if (sliderRef.current) {
      setTimeout(() => {
        sliderRef.current?.scrollLeft();
      }, 100);
    }
  };

  // Filter theme data based on selected themes
  const filteredThemeData = themeData.filter((theme) => {
    const themeId = theme.href.split("/").pop() || "";
    return selectedThemes.includes(themeId);
  });

  return (
    <section
      className="flex flex-col gap-5 w-[72rem]"
      aria-label="Travel by Theme - Curated India Travel Packages"
    >
      {/* Header Section with Navigation Buttons */}
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-william text-4xl">Travel by Theme</h2>
          <p className="text-scorpion text-xl">
            Handpicked travel experiences across India&apos;s most iconic routes
            and destinations
          </p>
        </div>
        {/* Navigation Buttons at header level - same as PopularPackages */}
        <div className="flex gap-4">
          <button
            onClick={() => sliderRef.current?.scrollLeft()}
            className={twMerge(
              "flex justify-center items-center border border-bigstone rounded-full w-10 h-10 transition-all duration-300",
              canScrollLeft
                ? "bg-bridalHealth hover:bg-karry cursor-pointer"
                : "bg-bridalHealth/90 cursor-default"
            )}
            aria-label="Scroll to previous travel themes"
            disabled={!canScrollLeft}
          >
            <Icon
              name="customize/right-arrow"
              className="text-bigstone rotate-180"
            />
          </button>
          <button
            onClick={() => sliderRef.current?.scrollRight()}
            className={twMerge(
              "flex justify-center items-center border border-bigstone rounded-full w-10 h-10 transition-all duration-300",
              canScrollRight
                ? "bg-bridalHealth hover:bg-karry cursor-pointer"
                : "bg-bridalHealth/90 cursor-default"
            )}
            aria-label="Scroll to next travel themes"
            disabled={!canScrollRight}
          >
            <Icon name="customize/right-arrow" className="text-bigstone" />
          </button>
        </div>
      </div>

      {/* Content Section - Filter and Slider at same level */}
      <div className="flex gap-5">
        {/* Filter Section - 304px width */}
        <aside className="flex-shrink-0 w-[304px]" aria-label="Theme Filters">
          <TravelThemeSelection
            travelThemes={travelThemes}
            selectedThemes={selectedThemes}
            onThemeChange={handleThemeSelectionChange}
          />
        </aside>

        {/* Slider Section */}
        <div className="flex-1 min-w-0">
          <SwiperSlider
            ref={sliderRef}
            spaceBetween={25}
            slidesPerView={2}
            onScrollStateChange={handleScrollStateChange}
            aria-label="Travel theme packages slider"
          >
            {filteredThemeData.map((theme, idx) => (
              <article key={idx} className="min-w-max">
                <TravelByThemeCard {...theme} />
              </article>
            ))}
          </SwiperSlider>
        </div>
      </div>
    </section>
  );
}
