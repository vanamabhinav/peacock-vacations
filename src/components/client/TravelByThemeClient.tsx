"use client";

import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Icon } from "../ui/Icon";
import TravelThemeSelection from "../selection/TravelThemeSelection";
import TravelByThemeCard from "../card/TravelByThemeCard";
import SwiperSlider, { SwiperSliderHandle } from "../slider/SwiperSlider";
import { TravelByThemeSectionData } from "@/types";

export default function TravelByThemeClient(data: TravelByThemeSectionData) {
  const sliderRef = useRef<SwiperSliderHandle>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selectedThemes, setSelectedThemes] = useState<string[]>(data.themes?.[0] ? [data.themes[0]] : []);
  const [activeSortTheme, setActiveSortTheme] = useState<string | null>(data.themes?.[0] || null);

  const handleScrollStateChange = (left: boolean, right: boolean) => {
    setCanScrollLeft(left);
    setCanScrollRight(right);
  };

  const handleThemeSelectionChange = (newSelectedThemes: string[]) => {
    setSelectedThemes(newSelectedThemes);
    if (newSelectedThemes.length > 0) {
      setActiveSortTheme(newSelectedThemes[newSelectedThemes.length - 1]);
    } else {
      setActiveSortTheme(null);
    }
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

  // Sort filtered packages by the best rank across all selected themes using CMS packageOrders
  const sortedPackages = [...filteredPackages].sort((a, b) => {
    const themesToConsider = selectedThemes.length > 0 ? selectedThemes : [data.themes?.[0]].filter(Boolean) as string[];

    if (themesToConsider.length > 0) {
      // Find the minimum index/order for each package among the selected themes' orders from CMS
      const getBestOrder = (pkg: any) => {
        let minIndex = 999;

        for (const theme of themesToConsider) {
          const order = data.packageOrders?.[theme] || [];
          const index = order.indexOf(pkg._id);
          if (index !== -1 && index < minIndex) {
            minIndex = index;
          }
        }

        return minIndex;
      };

      const orderA = getBestOrder(a);
      const orderB = getBestOrder(b);

      if (orderA !== orderB) return orderA - orderB;
    }
    return 0; // Keep original relative order otherwise
  });

  return (
    <section
      className="flex flex-col gap-5 mx-auto w-full max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-7xl"
      aria-label="Travel by Theme - Curated India Travel Packages"
    >
      {/* Header Section with Navigation Buttons */}
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <h2 className="font-black text-william text-2xl sm:text-3xl md:text-4xl">{data.heading}</h2>
          <p className="font-medium text-scorpion text-xl">{data.subheading}</p>
        </div>
        {/* Navigation Buttons at header level - hidden on mobile */}
        {/* Navigation Buttons - desktop only, matched with slider */}
        <div className="hidden sm:flex items-center gap-4">
          {selectedThemes.length > 0 && (
            <button
              onClick={() => handleThemeSelectionChange([])}
              className="flex justify-center items-center bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-lg px-3 py-1 text-xs font-bold text-gray-600 transition-colors uppercase tracking-wider h-10"
              title="Clear all selections"
            >
              <Icon name="cross" className="w-4 h-4 mr-1" />
              Clear
            </button>
          )}
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
      </div>

      {/* Mobile Clear All Button - visible only on mobile when items selected */}
      <div className="flex sm:hidden justify-end">
        {selectedThemes.length > 0 && (
          <button
            onClick={() => handleThemeSelectionChange([])}
            className="flex items-center gap-1 bg-gray-100 border border-gray-200 rounded-full px-4 py-1.5 text-xs font-bold text-gray-500"
          >
            Clear Selected <Icon name="cross" className="w-3 h-3" />
          </button>
        )}
      </div>

      {/* Content Section - Filter and Slider at same level */}
      <div className="flex flex-col md:flex-row gap-5">
        {/* Filter Section */}
        <aside className="flex-shrink-0 w-full md:w-[304px]" aria-label="Theme Filters">
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
            {sortedPackages.map((theme, idx) => (
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
