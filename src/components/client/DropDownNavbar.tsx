"use client";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "../ui/Icon";
import { useState, useEffect } from "react";
import { cn } from "@/lib/cn";

import { User, MessageCircle, ArrowUp, X, ChevronRight, Sun, ChevronDown } from "lucide-react";

import { regionsData, Region, State, City } from "@/lib/data/cms/destinationsData";

// Navigation items configuration
const navigationItems: Array<{
  name: string;
  href: string;
  hasDropdown?: boolean;
  type?: string;
  id?: string;
  collectionSlugs?: string[];
}> = [
    { name: "Home", href: "/" },
    { name: "Destinations", href: "#", hasDropdown: true, type: 'destinations' },
    { name: "Speciality Tours", href: "#", hasDropdown: true, type: 'collections' },
    { name: "Blog", href: "/blog" },
    { name: "Events & Festivals", href: "/events-festivals" },
    { name: "About Us", href: "/about" },
    { name: "FAQs", href: "/faqs" },
  ];

export function DropDownNavbar({ className = "" }: { className?: string }) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<Region>(regionsData[0]);
  const [collections, setCollections] = useState<any[]>([]);
  const [selectedCollection, setSelectedCollection] = useState<any>(null);
  const [navbarConfig, setNavbarConfig] = useState<{ customDropdowns: any[] }>({ customDropdowns: [] });

  useEffect(() => {
    // Fetch collections for data lookup
    fetch("/api/collections")
      .then(res => res.json())
      .then(data => {
        setCollections(data);
      })
      .catch(err => console.error("Failed to fetch collections", err));

    // Fetch navbar configuration
    fetch("/api/navbar/config")
      .then(res => res.json())
      .then(data => {
        setNavbarConfig(data);
      })
      .catch(err => console.error("Failed to fetch navbar config", err));
  }, []);

  const handleRegionHover = (region: Region) => {
    setSelectedRegion(region);
  };

  // Merge static navigation with dynamic dropdowns
  const dynamicNavigation = [
    navigationItems[0], // Home
    navigationItems[1], // Destinations
    ...navbarConfig.customDropdowns.map(d => ({
      name: d.label,
      href: "#",
      hasDropdown: true,
      type: 'custom',
      id: d.id,
      collectionSlugs: d.collectionSlugs
    })),
    ...navigationItems.slice(3) // Blog, Events, etc (Skipping the old hardcoded Speciality Tours)
  ];

  const renderNavigationItem = (item: any) => {
    const { name, href, hasDropdown, type, id } = item;
    const dropdownKey = type === 'custom' ? `custom-${id}` : (type || name);

    return (
      <div
        key={dropdownKey}
        className="sm:relative"
        onMouseEnter={() => hasDropdown && setActiveDropdown(dropdownKey)}
        onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
      >
        <Link
          href={href}
          className="flex items-center gap-1 hover:bg-white px-[22px] h-[36px] text-bigstone transition-colors cursor-pointer"
        >
          <span className="text-nowrap">{name}</span>
          {hasDropdown && (
            <ChevronDown
              size={14}
              className={`transition-transform duration-200 ${activeDropdown === dropdownKey ? "rotate-180" : ""
                }`}
            />
          )}
        </Link>

        {/* Mega Menu Dropdown for Custom Types (Collections) */}
        {type === 'custom' && activeDropdown === dropdownKey && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-[580px] bg-white shadow-[0_20px_60px_rgba(26,54,66,0.18)] border border-peachorange/50 rounded-b-2xl overflow-hidden z-[200] animate-fade-in">

            {/* Header */}
            <div className="flex items-center justify-between px-5 pt-4 pb-3 bg-islandSplice border-b border-peachorange/40">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-[0.22em] text-sandybrown">{name}</span>
                <span className="h-px w-6 bg-sandybrown/30" />
                <span className="text-[11px] text-bigstone/40 font-medium">
                  {item.collectionSlugs?.length ?? 0} collections
                </span>
              </div>
              <Link
                href="#"
                className="flex items-center gap-1 text-[11px] font-bold text-bigstone/50 hover:text-sandybrown transition-colors"
                onClick={() => setActiveDropdown(null)}
              >
                See all <ChevronRight size={12} />
              </Link>
            </div>

            {/* Card Grid */}
            <div className="p-4 grid grid-cols-2 gap-3">
              {item.collectionSlugs?.map((slug: string) => {
                const col = collections.find(c => c.slug === slug);
                if (!col) return null;
                const bgImage = col.navImage || col.bannerImage;

                return (
                  <Link
                    key={col.slug}
                    href={`/collection/${col.slug}`}
                    className="relative rounded-xl overflow-hidden group h-[148px] block"
                    onClick={() => setActiveDropdown(null)}
                  >
                    {/* Background image or fallback gradient */}
                    {bgImage ? (
                      <Image
                        src={bgImage}
                        alt={col.name}
                        fill
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                        sizes="280px"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-bigstone via-william to-bluedianne" />
                    )}

                    {/* Persistent gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                    {/* Hover tint — brand gold */}
                    <div className="absolute inset-0 bg-sandybrown/0 group-hover:bg-sandybrown/15 transition-colors duration-300" />

                    {/* Bottom content row */}
                    <div className="absolute bottom-0 left-0 right-0 px-3 py-2.5 flex items-end justify-between">
                      <div className="flex flex-col gap-0.5">
                        {col.navIcon && (
                          <img
                            src={col.navIcon}
                            alt=""
                            className="w-4 h-4 object-contain opacity-75 group-hover:opacity-100 transition-opacity mb-0.5"
                          />
                        )}
                        <span className="text-white font-bold text-sm leading-tight drop-shadow-sm">
                          {col.name}
                        </span>
                        {col.description && (
                          <span className="text-white/60 text-[11px] leading-tight line-clamp-1">
                            {col.description}
                          </span>
                        )}
                      </div>
                      {/* Arrow badge */}
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-sandybrown transition-all duration-300 group-hover:scale-110">
                        <ChevronRight size={13} className="text-white" />
                      </div>
                    </div>
                  </Link>
                );
              })}

              {(!item.collectionSlugs || item.collectionSlugs.length === 0) && (
                <div className="col-span-2 py-10 text-center">
                  <Sun className="w-8 h-8 text-sandybrown/30 mx-auto mb-2" />
                  <p className="text-sm text-bigstone/30 font-medium">No collections configured yet</p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-5 py-3 bg-islandSplice border-t border-peachorange/40 flex items-center justify-between">
              <span className="text-[11px] text-bigstone/35 font-medium">
                Handpicked travel experiences
              </span>
              <Link
                href="#"
                onClick={() => setActiveDropdown(null)}
                className="text-[11px] font-black text-sandybrown hover:text-pizazz transition-colors uppercase tracking-wide flex items-center gap-1"
              >
                Explore all <ChevronRight size={11} />
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  };


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
          onClick={() => setActiveDropdown(null)}
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
              onClick={() => setActiveDropdown(null)}
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
        {dynamicNavigation.map(renderNavigationItem)}
      </div>

      {/* Dropdown Panels (Full width ones like Destinations) */}
      <div
        className={`absolute top-full left-0 w-full overflow-hidden z-[140] transition-all duration-300 ease-in-out ${activeDropdown === 'destinations' ? "max-h-[90vh] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        {activeDropdown === 'destinations' && (
          <div
            className="flex flex-col bg-[#fffaf3] w-full h-[90vh]"
            onMouseEnter={() => setActiveDropdown('destinations')}
            onMouseLeave={() => setActiveDropdown(null)}
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

                <div className="flex flex-col items-start bg-white mt-8 rounded-sm w-60 overflow-y-auto text-black text-sm">
                  {regionsData.map(renderRegionButton)}
                  <Link
                    href="/india/c"
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-center gap-2 hover:bg-[#fffaf3] mt-2 px-4 py-2 text-[#5e5e5e] hover:text-[#221121] text-sm transition-colors"
                  >
                    <Icon name="search" width={16} height={16} />
                    <span className="capitalize">Explore All</span>
                  </Link>

                  {/* Optional: Show collections in Destinations dropdown as well */}
                  {collections.filter(c => c.showInNav).length > 0 && (
                    <div className="w-full mt-6 pt-6 border-t border-peachorange">
                      <p className="px-4 mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#ff9338]">Collections</p>
                      {collections.filter(c => c.showInNav).slice(0, 8).map(col => (
                        <Link
                          key={col._id}
                          href={`/collection/${col.slug}`}
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center gap-2 px-4 py-2 hover:bg-[#fff2e5] text-black transition-colors"
                        >
                          {col.navIcon ? (
                            <img src={col.navIcon} alt="" className="w-4 h-4 object-contain" />
                          ) : (
                            <Sun className="w-4 h-4 text-[#ff9338]" />
                          )}
                          <span className="capitalize">{col.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* States & Cities area */}
              <div className="flex flex-col col-span-7 bg-[#fffaf3] border-[#ffc77e] border-l overflow-hidden">
                <div className="flex flex-row flex-shrink-0 justify-start items-center gap-1.5 p-6 pb-4 text-[#f1aa4c]">
                  <Link
                    href={`/${selectedRegion.slug}`}
                    onClick={() => setActiveDropdown(null)}
                    className="relative font-medium hover:text-[#ff6600] capitalize transition-colors"
                  >
                    Explore {selectedRegion.name}
                  </Link>
                  <Icon name="right-arrow" width={5} height={10} />
                </div>

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
        )}
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

  const [collections, setCollections] = useState<any[]>([]);
  const [navbarConfig, setNavbarConfig] = useState<{ customDropdowns: any[] }>({ customDropdowns: [] });
  const [expandedDropdownId, setExpandedDropdownId] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/collections")
      .then(res => res.json())
      .then(data => {
        setCollections(data);
      })
      .catch(err => console.error("Failed to fetch collections", err));

    fetch("/api/navbar/config")
      .then(res => res.json())
      .then(data => {
        setNavbarConfig(data);
      })
      .catch(err => console.error("Failed to fetch navbar config", err));
  }, []);

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
    setExpandedDropdownId(null);
  };

  const toggleState = (stateName: string) => {
    setExpandedState(prev => prev === stateName ? null : stateName);
  };

  const dynamicNavigation = [
    navigationItems[0], // Home
    navigationItems[1], // Destinations
    ...navbarConfig.customDropdowns.map(d => ({
      name: d.label,
      href: "#",
      hasDropdown: true,
      type: 'custom',
      id: d.id,
      collectionSlugs: d.collectionSlugs
    })),
    ...navigationItems.slice(3)
  ];

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
                {dynamicNavigation.map((item: any) => (
                  <div key={item.id || item.name} className="flex flex-col">
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
                    ) : item.type === "custom" ? (
                      <>
                        <button
                          onClick={() => setExpandedDropdownId(expandedDropdownId === item.id ? null : item.id)}
                          className="flex items-center justify-between px-6 py-6 text-white hover:bg-white/5 transition-colors border-b border-white/5"
                        >
                          <span className="text-xl font-bold tracking-wide">{item.name}</span>
                          <ChevronRight
                            className={cn("w-6 h-6 transition-transform text-white/40", expandedDropdownId === item.id ? "rotate-90" : "rotate-0")}
                          />
                        </button>
                        {expandedDropdownId === item.id && (
                          <div className="flex flex-col">
                            {item.collectionSlugs?.map((slug: string) => {
                              const col = collections.find(c => c.slug === slug);
                              if (!col) return null;
                              const bgImage = col.navImage || col.bannerImage;
                              return (
                                <Link
                                  key={col.slug}
                                  href={`/collection/${col.slug}`}
                                  onClick={closeMenu}
                                  className="relative flex items-center gap-4 px-10 py-5 border-b border-white/5 last:border-0 overflow-hidden group"
                                >
                                  {/* Subtle image tint background */}
                                  {bgImage && (
                                    <div
                                      className="absolute inset-0 bg-cover bg-center opacity-10 group-active:opacity-20 transition-opacity"
                                      style={{ backgroundImage: `url(${bgImage})` }}
                                    />
                                  )}
                                  <div className="absolute inset-0 bg-black/50" />
                                  <div className="relative flex items-center gap-4">
                                    {col.navIcon ? (
                                      <img src={col.navIcon} alt="" className="w-7 h-7 object-contain opacity-80" />
                                    ) : (
                                      <Sun className="w-6 h-6 text-sandybrown" />
                                    )}
                                    <div className="flex flex-col">
                                      <span className="text-[#ffc87e] text-xl font-bold leading-tight">{col.name}</span>
                                      {col.description && (
                                        <span className="text-white/40 text-sm font-normal mt-0.5 line-clamp-1">{col.description}</span>
                                      )}
                                    </div>
                                  </div>
                                  <ChevronRight className="relative ml-auto w-5 h-5 text-white/30" />
                                </Link>
                              );
                            })}
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
