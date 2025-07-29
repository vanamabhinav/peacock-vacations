import Link from "next/link";
import StickyNavWrapperClient from "./StickyNavWrapperClient";
import { Icon } from "@/components/ui/Icon";
import Image from "next/image";
export default function StickyNavWrapper() {
  return (
    <header className="top-0 z-[100] sticky w-full">
      <div className="z-[120] relative bg-bigstone px-4 py-4">
        <Topbar />
      </div>

      <StickyNavWrapperClient />
    </header>
  );
}

export const Topbar = () => (
  <nav
    className="z-[100] flex justify-between items-center mx-auto w-full max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-7xl font-inter font-semibold text-white text-base"
    aria-label="Main navigation"
  >
    {/* Left Logo Section */}
    <Link
      href="/"
      className="flex items-center max-w-fit"
      aria-label="Peacock Vacations Home"
    >
      <Image
        src="/logo/peacock-vacations-logo.svg"
        alt="Peacock Vacations Logo"
        width={178}
        height={40}
      />
    </Link>

    {/* Right Nav Icons and Buttons */}
    <div className="flex items-center gap-5">
      <button type="button" aria-label="Search" className="flex items-center">
        <Icon name="search" className="w-6 h-6 text-white" aria-hidden="true" />
      </button>
      <Link
        href="/wishlist"
        aria-label="Wishlist"
        className="flex items-center"
      >
        <Icon name="heart" className="w-6 h-6 text-white" aria-hidden="true" />
      </Link>
      <Link
        href="/packages"
        className="flex items-center px-4 py-3 border border-white rounded-lg h-9"
      >
        Plan My Trip
      </Link>
      <Link
        href="/login"
        className="flex items-center px-4 py-3 border border-white rounded-lg h-9"
      >
        Login
      </Link>
    </div>
  </nav>
);

export const AdditionalNavMenu = ({
  className = "",
}: {
  className?: string;
}) => (
  <nav
    className={`flex overflow-hidden flex-col items-start text-left text-sm text-black font-albertsans font-medium capitalize bg-marconi_cheese ${className}`}
    aria-label="Secondary navigation"
  >
    <div className="flex flex-row justify-center items-center gap-6 mx-auto w-full max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-7xl h-9">
      <Link href="/" className="flex items-center px-[10px] h-[35px]">
        Home
      </Link>
      <div className="flex items-center gap-[5px] bg-marconi_cheese px-[10px] h-[35px] text-bigstone">
        Destinations
        <Icon name="right-arrow" className="rotate-90" />
      </div>
      <Link href="/packages" className="flex items-center px-[10px] h-[35px]">
        Packages
      </Link>
      <Link href="/blog" className="flex items-center px-[10px] h-[35px]">
        Blog
      </Link>
      <Link
        href="/events-festivals"
        className="flex items-center px-[10px] h-[35px]"
      >
        Events & Festivals
      </Link>
      <Link href="/about" className="flex items-center px-[10px] h-[35px]">
        About Us
      </Link>
      <Link href="/faqs" className="flex items-center px-[10px] h-[35px]">
        FAQs
      </Link>
    </div>
  </nav>
);
