"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Icon } from "./Icon";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  className?: string;
}

const Pagination = ({
  currentPage,
  totalPages,
  className = "",
}: PaginationProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;

    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push(`?${params.toString()}`, { scroll: false });
    document
      .getElementById("plp-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  if (totalPages <= 1) return null;

  return (
    <div
      className={`flex items-center justify-center gap-5 text-xl text-black font-albertsans ${className}`}
    >
      {/* Previous Button */}
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="relative flex justify-center items-center disabled:opacity-50 w-10 h-10 cursor-pointer disabled:cursor-not-allowed"
        aria-label="Previous page"
      >
        <div className="absolute inset-0 bg-bridalHealth hover:bg-karry border border-gray rounded-full" />
        <Icon name="right-arrow" className="z-10 relative w-4 h-4 rotate-180" />
      </button>

      {/* Page Counter */}
      <div className="font-medium">
        {currentPage}/{totalPages}
      </div>

      {/* Next Button */}
      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="relative flex justify-center items-center disabled:opacity-50 w-10 h-10 cursor-pointer disabled:cursor-not-allowed"
        aria-label="Next page"
      >
        <div className="absolute inset-0 bg-bridalHealth hover:bg-karry border border-[#1a3642] rounded-full" />
        <Icon name="right-arrow" className="z-10 relative w-4 h-4" />
      </button>
    </div>
  );
};

export default Pagination;
