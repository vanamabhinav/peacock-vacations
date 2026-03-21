"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Plus,
    Search,
    Edit,
    Trash2,
    Eye,
    Calendar,
    User as UserIcon,
    Tag,
    BookOpen
} from "lucide-react";

interface Blog {
    _id: string;
    title: string;
    slug: string;
    author: string;
    category: string;
    date: string;
    imageUrl: string;
    isPublished: boolean;
}

export default function BlogsPage() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/admin/blogs");
            if (res.ok) {
                const data = await res.json();
                setBlogs(data);
            }
        } catch (error) {
            console.error("Error fetching blogs:", error);
        } finally {
            setLoading(false);
        }
    };

    const deleteBlog = async (id: string) => {
        if (!confirm("Are you sure you want to delete this blog?")) return;

        try {
            const res = await fetch(`/api/admin/blogs/${id}`, { method: "DELETE" });
            if (res.ok) {
                setBlogs(blogs.filter(b => b._id !== id));
            }
        } catch (error) {
            console.error("Error deleting blog:", error);
        }
    };

    const filteredBlogs = blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-8 animate-fade-in relative pb-10">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-black text-[#1a3642] tracking-tighter">Blog Management</h1>
                    <p className="text-gray-400 font-bold mt-2 uppercase tracking-widest text-xs">Manage your stories and travel guides</p>
                </div>
                <Link
                    href="/admin/blogs/new"
                    className="bg-[#f1aa4c] text-[#1a3642] px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-3 hover:scale-[1.02] transition-all shadow-xl shadow-[#f1aa4c]/20 self-start md:self-auto"
                >
                    <Plus size={20} /> Create New Blog
                </Link>
            </header>

            {/* Stats & Search Bar */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-3">
                    <div className="bg-white p-4 rounded-[32px] shadow-sm border border-gray-100 flex items-center gap-4 group focus-within:ring-2 ring-[#f1aa4c]/20 transition-all">
                        <Search className="text-gray-300 ml-4 group-focus-within:text-[#f1aa4c] transition-colors" size={24} />
                        <input
                            type="text"
                            placeholder="Search by title, category, or author..."
                            className="bg-transparent border-none outline-none w-full text-lg font-medium text-[#1a3642] placeholder:text-gray-300 py-2"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
                <div className="bg-[#1a3642] p-6 rounded-[32px] shadow-sm text-white flex items-center justify-between">
                    <div>
                        <p className="text-white/40 font-black text-[10px] uppercase tracking-widest">Total Stories</p>
                        <h3 className="text-2xl font-black">{blogs.length}</h3>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#f1aa4c]">
                        <BookOpen size={24} />
                    </div>
                </div>
            </div>

            {/* Blogs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {loading ? (
                    [1, 2, 3].map(i => (
                        <div key={i} className="bg-white rounded-[40px] h-[450px] animate-pulse border border-gray-100"></div>
                    ))
                ) : filteredBlogs.length > 0 ? (
                    filteredBlogs.map((blog) => (
                        <div key={blog._id} className="bg-white rounded-[40px] overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col h-full">
                            <div className="relative h-60 w-full overflow-hidden">
                                <Image
                                    src={blog.imageUrl}
                                    alt={blog.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-6 left-6 flex gap-2">
                                    <span className="bg-[#f1aa4c] text-[#1a3642] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                                        {blog.category}
                                    </span>
                                    {!blog.isPublished && (
                                        <span className="bg-gray-800/80 text-white backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                                            Draft
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-1">
                                <h3 className="text-xl font-black text-[#1a3642] mb-4 leading-tight line-clamp-2">
                                    {blog.title}
                                </h3>

                                <div className="flex flex-wrap gap-4 mt-auto pt-6 border-t border-gray-50">
                                    <div className="flex items-center gap-2 text-gray-400">
                                        <UserIcon size={14} className="text-[#f1aa4c]" />
                                        <span className="text-[10px] font-bold uppercase tracking-widest">{blog.author}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-400 ml-auto">
                                        <Calendar size={14} className="text-[#f1aa4c]" />
                                        <span className="text-[10px] font-bold uppercase tracking-widest">{blog.date}</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-3 mt-8">
                                    <button
                                        onClick={() => window.open(`/blogs/${blog.slug}`, '_blank')}
                                        className="flex flex-col items-center justify-center p-3 rounded-2xl bg-gray-50 text-gray-400 hover:text-[#1a3642] hover:bg-[#f1aa4c]/10 transition-all border border-transparent hover:border-[#f1aa4c]/20"
                                    >
                                        <Eye size={18} />
                                        <span className="text-[8px] font-black uppercase tracking-tighter mt-1">View</span>
                                    </button>
                                    <Link
                                        href={`/admin/blogs/edit/${blog._id}`}
                                        className="flex flex-col items-center justify-center p-3 rounded-2xl bg-gray-50 text-gray-400 hover:text-[#1a3642] hover:bg-[#f1aa4c]/10 transition-all border border-transparent hover:border-[#f1aa4c]/20"
                                    >
                                        <Edit size={18} />
                                        <span className="text-[8px] font-black uppercase tracking-tighter mt-1">Edit</span>
                                    </Link>
                                    <button
                                        onClick={() => deleteBlog(blog._id)}
                                        className="flex flex-col items-center justify-center p-3 rounded-2xl bg-gray-50 text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all border border-transparent hover:border-red-100"
                                    >
                                        <Trash2 size={18} />
                                        <span className="text-[8px] font-black uppercase tracking-tighter mt-1">Delete</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full py-40 text-center flex flex-col items-center justify-center gap-6 bg-white rounded-[40px] border-2 border-dashed border-gray-100 shadow-sm">
                        <div className="w-24 h-24 rounded-full bg-gray-50 flex items-center justify-center text-gray-200">
                            <BookOpen size={48} />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-2xl font-black text-[#1a3642]">No stories found</h3>
                            <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">Your travel guides and stories will appear here</p>
                        </div>
                        <Link
                            href="/admin/blogs/new"
                            className="bg-[#1a3642] text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-blue-900/10"
                        >
                            Start Writing Your First Blog
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
