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
    MessageSquare,
    Star,
    MapPin
} from "lucide-react";

interface Testimonial {
    _id: string;
    name: string;
    occupation?: string;
    location: string;
    rating: number;
    title: string;
    description: string;
    profileImage: string;
}

export default function TestimonialsPage() {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        fetchTestimonials();
    }, []);

    const fetchTestimonials = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/admin/testimonials");
            if (res.ok) {
                const data = await res.json();
                setTestimonials(data);
            }
        } catch (error) {
            console.error("Error fetching testimonials:", error);
        } finally {
            setLoading(false);
        }
    };

    const deleteTestimonial = async (id: string) => {
        if (!confirm("Are you sure you want to delete this testimonial?")) return;

        try {
            const res = await fetch(`/api/admin/testimonials/${id}`, { method: "DELETE" });
            if (res.ok) {
                setTestimonials(prev => prev.filter(t => t._id !== id));
            }
        } catch (error) {
            console.error("Error deleting testimonial:", error);
        }
    };

    const filteredTestimonials = testimonials.filter(t =>
        t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-8 animate-fade-in relative pb-10">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-black text-[#1a3642] tracking-tighter">Testimonials</h1>
                    <p className="text-gray-400 font-bold mt-2 uppercase tracking-widest text-xs">Manage client reviews</p>
                </div>
            </header>

            {/* Stats & Search Bar */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-3">
                    <div className="bg-white p-4 rounded-[32px] shadow-sm border border-gray-100 flex items-center gap-4 group focus-within:ring-2 ring-[#f1aa4c]/20 transition-all">
                        <Search className="text-gray-300 ml-4 group-focus-within:text-[#f1aa4c] transition-colors" size={24} />
                        <input
                            type="text"
                            placeholder="Search by name, location, or title..."
                            className="bg-transparent border-none outline-none w-full text-lg font-medium text-[#1a3642] placeholder:text-gray-300 py-2"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
                <div className="bg-[#1a3642] p-6 rounded-[32px] shadow-sm text-white flex items-center justify-between">
                    <div>
                        <p className="text-white/40 font-black text-[10px] uppercase tracking-widest">Total Reviews</p>
                        <h3 className="text-2xl font-black">{testimonials.length}</h3>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#f1aa4c]">
                        <MessageSquare size={24} />
                    </div>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {loading ? (
                    [1, 2, 3].map(i => (
                        <div key={i} className="bg-white rounded-[40px] h-[350px] animate-pulse border border-gray-100"></div>
                    ))
                ) : filteredTestimonials.length > 0 ? (
                    filteredTestimonials.map((t) => (
                        <div key={t._id} className="bg-white rounded-[40px] p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col h-full">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gray-100 flex-shrink-0">
                                    {t.profileImage ? (
                                        <Image src={t.profileImage} alt={t.name} fill className="object-cover" />
                                    ) : (
                                        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                                            <span className="text-gray-400 font-bold">{t.name.charAt(0)}</span>
                                        </div>
                                    )}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-lg font-black text-[#1a3642] leading-none mb-1 truncate">{t.name}</h3>
                                    <div className="flex items-center gap-1 text-gray-400 mb-2">
                                        <MapPin size={12} className="text-[#f1aa4c]" />
                                        <span className="text-[10px] font-bold uppercase tracking-widest truncate">{t.location}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={12} className={i < t.rating ? "text-[#f1aa4c] fill-[#f1aa4c]" : "text-gray-200"} />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <h4 className="text-md font-bold text-[#1a3642] mb-2 line-clamp-1">{t.title}</h4>
                            <p className="text-sm text-gray-500 line-clamp-3 mb-6 flex-1 italic">"{t.description}"</p>

                            <div className="grid grid-cols-2 gap-3 mt-auto pt-6 border-t border-gray-50">
                                <Link
                                    href={`/admin/testimonials/edit/${t._id}`}
                                    className="flex flex-col items-center justify-center p-3 rounded-2xl bg-gray-50 text-gray-400 hover:text-[#1a3642] hover:bg-[#f1aa4c]/10 transition-all border border-transparent hover:border-[#f1aa4c]/20"
                                >
                                    <Edit size={18} />
                                    <span className="text-[8px] font-black uppercase tracking-tighter mt-1">Edit</span>
                                </Link>
                                <button
                                    onClick={() => deleteTestimonial(t._id)}
                                    className="flex flex-col items-center justify-center p-3 rounded-2xl bg-gray-50 text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all border border-transparent hover:border-red-100"
                                >
                                    <Trash2 size={18} />
                                    <span className="text-[8px] font-black uppercase tracking-tighter mt-1">Delete</span>
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full py-40 text-center flex flex-col items-center justify-center gap-6 bg-white rounded-[40px] border-2 border-dashed border-gray-100 shadow-sm">
                        <div className="w-24 h-24 rounded-full bg-gray-50 flex items-center justify-center text-gray-200">
                            <MessageSquare size={48} />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-2xl font-black text-[#1a3642]">No reviews found</h3>
                            <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">Your client testimonials will appear here</p>
                        </div>
                    </div>
                )}
            </div>

            {/* Bottom Sticky Action Bar */}
            <div className="fixed bottom-0 right-0 left-0 md:left-72 bg-white border-t border-gray-200 p-4 shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.1)] z-50">
                <div className="max-w-7xl mx-auto flex justify-end gap-4">
                    <Link
                        href="/admin/testimonials/new"
                        className="bg-[#f1aa4c] text-[#1a3642] px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest flex items-center gap-3 hover:scale-[1.02] transition-all shadow-xl shadow-[#f1aa4c]/20"
                    >
                        <Plus size={20} /> Add New Review
                    </Link>
                </div>
            </div>
        </div>
    );
}
