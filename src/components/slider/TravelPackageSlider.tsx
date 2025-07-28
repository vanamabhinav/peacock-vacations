"use client";
import { useRef, useState, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import SwiperSlider, { SwiperSliderHandle } from "./SwiperSlider";
import { Icon } from "../ui/Icon";

interface TravelPackageSliderProps {
  heading: string;
  subheading: string;
  children: ReactNode;
}

export default function TravelPackageSlider({
  heading,
  subheading,
  children,
}: TravelPackageSliderProps) {
  const sliderRef = useRef<SwiperSliderHandle>(null);
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
          <h2 className="font-black text-william text-4xl">{heading}</h2>
          <p className="font-medium text-scorpion text-xl">{subheading}</p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => sliderRef.current?.scrollLeft()}
            className={twMerge(
              "flex justify-center items-center border border-bigstone rounded-full focus:outline-none focus:ring-0 w-10 h-10 transition-all duration-300",
              canScrollLeft
                ? "bg-bridalHealth hover:bg-karry cursor-pointer"
                : "bg-bridalHealth/90 cursor-default"
            )}
            aria-label="Scroll Left"
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
              "flex justify-center items-center border border-bigstone rounded-full focus:outline-none focus:ring-0 w-10 h-10 transition-all duration-300",
              canScrollRight
                ? "bg-bridalHealth hover:bg-karry cursor-pointer"
                : "bg-bridalHealth/90 cursor-default"
            )}
            aria-label="Scroll Right"
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
      <SwiperSlider
        ref={sliderRef}
        spaceBetween={25}
        onScrollStateChange={handleScrollStateChange}
      >
        {children}
      </SwiperSlider>
    </section>
  );
}
