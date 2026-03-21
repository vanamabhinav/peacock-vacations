import Image from "next/image";
import { IBlog } from "@/models/Blog";

interface BlogDetailHeroProps {
    post: IBlog;
}

export default function BlogDetailHero({ post }: BlogDetailHeroProps) {
    return (
        <section className="relative w-full h-[400px] md:h-[600px] overflow-hidden">
            <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-20 text-white z-10">
                <div className="max-w-7xl mx-auto">
                    <span className="inline-block px-4 py-1.5 bg-[#f1aa4c] text-black text-[10px] font-black uppercase tracking-[0.2em] mb-6 rounded-full">
                        {post.category}
                    </span>
                    <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight tracking-tight max-w-4xl drop-shadow-2xl">
                        {post.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-8 md:gap-12 text-sm md:text-base font-bold text-gray-200">
                        <div className="flex flex-col">
                            <span className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">Author</span>
                            <span>{post.author}</span>
                        </div>
                        <div className="flex flex-col border-l border-white/20 pl-8 md:pl-12">
                            <span className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">Published</span>
                            <span>{post.date || "March 2024"}</span>
                        </div>
                        <div className="flex flex-col border-l border-white/20 pl-8 md:pl-12">
                            <span className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">Read Time</span>
                            <span>{post.readTime}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
