import { IBlog } from "@/models/Blog";
import BlogPostCard from "./BlogPostCard";

interface BlogGridProps {
    posts: IBlog[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
    return (
        <section className="mb-12 md:mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-10 md:mb-16">
                {posts.map((post: any) => (
                    <BlogPostCard key={post._id} post={post} />
                ))}
            </div>

            {/* Custom Pagination (Mobile Only) */}
            <div className="flex md:hidden items-center justify-center gap-6 mb-12">
                <button className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-gray-200 flex items-center justify-center bg-[#fdfaf5] text-[#1a3642] hover:bg-[#f1aa4c] hover:text-white transition-all shadow-sm">
                    <span className="text-xl md:text-2xl transform rotate-180">→</span>
                </button>
                <div className="text-xl md:text-2xl font-black text-[#1a3642] tracking-tighter">
                    1/5
                </div>
                <button className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-gray-200 flex items-center justify-center bg-[#fdfaf5] text-[#1a3642] hover:bg-[#f1aa4c] hover:text-white transition-all shadow-sm">
                    <span className="text-xl md:text-2xl">→</span>
                </button>
            </div>

            <div className="flex justify-center">
                <button className="bg-[#1a3642] text-white px-12 py-4 rounded-xl font-black text-base hover:bg-[#2a4d5c] transition-all shadow-lg hover:shadow-xl active:scale-95 tracking-widest uppercase">
                    Load More
                </button>
            </div>
        </section>
    );
}
