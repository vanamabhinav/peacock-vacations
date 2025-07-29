"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Breadcrumb: React.FC = () => {
  const pathname = usePathname();
  const pathNames = pathname.split("/").filter(Boolean);

  // Build breadcrumb objects with href and name
  const breadcrumbs = pathNames.map((name, idx) => {
    const href = "/" + pathNames.slice(0, idx + 1).join("/");
    return { name, href };
  });

  breadcrumbs.unshift({ name: "home", href: "/" });

  return (
    <nav className="inline-block w-full font-inter text-sandybrown text-base text-left capitalize">
      {breadcrumbs.map((crumb, idx) => (
        <span key={crumb.href} className="inline-flex items-center">
          {idx !== 0 && <span className={"text-bigstone px-2"}>&gt;</span>}
          {idx !== breadcrumbs.length - 1 ? (
            <Link href={crumb.href}>{crumb.name}</Link>
          ) : (
            <span className="text-black">{crumb.name}</span>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
