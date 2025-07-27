"use client";
import { Icon } from "@/components/ui/Icon";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function StickyNavWrapper() {
  const [showMenu, setShowMenu] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowMenu(false);
      } else if (currentScrollY < lastScrollY && currentScrollY > 50) {
        setShowMenu(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", controlNavbar);

    return () => window.removeEventListener("scroll", controlNavbar);
  }, []);
  return (
    <header className="top-0 left-0 z-[100] fixed w-full">
      <Topbar />
      <AdditionalNavMenu
        className={`transition-all ease-in duration-300 origin-top overflow-hidden ${
          showMenu
            ? "opacity-100 scale-y-100 pointer-events-auto h-9"
            : "opacity-0 scale-y-0 pointer-events-none h-0"
        }`}
      />
    </header>
  );
}

const Topbar = () => (
  <nav
    className="flex justify-between items-center bg-bigstone px-4 md:px-8 lg:px-16 py-[14px] font-inter font-semibold text-white text-base"
    aria-label="Main navigation"
  >
    {/* Left Logo Section */}
    <Link
      href="/"
      className="flex items-center max-w-fit"
      aria-label="Peacock Vacations Home"
    >
      <Icon
        name="customize/peacock-vacations-logo"
        className="w-14 h-10 text-sandybrown"
        aria-hidden="true"
      />
      <Icon
        name="customize/peacock-vacations-word"
        className="w-28 h-9 text-sandybrown"
        aria-hidden="true"
      />
    </Link>

    {/* Right Nav Icons and Buttons */}
    <div className="flex items-center gap-5">
      <button type="button" aria-label="Search" className="flex items-center">
        <Icon
          name="customize/search"
          className="w-6 h-6 text-white"
          aria-hidden="true"
        />
      </button>
      <Link
        href="/wishlist"
        aria-label="Wishlist"
        className="flex items-center"
      >
        <Icon
          name="customize/heart"
          className="w-6 h-6 text-white"
          aria-hidden="true"
        />
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

const AdditionalNavMenu = ({ className = "" }: { className?: string }) => (
  <nav
    className={`w-full bg-[#ffc77e] overflow-hidden flex flex-col items-start text-left text-sm text-black font-albertsans font-medium capitalize z-[40] ${className}`}
    aria-label="Secondary navigation"
  >
    <div className="flex flex-row justify-center items-center gap-6 mx-auto w-full max-w-[1280px] h-9">
      <Link href="/" className="flex items-center px-[10px] h-[35px]">
        Home
      </Link>
      <div className="flex items-center gap-[5px] bg-[#ffc77e] px-[10px] h-[35px] text-[#1a3642]">
        Destinations
        <Icon name="customize/right-arrow" className="rotate-90" />
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
