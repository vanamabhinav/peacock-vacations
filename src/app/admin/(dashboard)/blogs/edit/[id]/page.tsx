"use client";

import { useEffect, useState } from "react";
import BlogForm from "@/components/admin/BlogForm";
import { useParams } from "next/navigation";

export default function EditBlogPage() {
    const params = useParams();
    const [blog, setBlog] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await fetch(`/api/admin/blogs/${params.id}`);
                if (res.ok) {
                    const data = await res.json();
                    setBlog(data);
                }
            } catch (error) {
                console.error("Error fetching blog:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchBlog();
    }, [params.id]);

    if (loading) {
        return (
            <div className="flex items-center justify-center py-40">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#f1aa4c]"></div>
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="text-center py-40">
                <h2 className="text-2xl font-black text-[#1a3642]">Blog not found</h2>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto">
            <BlogForm initialData={blog} isEdit={true} />
        </div>
    );
}
