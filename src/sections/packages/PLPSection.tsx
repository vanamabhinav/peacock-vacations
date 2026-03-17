"use client";

import { useState, useEffect } from "react";
import PackageCard from "@/components/card/PackageCard";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { DEFAULT_FILTER_OPTIONS } from "@/types/constants/defaults";
import PackageDescription from "./PackageDescription";
import { PackageListingPageData } from "@/types/packages/package";
import PlpFilter from "@/components/client/PlpFilter";
import Pagination from "@/components/ui/Pagination";
import { stateToRegion } from "@/lib/utils/regionMapper";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/cn";

const PLPSection = ({ pageData }: { pageData: PackageListingPageData }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const searchParams = useSearchParams();
  const packageCount = pageData.packages?.length || 0;

  // Track scroll for "Back to Top" button
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // Get active filters for the summary box
  const getActiveFilters = () => {
    const filters: { type: string; value: string }[] = [];
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");
    if (minPrice || maxPrice) filters.push({ type: "Price", value: `${minPrice || "Min"} - ${maxPrice || "Max"}` });

    const themes = searchParams.get("themes")?.split(",") || [];
    themes.forEach(t => t && filters.push({ type: "Theme", value: decodeURIComponent(t) }));

    const pTypes = searchParams.get("packageTypes")?.split(",") || [];
    pTypes.forEach(t => t && filters.push({ type: "Type", value: decodeURIComponent(t) }));

    const rating = searchParams.get("minRating");
    if (rating) filters.push({ type: "Rating", value: `${rating} Star` });

    return filters;
  };

  const activeFilters = getActiveFilters();

  return (
    <div className="bg-[#fafbfc] px-4 md:px-8 py-6 md:py-10 w-full relative" id="plp-section">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-6 md:mb-10">
          <Breadcrumb />
          <div className="mt-4 md:mt-8">
            <PackageDescription {...pageData} />
          </div>
        </div>

        {/* Selected Filters Summary (Mobile only) */}
        {activeFilters.length > 0 && (
          <div className="lg:hidden mb-6 bg-[#fffbf2] p-4 md:p-5 border border-orange-100/50 rounded-2xl md:rounded-[32px] shadow-sm">
            <h4 className="text-[10px] md:text-sm font-black text-[#1a3642] uppercase tracking-widest mb-3 md:mb-4">Selected Filters</h4>
            <div className="flex flex-wrap gap-2">
              {activeFilters.map((f, i) => (
                <div key={i} className="flex items-center gap-1.5 bg-white px-3 py-1.5 border border-gray-100 rounded-lg text-[10px] md:text-xs font-bold text-[#345b63]">
                  <span>{f.value}</span>
                  <Icon name="cross" className="w-2 h-2 text-gray-400" />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          {/* Filters - Sidebar (Desktop only) */}
          <aside className="hidden lg:block w-full lg:w-1/3 xl:w-1/4 self-start sticky top-24 z-20">
            <PlpFilter
              filterOptions={pageData.filterOptions || DEFAULT_FILTER_OPTIONS}
            />
          </aside>

          {/* Results List */}
          <div className="flex-1 flex flex-col gap-6 md:gap-8">
            {packageCount > 0 ? (
              <>
                <div className="flex items-center justify-between mb-1 md:mb-2 text-xs md:text-sm">
                  <p className="font-bold text-[#345b63] opacity-60">
                    Showing <span className="text-[#1a3642] font-black">{packageCount}</span> Packages
                  </p>
                </div>

                <div className="flex flex-col gap-5 md:gap-12">
                  {pageData.packages?.map((pkg) => (
                    <PackageCard
                      key={pkg.slug}
                      region={stateToRegion(pkg.destination.stateName, true)}
                      heading={pkg.title}
                      subheading={pkg.tagline || pkg.shortDescription}
                      location={pkg.destination.cityName}
                      currency={pkg.price.currency}
                      originalPrice={pkg.price.originalAmount}
                      discountedPrice={pkg.price.discountedAmount}
                      days={pkg.duration.days}
                      nights={pkg.duration.nights}
                      inclusions={pkg.inclusions.meals}
                      image={pkg.mainImageUrl}
                      url={`/packages/${pkg.slug}`}
                    />
                  ))}
                </div>

                {/* Pagination */}
                {pageData.metadata && pageData.metadata.totalPages > 1 && (
                  <div className="flex justify-center mt-12 mb-20 md:mb-0">
                    <Pagination
                      currentPage={pageData.metadata.currentPage}
                      totalPages={pageData.metadata.totalPages}
                    />
                  </div>
                )}
              </>
            ) : (
              <div className="bg-white border border-gray-100 rounded-[40px] p-16 text-center shadow-sm">
                <div className="mb-8">
                  <div className="text-6xl mb-4">📭</div>
                  <h3 className="text-2xl font-black text-[#1a3642] mb-3">
                    No packages found
                  </h3>
                  <p className="text-[#345b63] font-bold opacity-70">
                    Try adjusting your filters to find your perfect journey.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button
                    onClick={() => window.location.reload()}
                    className="bg-[#1a3642] text-white px-8 py-4 rounded-2xl font-black text-sm transition-all hover:scale-105"
                  >
                    Clear All Filters
                  </button>
                  <Link
                    href="/india/c"
                    className="bg-[#fdfaf5] border border-orange-100 text-[#1a3642] px-8 py-4 rounded-2xl font-black text-sm transition-all hover:scale-105"
                  >
                    Browse All India
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Floating Action Bar (Mobile Only) */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[50] flex items-center gap-3 w-[90%] max-w-[400px] lg:hidden">
        <button
          onClick={() => setIsFilterOpen(true)}
          className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-gray-100 flex-shrink-0 active:scale-95 transition-all"
        >
          <Icon name="search" className="w-6 h-6 text-[#1a3642]" />
        </button>

        <button className="flex-1 bg-[#ffc65d] text-[#1a3642] py-4 rounded-2xl font-black tracking-widest text-xs flex items-center justify-center gap-2 shadow-2xl shadow-orange-900/20 active:scale-[0.98] transition-all uppercase">
          <Icon name="phone" className="w-4 h-4" />
          Request a Callback
        </button>

        <button
          onClick={scrollToTop}
          className={cn(
            "bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-gray-100 flex-shrink-0 transition-all active:scale-95",
            showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
          )}
        >
          <Icon name="up-arrow" className="w-6 h-6 text-[#1a3642]" />
        </button>
      </div>

      {/* Mobile Filter Modal */}
      {isFilterOpen && (
        <PlpFilter
          isMobile={true}
          onClose={() => setIsFilterOpen(false)}
          filterOptions={pageData.filterOptions || DEFAULT_FILTER_OPTIONS}
        />
      )}
    </div>
  );
};

export default PLPSection;
