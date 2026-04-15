"use client";

import { PackageData } from "@/types";
import Image from "next/image";
import { Icon } from "../ui/Icon";
import Link from "next/link";
import { getIconForValue } from "@/lib/utils/iconMapper";
import { useState } from "react";
import { useCurrency } from "@/contexts/CurrencyContext";
import RequestCallbackModal from "../ui/RequestCallbackModal";

const PackageCard = ({
  region,
  heading,
  subheading,
  location,
  days,
  nights,
  currency,
  originalPrice,
  discountedPrice,
  packageIncludes = [],
  image,
  url,
}: PackageData) => {
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);

  return (
    <div className="group bg-white border border-gray-100 rounded-[32px] overflow-hidden hover:shadow-2xl transition-all duration-500 font-albertsans flex flex-col w-full">
      {/* Mobile Layout (md:hidden) */}
      <div className="flex flex-col md:hidden p-4 gap-4 border border-gray-100 rounded-[32px] bg-white">
        {/* Top Info Row */}
        <div className="flex gap-4">
          <div className="relative w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0">
            <Image
              src={image}
              alt={heading}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-1.5 flex-1">
            <div className="inline-flex items-center gap-1.5 bg-orange-50 px-2.5 py-1 rounded-full w-fit">
              <Icon
                name={getIconForValue(region)}
                className="w-3 h-3 text-[#1a3642]"
                aria-hidden="true"
              />
              <span className="font-bold text-[10px] uppercase tracking-wider text-[#1a3642]">
                {region}
              </span>
            </div>
            <h3 className="text-[21px] font-black text-[#1a3642] leading-[1.15] line-clamp-2">
              {heading}
            </h3>
            <p className="text-xs font-bold text-[#345b63]">
              {nights} nights / {days} days <span className="opacity-40">in {location}</span>
            </p>
          </div>
        </div>

        {/* Inclusions Row */}
        <div className="flex flex-wrap gap-2">
          {/* Custom Tags Only */}
          {packageIncludes?.map((tag: { label: string; icon: string }, idx: number) => (
            <div
              key={tag.label + idx}
              className="flex items-center gap-1.5 bg-[#fffbf2] px-3 py-1.5 border border-[#f1aa4c]/30 rounded-full"
            >
              {tag.icon && (
                <Icon
                  name={tag.icon as any}
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                />
              )}
              <span className="text-[10px] font-bold text-[#345b63] capitalize">
                {tag.label}
              </span>
            </div>
          ))}
          {packageIncludes.length > 4 && (
            <div className="flex items-center justify-center bg-orange-50 px-3 py-1.5 rounded-full text-[10px] font-black text-[#f1aa4c]">
              + More..
            </div>
          )}
        </div>

        {/* Price & Action Container */}
        <div className="bg-[#fffbf2]/40 border border-[#f1aa4c]/20 rounded-[24px] p-4 flex flex-col gap-3.5 shadow-sm">
          <div className="flex justify-between items-end px-0.5">
            <div className="flex flex-col mb-1">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">Starts From</span>
              <p className="text-[9px] font-bold text-[#345b63] opacity-60 italic">
                Per Person · {nights} Nights
              </p>
            </div>
            <PriceSection
              originalPrice={originalPrice}
              discountedPrice={discountedPrice}
              isMobile
            />
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setIsCallbackModalOpen(true)}
              className="flex-1 bg-[#ffd8ba] border border-[#ffd8ba]/50 text-[#1a3642] py-3.5 rounded-full font-black text-xs transition-all active:scale-95"
            >
              Book a call
            </button>
            <Link
              href={url}
              className="flex-[1.2] bg-[#1a3642] text-white py-3.5 rounded-full font-black text-xs flex justify-center items-center gap-2 transition-all active:scale-95 shadow-md shadow-blue-900/10"
            >
              View Details
            </Link>
          </div>
          <p className="text-[8px] font-black text-center text-gray-300 uppercase tracking-widest mt-[-8px]">
            All Inclusions · Terms & Policies <span className="text-red-500">*</span>
          </p>
        </div>
      </div>

      {/* Desktop Layout (hidden md:flex) */}
      <div className="hidden md:flex md:flex-row w-full md:h-72">
        {/* Image Section */}
        <div className="relative w-full md:w-[32%] h-44 md:h-full overflow-hidden">
          <Image
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            width={400}
            height={300}
            alt={heading}
            src={image}
            loading="lazy"
          />
          {/* Region Tag */}
          <div className="absolute top-3 left-3 md:top-4 md:left-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-2.5 py-1 md:px-3 md:py-1.5 rounded-full shadow-sm">
            <Icon
              name={getIconForValue(region)}
              className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#1a3642]"
              aria-hidden="true"
            />
            <div className="font-bold text-[9px] md:text-[10px] uppercase tracking-wider text-[#1a3642]">
              {region}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 p-4 md:p-8 flex flex-col justify-between">
          <div className="flex flex-col gap-0.5">
            <div className="flex flex-col gap-1 md:gap-2 mb-2 md:mb-6">
              <h3 className="text-xl md:text-3xl font-black text-[#1a3642] leading-tight md:leading-[1.1] group-hover:text-[#f1aa4c] transition-colors line-clamp-1 md:line-clamp-2">
                {heading}
              </h3>
              <div className="flex items-center gap-1.5 md:gap-2 text-sm md:text-lg font-bold text-[#345b63]">
                <span className="hidden md:inline">{nights} nights / {days} days</span>
                <span className="text-gray-300">in</span>
                <span className="truncate">{location}</span>
              </div>
            </div>

            {/* Tags Only */}
            <div className="flex flex-wrap gap-2 pt-1 lg:pt-2">
              {packageIncludes?.slice(0, 3).map((tag: { label: string; icon: string }, idx: number) => (
                <div
                  key={tag.label + idx}
                  className="flex items-center gap-2 bg-[#fffbf2] px-3 py-1.5 border border-[#f1aa4c]/30 rounded-full"
                >
                  <Icon
                    name={tag.icon as any}
                    className="w-4 h-4"
                    aria-hidden="true"
                  />
                  <span className="text-[11px] font-bold text-[#345b63]">
                    {tag.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Price Section - Sidebar Style */}
        <div className="hidden md:flex flex-col justify-between items-center bg-[#fdfaf5] border-l border-gray-100 p-6 w-80 h-full text-center border border-orange-100/30 rounded-r-[32px] my-2 mr-2">
          <PriceSection
            originalPrice={originalPrice}
            discountedPrice={discountedPrice}
            nights={nights}
          />

          <div className="flex flex-col gap-2 w-full mt-4">
            <Link
              href={url}
              className="w-full bg-[#1a3642] hover:bg-[#254d5e] text-white py-3 rounded-xl font-black text-sm transition-all shadow-md active:scale-[0.98]"
            >
              View Details
            </Link>
            <button
              onClick={() => setIsCallbackModalOpen(true)}
              className="w-full bg-white border border-[#1a3642] text-[#1a3642] py-3 rounded-xl font-black text-sm transition-all hover:bg-gray-50 active:scale-[0.98] cursor-pointer"
            >
              Book a call
            </button>
            <div className="mt-2 text-[9px] font-black italic text-gray-400 uppercase tracking-widest leading-none">
              All Inclusions · Terms & Policies <span className="text-red-500">*</span>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Bottom Description Bar (hidden on mobile) */}
      <div className="hidden md:flex items-center justify-between bg-[#f0f2f5] px-8 py-3 w-full border-t border-gray-100">
        <p className="text-xs font-bold text-[#345b63] opacity-60">
          {subheading}
        </p>
        <Link href={url} className="text-xs font-black text-[#1a3642] hover:underline flex items-center gap-1">
          + More
        </Link>
      </div>

      {/* Callback Modal */}
      <RequestCallbackModal
        isOpen={isCallbackModalOpen}
        onClose={() => setIsCallbackModalOpen(false)}
      />
    </div>
  );
};


const PriceSection = ({ originalPrice, discountedPrice, nights, isMobile }: any) => {
  const { formatPrice } = useCurrency();

  return (
    <div className={`flex ${isMobile ? 'flex-row items-center gap-3' : 'flex-col items-end'} gap-1`}>
      {!isMobile && (
        <div className="flex flex-col items-end gap-0">
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Starts From</span>
          <span className="text-sm font-bold opacity-30 line-through text-[#345b63]">
            {formatPrice(originalPrice || 0)}
          </span>
        </div>
      )}
      <div className={`flex ${isMobile ? 'flex-row-reverse items-center gap-2' : 'flex-col items-end'} gap-0`}>
        <div className={`${isMobile ? 'text-[26px]' : 'text-3xl lg:text-4xl'} font-black text-[#1a3642] tracking-tighter leading-none`}>
          {formatPrice(discountedPrice || 0)}
        </div>
        {!isMobile && (
          <p className="text-[11px] font-bold text-[#345b63] opacity-60 italic mt-1">
            Per Person · {nights} Nights
          </p>
        )}
      </div>
    </div>
  );
};

export default PackageCard;
