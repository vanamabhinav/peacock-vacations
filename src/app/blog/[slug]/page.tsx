import BlogDetailPage from "@/sections/blog/BlogDetailPage";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return (
        <main>
            <BlogDetailPage slug={slug} />
        </main>
    );
}
