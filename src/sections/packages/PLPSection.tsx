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
import RequestCallbackModal from "@/components/ui/RequestCallbackModal";
import { MessageCircle, Settings2, ArrowUp } from "lucide-react";

const PLPSection = ({ pageData }: { pageData: PackageListingPageData }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);
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
    <div className="bg-[#fafbfc] px-4 md:px-8 py-6 md:py-6 w-full relative" id="plp-section">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-6 md:mb-10">
          <Breadcrumb />
          <div className="mt-4 md:mt-8">
            <PackageDescription {...pageData} />
          </div>
        </div>

        {/* Selected Filters Summary (Mobile only) */}
        {activeFilters.length > 0 && (
          <div className="lg:hidden mb-6 bg-[#fff8e7] px-5 py-6 border border-orange-100/40 rounded-[32px] shadow-sm">
            <h4 className="text-base font-black text-[#1a3642] mb-4">Selected Filters</h4>
            <div className="flex flex-wrap gap-2">
              {activeFilters.map((f, i) => (
                <div key={i} className="flex items-center gap-2 bg-white px-4 py-2 border border-gray-100 rounded-xl text-xs font-bold text-[#345b63]">
                  <span>{f.value}</span>
                  <button
                    onClick={() => {
                      const params = new URLSearchParams(searchParams.toString());
                      if (f.type === "Price") {
                        params.delete("minPrice");
                        params.delete("maxPrice");
                      } else if (f.type === "Theme") {
                        const themes = params.get("themes")?.split(",") || [];
                        params.set("themes", themes.filter(t => t !== f.value).join(","));
                      } else if (f.type === "Type") {
                        const types = params.get("packageTypes")?.split(",") || [];
                        params.set("packageTypes", types.filter(t => t !== f.value).join(","));
                      } else if (f.type === "Rating") {
                        params.delete("minRating");
                      }
                      window.history.pushState({}, "", `?${params.toString()}`);
                      window.location.reload(); // Refresh to update filters (simple way)
                    }}
                    className="text-gray-300 hover:text-red-400 ml-1"
                  >
                    <Icon name="cross" className="w-2.5 h-2.5" />
                  </button>
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

                <div className="flex flex-col gap-4 md:gap-8">
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
                      packageIncludes={pkg.packageIncludes}
                      image={pkg.mainImageUrl}
                      url={`/packages/${pkg.slug}`}
                    />
                  ))}
                </div>

                {/* Pagination */}
                {pageData.metadata && pageData.metadata.totalPages > 1 && (
                  <div className="flex justify-center mt-12 mb-10 md:mb-0">
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
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[50] flex items-center justify-between w-[95%] max-w-[420px] lg:hidden gap-3">
        {/* Filter Button */}
        <button
          onClick={() => setIsFilterOpen(true)}
          className="flex items-center justify-center bg-[#ecf0f3] border border-white/50 w-14 h-14 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.08)] backdrop-blur-md active:scale-90 transition-all"
        >
          <Settings2 className="w-6 h-6 text-[#1a3642]" strokeWidth={2.5} />
        </button>

        {/* Main Action Pill */}
        <button
          onClick={() => setIsCallbackModalOpen(true)}
          className="flex-1 bg-[#ffb948] text-[#1a3642] h-14 rounded-full font-black text-sm flex items-center justify-center gap-2 active:scale-[0.98] transition-all shadow-[0_8px_20px_rgba(255,185,72,0.3)] border border-white/20"
        >
          <Icon name="phone" className="w-4 h-4 fill-[#1a3642]" />
          Request a Callback
        </button>

        {/* Scroll Top Button */}
        <button
          onClick={scrollToTop}
          className={cn(
            "flex items-center justify-center bg-[#eaeff9] border border-white/50 w-14 h-14 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.08)] backdrop-blur-md transition-all active:scale-90",
            showScrollTop ? "opacity-100 scale-100" : "opacity-0 scale-50 pointer-events-none"
          )}
        >
          <ArrowUp className="w-6 h-6 text-[#1a3642]" strokeWidth={2.5} />
        </button>

        {/* WhatsApp Floating Button (Shifted above) */}
        <a
          href="https://wa.me/91XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute -top-16 right-0 bg-green-500 text-white p-3.5 rounded-full shadow-2xl shadow-green-200 active:scale-90 transition-all animate-bounce duration-[2000ms]"
        >
          <MessageCircle className="w-7 h-7 fill-white" />
        </a>
      </div>

      {/* Request Callback Modal */}
      <RequestCallbackModal
        isOpen={isCallbackModalOpen}
        onClose={() => setIsCallbackModalOpen(false)}
      />

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
