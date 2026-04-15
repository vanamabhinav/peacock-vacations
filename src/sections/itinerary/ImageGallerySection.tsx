"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const defaultImages = [
    "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1590393802679-3221b0660298?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1590393802679-3221b0660298?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1974&auto=format&fit=crop"
];

export const ImageGallerySection = ({ images }: { images?: string[] }) => {
    const galleryImages = (images && images.length > 0) ? images : defaultImages;

    return (
        <section className="mb-8 md:mb-12 overflow-hidden px-4 md:px-6 lg:px-0">
            {/* Desktop Grid Layout */}
            <div className="hidden lg:block max-w-7xl mx-auto px-4 md:px-6">
                <div className="grid w-full h-[600px] lg:h-[700px] grid-cols-12 grid-rows-6 gap-4">
                    {/* Main Featured Image (Left) */}
                    <div className="col-span-12 md:col-span-12 lg:col-span-5 row-span-6 relative rounded-[40px] overflow-hidden shadow-2xl group cursor-pointer border-4 border-white">
                        <Image
                            src={galleryImages[0] || defaultImages[0]}
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
                        <div className="col-span-8 row-span-5 relative rounded-[35px] overflow-hidden shadow-lg group border-4 border-white">
                            <Image
                                src={galleryImages[1] || defaultImages[1]}
                                alt="Middle Top"
                                fill
                                className="object-cover transition-all duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[35px]"></div>
                        </div>
                        <div className="col-span-4 row-span-7 relative rounded-[35px] overflow-hidden shadow-lg group border-4 border-white">
                            <Image
                                src={galleryImages[2] || defaultImages[2]}
                                alt="Far Right Top"
                                fill
                                className="object-cover transition-all duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[35px]"></div>
                        </div>

                        {/* Middle Row (Overlapping feel) */}
                        <div className="col-span-4 row-span-7 relative rounded-[35px] overflow-hidden shadow-lg group border-4 border-white">
                            <Image
                                src={galleryImages[3] || defaultImages[3]}
                                alt="Middle Bottom"
                                fill
                                className="object-cover transition-all duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[35px]"></div>
                        </div>

                        {/* Bottom Row Spanning Right */}
                        <div className="col-span-4 row-span-4 relative rounded-[35px] overflow-hidden shadow-lg group border-4 border-white">
                            <Image
                                src={galleryImages[4] || defaultImages[4]}
                                alt="Bottom Left"
                                fill
                                className="object-cover transition-all duration-700 group-hover:scale-110"
                            />
                        </div>

                        {/* Smallest accent images */}
                        <div className="col-span-4 row-span-3 relative rounded-[30px] overflow-hidden shadow-lg group border-4 border-white">
                            <Image
                                src={galleryImages[5] || defaultImages[5]}
                                alt="Bottom Gap 1"
                                fill
                                className="object-cover transition-all duration-700 group-hover:scale-110"
                            />
                        </div>
                        <div className="col-span-4 row-span-5 relative rounded-[30px] overflow-hidden shadow-lg group border-4 border-white">
                            <Image
                                src={galleryImages[6] || defaultImages[6]}
                                alt="Bottom Gap 2"
                                fill
                                className="object-cover transition-all duration-700 group-hover:scale-110"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Carousel Layout - NEW Swiper Implementation */}
            <div className="lg:hidden w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    loop={true}
                    slidesPerView={1}
                    spaceBetween={0}
                    className="itinerary-swiper w-full h-[70vh]"
                >
                    {galleryImages.map((img, idx) => (
                        <SwiperSlide key={idx} className="w-full h-full">
                            <div className="relative w-full h-full">
                                <Image
                                    src={img}
                                    alt={`Gallery image ${idx + 1}`}
                                    fill
                                    className="object-cover"
                                    priority={idx === 0}
                                />
                                {/* Bottom Shadow Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <style jsx global>{`
                .itinerary-swiper .swiper-pagination-bullet {
                    background: rgba(255, 255, 255, 0.4);
                    opacity: 1;
                    width: 10px;
                    height: 10px;
                    transition: all 0.3s ease;
                }
                .itinerary-swiper .swiper-pagination-bullet-active {
                    background: #ffffff;
                    width: 24px;
                    border-radius: 5px;
                }
                .itinerary-swiper .swiper-pagination {
                    bottom: 20px !important;
                }
            `}</style>
        </section>
    );
};
