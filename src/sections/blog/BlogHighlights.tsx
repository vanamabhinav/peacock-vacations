import { IBlog } from "@/models/Blog";
import BlogPostCard from "./BlogPostCard";

interface BlogHighlightsProps {
    posts: IBlog[];
}

export default function BlogHighlights({ posts }: BlogHighlightsProps) {
    return (
        <section className="mb-10 md:mb-16">
            <h2 className="text-xl md:text-2xl font-black text-[#1a3642] mb-5 md:mb-10 tracking-tight">
                Highlights of the Month
            </h2>

            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-3 gap-8">
                {posts.map((post: any) => (
                    <BlogPostCard key={post._id} post={post} />
                ))}
            </div>

            {/* Mobile View */}
            <div className="md:hidden flex flex-col gap-6">
                {posts.slice(0, 2).map((post: any) => (
                    <BlogPostCard key={post._id} post={post} />
                ))}

                {/* Pagination Dots */}
                <div className="flex justify-center gap-1.5 mt-2">
                    <span className="w-5 h-1.5 rounded-full bg-gray-400" />
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                </div>
            </div>
        </section>
    );
}
