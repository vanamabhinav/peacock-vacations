"use client";

import Image from "next/image";
import { HighlightsSection } from "./HighlightsSection";
import { ImageGallerySection } from "./ImageGallerySection";
import { ItineraryDetailsSection } from "./ItineraryDetailsSection";
import { PriceDetailsSection } from "./PriceDetailsSection";
import { SidebarSection } from "./SidebarSection";
import { MobileActionFloat } from "../../components/itinerary/MobileActionFloat";
import { IPackage } from "@/models/Package";

export const Itinerary = ({ packageData }: { packageData: IPackage }) => {
    const data = packageData;

    return (
        <div className="min-h-screen bg-[#fcfbfb] pb-24 md:pb-0 font-albertsans">
            <div className="mx-auto max-w-7xl px-4 md:px-6 py-6 md:py-8">
                {/* Header / Breadcrumbs */}
                <div className="mb-6">
                    <div className="flex items-center gap-2 text-[10px] md:text-xs text-[#345b63] font-bold uppercase tracking-widest mb-3 md:mb-4">
                        <span>Home</span>
                        <span className="text-gray-300">/</span>
                        <span>Package</span>
                        <span className="text-gray-300">/</span>
                        <span>{data.destination?.cityName || "Explore"}</span>
                        <span className="text-gray-300 hidden md:inline">/</span>
                        <span className="text-[#1a3642] hidden md:inline">{data.title || "Travel Package"}</span>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-black text-[#1a3642] mb-1 leading-tight">
                        {data.title || "Exclusive Travel Experience"}
                    </h1>
                </div>

                {/* Main Gallery */}
                <ImageGallerySection images={data.galleryImages} />

                {/* Overview Banner Section / Goa Tour Packages on Mobile */}
                <section className="bg-white border border-gray-100 rounded-[24px] md:rounded-[30px] p-6 md:p-8 mb-6 md:mb-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
                    <div className="flex-1 w-full">
                        <div className="flex justify-between items-baseline mb-3 md:mb-1">
                            <h2 className="text-lg md:text-xl font-black text-[#1a3642]">
                                Over View Of {data.destination?.cityName || "the Destination"}
                            </h2>
                            <span className="text-blue-500 text-[10px] font-bold underline md:hidden">Read More</span>
                        </div>
                        <span className="text-[#f1aa4c] text-[10px] font-black uppercase tracking-[0.2em] mb-4 hidden md:block">
                            {data.tagline || "Experience Extraordinary Journeys"}
                        </span>
                        <p className="text-[#345b63] text-sm md:text-lg font-bold leading-relaxed max-w-3xl opacity-80 md:opacity-100 line-clamp-3 md:line-clamp-none">
                            {data.longDescription || "Explore stunning landscapes, vibrant culture, and unforgettable experiences. Our curated packages ensure you get the perfect mix of relaxation and adventure."}
                        </p>
                    </div>
                    <div className="hidden md:block flex-shrink-0">
                        <div className="bg-[#25D366] text-white rounded-full px-8 py-4 flex items-center gap-3 text-sm font-black cursor-pointer hover:bg-[#128C7E] transition-all hover:scale-105 shadow-xl shadow-green-100">
                            <span className="text-xl">💬</span>
                            <span>Contact Us</span>
                        </div>
                    </div>
                </section>

                {/* Mobile Package Includes Bar */}
                {data.packageIncludes && (
                    <div className="md:hidden flex flex-col gap-3 mb-8">
                        <p className="text-[10px] font-black text-[#1a3642]/40 uppercase tracking-widest pl-1">Package Includes</p>
                        <div className="flex items-center gap-4 bg-white border border-gray-50 rounded-[20px] p-4 shadow-sm overflow-x-auto no-scrollbar">
                            {data.packageIncludes.map((item) => (
                                <div key={item.id} className="flex flex-col items-center gap-2 flex-shrink-0">
                                    <div className="w-12 h-12 bg-[#f8f8f8] rounded-2xl flex items-center justify-center p-2.5 border border-gray-50">
                                        <Image src={item.icon || `/images/south-india.png`} alt={item.label} width={32} height={32} className="w-full h-full object-contain opacity-70" />
                                    </div>
                                    <span className="text-[9px] font-black text-[#1a3642] uppercase tracking-tighter opacity-60">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
                    {/* Left Column (Main Content) */}
                    <div className="lg:col-span-8 flex flex-col gap-10 md:gap-12">
                        <HighlightsSection highlights={data.highlights} />
                        <PriceDetailsSection
                            price={data.price}
                            departureCity={data.departureCity}
                            destination={data.destination}
                            duration={data.duration}
                            suggestedFlights={data.suggestedFlights}
                        />
                        <ItineraryDetailsSection data={data} />
                    </div>

                    {/* Right Column (Sidebar) */}
                    <div className="lg:col-span-4 sticky top-32 self-start hidden lg:block">
                        <SidebarSection data={data} />
                    </div>
                </div>
            </div>

            {/* Floating Mobile Bar */}
            <MobileActionFloat
                price={data.price.discountedAmount}
                currency={data.price.currency}
            />
        </div>
    );
}
