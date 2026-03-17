"use client";
import { useState } from "react";
import { blogCategories } from "@/lib/data/cms/blogData";

export default function BlogFilters() {
    const [activeCategory, setActiveCategory] = useState("All");

    return (
        <section className="mb-6 md:mb-12">
            <h2 className="text-xl font-black text-[#1a3642] mb-6 md:mb-8 hidden md:block">
                Discover Blog By
            </h2>

            <div className="flex flex-col gap-2 md:gap-4">
                {/* Primary Categories */}
                <div className="flex flex-wrap gap-2 md:gap-4 md:justify-center">
                    {blogCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-5 md:px-7 py-2 md:py-3 rounded-full text-[11px] md:text-base font-black transition-all border ${activeCategory === category
                                ? "bg-[#f1aa4c] border-[#f1aa4c] text-white shadow-md shadow-[#f1aa4c]/20 scale-105"
                                : "bg-white border-gray-100 text-[#345b63] hover:border-[#f1aa4c] hover:text-[#f1aa4c]"
                                } shadow-sm`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Secondary Feature Filters (Mobile Only) */}
                <div className="flex md:hidden flex-wrap gap-2">
                    <button className="px-5 py-2 rounded-full border border-[#1a3642] text-[#1a3642] text-[10px] font-black uppercase tracking-wider hover:bg-[#1a3642] hover:text-white transition-all">
                        Upcoming Packages
                    </button>
                    <button className="px-5 py-2 rounded-full border border-[#1a3642] text-[#1a3642] text-[10px] font-black uppercase tracking-wider hover:bg-[#1a3642] hover:text-white transition-all">
                        Most Read Blogs
                    </button>
                </div>

                {/* Search / Sort Note for mobile */}
                <div className="flex md:hidden items-center gap-2 text-[9px] font-black text-gray-400 uppercase tracking-widest pl-1 mt-1">
                    <span>Recent Uploads</span>
                    <span className="text-gray-200">|</span>
                    <span className="text-[#f1aa4c]">Newest first</span>
                </div>
            </div>
        </section>
    );
}
