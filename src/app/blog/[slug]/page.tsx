import BlogDetailPage from "@/sections/blog/BlogDetailPage";

export default function Page({ params }: { params: { slug: string } }) {
    return (
        <main>
            <BlogDetailPage slug={params.slug} />
        </main>
    );
}
