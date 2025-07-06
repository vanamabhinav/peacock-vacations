"use client";
import { useRef, useState, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import GenericSlider, { SliderHandle } from "./GenericSlider";
import { Icon } from "../ui/Icon";

interface TravelPackageSliderProps {
  children: ReactNode;
}

export default function TravelPackageSlider({
  children,
}: TravelPackageSliderProps) {
  const sliderRef = useRef<SliderHandle>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleScrollStateChange = (left: boolean, right: boolean) => {
    setCanScrollLeft(left);
    setCanScrollRight(right);
  };

  return (
    <section
      className="flex flex-col gap-5 w-[72rem]"
      aria-label="Popular Packages"
    >
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-william text-4xl">Popular Packages</h2>
          <p className="text-scorpion text-xl">
            Handpicked travel experiences across India
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => sliderRef.current?.scrollLeft()}
            className={twMerge(
              "flex justify-center items-center border border-bigstone rounded-full w-10 h-10 transition-all duration-300",
              canScrollLeft
                ? "bg-bridalHealth hover:bg-karry cursor-pointer"
                : "bg-bridalHealth/90 cursor-default"
            )}
            aria-label="Scroll Left"
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
            aria-label="Scroll Right"
            disabled={!canScrollRight}
          >
            <Icon name="customize/right-arrow" className="text-bigstone" />
          </button>
        </div>
      </div>
      <GenericSlider
        ref={sliderRef}
        onScrollStateChange={handleScrollStateChange}
      >
        {children}
      </GenericSlider>
    </section>
  );
}
