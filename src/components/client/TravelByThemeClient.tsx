"use client";

import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Icon } from "../ui/Icon";
import TravelThemeSelection from "../selection/TravelThemeSelection";
import TravelByThemeCard from "../card/TravelByThemeCard";
import SwiperSlider, { SwiperSliderHandle } from "../slider/SwiperSlider";
import { ThemeType, TravelByThemeSectionData } from "@/types";

export default function TravelByThemeClient(data: TravelByThemeSectionData) {
  const sliderRef = useRef<SwiperSliderHandle>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selectedThemes, setSelectedThemes] = useState<ThemeType[]>([]);

  const handleScrollStateChange = (left: boolean, right: boolean) => {
    setCanScrollLeft(left);
    setCanScrollRight(right);
  };

  const handleThemeSelectionChange = (newSelectedThemes: ThemeType[]) => {
    setSelectedThemes(newSelectedThemes);
    // Reset slider to beginning when themes change
    if (sliderRef.current) {
      setTimeout(() => {
        sliderRef.current?.scrollLeft();
      }, 100);
    }
  };

  const packageData = data.packages;

  // Filter theme data based on selected themes - check if any category matches
  const filteredPackages =
    selectedThemes.length === 0
      ? packageData
      : packageData.filter((pkg) =>
          pkg.theme.some((theme) => selectedThemes.includes(theme))
        );

  return (
    <section
      className="flex flex-col gap-5 w-[72rem]"
      aria-label="Travel by Theme - Curated India Travel Packages"
    >
      {/* Header Section with Navigation Buttons */}
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <h2 className="font-black text-william text-4xl">{data.heading}</h2>
          <p className="font-medium text-scorpion text-xl">{data.subheading}</p>
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
              name="right-arrow"
              className="text-bigstone rotate-180"
              aria-hidden="true"
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
            <Icon
              name="right-arrow"
              className="text-bigstone"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      {/* Content Section - Filter and Slider at same level */}
      <div className="flex gap-5">
        {/* Filter Section - 304px width */}
        <aside className="flex-shrink-0 w-[304px]" aria-label="Theme Filters">
          <TravelThemeSelection
            travelThemes={data.themes}
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
            {filteredPackages.map((theme, idx) => (
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
