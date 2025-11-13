import Link from "next/link";
import StickyNavWrapperClient from "./StickyNavWrapperClient";
import { Icon } from "@/components/ui/Icon";
import Image from "next/image";
import { MobileNavbar } from "@/components/client/DropDownNavbar";

export default function StickyNavWrapper() {
  return (
    <header className="top-0 z-[100] fixed w-full">
      <div className="z-[105] relative bg-bigstone px-3 py-3 sm:px-4 sm:py-4">
        <Topbar />
      </div>
      <StickyNavWrapperClient />
    </header>
  );
}

export function Topbar() {
  return (
    <nav
      className="z-[110] flex justify-between items-center mx-auto w-full max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-7xl font-inter font-semibold text-white text-base"
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
          width={120}
          height={28}
          className="sm:w-[178px] sm:h-[40px] w-[120px] h-[28px]"
        />
      </Link>

      {/* Desktop icons/links */}
      <div className="items-center gap-3 sm:gap-5 hidden sm:flex">
        <button type="button" aria-label="Search" className="flex items-center">
          <Icon name="search" className="w-5 h-5 sm:w-6 sm:h-6 text-white" aria-hidden="true" />
        </button>
        <Link
          href="/wishlist"
          aria-label="Wishlist"
          className="flex items-center"
        >
          <Icon name="heart" className="w-5 h-5 sm:w-6 sm:h-6 text-white" aria-hidden="true" />
        </Link>
        <Link
          href="/packages"
          className="flex items-center px-3 py-2 sm:px-4 sm:py-3 border border-white rounded-lg h-8 sm:h-9 text-sm sm:text-base"
        >
          Plan My Trip
        </Link>
        <Link
          href="/login"
          className="flex items-center px-3 py-2 sm:px-4 sm:py-3 border border-white rounded-lg h-8 sm:h-9 text-sm sm:text-base"
        >
          Login
        </Link>
      </div>

      {/* Mobile hamburger */}
      <div className="sm:hidden block">
        <MobileNavbar />
      </div>
    </nav>
  );
}