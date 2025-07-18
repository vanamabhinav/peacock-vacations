"use client";

import {
  useRef,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
  useImperativeHandle,
} from "react";
import { twMerge } from "tailwind-merge";

export interface SliderHandle {
  scrollLeft: () => void;
  scrollRight: () => void;
  canScrollLeft: boolean;
  canScrollRight: boolean;
}

interface GenericSliderProps {
  children: ReactNode;
  gap?: number;
  visibleItemsCount?: number;
  className?: string;
  onScrollStateChange?: (
    canScrollLeft: boolean,
    canScrollRight: boolean
  ) => void;
  ref: React.Ref<SliderHandle>;
}

function GenericSlider({
  children,
  gap = 14,
  visibleItemsCount = 2,
  className = "",
  onScrollStateChange,
  ref,
}: GenericSliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [isCalculated, setIsCalculated] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useImperativeHandle(ref, () => ({
    scrollLeft: () => scroll("left"),
    scrollRight: () => scroll("right"),
    canScrollLeft,
    canScrollRight,
  }));

  const updateScrollButtons = useCallback(() => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const newCanScrollLeft = scrollLeft > 0;
    const newCanScrollRight = scrollLeft < scrollWidth - clientWidth - 1;

    setCanScrollLeft(newCanScrollLeft);
    setCanScrollRight(newCanScrollRight);

    if (onScrollStateChange) {
      onScrollStateChange(newCanScrollLeft, newCanScrollRight);
    }
  }, [onScrollStateChange]);

  const snapToNearestCard = useCallback(() => {
    if (!scrollRef.current || !isCalculated || !cardWidth) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

    const isNearEnd = scrollLeft + clientWidth + cardWidth >= scrollWidth;

    if (isNearEnd) {
      const maxScroll = scrollWidth - clientWidth;
      scrollRef.current.scrollTo({
        left: maxScroll,
        behavior: "smooth",
      });
      return;
    }

    const cardIndex = Math.round(scrollLeft / cardWidth);
    const targetScroll = cardIndex * cardWidth;

    if (Math.abs(scrollLeft - targetScroll) > 10) {
      scrollRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  }, [isCalculated, cardWidth]);

  useEffect(() => {
    const calculateDimensions = () => {
      if (!scrollRef.current) return;

      const cardElements = Array.from(scrollRef.current.children);
      if (cardElements.length === 0) return;
      const firstCard = cardElements[0] as HTMLElement;
      const cardStyle = window.getComputedStyle(firstCard);
      const cardRect = firstCard.getBoundingClientRect();
      const cardWidthWithoutMargin = cardRect.width;
      const marginRight = parseInt(cardStyle.marginRight || "0", 10);
      const marginLeft = parseInt(cardStyle.marginLeft || "0", 10);
      const gapSize = gap;
      const totalCardWidth =
        cardWidthWithoutMargin + marginLeft + marginRight + gapSize;

      setCardWidth(totalCardWidth);
      setIsCalculated(true);
      updateScrollButtons();
    };

    const timer = setTimeout(calculateDimensions, 100);

    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", updateScrollButtons);

      let scrollTimeout: number;
      const handleScrollEnd = () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = window.setTimeout(() => {
          snapToNearestCard();
        }, 150);
      };

      scrollContainer.addEventListener("scroll", handleScrollEnd);
    }

    window.addEventListener("resize", calculateDimensions);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", calculateDimensions);
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", updateScrollButtons);
      }
    };
  }, [onScrollStateChange, gap, snapToNearestCard, updateScrollButtons]);

  const scroll = (direction: string) => {
    if (!scrollRef.current || !isCalculated) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const effectiveCardWidth = cardWidth || 300;

    if (
      direction === "right" &&
      scrollLeft + clientWidth + effectiveCardWidth * visibleItemsCount >=
        scrollWidth
    ) {
      scrollRef.current.scrollTo({
        left: scrollWidth - clientWidth,
        behavior: "smooth",
      });
      setTimeout(updateScrollButtons, 500);
      return;
    }

    const currentCardIndex = Math.round(scrollLeft / effectiveCardWidth);
    const targetCardIndex =
      direction === "left"
        ? Math.max(0, currentCardIndex - visibleItemsCount)
        : currentCardIndex + visibleItemsCount;

    let targetScroll = targetCardIndex * effectiveCardWidth;
    const maxScroll = scrollWidth - clientWidth;

    if (targetScroll < 0) targetScroll = 0;
    if (targetScroll > maxScroll) targetScroll = maxScroll;

    scrollRef.current.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });

    setTimeout(updateScrollButtons, 500);
  };

  return (
    <div
      ref={scrollRef}
      role="region"
      aria-label="Destination slider"
      className={twMerge(
        "flex pb-2 overflow-x-auto scroll-smooth scrollbar-hide",
        className
      )}
      style={{ scrollSnapType: "x mandatory", gap: `${gap * 4}px` }}
      tabIndex={0}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <div
              key={index}
              className="scroll-snap-align-start"
              style={{ scrollSnapAlign: "start" }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  );
}

GenericSlider.displayName = "GenericSlider";

export default GenericSlider;
