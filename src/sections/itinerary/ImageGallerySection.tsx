"use client";

import Image from "next/image";
import { itineraryData } from "../../lib/data/cms/itinerarydata";

export const ImageGallerySection = () => {
    return (
        <section className="mb-8 md:mb-12">
            {/* Desktop Grid Layout */}
            <div className="hidden lg:grid w-full h-[600px] lg:h-[700px] grid-cols-12 grid-rows-6 gap-4">
                {/* Main Featured Image (Left) */}
                <div className="col-span-12 md:col-span-12 lg:col-span-5 row-span-6 relative rounded-[40px] overflow-hidden shadow-2xl group cursor-pointer border-4 border-white">
                    <Image
                        src={itineraryData.galleryImages[0]}
                        alt="Far Left"
                        fill
                        className="object-cover transition-all duration-1000 group-hover:scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Right Side Grid */}
                <div className="col-span-12 md:col-span-12 lg:col-span-7 row-span-6 grid grid-cols-12 grid-rows-12 gap-4">
                    {/* Top Row */}
                    <div className="col-span-8 row-span-5 relative rounded-[35px] overflow-hidden shadow-lg group border-4 border-white overflow-hidden">
                        <Image
                            src={itineraryData.galleryImages[1]}
                            alt="Middle Top"
                            fill
                            className="object-cover transition-all duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[35px]"></div>
                    </div>
                    <div className="col-span-4 row-span-7 relative rounded-[35px] overflow-hidden shadow-lg group border-4 border-white overflow-hidden">
                        <Image
                            src={itineraryData.galleryImages[2]}
                            alt="Far Right Top"
                            fill
                            className="object-cover transition-all duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[35px]"></div>
                    </div>

                    {/* Middle Row (Overlapping feel) */}
                    <div className="col-span-4 row-span-7 relative rounded-[35px] overflow-hidden shadow-lg group border-4 border-white overflow-hidden">
                        <Image
                            src={itineraryData.galleryImages[3]}
                            alt="Middle Bottom"
                            fill
                            className="object-cover transition-all duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[35px]"></div>
                    </div>

                    {/* Bottom Row Spanning Right */}
                    <div className="col-span-4 row-span-4 relative rounded-[35px] overflow-hidden shadow-lg group border-4 border-white overflow-hidden">
                        <Image
                            src={itineraryData.galleryImages[4]}
                            alt="Bottom Left"
                            fill
                            className="object-cover transition-all duration-700 group-hover:scale-110"
                        />
                    </div>

                    {/* Smallest accent images */}
                    <div className="col-span-4 row-span-3 relative rounded-[30px] overflow-hidden shadow-lg group border-4 border-white overflow-hidden">
                        <Image
                            src={itineraryData.galleryImages[5]}
                            alt="Bottom Gap 1"
                            fill
                            className="object-cover transition-all duration-700 group-hover:scale-110"
                        />
                    </div>
                    <div className="col-span-4 row-span-5 relative rounded-[30px] overflow-hidden shadow-lg group border-4 border-white overflow-hidden">
                        <Image
                            src={itineraryData.galleryImages[6]}
                            alt="Bottom Gap 2"
                            fill
                            className="object-cover transition-all duration-700 group-hover:scale-110"
                        />
                    </div>
                </div>
            </div>

            {/* Mobile Carousel Layout */}
            <div className="lg:hidden w-full relative group">
                <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-0 rounded-[32px]">
                    {itineraryData.galleryImages.map((img, idx) => (
                        <div key={idx} className="flex-shrink-0 w-full aspect-[4/3] snap-start relative">
                            <Image
                                src={img}
                                alt={`Gallery image ${idx + 1}`}
                                fill
                                className="object-cover"
                                priority={idx === 0}
                            />
                        </div>
                    ))}
                </div>
                {/* Dots / Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 px-3 py-1.5 bg-white/30 backdrop-blur-md rounded-full">
                    {itineraryData.galleryImages.slice(0, 4).map((_, idx) => (
                        <div key={idx} className={`w-1.5 h-1.5 rounded-full ${idx === 0 ? 'bg-white' : 'bg-white/40'}`} />
                    ))}
                </div>
            </div>
        </section>
    );
};
