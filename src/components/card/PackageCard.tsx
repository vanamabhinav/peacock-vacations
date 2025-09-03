import { PackageData } from "@/types";
import Image from "next/image";
import { Icon } from "../ui/Icon";
import Link from "next/link";
import { getIconForValue } from "@/lib/utils/iconMapper";

const PackageCard = ({
  region,
  heading,
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
    <div className="relative gap-5 grid grid-cols-3 col-span-2 bg-white p-1.5 border border-silver rounded-xl w-full h-[13.75rem] overflow-hidden font-albertsans text-black text-xs">
      <div className="col-span-1 bg-gallery rounded-sm w-full h-full overflow-hidden text-bigstone">
        <Image
          className="w-full h-full object-cover"
          width={315.5}
          height={210}
          sizes="100vw"
          alt=""
          src={image}
        />
        <div className="top-2.5 left-2.5 absolute flex flex-row items-center gap-2 bg-white px-2 py-1 rounded-[4px_12px_12px_4px]">
          <Icon
            name={getIconForValue(region)}
            className="w-[18px] h-5"
            aria-hidden="true"
          />
          <div className="font-semibold capitalize">{region}</div>
        </div>
      </div>
      <div className="flex flex-col gap-4 py-2 pr-2 w-full">
        <div className="flex flex-col gap-2 w-full text-lg">
          <b className="capitalize leading-[86.33%]">{heading}</b>
          <div className="flex flex-row items-center gap-1 text-base">
            <div className="font-medium lowercase leading-[86.33%]">
              {nights} Nights / {days} Days
            </div>
            <div className="text-sm leading-[86.33%]">in {location}</div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap items-start gap-2 w-full text-sm">
          {inclusions.slice(0, 4).map((inclusion, idx) => (
            <div
              key={inclusion + idx}
              className="inline-flex flex-row items-center gap-1 bg-bridalHealth px-2 py-1 border border-frangipani rounded-[20px] whitespace-nowrap"
            >
              <Icon
                name={getIconForValue(inclusion)}
                className="w-4 h-4"
                aria-hidden="true"
              />
              <div className="font-medium capitalize -tracking-[0.06em]">
                {inclusion}
              </div>
            </div>
          ))}
          {inclusions.length >= 4 && (
            <div className="flex flex-row justify-center items-center bg-frangipani px-2 py-1 border border-frangipani rounded-[21px] text-[13px] whitespace-nowrap">
              <b className="capitalize -tracking-[0.06em]">+ More..</b>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-between items-center bg-provincialpink px-2 py-1 border border-romantic rounded-sm w-full h-full font-dmsans text-codgrey text-base text-center">
        <div className="flex flex-col items-end gap-2 w-full">
          <div className="flex flex-col items-end w-full">
            <div className="capitalize">starts from</div>
            <div className="text-gray capitalize">
              {currency === "INR" ? "₹" : currency === "USD" ? "$" : ""}
              <span className="line-through">
                {originalPrice.toLocaleString("en-IN")}
              </span>
              /-
            </div>
          </div>
          <div className="flex flex-row flex-wrap justify-end items-start gap-x-2 px-2 py-0.5 rounded-[6px] w-full font-albertsans text-black text-xl">
            <b className="capitalize">
              {currency === "INR" ? "₹" : currency === "USD" ? "$" : ""}
              {discountedPrice.toLocaleString("en-IN")}
              /-
            </b>
            <i className="font-dmsans text-[13px] text-gray capitalize">
              Per person · {nights} nights
            </i>
          </div>
        </div>
        <div className="flex flex-col items-center gap-1 w-full font-albertsans text-white text-sm">
          <div className="flex flex-col items-start gap-1 w-full">
            <Link
              href={url}
              className="flex flex-row justify-center items-center bg-bigstone hover:bg-[#163040] px-2 py-1 rounded-[20px] w-full transition cursor-pointer"
              rel="noopener noreferrer"
            >
              <div className="text-white capitalize">View Details</div>
            </Link>
            <Link
              href="/book-a-call"
              className="flex flex-row justify-center items-center bg-white hover:bg-gray-100 px-2 py-1 border border-black rounded-[20px] w-full text-black transition cursor-pointer"
            >
              <div>Book a call</div>
            </Link>
          </div>
          <i className="font-dmsans font-extralight text-[9px] text-codgrey capitalize">
            <span>{`All Inclusions · Terms & Policies `}</span>
            <span className="text-[#ff0000]">*</span>
          </i>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
