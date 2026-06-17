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
    <div className="relative flex flex-col bg-white px-6 sm:px-8 py-7 border border-gray-100 rounded-[28px] w-full font-albertsans text-black shadow-sm ring-1 ring-black/[0.02]">
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center justify-between">
          <h2 className="w-full font-black text-[#1a3642] text-xl sm:text-2xl capitalize leading-tight">
            {bigHeading}
          </h2>
          <button
            type="button"
            className="hidden sm:block text-[#1a3642] text-sm font-black underline underline-offset-4 cursor-pointer hover:text-[#f1aa4c] transition-colors flex-shrink-0"
            onClick={handleExpandToggle}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>
        <div
          id="package-description"
          className="relative overflow-hidden transition-all duration-500 ease-in-out"
          style={{ height, opacity: isExpanded ? 1 : 0.9 }}
          ref={contentRef}
        >
          <div>
            <div
              className="w-full text-[#345b63] font-bold text-[14px] sm:text-[16px] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: shortDescription }}
            />
            {isExpanded && (
              <div
                className="block mt-4 font-medium text-gray-500"
                dangerouslySetInnerHTML={{ __html: longDescription }}
              />
            )}
          </div>
        </div>
      </div>
      <button
        type="button"
        className="sm:hidden mt-3 text-[#1a3642] text-[13px] font-black text-right underline underline-offset-4 cursor-pointer hover:text-[#f1aa4c] transition-colors"
        onClick={handleExpandToggle}
        aria-expanded={isExpanded}
        aria-controls="package-description"
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
}
