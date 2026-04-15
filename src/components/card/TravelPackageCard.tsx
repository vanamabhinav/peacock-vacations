"use client";

import { PackageData } from "@/types";
import Link from "next/link";
import { Icon } from "../ui/Icon";
import Image from "next/image";
import { getIconForValue } from "@/lib/utils/iconMapper";
import { useCurrency } from "@/contexts/CurrencyContext";

function TravelPackageCard({
  region,
  heading,
  subheading,
  currency,
  originalPrice,
  discountedPrice,
  inclusions,
  packageIncludes = [],
  image,
  url,
}: PackageData) {
  const { formatPrice } = useCurrency();
  return (
    <article
      className="w-fit h-fit cursor-pointer"
      aria-label={`Travel package: ${heading}`}
    >
      <div className="group relative w-[300px] h-116">
        {/* Hover overlay (Desktop only) */}
        <div className="hidden md:block top-0 absolute bg-bigstone opacity-0 group-hover:opacity-100 border border-silverchalice rounded-[1.25rem] w-[300px] h-116 transition-all duration-300">
          <Link
            href={url}
            className="bottom-2.5 absolute flex justify-center items-center gap-2.5 w-full h-fit text-white hover:cursor-pointer"
            aria-label={`View package: ${heading}`}
            tabIndex={0}
            role="button"
          >
            <span>View Package</span>
            <Icon name="right-arrow" className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        {/* Main card content */}
        <div className="top-0 absolute bg-white px-2.5 py-4 border border-alto hover:border-bigstone rounded-[1.25rem] w-[300px] h-full md:h-106 transition-all overflow-hidden">
          <div className="flex flex-col justify-between items-center gap-2.5 w-full h-full">
            {/* Location header */}
            <div className="flex flex-col items-center gap-2.5 w-full">
              <header className="flex flex-col items-center gap-2.5 w-full">
                <div className="flex items-center gap-1.5">
                  <Icon
                    name={getIconForValue(region)}
                    className="w-[18px] h-5"
                    aria-hidden="true"
                  />
                  <h4 className="font-semibold text-base">{region}</h4>
                </div>

                {/* Featured image */}
                <figure className="relative rounded-[1.25rem] w-full h-50 overflow-hidden">
                  <figcaption className="z-20 absolute flex flex-col gap-[5px] px-3 py-2.5 w-full">
                    <h3 className="h-14 font-bold text-[32px] text-white leading-[86%] card-title">
                      {heading}
                    </h3>
                    <p className="h-14 font-semibold text-[12px] text-tealyellow group-hover:text-white italic transition-all duration-300 card-description">
                      {subheading}
                    </p>
                  </figcaption>

                  <div className="z-10 absolute inset-0 bg-gradient-to-br from-black/80 via-transparent to-transparent opacity-100 group-hover:opacity-60 transition-all duration-300"></div>

                  <Image
                    src={image}
                    alt={heading}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
                    className="absolute inset-0 w-full h-full object-cover"
                    priority
                  />
                </figure>
              </header>

              {/* Pricing section */}
              <div className="flex justify-between p-1 w-full">
                <div className="flex items-center gap-1">
                  <span className="font-poppins font-bold text-normal">
                    Starts From
                  </span>
                  <s className="font-normal text-sm">
                    {formatPrice(originalPrice)}
                  </s>
                </div>
                <div>
                  <strong className="font-semibold text-xl italic">
                    @{formatPrice(discountedPrice)}
                  </strong>
                </div>
              </div>

              <hr className="mx-auto border-alto border-t-[0.5px] w-[90%]" />

              {/* Features section */}
              <section className="flex flex-col gap-0 w-full">
                <h5 className="font-extrabold italic text-sm">Includes</h5>
                <ul className="flex flex-col gap-1 opacity-70 px-4 text-[12px] mt-1">
                  {packageIncludes.slice(0, 3).map((item, index) => (
                    <li key={index} className="flex items-center gap-1.5">
                      <Icon
                        name={item.icon as any}
                        className="w-3.5 h-3.5"
                        aria-hidden="true"
                      />
                      <span>{item.label}</span>
                    </li>
                  ))}
                  {packageIncludes.length === 0 && (Array.isArray(inclusions) ? inclusions : []).slice(0, 3).map((item, index) => (
                    <li key={index} className="flex items-center gap-1.5">
                      <Icon
                        name={getIconForValue(item)}
                        className="w-3 h-3"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                  {(packageIncludes.length || inclusions?.length) > 3 && (
                    <li className="flex gap-1.5 ml-5">
                      <span>more...</span>
                    </li>
                  )}
                </ul>
              </section>
            </div>

            {/* Mobile View Package link */}
            <Link
              href={url}
              className="md:hidden flex justify-center items-center bg-[#1a3642] -mx-2.5 -mb-4 py-3.5 w-[calc(100%+20px)] font-bold text-white transition-all active:bg-[#254d5e] gap-2"
            >
              <span>View Package</span>
              <Icon name="right-arrow" className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default TravelPackageCard;
