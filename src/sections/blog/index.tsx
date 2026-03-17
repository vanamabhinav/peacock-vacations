import BlogHero from "./BlogHero";
import BlogHighlights from "./BlogHighlights";
import BlogFilters from "./BlogFilters";
import BlogGrid from "./BlogGrid";
import BlogCTA from "./BlogCTA";

export default function BlogSections() {
    return (
        <div className="bg-[#fafbfc] min-h-screen">
            <BlogHero />

            <div className="max-w-7xl mx-auto px-4 md:px-12 py-4 md:py-10">
                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-[10px] md:text-xs text-[#345b63] font-bold uppercase tracking-widest mb-3 md:mb-10 pl-1 md:pl-0">
                    <span className="text-[#f1aa4c]">Home</span>
                    <span className="text-gray-300">&gt;</span>
                    <span className="text-[#1a3642]">Blog</span>
                </div>

                <BlogHighlights />
                <BlogFilters />
                <BlogGrid />
                <BlogCTA />
            </div>
        </div>
    );
}
