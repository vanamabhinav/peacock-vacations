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
    <div className="relative flex flex-col bg-white px-4 sm:px-6 md:px-10 pt-5 pb-3 border border-silver rounded-2xl w-full font-albertsans text-black text-base sm:text-lg">
      <div>
        <h2 className="w-full font-semibold capitalize">{bigHeading}</h2>
        <div
          id="package-description"
          className="relative overflow-hidden transition-all duration-500"
          style={{ height, opacity: isExpanded ? 1 : 0.85 }}
          ref={contentRef}
        >
          <div>
            <p className="w-full text-mineshaft text-sm sm:text-base capitalize">
              {shortDescription}
              <br />
              {isExpanded && longDescription}
            </p>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="w-full text-william text-sm sm:text-base text-right underline cursor-pointer"
        onClick={handleExpandToggle}
        aria-expanded={isExpanded}
        aria-controls="package-description"
      >
        {isExpanded ? "Less" : "More"}
      </button>
    </div>
  );
}
