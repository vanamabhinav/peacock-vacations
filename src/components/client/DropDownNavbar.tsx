"use client";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "../ui/Icon";
import { useState } from "react";
import { cn } from "@/lib/cn";

import { regionsData, Region, State, City } from "@/lib/data/cms/destinationsData";

// Navigation items configuration
const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Destinations", href: "#", hasDropdown: true },
  { name: "Blog", href: "/blog" },
  { name: "Events & Festivals", href: "/events-festivals" },
  { name: "About Us", href: "/about" },
  { name: "FAQs", href: "/faqs" },
];

export function DropDownNavbar({ className = "" }: { className?: string }) {
  const [isDestVisible, setIsDestVisible] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState<Region>(regionsData[0]);

  const handleRegionHover = (region: Region) => {
    setSelectedRegion(region);
  };

  const renderNavigationItem = ({
    name,
    href,
    hasDropdown,
  }: (typeof navigationItems)[0]) => (
    <div
      key={name}
      className="sm:relative"
      onMouseEnter={() => hasDropdown && setIsDestVisible(true)}
      onMouseLeave={() => hasDropdown && setIsDestVisible(false)}
    >
      <Link
        href={href}
        className="flex items-center gap-1 hover:bg-white px-[22px] h-[36px] text-bigstone transition-colors cursor-pointer"
      >
        {name}
        {hasDropdown && (
          <Icon
            name="right-arrow"
            className={`transition-transform duration-200 ${isDestVisible ? "-rotate-90" : "rotate-90"
              }`}
          />
        )}
      </Link>
    </div>
  );

  const renderRegionButton = (region: Region) => (
    <button
      key={region.name}
      className={`w-full flex items-center gap-2 px-4 py-2 text-left transition-colors duration-150 ${region.name === selectedRegion.name
        ? "bg-[#fffaf3] border-y border-l border-[#ffc77e] text-[#ff9338] font-semibold"
        : "hover:bg-[#fff2e5] text-black"
        }`}
      onMouseEnter={() => handleRegionHover(region)}
    >
      <span className="capitalize text-nowrap">{region.name}</span>
      <Icon name="right-arrow" width={5} height={10} />
    </button>
  );

  const renderStateSection = (state: State) => (
    <div
      key={state.name}
      className="flex flex-col justify-start items-start gap-1"
    >
      <div className="flex flex-row justify-start items-center self-stretch p-1 border-[#b6c9cd] border-b w-[80%] h-full">
        <Link
          href={`/${selectedRegion.slug}/${state.slug}`}
          className="relative font-medium text-[#221121] hover:text-[#f1aa4c] text-sm capitalize transition-colors"
        >
          {state.name}
        </Link>
      </div>
      {state.cities.length > 0 && (
        <div className="flex flex-col justify-start items-start gap-0.5 px-3 font-['DM_Sans'] text-[#5e5e5e] text-[13px]">
          {state.cities.map((city) => (
            <Link
              key={city.name}
              href={`/${selectedRegion.slug}/${city.slug}`}
              className="relative self-stretch py-0.5 hover:text-[#ff9338] capitalize transition-colors cursor-pointer"
            >
              {city.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <nav
      className={`flex flex-col items-start text-left text-sm text-black font-albertsans font-medium capitalize bg-marconi_cheese z-[95] ${className}`}
      aria-label="Main Navigation"
    >
      {/* Top Nav Links */}
      <div className="flex flex-row justify-center items-center mx-auto w-full max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-7xl h-9">
        {navigationItems.map(renderNavigationItem)}
      </div>

      {/* Dropdown Panel with Animation */}
      <div
        className={`absolute top-full left-0 w-full overflow-hidden z-[140] transition-all duration-300 ease-in-out ${isDestVisible ? "max-h-[90vh] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div
          className="flex flex-col bg-[#fffaf3] w-full h-[90vh]"
          onMouseEnter={() => setIsDestVisible(true)}
          onMouseLeave={() => setIsDestVisible(false)}
        >
          {/* Header Info - Fixed height */}
          <div className="flex flex-shrink-0 justify-center gap-14 px-4 py-4 border-peachorange border-b font-medium text-[17px] text-black">
            <div className="flex items-start gap-2.5 text-emperor">
              <span>{selectedRegion.name}:</span>
              <span className="font-normal text-black">Avg Temp</span>
              <span>{selectedRegion.avgTemp ?? "N/A"}</span>
              <Icon name="weather-sunny" className="w-5 h-5" />
            </div>

            <div className="flex items-start gap-2.5 text-emperor">
              <span>Best Picks:</span>
              <span className="text-black">
                {selectedRegion.bestPicks?.join(", ") ?? "—"}
              </span>
            </div>
          </div>

          {/* Main content area - Takes remaining height */}
          <div className="flex-1 grid grid-cols-12 min-h-0">
            {/* Region Switcher */}
            <div className="relative flex col-span-5 bg-white border-[#ffc77e] border-r">
              {/* Region Image */}
              <div className="relative flex justify-center items-center p-4 w-full h-full">
                <div className="relative p-4 w-full h-full">
                  <Image
                    src={selectedRegion.image ?? "/images/east-india.png"}
                    alt={`${selectedRegion.name} image`}
                    fill
                    className="rounded-lg object-contain"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={false}
                  />
                </div>
              </div>

              {/* Region List */}
              <div className="flex flex-col items-start bg-white mt-8 rounded-sm w-60 overflow-y-auto text-black text-sm">
                {regionsData.map(renderRegionButton)}

                {/* Explore All */}
                <Link
                  href="/india/c"
                  className="flex items-center gap-2 hover:bg-[#fffaf3] mt-2 px-4 py-2 text-[#5e5e5e] hover:text-[#221121] text-sm transition-colors"
                >
                  <Icon name="search" width={16} height={16} />
                  <span className="capitalize">Explore All</span>
                </Link>
              </div>
            </div>

            {/* States & Cities area */}
            <div className="flex flex-col col-span-7 bg-[#fffaf3] border-[#ffc77e] border-l overflow-hidden">
              {/* Region Title - Fixed */}
              <div className="flex flex-row flex-shrink-0 justify-start items-center gap-1.5 p-6 pb-4 text-[#f1aa4c]">
                <Link
                  href={`/${selectedRegion.slug}`}
                  className="relative font-medium hover:text-[#ff6600] capitalize transition-colors"
                >
                  Explore {selectedRegion.name}
                </Link>
                <Icon name="right-arrow" width={5} height={10} />
              </div>

              {/* States content - Scrollable */}
              <div className="flex-1 px-6 pb-6 overflow-y-auto">
                <div className="gap-4 space-y-2 columns-4">
                  {selectedRegion.states
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((state) => (
                      <div key={state.name} className="mb-4 break-inside-avoid">
                        {renderStateSection(state)}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentView, setCurrentView] = useState<"main" | "regions" | "states" | "cities">("main");
  const [expandedRegionName, setExpandedRegionName] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);
  const [selectedState, setSelectedState] = useState<State | null>(null);

  // Track which state's cities are expanded
  const [expandedState, setExpandedState] = useState<string | null>(null);

  // Open regions accordion
  const openRegions = () => {
    setCurrentView("regions");
    setExpandedRegionName(null);
    setSelectedRegion(null);
    setSelectedState(null);
  };

  // Toggle region accordion
  const toggleRegionAccordion = (regionName: string) => {
    setExpandedRegionName(prev => (prev === regionName ? null : regionName));
  };

  // Select a region to view its states
  const selectRegion = (region: Region) => {
    setSelectedRegion(region);
    setCurrentView("states");
    setSelectedState(null);
    setExpandedState(null); // Reset expanded state when navigating to states view
  };

  // Toggle state accordion (expand/collapse cities)
  const toggleStateAccordion = (stateName: string) => {
    setExpandedState(prev => (prev === stateName ? null : stateName));
  };

  // Back to Regions
  const backToRegions = () => {
    setCurrentView("regions");
    setSelectedState(null);
    setExpandedState(null); // Reset expanded state when going back to regions
  };

  // Back to Main
  const backToMain = () => {
    setCurrentView("main");
    setSelectedRegion(null);
    setSelectedState(null);
    setExpandedState(null); // Reset expanded state when going back to main
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(prev => !prev)}
        className="block sm:hidden p-4"
        aria-label="Open menu"
      >
        <Icon name={isOpen ? "cross" : "hamburger-menu"} className={cn("w-6 text-white", isOpen ? "h-4" : "h-6")} />
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed top-20 inset-0 bg-black/50 z-[150] sm:hidden">
          <div className="absolute right-0 top-0 h-full w-full bg-white transition-transform duration-300 transform">
            <div className="h-[calc(100%-72px)] overflow-y-auto p-4">
              {/* Main Menu */}
              {currentView === "main" && (
                <div className="flex flex-col">
                  {navigationItems.map(item => (
                    <div key={item.name} className="border-b border-mercury">
                      {item.name === "Destinations" ? (
                        <button onClick={openRegions} className="flex items-center justify-between w-full p-4 text-bigstone">
                          {item.name}
                          <Icon name="right-arrow" width={16} height={16} />
                        </button>
                      ) : item.hasDropdown ? (
                        <button className="flex items-center justify-between w-full p-4 text-bigstone">
                          {item.name}
                          <Icon name="right-arrow" width={16} height={16} />
                        </button>
                      ) : (
                        <Link href={item.href} onClick={() => setIsOpen(false)} className="block p-4 text-bigstone">
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Regions Accordion List */}
              {currentView === "regions" && (
                <div>
                  <button onClick={backToMain} className="flex items-center gap-2 mb-3 text-sandybrown">
                    <Icon name="right-arrow" width={16} height={16} className="rotate-180" />
                    <span>Back to Menu</span>
                  </button>
                  <div className="flex flex-col border-t-[1px] border-mercury">
                    {regionsData.map(region => (
                      <div key={region.name} className="border-b border-mercury">
                        <button
                          onClick={() => selectRegion(region)}
                          className="flex items-center justify-between text-nevada hover:text-sandybrown transition-colors w-full p-4"
                        >
                          <span>{region.name}</span>
                          <Icon name={"right-arrow"} width={16} height={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* States Accordion View */}
              {currentView === "states" && selectedRegion && (
                <div>
                  <button onClick={backToRegions} className="flex items-center gap-2 mb-3 text-sandybrown">
                    <Icon name="right-arrow" width={16} height={16} className="rotate-180" />
                    <span>Back to Destinations</span>
                  </button>

                  <div className="flex flex-col border-t-[1px] gap-2 px-4 py-3 mb-2 border-b border-peachorange font-medium text-[15px] text-black">
                    <div className="flex items-center gap-1 text-emperor">
                      <span className="font-semibold">{selectedRegion.name}:</span>
                      <span className="font-normal text-black">Avg Temp</span>
                      <span>{selectedRegion.avgTemp ?? "N/A"}</span>
                      <Icon name="weather-sunny" className="w-4 h-4" />
                    </div>
                    <div className="flex items-center gap-1 text-emperor">
                      <span className="font-semibold">Best Picks:</span>
                      <span className="text-black">{selectedRegion.bestPicks?.join(", ") ?? "—"}</span>
                    </div>
                  </div>

                  {/* States List with Expandable Cities Accordion */}
                  <div className="flex flex-col">
                    {selectedRegion.states.map(state => (
                      <div key={state.slug} className="border-b border-mercury">
                        <button
                          onClick={() => toggleStateAccordion(state.name)}
                          className="flex items-center justify-between w-full p-2 text-nevada hover:text-sandybrown transition-colors"
                        >
                          <span>{state.name}</span>
                          <Icon
                            name="right-arrow"
                            width={16}
                            height={16}
                            className={cn("transition-transform duration-200", expandedState === state.name ? "rotate-90" : "rotate-0")}
                          />
                        </button>

                        {expandedState === state.name && (
                          <div className="p-2 pl-4 bg-[#f9f9f9] flex flex-col gap-1">
                            {state.cities.map(city => (
                              <Link key={city.slug} href={`/${city.slug}`} className="text-sm text-gray font-normal hover:text-sandybrown transition-colors" onClick={() => setIsOpen(false)}>
                                <span>{city.name}</span>
                              </Link>

                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
