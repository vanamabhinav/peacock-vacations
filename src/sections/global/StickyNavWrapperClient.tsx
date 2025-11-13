"use client";

import { DropDownNavbar } from "@/components/client/DropDownNavbar";
import { useEffect, useRef, useState } from "react";

const StickyNavWrapperClient = () => {
  const [showMenu, setShowMenu] = useState<boolean>(true);
  const lastScrollY = useRef<number>(0);

  useEffect(() => {
    const handleNavbarScroll = () => {
      const currentScrollY = window.scrollY;

      const diff = currentScrollY - lastScrollY.current;

      if (diff > 40) {
        setShowMenu(false);
      } else if (diff < -40 || currentScrollY <= 180) {
        setShowMenu(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleNavbarScroll);

    return () => window.removeEventListener("scroll", handleNavbarScroll);
  }, []);

  return (
    <DropDownNavbar
      className={`hidden sm:block transition-transform ease-in-out duration-300 w-full relative z-[80] ${
        showMenu ? "translate-y-0" : "-translate-y-full"
      }`}
    />
  );
};

export default StickyNavWrapperClient;
