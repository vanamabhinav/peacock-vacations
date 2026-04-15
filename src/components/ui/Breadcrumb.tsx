"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Breadcrumb: React.FC = () => {
  const pathname = usePathname();
  const pathNames = pathname.split("/").filter(Boolean);

  // Build breadcrumb objects with href and name
  let breadcrumbs = pathNames.map((name, idx) => {
    const href = "/" + pathNames.slice(0, idx + 1).join("/");
    return { name, href };
  });

  // Remove last crumb if its name is "s", "ct", "c", or "spl"
  if (breadcrumbs.length > 0) {
    const lastName = breadcrumbs[breadcrumbs.length - 1].name;
    if (["s", "ct", "c", "spl"].includes(lastName)) {
      breadcrumbs = breadcrumbs.slice(0, -1);
    }
  }

  breadcrumbs.unshift({ name: "home", href: "/" });

  return (
    <nav className="inline-block w-full font-poppins text-[#d4a373] text-[13px] sm:text-base text-left capitalize">
      {breadcrumbs.map((crumb, idx) => (
        <span key={crumb.href} className="inline-flex items-center">
          {idx !== 0 && <span className={"text-gray-300 px-2 font-light"}>&gt;</span>}
          {idx !== breadcrumbs.length - 1 ? (
            <Link href={crumb.href} className="hover:text-[#1a3642] transition-colors">{crumb.name}</Link>
          ) : (
            <span className="text-[#1a3642] font-black">{crumb.name}</span>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
