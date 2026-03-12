"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { itineraryData } from "../../lib/data/cms/itinerarydata";

const tabs = [
    { name: "Itinerary", id: "itinerary" },
    { name: "Tour Inclusions", id: "inclusions" },
    { name: "Need to Know", id: "need-to-know" },
    { name: "Visa Process", id: "visa" },
    { name: "Terms & Policy", id: "policy" }
];

export const ItineraryDetailsSection = () => {
    const [activeSection, setActiveSection] = useState("itinerary");
    const [showInclusions, setShowInclusions] = useState(true);

    const sectionRefs = {
        itinerary: useRef<HTMLDivElement>(null),
        inclusions: useRef<HTMLDivElement>(null),
        "need-to-know": useRef<HTMLDivElement>(null),
        visa: useRef<HTMLDivElement>(null),
        policy: useRef<HTMLDivElement>(null)
    };

    const scrollToSection = (id: string) => {
        const ref = sectionRefs[id as keyof typeof sectionRefs];
        if (ref.current) {
            const yOffset = -100;
            const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    useEffect(() => {
        const handleIntersect = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const options = {
            root: null,
            rootMargin: "-150px 0px -70% 0px",
            threshold: 0
        };

        const observer = new IntersectionObserver(handleIntersect, options);
        Object.values(sectionRefs).forEach((ref) => {
            if (ref.current) observer.observe(ref.current);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className="w-full flex flex-col gap-10">
            {/* Navigation Menu */}
            <div className="sticky top-0 z-20 bg-[#fcfbfb] pt-4 pb-2 -mx-4 px-4 overflow-hidden">
                <div className="flex border-b border-gray-200 bg-white shadow-sm overflow-x-auto no-scrollbar">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => scrollToSection(tab.id)}
                            className={`px-8 py-4 text-sm font-bold transition-all whitespace-nowrap border-b-2 ${activeSection === tab.id
                                ? "border-[#345b63] text-[#345b63]"
                                : "border-transparent text-gray-500 hover:text-[#345b63]"
                                }`}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* ITINERARY SECTION */}
            <div id="itinerary" ref={sectionRefs.itinerary} className="flex flex-col gap-3 scroll-mt-24">
                <h2 className="text-2xl font-black text-[#1a3642]">Itinerary</h2>
                <p className="text-xs font-medium text-gray-500 mb-2">Step-by-step plan designed for your perfect vacation.</p>

                {/* Trip Summary Table */}
                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                    <div className="bg-[#f1aa4c] px-6 py-3 flex items-center justify-between">
                        <h3 className="text-white text-base font-bold">Goa Trip Summary – {itineraryData.duration.nights} Nights, {itineraryData.duration.days} Days</h3>
                        <span className="text-white text-[10px] font-bold italic underline cursor-pointer">View Detail</span>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <tbody className="divide-y divide-gray-100">
                                {itineraryData.summaryTable.map((item, i) => (
                                    <tr key={i} className="group hover:bg-gray-50/50 transition-colors">
                                        <td className="px-6 py-5 border-r border-gray-100 w-32">
                                            <div className="flex flex-col">
                                                <span className="text-base font-black text-[#1a3642]">Day {item.day}</span>
                                                <span className="text-[11px] font-bold text-gray-400">{item.date}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5" colSpan={!item.noonEveningText ? 2 : 1}>
                                            <div className="flex items-start gap-4">
                                                {(item.isArrive || item.isDepart) && (
                                                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 italic">
                                                        <span className="text-xs">{item.isArrive ? "🌅" : "✈️"}</span>
                                                    </div>
                                                )}
                                                <div className="flex flex-col gap-0.5">
                                                    <span className="text-[10px] font-black text-[#345b63]/40 uppercase tracking-widest italic leading-none">
                                                        {item.morningTime}
                                                    </span>
                                                    <p className="text-[16px] font-bold text-[#1a3642] leading-snug">
                                                        {item.morningText}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        {item.noonEveningText && (
                                            <td className="px-6 py-5">
                                                <div className="flex flex-col gap-0.5">
                                                    <span className="text-[10px] font-black text-[#345b63]/40 uppercase tracking-widest italic leading-none">
                                                        {item.noonEveningTime}
                                                    </span>
                                                    <p className="text-[16px] font-bold text-[#1a3642]">
                                                        {item.noonEveningText}
                                                    </p>
                                                </div>
                                            </td>
                                        )}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* TOUR INCLUSIONS SECTION */}
            <div id="inclusions" ref={sectionRefs.inclusions} className="flex flex-col gap-3 scroll-mt-24 pt-4">
                <h2 className="text-2xl font-black text-[#1a3642]">Tour Inclusions</h2>
                <p className="text-xs font-medium text-gray-500 mb-4">All the essentials that make your journey effortless and memorable.</p>

                <div className="flex flex-col gap-8">
                    {/* Stay Section */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-base font-black text-[#1a3642] italic">Stay</h4>
                        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm flex h-52 group">
                            <div className="relative w-1/3 overflow-hidden">
                                <Image src={itineraryData.stayDetails.imageUrl} alt="Stay" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                            </div>
                            <div className="p-8 flex flex-col justify-center gap-2 w-2/3">
                                <h3 className="text-2xl font-black text-[#1a3642]">{itineraryData.stayDetails.hotelName}</h3>
                                <p className="text-[#345b63] text-sm font-bold opacity-60 italic">{itineraryData.stayDetails.dates}</p>
                                <div className="flex items-center gap-4 mt-2">
                                    <div className="bg-[#fff9f1] border border-[#f1aa4c]/30 px-3 py-1 rounded-md flex items-center gap-1.5 shadow-sm">
                                        <span className="text-[#f1aa4c] text-sm font-black">{itineraryData.stayDetails.rating}★ Hotel</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs">🛋️</span>
                                        <span className="text-[13px] font-bold text-[#1a3642]">{itineraryData.stayDetails.area}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs">🛏️</span>
                                        <span className="text-[13px] font-bold text-[#1a3642]">{itineraryData.stayDetails.bedType}</span>
                                    </div>
                                </div>
                                <div className="w-full h-px bg-gray-100 my-2"></div>
                                <div className="flex gap-6">
                                    {itineraryData.stayDetails.amenities.map((item, i) => (
                                        <div key={i} className="flex items-center gap-1.5">
                                            <span className="text-[#3ed0b3] text-sm">{item.included ? "✔" : "✘"}</span>
                                            <span className="text-xs font-bold text-gray-500">{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Transfers Section */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-base font-black text-[#1a3642] italic">Transfers</h4>
                        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm flex h-52 group">
                            <div className="relative w-1/3 overflow-hidden">
                                <Image src={itineraryData.transferDetails.imageUrl} alt="Transfer" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                            </div>
                            <div className="p-8 flex flex-col justify-center gap-2 w-2/3">
                                <h3 className="text-2xl font-black text-[#1a3642]">{itineraryData.transferDetails.vehicleName}</h3>
                                <p className="text-[#345b63] text-sm font-bold opacity-60 italic">{itineraryData.transferDetails.dates}</p>
                                <div className="flex items-center gap-4 mt-2">
                                    <div className="bg-[#fff9f1] border border-[#f1aa4c]/30 px-3 py-1 rounded-md flex items-center gap-1.5 shadow-sm">
                                        <span className="text-[#f1aa4c] text-sm font-black">{itineraryData.transferDetails.type}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs">🚗</span>
                                        <span className="text-[13px] font-bold text-[#1a3642]">{itineraryData.transferDetails.capacity}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs">💼</span>
                                        <span className="text-[13px] font-bold text-[#1a3642]">{itineraryData.transferDetails.luggage}</span>
                                    </div>
                                </div>
                                <div className="w-full h-px bg-gray-100 my-2"></div>
                                <div className="flex gap-6">
                                    {itineraryData.transferDetails.features.map((item, i) => (
                                        <div key={i} className="flex items-center gap-1.5">
                                            <span className="text-[#3ed0b3] text-sm">{item.included ? "✔" : "✘"}</span>
                                            <span className="text-xs font-bold text-gray-500">{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Inclusion/Exclusion Toggle Section */}
                    <div className="mt-4 bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
                        <div className="flex bg-[#f1f2f4] p-1.5">
                            <button
                                onClick={() => setShowInclusions(true)}
                                className={`flex-1 py-4 text-base font-black rounded-2xl transition-all ${showInclusions
                                    ? "bg-[#f1aa4c] text-white shadow-md scale-[1.01]"
                                    : "text-gray-400"
                                    }`}
                            >
                                Tour Inclusions
                            </button>
                            <button
                                onClick={() => setShowInclusions(false)}
                                className={`flex-1 py-4 text-base font-black rounded-2xl transition-all ${!showInclusions
                                    ? "bg-[#f1aa4c] text-white shadow-md scale-[1.01]"
                                    : "text-gray-400"
                                    }`}
                            >
                                Tour Exclusions
                            </button>
                        </div>
                        <div className="p-10 min-h-[250px] bg-[#fdfbf9]">
                            {showInclusions ? (
                                <ul className="space-y-5">
                                    {itineraryData.tourInclusionsList.map((item, i) => (
                                        <li key={i} className="text-[16px] font-bold text-[#345b63] flex items-start gap-4 hover:translate-x-1 transition-transform">
                                            <span className="text-[#3ed0b3] text-xl leading-none">✔</span>
                                            <span className="leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <ul className="space-y-5">
                                    {itineraryData.tourExclusionsList.map((item, i) => (
                                        <li key={i} className="text-[16px] font-bold text-[#345b63] flex items-start gap-4 hover:translate-x-1 transition-transform">
                                            <span className="text-[#bc283a] text-xl leading-none">✘</span>
                                            <span className="leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                    {itineraryData.tourExclusionsList.length === 0 && (
                                        <div className="flex flex-col items-center justify-center py-10 opacity-40">
                                            <span className="text-4xl mb-4">✘</span>
                                            <p className="text-lg font-bold">No Exclusions Listed</p>
                                        </div>
                                    )}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* NEED TO KNOW SECTION */}
            <div id="need-to-know" ref={sectionRefs["need-to-know"]} className="flex flex-col gap-3 scroll-mt-24 pt-8">
                <h2 className="text-2xl font-black text-[#1a3642]">Need to Know</h2>
                <p className="text-xs font-medium text-gray-500 mb-2">Essential information before your journey begins</p>

                <div className="flex flex-col gap-6">
                    {/* Documents Required */}
                    <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
                        <div className="bg-gradient-to-r from-[#fedec0] to-[#fff3e7] px-6 py-4">
                            <h3 className="text-lg font-black text-[#345b63]">Documents Required for Travel</h3>
                        </div>
                        <div className="p-10 flex flex-col gap-8">
                            <div className="flex flex-col gap-2">
                                <p className="text-[17px] font-black text-[#1a3642]">For International Travelers (Adults):</p>
                                <p className="text-[17px] font-bold text-[#345b63] leading-relaxed">
                                    {itineraryData.needToKnow.documents.international}
                                </p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-[17px] font-black text-[#1a3642]">For Children:</p>
                                <p className="text-[17px] font-bold text-[#345b63] leading-relaxed">
                                    {itineraryData.needToKnow.documents.children}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Weather */}
                    <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
                        <div className="bg-gradient-to-r from-[#fedec0] to-[#fff3e7] px-6 py-4">
                            <h3 className="text-lg font-black text-[#345b63]">Weather</h3>
                        </div>
                        <div className="p-10">
                            <p className="text-[17px] font-bold text-[#345b63] leading-relaxed">
                                {itineraryData.needToKnow.weather.text} <span className="text-blue-500 underline cursor-pointer">{itineraryData.needToKnow.weather.url}</span>
                            </p>
                        </div>
                    </div>

                    {/* Hotel Guidelines */}
                    <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
                        <div className="bg-gradient-to-r from-[#fedec0] to-[#fff3e7] px-6 py-4">
                            <h3 className="text-lg font-black text-[#345b63]">Hotel &amp; Stay Guidelines</h3>
                        </div>
                        <div className="p-10 flex flex-col gap-8">
                            <div className="flex flex-col gap-1.5">
                                <p className="text-[17px] font-bold text-[#1a3642]"><span className="font-black">Check-in:</span> {itineraryData.needToKnow.hotelGuidelines.checkIn}</p>
                                <p className="text-[17px] font-bold text-[#1a3642]"><span className="font-black">Check-out:</span> {itineraryData.needToKnow.hotelGuidelines.checkOut}</p>
                                <p className="text-[17px] font-bold text-[#345b63] mt-2 leading-relaxed">{itineraryData.needToKnow.hotelGuidelines.notes}</p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <p className="text-[17px] font-black text-[#1a3642]">Child Policy:</p>
                                <p className="text-[17px] font-bold text-[#345b63] leading-relaxed">
                                    {itineraryData.needToKnow.hotelGuidelines.childPolicy}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Additional Notes */}
                    <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
                        <div className="bg-gradient-to-r from-[#6596a0] to-[#8eb0b8] px-6 py-4">
                            <h3 className="text-lg font-black text-white">Additional Notes</h3>
                        </div>
                        <div className="p-10">
                            <ul className="space-y-5">
                                {itineraryData.needToKnow.additionalNotes.map((note, i) => (
                                    <li key={i} className="text-[17px] font-bold text-[#345b63] leading-relaxed flex items-start gap-4">
                                        <span className="text-[#3ed0b3] mt-1.5 min-w-[6px] h-[6px] rounded-full bg-[#3ed0b3]"></span>
                                        {note}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* VISA PROCESS SECTION */}
            <div id="visa" ref={sectionRefs.visa} className="flex flex-col gap-3 scroll-mt-24 pt-8">
                <h2 className="text-2xl font-black text-[#1a3642]">Visa Process</h2>
                <p className="text-xs font-medium text-gray-500 mb-2">Everything you need to know before your trip begins</p>

                <div className="relative border border-black/10 rounded-[25px] w-full h-auto sm:h-[19.5rem] overflow-hidden group shadow-sm bg-white">
                    {/* Main background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#EFF1F5] to-[#D9DCE4]" />

                    <div className="z-10 relative px-8 md:px-[60px] py-10 h-full flex items-center">
                        {/* Content column */}
                        <div className="flex flex-col justify-center gap-6 md:w-[60%]">
                            <div>
                                <h2 className="font-black text-2xl md:text-[36px] text-[#1a3642] leading-tight mb-2">
                                    {itineraryData.visaAssistance.title}
                                </h2>
                                <p className="max-w-xl font-bold text-[#345b63] text-sm md:text-xl md:leading-[140%]">
                                    {itineraryData.visaAssistance.description}
                                </p>
                            </div>
                            <button className="bg-black hover:bg-gray-800 px-10 py-3 rounded-[40px] w-fit font-black text-white text-base transition-all duration-300 transform hover:scale-105 shadow-xl">
                                {itineraryData.visaAssistance.buttonText}
                            </button>
                        </div>
                    </div>

                    {/* Image - Absolutely positioned to fill the height and stick to bottom-right */}
                    <div className="hidden md:block absolute bottom-0 right-0 w-[45%] h-full pointer-events-none">
                        <Image
                            src={itineraryData.visaAssistance.imageUrl}
                            alt="Visa assistance"
                            fill
                            className="object-contain object-right-bottom transition-transform duration-700 group-hover:scale-105"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* TERMS & POLICY SECTION */}
            <div id="policy" ref={sectionRefs.policy} className="flex flex-col gap-3 scroll-mt-24 pt-8 pb-10">
                <h2 className="text-2xl font-black text-[#1a3642]">Cancellation Terms &amp; Policy</h2>
                <p className="text-[11px] font-medium text-gray-400 mb-2">Everything you need to know before your trip begins</p>

                <div className="bg-white border border-gray-200 rounded-[25px] p-10 shadow-sm flex flex-col gap-8">
                    <div className="space-y-4">
                        <p className="text-[17px] font-bold text-[#345b63] leading-tight max-w-3xl tracking-tight">
                            We understand that travel plans can change, and we're here to assist you. Below are the standard cancellation fees based on when you cancel the trip.
                        </p>
                        <div className="flex flex-col gap-1 pt-2">
                            <p className="text-[17px] font-black text-[#1a3642]">Tour Package Price: <span className="text-gray-500 font-bold">₹{itineraryData.price.discountedAmount.toLocaleString()}</span></p>
                            <p className="text-[17px] font-black text-[#1a3642]">TCS (5%): <span className="text-gray-500 font-bold">₹{(itineraryData.price.discountedAmount * 0.05).toLocaleString()}</span></p>
                        </div>
                    </div>

                    <div className="overflow-hidden border border-gray-100 rounded-xl max-w-lg">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="text-[15px] font-black">
                                    <th className="px-5 py-2.5 bg-gradient-to-r from-[#ffd3a7] to-[#ffe4c4] text-[#345b63] border-r border-white/20">Time of Cancellation</th>
                                    <th className="px-5 py-2.5 bg-gradient-to-r from-[#ffd3a7] to-[#ffe4c4] text-[#345b63]">Cancellation Fee</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {itineraryData.cancellationPolicy.map((item, i) => (
                                    <tr key={i} className={item.isHighlight ? "bg-gray-50/30" : ""}>
                                        <td className="px-5 py-3 text-[15px] font-bold text-[#345b63] border-r border-gray-100 text-center">{item.timeframe}</td>
                                        <td className="px-5 py-3 text-[15px] font-bold text-[#345b63] text-center">
                                            {item.fee} {item.isHighlight && <span className="text-[#bc283a] text-[11px] font-black italic ml-1">No Refund*</span>}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="space-y-1.5 pt-2">
                        {[
                            "All cancellations must be made in writing (Email/WhatsApp).",
                            "Partial cancellations or no-shows are non-refundable.",
                            "This policy is subject to Terms & Conditions and payments received till the cancellation date."
                        ].map((note, i) => (
                            <div key={i} className="flex gap-2 text-[14px] font-bold text-[#345b63] items-start leading-tight">
                                <span className="text-[#bc283a] font-black">*</span>
                                <p>{note}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
