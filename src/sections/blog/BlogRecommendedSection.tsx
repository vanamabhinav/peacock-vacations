import { highlightPosts } from "@/lib/data/cms/blogData";
import BlogPostCard from "./BlogPostCard";

export default function BlogRecommendedSection() {
    return (
        <section className="mb-20">
            <div className="flex items-center justify-between mb-10">
                <div>
                    <h2 className="text-4xl font-black text-[#1a3642] mb-3 tracking-tight">Recommended blog for you</h2>
                </div>
                <div className="hidden md:flex gap-3">
                    <button className="w-12 h-12 rounded-full border-2 border-gray-100 flex items-center justify-center text-gray-400 hover:border-[#f1aa4c] hover:text-[#f1aa4c] transition-all">←</button>
                    <button className="w-12 h-12 rounded-full border-2 border-gray-100 flex items-center justify-center text-gray-400 hover:border-[#f1aa4c] hover:text-[#f1aa4c] transition-all">→</button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {highlightPosts.slice(1).concat(highlightPosts[0]).map((post) => (
                    <BlogPostCard key={post.id} post={post} />
                ))}
            </div>
        </section>
    );
}
