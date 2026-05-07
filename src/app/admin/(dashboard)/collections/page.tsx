"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Plus, Layers, ExternalLink, Trash2, Globe, EyeOff } from "lucide-react";

interface Collection {
    _id: string;
    name: string;
    slug: string;
    description: string;
    bannerImage?: string;
    packageIds: string[];
    isPublished: boolean;
    createdAt: string;
}

export default function CollectionsPage() {
    const [collections, setCollections] = useState<Collection[]>([]);
    const [loading, setLoading] = useState(true);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [creating, setCreating] = useState(false);
    const [form, setForm] = useState({ name: "", slug: "", description: "", bannerImage: "" });
    const [error, setError] = useState("");

    useEffect(() => {
        fetchCollections();
    }, []);

    const fetchCollections = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/admin/collections");
            if (res.ok) setCollections(await res.json());
        } finally {
            setLoading(false);
        }
    };

    const handleCreate = async () => {
        if (!form.name.trim() || !form.slug.trim()) {
            setError("Name and slug are required.");
            return;
        }
        setCreating(true);
        setError("");
        try {
            const res = await fetch("/api/admin/collections", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            if (!res.ok) {
                const data = await res.json();
                setError(data.error || "Failed to create collection.");
                return;
            }
            setShowCreateModal(false);
            setForm({ name: "", slug: "", description: "", bannerImage: "" });
            fetchCollections();
        } finally {
            setCreating(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Delete this collection? Packages will NOT be deleted, just unlinked.")) return;
        await fetch(`/api/admin/collections/${id}`, { method: "DELETE" });
        fetchCollections();
    };

    const autoSlug = (name: string) =>
        name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

    return (
        <div className="space-y-8 animate-fade-in">
            {/* Header */}
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-black text-[#1a3642] tracking-tighter">Collections</h1>
                    <p className="text-gray-400 font-bold mt-2 uppercase tracking-widest text-xs">
                        Create custom package groupings — e.g. "Near India", "Wildlife Escapes"
                    </p>
                </div>
                <button
                    onClick={() => setShowCreateModal(true)}
                    className="bg-[#f1aa4c] text-[#1a3642] px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:scale-[1.02] transition-all shadow-lg shadow-[#f1aa4c]/10 self-start"
                >
                    <Plus size={16} /> New Collection
                </button>
            </header>

            {/* Collection Grid */}
            {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="h-48 bg-gray-100 rounded-[32px] animate-pulse" />
                    ))}
                </div>
            ) : collections.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-32 gap-4 bg-gray-50 rounded-[40px] border-2 border-dashed border-gray-100">
                    <Layers size={56} className="text-gray-200" />
                    <div className="text-center space-y-1">
                        <p className="text-gray-400 font-black uppercase tracking-widest text-xs">No collections yet</p>
                        <p className="text-[10px] text-gray-300 font-medium">Click "New Collection" to get started.</p>
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {collections.map(col => (
                        <div
                            key={col._id}
                            className="group bg-white rounded-[32px] border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
                        >
                            {/* Banner */}
                            <div className="relative h-36 bg-gradient-to-br from-[#1a3642] to-[#2a5570] w-full overflow-hidden">
                                {col.bannerImage && (
                                    <Image src={col.bannerImage} alt={col.name} fill className="object-cover opacity-60" />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                                    <h2 className="text-white font-black text-xl tracking-tight leading-tight line-clamp-2">{col.name}</h2>
                                    <span className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ml-2 flex-shrink-0 ${col.isPublished ? "bg-green-500/90 text-white" : "bg-gray-500/90 text-white"}`}>
                                        {col.isPublished ? <Globe size={10} /> : <EyeOff size={10} />}
                                        {col.isPublished ? "Live" : "Draft"}
                                    </span>
                                </div>
                            </div>

                            {/* Meta */}
                            <div className="p-5 flex flex-col gap-3">
                                <p className="text-[11px] text-gray-400 line-clamp-2">{col.description || "No description set."}</p>
                                <div className="flex items-center justify-between">
                                    <span className="bg-[#fffbf2] border border-[#f1aa4c]/20 text-[#1a3642] font-black text-[10px] px-3 py-1.5 rounded-full uppercase tracking-widest">
                                        {col.packageIds.length} package{col.packageIds.length !== 1 ? "s" : ""}
                                    </span>
                                    <span className="text-[9px] text-gray-300 font-bold uppercase tracking-widest">/collection/{col.slug}</span>
                                </div>
                                <div className="flex gap-2 pt-1">
                                    <Link
                                        href={`/admin/collections/${col._id}`}
                                        className="flex-1 bg-[#1a3642] text-white py-2.5 rounded-xl font-black text-xs text-center hover:bg-[#2a5570] transition-colors"
                                    >
                                        Edit
                                    </Link>
                                    <a
                                        href={`/collection/${col.slug}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2.5 bg-gray-50 hover:bg-gray-100 text-gray-400 hover:text-[#1a3642] rounded-xl transition-colors"
                                    >
                                        <ExternalLink size={16} />
                                    </a>
                                    <button
                                        onClick={() => handleDelete(col._id)}
                                        className="p-2.5 bg-gray-50 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-xl transition-colors"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Create Modal */}
            {showCreateModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-[#1a3642]/60 backdrop-blur-sm" onClick={() => setShowCreateModal(false)} />
                    <div className="bg-white w-full max-w-lg rounded-[40px] shadow-2xl relative z-10 p-8 space-y-6">
                        <div>
                            <h2 className="text-2xl font-black text-[#1a3642] tracking-tight">New Collection</h2>
                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Fill in the details to create a collection</p>
                        </div>

                        {error && (
                            <div className="bg-red-50 border border-red-200 text-red-700 text-xs font-bold px-4 py-3 rounded-2xl">{error}</div>
                        )}

                        <div className="space-y-4">
                            <div>
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-2">Name *</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Near India"
                                    value={form.name}
                                    onChange={e => {
                                        const name = e.target.value;
                                        setForm(f => ({ ...f, name, slug: autoSlug(name) }));
                                    }}
                                    className="w-full bg-gray-50 px-5 py-4 rounded-[20px] text-sm font-medium border-2 border-transparent focus:border-[#f1aa4c]/40 outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-2">Slug * (URL identifier)</label>
                                <input
                                    type="text"
                                    placeholder="e.g. near-india"
                                    value={form.slug}
                                    onChange={e => setForm(f => ({ ...f, slug: autoSlug(e.target.value) }))}
                                    className="w-full bg-gray-50 px-5 py-4 rounded-[20px] text-sm font-medium border-2 border-transparent focus:border-[#f1aa4c]/40 outline-none transition-all font-mono"
                                />
                                <p className="text-[9px] text-gray-300 mt-1 ml-1">Public URL: /collection/{form.slug || "..."}</p>
                            </div>
                            <div>
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-2">Description</label>
                                <textarea
                                    rows={3}
                                    placeholder="A short description shown on the collection page"
                                    value={form.description}
                                    onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
                                    className="w-full bg-gray-50 px-5 py-4 rounded-[20px] text-sm font-medium border-2 border-transparent focus:border-[#f1aa4c]/40 outline-none transition-all resize-none"
                                />
                            </div>
                            <div>
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-2">Banner Image URL</label>
                                <input
                                    type="text"
                                    placeholder="https://..."
                                    value={form.bannerImage}
                                    onChange={e => setForm(f => ({ ...f, bannerImage: e.target.value }))}
                                    className="w-full bg-gray-50 px-5 py-4 rounded-[20px] text-sm font-medium border-2 border-transparent focus:border-[#f1aa4c]/40 outline-none transition-all"
                                />
                            </div>
                        </div>

                        <div className="flex gap-3 pt-2">
                            <button
                                onClick={() => setShowCreateModal(false)}
                                className="flex-1 bg-gray-100 text-gray-400 py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-gray-200 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleCreate}
                                disabled={creating}
                                className="flex-1 bg-[#f1aa4c] text-[#1a3642] py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-[1.02] transition-all disabled:opacity-60"
                            >
                                {creating ? "Creating..." : "Create Collection"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
