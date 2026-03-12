"use client";

import Image from "next/image";
import { HighlightsSection } from "./HighlightsSection";
import { ImageGallerySection } from "./ImageGallerySection";
import { ItineraryDetailsSection } from "./ItineraryDetailsSection";
import { PriceDetailsSection } from "./PriceDetailsSection";
import { SidebarSection } from "./SidebarSection";
import { itineraryData } from "../../lib/data/cms/itinerarydata";

export const Itinerary = () => {
    return (
        <div className="min-h-screen bg-[#fcfbfb]">
            <div className="mx-auto max-w-7xl px-4 py-8">
                {/* Header / Breadcrumbs */}
                <div className="mb-6">
                    <div className="flex items-center gap-2 text-xs text-[#345b63] font-bold uppercase tracking-widest mb-4">
                        <span>Home</span>
                        <span className="text-gray-300">/</span>
                        <span className="text-[#1a3642]">{itineraryData.destination.cityName} {itineraryData.destination.cityName.toLowerCase().includes("package") ? "" : "Tour Packages"}</span>
                    </div>
                    <h1 className="text-3xl font-black text-[#1a3642] mb-1">
                        {itineraryData.title}
                    </h1>
                </div>

                {/* Main Gallery */}
                <ImageGallerySection />

                {/* Overview Banner Section */}
                <section className="bg-white border border-gray-100 rounded-[30px] p-8 mb-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex-1">
                        <h2 className="text-xl font-black text-[#1a3642] mb-1">Overview of {itineraryData.destination.cityName}</h2>
                        <span className="text-[#f1aa4c] text-[10px] font-black uppercase tracking-[0.2em] mb-4 block">
                            {itineraryData.tagline}
                        </span>
                        <p className="text-[#345b63] text-lg font-bold leading-relaxed max-w-3xl">
                            {itineraryData.longDescription}
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        <div className="bg-[#25D366] text-white rounded-full px-8 py-4 flex items-center gap-3 text-sm font-black cursor-pointer hover:bg-[#128C7E] transition-all hover:scale-105 shadow-xl shadow-green-100">
                            <span className="text-xl">💬</span>
                            <span>Contact Us</span>
                        </div>
                    </div>
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Column (Main Content) */}
                    <div className="lg:col-span-8 flex flex-col gap-12">
                        <HighlightsSection />
                        <PriceDetailsSection />
                        <ItineraryDetailsSection />
                    </div>

                    {/* Right Column (Sidebar) */}
                    <div className="lg:col-span-4 sticky top-32 self-start">
                        <SidebarSection />
                    </div>
                </div>
            </div>
        </div>
    );
}
