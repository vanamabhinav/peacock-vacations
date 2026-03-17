import Image from "next/image";
import { BlogPost } from "@/lib/data/cms/blogData";

interface BlogDetailContentProps {
    post: BlogPost;
}

export default function BlogDetailContent({ post }: BlogDetailContentProps) {
    return (
        <article className="lg:col-span-8">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-xs text-[#345b63] font-bold uppercase tracking-widest mb-10">
                <span className="text-[#f1aa4c] cursor-pointer hover:underline">Home</span>
                <span className="text-gray-300">&gt;</span>
                <span className="text-[#f1aa4c] cursor-pointer hover:underline">Blog</span>
                <span className="text-gray-300">&gt;</span>
                <span className="text-[#1a3642] truncate max-w-[200px]">{post.title}</span>
            </div>

            <div className="prose prose-lg max-w-none text-[#345b63]">
                {post.sections?.map((section, index) => (
                    <div key={index} className="mb-12">
                        {section.subheading && (
                            <h2 className="text-3xl font-black text-[#1a3642] mb-6 tracking-tight">
                                {section.subheading}
                            </h2>
                        )}
                        <div className="space-y-6">
                            {section.text.map((paragraph, pIndex) => (
                                <p key={pIndex} className="text-lg leading-relaxed font-medium">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                        {section.imageUrl && (
                            <div className="relative h-[400px] md:h-[500px] w-full rounded-[40px] overflow-hidden my-10 shadow-lg">
                                <Image
                                    src={section.imageUrl}
                                    alt={section.subheading || post.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </article>
    );
}
