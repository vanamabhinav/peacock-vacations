import { PackageData } from "@/types";
import Image from "next/image";
import { Icon } from "../ui/Icon";
import Link from "next/link";
import { getIconForValue } from "@/lib/utils/iconMapper";

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
  inclusions,
  image,
  url,
}: PackageData) => {
  return (
    <div className="group bg-white border border-gray-100 rounded-[32px] overflow-hidden hover:shadow-2xl transition-all duration-500 font-albertsans flex flex-col w-full">
      <div className="flex flex-col md:flex-row w-full md:h-72">
        {/* Image Section */}
        <div className="relative w-full md:w-[32%] h-44 md:h-full overflow-hidden">
          <Image
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            width={400}
            height={300}
            alt={heading}
            src={image}
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
                <span className="md:hidden">{nights}N / {days}D</span>
                <span className="hidden md:inline">{nights} nights / {days} days</span>
                <span className="text-gray-300">in</span>
                <span className="truncate">{location}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-8">
              {(Array.isArray(inclusions) ? inclusions : []).slice(0, 4).map((inclusion, idx) => (
                <div
                  key={inclusion + idx}
                  className="flex items-center gap-1.5 bg-[#fffbf2] px-2.5 py-1 md:px-4 md:py-2 border border-orange-100/50 rounded-full whitespace-nowrap group-hover:border-[#f1aa4c]/30 transition-colors"
                >
                  <Icon
                    name={getIconForValue(inclusion)}
                    className="w-3 h-3 md:w-4 md:h-4 text-[#f1aa4c]"
                    aria-hidden="true"
                  />
                  <span className="text-[10px] md:text-xs font-bold text-[#345b63] capitalize">
                    {inclusion}
                  </span>
                </div>
              ))}
              {(Array.isArray(inclusions) ? inclusions : []).length > 4 && (
                <div className="flex items-center justify-center bg-orange-50 px-2.5 py-1 md:px-4 md:py-2 rounded-full text-[10px] md:text-xs font-black text-[#f1aa4c]">
                  + More..
                </div>
              )}
            </div>
          </div>

          {/* Desktop Hidden Price Area for Mobile Flow */}
          <div className="md:hidden pt-3 border-t border-gray-50 mb-3">
            <PriceSection
              currency={currency}
              originalPrice={originalPrice}
              discountedPrice={discountedPrice}
              nights={nights}
              isMobile
            />
          </div>

          <div className="flex flex-row gap-2 md:hidden">
            <Link
              href="/book-a-call"
              className="flex-1 flex justify-center items-center bg-[#fff2e0] px-4 py-3 rounded-xl font-black text-[#1a3642] text-[11px] transition-all transform active:scale-95 leading-none"
            >
              Book a call
            </Link>
            <Link
              href={url}
              className="flex-1 flex justify-center items-center bg-[#1a3642] px-4 py-3 rounded-xl font-black text-white text-[11px] transition-all transform active:scale-95 shadow-lg shadow-blue-900/10 leading-none"
            >
              View Details
            </Link>
          </div>
        </div>

        {/* Desktop Price Section - Sidebar Style */}
        <div className="hidden md:flex flex-col justify-between items-center bg-[#fdfaf5] border-l border-gray-100 p-6 w-80 h-full text-center border border-orange-100/30 rounded-r-[32px] my-2 mr-2">
          <PriceSection
            currency={currency}
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
            <Link
              href="/book-a-call"
              className="w-full bg-white border border-[#1a3642] text-[#1a3642] py-3 rounded-xl font-black text-sm transition-all hover:bg-gray-50 active:scale-[0.98]"
            >
              Book a call
            </Link>
            <div className="mt-2 text-[9px] font-black italic text-gray-400 uppercase tracking-widest leading-none">
              All Inclusions · Terms & Policies <span className="text-red-500">*</span>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Bottom Description Bar */}
      <div className="hidden md:flex items-center justify-between bg-[#f0f2f5] px-8 py-3 w-full border-t border-gray-100">
        <p className="text-xs font-bold text-[#345b63] opacity-60">
          {subheading}
        </p>
        <Link href={url} className="text-xs font-black text-[#1a3642] hover:underline flex items-center gap-1">
          + More
        </Link>
      </div>
    </div>
  );
};

const PriceSection = ({ currency, originalPrice, discountedPrice, nights, isMobile }: any) => (
  <div className={`flex flex-col ${isMobile ? 'items-center' : 'items-end'} gap-0.5 md:gap-1 w-full text-center md:text-right`}>
    <div className={`flex ${isMobile ? 'flex-row' : 'flex-col items-end'} items-baseline md:items-end gap-2 md:gap-0`}>
      <span className="text-[9px] md:text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-0.5">Starts From</span>
      {!isMobile && (
        <span className="text-sm font-bold opacity-30 line-through text-[#345b63]">
          {currency === "INR" ? "₹" : "$"}{(originalPrice || 0).toLocaleString("en-IN")}
        </span>
      )}
      {isMobile && (
        <div className="flex items-center gap-1.5 text-[#345b63]">
          <span className="text-[10px] font-bold opacity-40 line-through">
            {currency === "INR" ? "₹" : "$"}{(originalPrice || 0).toLocaleString("en-IN")}
          </span>
          <span className="text-[9px] font-black uppercase tracking-wider">@INR</span>
        </div>
      )}
    </div>
    <div className={`flex ${isMobile ? 'flex-row' : 'flex-col items-end'} items-baseline md:items-end gap-2 md:gap-0`}>
      <div className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1a3642] tracking-tighter leading-none">
        ₹{(discountedPrice || 0).toLocaleString("en-IN").replace('₹', '')}/-
      </div>
      <p className="text-[10px] md:text-[11px] font-bold text-[#345b63] opacity-60 italic">
        Per Person · {nights} Nights
      </p>
    </div>
  </div>
);

export default PackageCard;
