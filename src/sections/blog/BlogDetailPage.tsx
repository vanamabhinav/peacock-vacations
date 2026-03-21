import { fetchBlogBySlugAction } from "@/lib/actions/blogActions";
import { IBlog } from "@/models/Blog";
import BlogDetailHero from "./BlogDetailHero";
import BlogDetailContent from "./BlogDetailContent";
import BlogDetailSidebar from "./BlogDetailSidebar";
import BlogPackagesSection from "./BlogPackagesSection";
import BlogTestimonialsSection from "./BlogTestimonialsSection";
import BlogRecommendedSection from "./BlogRecommendedSection";
import BlogCTA from "./BlogCTA";
import { notFound } from "next/navigation";

interface BlogDetailPageProps {
    slug: string;
}

export default async function BlogDetailPage({ slug }: BlogDetailPageProps) {
    const post = await fetchBlogBySlugAction(slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="bg-[#fafbfc] min-h-screen">
            <BlogDetailHero post={post as IBlog} />

            <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
                    <BlogDetailContent post={post as IBlog} />
                    <BlogDetailSidebar post={post as IBlog} />
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
