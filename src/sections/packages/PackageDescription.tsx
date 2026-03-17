"use client";

import { PackageListingPageData } from "@/types/packages/package";
import { useState, useRef, useLayoutEffect } from "react";

export default function PackageDescription({
  bigHeading,
  shortDescription,
  longDescription,
}: PackageListingPageData) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [height, setHeight] = useState<string | number>(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (contentRef.current) {
      if (isExpanded) {
        setHeight(contentRef.current.scrollHeight);
      } else {
        setHeight(contentRef.current.firstElementChild?.scrollHeight || 0);
      }
    }
  }, [isExpanded, longDescription, shortDescription]);

  const handleExpandToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="relative flex flex-col bg-white px-5 sm:px-8 py-6 border border-gray-100/80 rounded-[32px] w-full font-albertsans text-black shadow-sm shadow-gray-100/50">
      <div className="flex flex-col gap-2">
        <h2 className="w-full font-black text-[#1a3642] text-lg sm:text-xl capitalize leading-tight">
          {bigHeading}
        </h2>
        <div
          id="package-description"
          className="relative overflow-hidden transition-all duration-500 ease-in-out"
          style={{ height, opacity: isExpanded ? 1 : 0.85 }}
          ref={contentRef}
        >
          <div>
            <p className="w-full text-[#345b63] font-bold text-sm sm:text-[15px] leading-relaxed opacity-80">
              {shortDescription}
              {isExpanded && (
                <span className="block mt-2 font-medium">
                  {longDescription}
                </span>
              )}
            </p>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="mt-2 text-[#1a3642] text-xs sm:text-sm font-black text-right underline underline-offset-4 cursor-pointer hover:text-[#f1aa4c] transition-colors"
        onClick={handleExpandToggle}
        aria-expanded={isExpanded}
        aria-controls="package-description"
      >
        {isExpanded ? "Less" : "More"}
      </button>
    </div>
  );
}
