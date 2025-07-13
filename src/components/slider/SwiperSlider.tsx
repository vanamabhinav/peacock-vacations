"use client";

import {
  useRef,
  useEffect,
  useState,
  ReactNode,
  useImperativeHandle,
  useCallback,
} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export interface SwiperSliderHandle {
  scrollLeft: () => void;
  scrollRight: () => void;
  canScrollLeft: boolean;
  canScrollRight: boolean;
}

interface SwiperSliderProps {
  children: ReactNode;
  slidesPerView?: number;
  spaceBetween?: number;
  className?: string;
  ref?: React.Ref<SwiperSliderHandle>;
  onScrollStateChange?: (
    canScrollLeft: boolean,
    canScrollRight: boolean
  ) => void;
}

function SwiperSlider({
  children,
  slidesPerView = 2,
  spaceBetween = 14,
  className = "",
  ref,
  onScrollStateChange,
}: SwiperSliderProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useImperativeHandle(ref, () => ({
    scrollLeft: () => {
      if (swiperRef.current && !swiperRef.current.animating) {
        // Move to previous slide smoothly
        const currentIndex = swiperRef.current.activeIndex;
        const targetIndex = Math.max(0, currentIndex - slidesPerView);
        swiperRef.current.slideTo(targetIndex, 600, true);
      }
    },
    scrollRight: () => {
      if (swiperRef.current && !swiperRef.current.animating) {
        // Move to next slide smoothly
        const currentIndex = swiperRef.current.activeIndex;
        const targetIndex = currentIndex + slidesPerView;
        swiperRef.current.slideTo(targetIndex, 600, true);
      }
    },
    canScrollLeft,
    canScrollRight,
  }));

  const updateScrollState = useCallback(() => {
    if (!swiperRef.current) return;

    const swiper = swiperRef.current;
    const newCanScrollLeft = !swiper.isBeginning;
    const newCanScrollRight = !swiper.isEnd;

    // Only update if state actually changed to prevent unnecessary re-renders
    if (
      newCanScrollLeft !== canScrollLeft ||
      newCanScrollRight !== canScrollRight
    ) {
      setCanScrollLeft(newCanScrollLeft);
      setCanScrollRight(newCanScrollRight);

      if (onScrollStateChange) {
        onScrollStateChange(newCanScrollLeft, newCanScrollRight);
      }
    }
  }, [canScrollLeft, canScrollRight, onScrollStateChange]);

  useEffect(() => {
    // Debounced initial state update
    const timer = setTimeout(() => {
      updateScrollState();
    }, 150);

    return () => clearTimeout(timer);
  }, [children, updateScrollState]);

  const childrenArray = Array.isArray(children) ? children : [children];

  return (
    <div className={className} role="region" aria-label="Destination slider">
      <Swiper
        modules={[Navigation]}
        spaceBetween={spaceBetween}
        slidesPerView="auto"
        slidesPerGroup={1}
        watchOverflow={true}
        grabCursor={false}
        resistance={true}
        resistanceRatio={0.85}
        centeredSlides={false}
        speed={600}
        touchRatio={1}
        touchAngle={45}
        longSwipes={true}
        longSwipesMs={300}
        longSwipesRatio={0.5}
        followFinger={true}
        allowTouchMove={true}
        simulateTouch={true}
        watchSlidesProgress={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          // Delayed state update to ensure proper initialization
          setTimeout(() => updateScrollState(), 200);
        }}
        onSlideChange={() => {
          // Debounce scroll state updates during slide changes
          setTimeout(updateScrollState, 50);
        }}
        onReachBeginning={updateScrollState}
        onReachEnd={updateScrollState}
        onFromEdge={updateScrollState}
        className="!pb-2"
        style={{
          transform: "translate3d(0, 0, 0)",
          willChange: "transform",
        }}
      >
        {childrenArray.map((child, index) => (
          <SwiperSlide
            key={index}
            style={{
              width: "auto",
              transform: "translate3d(0, 0, 0)",
              willChange: "transform",
            }}
          >
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

SwiperSlider.displayName = "SwiperSlider";

export default SwiperSlider;
