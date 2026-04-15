"use client";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "../ui/Icon";
import { useState } from "react";
import { cn } from "@/lib/cn";

import { User, MessageCircle, ArrowUp, X, ChevronRight, Sun } from "lucide-react";

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
  const [currentView, setCurrentView] = useState<"main" | "region-detail">("main");
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);
  const [isDestinationsExpanded, setIsDestinationsExpanded] = useState(false);
  const [expandedState, setExpandedState] = useState<string | null>(null);

  const openRegion = (region: Region) => {
    setSelectedRegion(region);
    setCurrentView("region-detail");
    setExpandedState(null);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setCurrentView("main");
    setSelectedRegion(null);
    setIsDestinationsExpanded(false);
  };

  const toggleState = (stateName: string) => {
    setExpandedState(prev => prev === stateName ? null : stateName);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="block sm:hidden p-4"
        aria-label="Open menu"
      >
        <div className="flex flex-col gap-1.5 w-6">
          <div className="h-0.5 w-full bg-white rounded-full"></div>
          <div className="h-0.5 w-full bg-white rounded-full"></div>
          <div className="h-0.5 w-3/4 bg-white rounded-full"></div>
        </div>
      </button>

      {/* Full Screen Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-[#102935] z-[200] transition-transform duration-300 ease-in-out transform sm:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
          <Link href="/" onClick={closeMenu} className="flex items-center gap-2">
            <Icon
              name="peacock-vacations-logo"
              className="w-12 h-8 text-[#ffc87e]"
            />
            <Icon
              name="peacock-vacations-word"
              className="w-24 h-8 text-white"
            />
          </Link>
          <button onClick={closeMenu} className="p-2">
            <X className="w-8 h-8 text-white/70 hover:text-white transition-colors" />
          </button>
        </div>

        {/* Menu Content */}
        <div className="h-[calc(100%-88px)] overflow-y-auto overflow-x-hidden pb-32">
          {currentView === "main" ? (
            <div className="flex flex-col">
              {/* Sign In Section */}
              <div className="bg-[#1a3846] px-6 py-8 flex items-center gap-5 border-b border-white/5">
                <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center text-white bg-white/5">
                  <User className="w-9 h-9" strokeWidth={1} />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-2xl tracking-tight">Sign In</span>
                  <span className="text-white/40 text-sm font-medium">Account</span>
                </div>
              </div>

              {/* Navigation Items */}
              <div className="flex flex-col">
                {navigationItems.map((item) => (
                  <div key={item.name} className="flex flex-col">
                    {item.name === "Destinations" ? (
                      <>
                        <button
                          onClick={() => setIsDestinationsExpanded(!isDestinationsExpanded)}
                          className="flex items-center justify-between px-6 py-6 text-white hover:bg-white/5 transition-colors border-b border-white/5"
                        >
                          <span className="text-xl font-bold tracking-wide">{item.name}</span>
                          <ChevronRight
                            className={cn("w-6 h-6 transition-transform text-white/40", isDestinationsExpanded ? "rotate-90" : "rotate-0")}
                          />
                        </button>
                        {isDestinationsExpanded && (
                          <div className="bg-black/20 flex flex-col py-2">
                            {regionsData.map((region) => (
                              <button
                                key={region.name}
                                onClick={() => openRegion(region)}
                                className="px-10 py-5 text-[#ffc87e] hover:text-[#f1aa4c] text-xl font-bold text-left transition-colors border-b border-white/5 last:border-0"
                              >
                                {region.name}
                              </button>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className="px-6 py-6 text-white text-xl font-bold hover:bg-white/5 transition-colors border-b border-white/5"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            // Region Detail View
            <div className="flex flex-col bg-[#fffaf3] min-h-full">
              {/* Region Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-[#ffd8ba] sticky top-0 bg-[#fffaf3] z-20 transition-all shadow-md">
                <button
                  onClick={() => setCurrentView("main")}
                  className="flex items-center gap-3 text-[#102935]"
                >
                  <ChevronRight className="w-7 h-7 rotate-180 text-[#102935]" strokeWidth={2.5} />
                  <span className="font-extrabold text-2xl text-[#102935]">{selectedRegion?.name}</span>
                </button>
                <Link
                  href={`/${selectedRegion?.slug}`}
                  onClick={closeMenu}
                  className="text-[#f1aa4c] text-[15px] font-bold border-b-2 border-[#f1aa4c] pb-0.5 hover:text-[#ff6600] border-transparent hover:border-[#ff6600] transition-all"
                >
                  Explore Tours
                </Link>
              </div>

              {/* Region Metadata */}
              <div className="bg-[#fff9f1] px-6 py-6 flex flex-col gap-4 border-b border-[#ffd8ba]">
                <div className="flex items-center gap-3 text-[#5e5e5e]">
                  <span className="font-bold text-sm uppercase tracking-wider text-[#102935]/60">{selectedRegion?.name}:</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[15px] font-bold text-[#221121]">Avg Temp</span>
                    <span className="font-black text-[15px] text-[#221121]">{selectedRegion?.avgTemp}</span>
                    <Sun className="w-5 h-5 text-[#f1aa4c] fill-[#f1aa4c]/20" />
                  </div>
                </div>
                <div className="flex items-center gap-3 text-[#5e5e5e]">
                  <span className="font-bold text-sm uppercase tracking-wider text-[#102935]/60">Best Picks:</span>
                  <span className="text-[15px] font-bold text-[#221121] leading-relaxed">{selectedRegion?.bestPicks?.join(", ")}</span>
                </div>
              </div>

              {/* States & Cities Accordion */}
              <div className="flex flex-col bg-white">
                {selectedRegion?.states.map((state) => (
                  <div key={state.slug} className="border-b border-gray-100 last:border-0">
                    <button
                      onClick={() => toggleState(state.name)}
                      className="w-full flex items-center justify-between px-6 py-6 text-left group transition-colors hover:bg-gray-50/50"
                    >
                      <span className="text-xl font-black text-[#221121] group-hover:text-[#f1aa4c] transition-colors">{state.name}</span>
                      <ChevronRight
                        className={cn("w-6 h-6 transition-transform text-gray-300 group-hover:text-[#f1aa4c]", expandedState === state.name ? "rotate-90" : "rotate-0")}
                        strokeWidth={2.5}
                      />
                    </button>
                    {expandedState === state.name && (
                      <div className="px-6 pb-10 pt-2 flex flex-wrap gap-x-5 gap-y-6">
                        {state.cities.map((city) => (
                          <Link
                            key={city.slug}
                            href={`/${selectedRegion.slug}/${city.slug}`}
                            onClick={closeMenu}
                            className="text-[16px] text-[#5e5e5e] font-bold hover:text-[#ff9338] transition-all relative group/city"
                          >
                            {city.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff9338] transition-all duration-300 group-hover/city:w-full"></span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Other Regions list at bottom */}
              <div className="flex flex-col bg-white border-t-[16px] border-gray-100 mb-20">
                <div className="px-6 py-6 font-black text-2xl text-[#102935] border-b border-gray-100 bg-gray-50/50">Explore Other Regions</div>
                {regionsData.filter(r => r.name !== selectedRegion?.name).map(region => (
                  <button
                    key={region.name}
                    onClick={() => openRegion(region)}
                    className="flex items-center justify-between px-6 py-6 border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors group"
                  >
                    <span className="text-[#5e5e5e] font-bold text-xl group-hover:text-[#102935]">{region.name}</span>
                    <ChevronRight className="w-6 h-6 text-gray-300 group-hover:text-[#102935] transform group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Floating Action Buttons */}
        <div className="absolute bottom-10 right-6 flex flex-col gap-5 z-50">
          <a
            href="https://wa.me/yournumber"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 bg-[#25d366] rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all outline-none"
          >
            <MessageCircle className="w-9 h-9 text-white fill-white/10" strokeWidth={1.5} />
          </a>
          <button
            onClick={() => {
              const menuContent = document.querySelector('.overflow-y-auto');
              menuContent?.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(0,0,0,0.15)] hover:scale-110 active:scale-95 transition-all border border-gray-100 outline-none"
          >
            <ArrowUp className="w-8 h-8 text-[#102935]" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </>
  );
}
