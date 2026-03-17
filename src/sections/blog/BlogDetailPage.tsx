import { BlogPost, highlightPosts, allBlogPosts } from "@/lib/data/cms/blogData";
import BlogDetailHero from "./BlogDetailHero";
import BlogDetailContent from "./BlogDetailContent";
import BlogDetailSidebar from "./BlogDetailSidebar";
import BlogPackagesSection from "./BlogPackagesSection";
import BlogTestimonialsSection from "./BlogTestimonialsSection";
import BlogRecommendedSection from "./BlogRecommendedSection";
import BlogCTA from "./BlogCTA";

interface BlogDetailPageProps {
    slug: string;
}

export default function BlogDetailPage({ slug }: BlogDetailPageProps) {
    // For this static version, we'll try to find the post by slug, 
    // or default to the first highlight post if not found.
    const post = highlightPosts.find(p => p.slug === slug) ||
        allBlogPosts.find(p => p.slug === slug) ||
        highlightPosts[0];

    return (
        <div className="bg-[#fafbfc] min-h-screen">
            <BlogDetailHero post={post} />

            <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
                    <BlogDetailContent post={post} />
                    <BlogDetailSidebar post={post} />
                </div>

                <BlogPackagesSection />
                <BlogRecommendedSection />
                <BlogTestimonialsSection />

                <div className="pt-20">
                    <BlogCTA />
                </div>
            </div>
        </div>
    );
}
