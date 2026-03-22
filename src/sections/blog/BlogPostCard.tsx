import Image from "next/image";
import Link from "next/link";

interface BlogPostCardPost {
    slug: string;
    title: string;
    imageUrl: string;
    category?: string;
    author?: string;
    readTime?: string;
    excerpt?: string;
    [key: string]: unknown;
}

interface BlogPostCardProps {
    post: BlogPostCardPost;
    layout?: "vertical" | "horizontal";
}

export default function BlogPostCard({ post, layout = "vertical" }: BlogPostCardProps) {
    if (layout === "horizontal") {
        return (
            <Link href={`/blog/${post.slug}`} className="block w-full">
                <div className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer border border-gray-100 flex items-center p-3 gap-4">
                    <div className="relative h-28 w-28 flex-shrink-0 overflow-hidden rounded-[24px]">
                        <Image
                            src={post.imageUrl}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                    </div>
                    <div className="flex flex-col flex-1 py-1 pr-2">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-[#345b63] text-[9px] font-black uppercase tracking-wider opacity-60">
                                {post.category}
                            </span>
                        </div>
                        <div className="flex items-center gap-2 text-[9px] text-gray-400 font-bold mb-2">
                            <span>{post.author}</span>
                            <span className="w-1 h-1 bg-gray-300 rounded-full" />
                            <span className="flex items-center gap-1">
                                <span className="text-[12px]">🕒</span> {post.readTime}
                            </span>
                        </div>
                        <h3 className="text-sm font-black text-[#1a3642] mb-3 leading-tight group-hover:text-[#f1aa4c] transition-colors line-clamp-2">
                            {post.title}
                        </h3>
                        <button className="text-[#f1aa4c] font-black text-[10px] uppercase tracking-widest flex items-center gap-1.5 self-start">
                            read more <span className="text-sm">→</span>
                        </button>
                    </div>
                </div>
            </Link>
        );
    }

    return (
        <Link href={`/blog/${post.slug}`} className="block h-full transition-transform hover:-translate-y-1">
            <div className="bg-white rounded-[32px] md:rounded-[30px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group cursor-pointer border border-gray-100 flex flex-col h-full border-b-[6px] md:border-b-0 border-b-gray-50/50">
                <div className="relative h-48 md:h-64 w-full overflow-hidden">
                    <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                </div>
                <div className="p-5 md:p-8 flex flex-col flex-1">
                    <div className="flex items-center justify-between gap-2 mb-3 md:mb-4">
                        <span className="text-[#345b63] text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] opacity-80">
                            {post.category}
                        </span>
                        <div className="flex items-center gap-2 md:gap-3 text-[9px] md:text-[10px] text-gray-400 font-bold whitespace-nowrap">
                            <span>{post.author}</span>
                            <span className="w-1 h-1 bg-gray-300 rounded-full" />
                            <span className="flex items-center gap-1">
                                <span className="text-[12px] md:text-[14px]">🕒</span> {post.readTime}
                            </span>
                        </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-black text-[#1a3642] mb-3 md:mb-4 leading-tight group-hover:text-[#f1aa4c] transition-colors line-clamp-2">
                        {post.title}
                    </h3>
                    <p className="text-gray-500 text-xs md:text-sm font-bold leading-relaxed mb-5 md:mb-6 line-clamp-2 md:line-clamp-3 opacity-80 md:opacity-100">
                        {post.excerpt}
                    </p>
                    <div className="mt-auto">
                        <button className="text-[#f1aa4c] font-black text-[10px] md:text-xs uppercase tracking-widest flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                            Read More <span className="text-base md:text-xl">→</span>
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
}
