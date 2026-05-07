"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import {
    ArrowLeft, Save, Plus, X, Search, ChevronUp, ChevronDown, ExternalLink, Trash2
} from "lucide-react";

interface Package {
    _id: string;
    title: string;
    slug: string;
    mainImageUrl: string;
}

interface Collection {
    _id: string;
    name: string;
    slug: string;
    description: string;
    bannerImage: string;
    packageIds: string[];
    isPublished: boolean;
}

export default function CollectionDetailPage() {
    const params = useParams();
    const router = useRouter();
    const id = params.id as string;

    const [collection, setCollection] = useState<Collection | null>(null);
    const [allPackages, setAllPackages] = useState<Package[]>([]);
    const [selectedPackages, setSelectedPackages] = useState<Package[]>([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [showSelector, setShowSelector] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [saved, setSaved] = useState(false);
    const [form, setForm] = useState({ name: "", slug: "", description: "", bannerImage: "", isPublished: true });

    useEffect(() => {
        fetchCollection();
        fetchAllPackages();
    }, [id]);

    const fetchCollection = async () => {
        setLoading(true);
        try {
            const res = await fetch(`/api/admin/collections/${id}`);
            if (!res.ok) { router.push("/admin/collections"); return; }
            const data: Collection = await res.json();
            setCollection(data);
            setForm({
                name: data.name,
                slug: data.slug,
                description: data.description,
                bannerImage: data.bannerImage || "",
                isPublished: data.isPublished,
            });
            // Restore package order from packageIds after packages are loaded
        } finally {
            setLoading(false);
        }
    };

    const fetchAllPackages = async () => {
        const res = await fetch("/api/admin/packages");
        if (res.ok) setAllPackages(await res.json());
    };

    // Once both collection and allPackages are available, sync selectedPackages
    useEffect(() => {
        if (collection && allPackages.length > 0) {
            const ordered = collection.packageIds
                .map(pid => allPackages.find(p => p._id === pid))
                .filter(Boolean) as Package[];
            setSelectedPackages(ordered);
        }
    }, [collection, allPackages]);

    const handleSave = async () => {
        setSaving(true);
        try {
            const res = await fetch(`/api/admin/collections/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...form,
                    packageIds: selectedPackages.map(p => p._id),
                }),
            });
            if (res.ok) {
                setSaved(true);
                setTimeout(() => setSaved(false), 3000);
            }
        } finally {
            setSaving(false);
        }
    };

    const handleDelete = async () => {
        if (!confirm("Delete this collection? Packages will NOT be deleted.")) return;
        await fetch(`/api/admin/collections/${id}`, { method: "DELETE" });
        router.push("/admin/collections");
    };

    const moveUp = (index: number) => {
        if (index === 0) return;
        const list = [...selectedPackages];
        [list[index - 1], list[index]] = [list[index], list[index - 1]];
        setSelectedPackages(list);
    };

    const moveDown = (index: number) => {
        if (index === selectedPackages.length - 1) return;
        const list = [...selectedPackages];
        [list[index + 1], list[index]] = [list[index], list[index + 1]];
        setSelectedPackages(list);
    };

    const addPackage = (pkg: Package) => {
        if (selectedPackages.find(p => p._id === pkg._id)) return;
        setSelectedPackages([...selectedPackages, pkg]);
        setShowSelector(false);
    };

    const removePackage = (id: string) => setSelectedPackages(selectedPackages.filter(p => p._id !== id));

    const selectablePackages = allPackages
        .filter(p => !selectedPackages.find(sp => sp._id === p._id))
        .filter(p =>
            p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.slug.toLowerCase().includes(searchQuery.toLowerCase())
        );

    if (loading) {
        return (
            <div className="space-y-6 animate-pulse">
                <div className="h-10 bg-gray-100 rounded-3xl w-64" />
                <div className="h-48 bg-gray-100 rounded-3xl" />
            </div>
        );
    }

    return (
        <div className="space-y-8 animate-fade-in relative pb-28">
            {/* Header */}
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => router.push("/admin/collections")}
                        className="p-2.5 rounded-2xl bg-gray-100 hover:bg-gray-200 text-gray-500 transition-colors"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <div>
                        <h1 className="text-3xl font-black text-[#1a3642] tracking-tighter">{form.name || "Untitled"}</h1>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-0.5">/collection/{form.slug}</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <a
                        href={`/collection/${form.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-100 text-gray-500 hover:bg-gray-200 font-bold text-xs transition-colors"
                    >
                        <ExternalLink size={14} /> Preview
                    </a>
                    <button
                        onClick={handleDelete}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-50 text-red-400 hover:bg-red-100 font-bold text-xs transition-colors"
                    >
                        <Trash2 size={14} /> Delete
                    </button>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Form */}
                <div className="lg:col-span-4 space-y-6">
                    <div className="bg-white p-6 rounded-[32px] border border-gray-100 space-y-5">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-300">Collection Details</p>

                        <div>
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-2">Name</label>
                            <input
                                type="text"
                                value={form.name}
                                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                                className="w-full bg-gray-50 px-4 py-3 rounded-[16px] text-sm font-medium border-2 border-transparent focus:border-[#f1aa4c]/40 outline-none transition-all"
                            />
                        </div>
                        <div>
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-2">Slug</label>
                            <input
                                type="text"
                                value={form.slug}
                                onChange={e => setForm(f => ({ ...f, slug: e.target.value }))}
                                className="w-full bg-gray-50 px-4 py-3 rounded-[16px] text-sm font-mono border-2 border-transparent focus:border-[#f1aa4c]/40 outline-none transition-all"
                            />
                            <p className="text-[9px] text-gray-300 mt-1 ml-1">URL: /collection/{form.slug}</p>
                        </div>
                        <div>
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-2">Description</label>
                            <textarea
                                rows={4}
                                value={form.description}
                                onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
                                className="w-full bg-gray-50 px-4 py-3 rounded-[16px] text-sm font-medium border-2 border-transparent focus:border-[#f1aa4c]/40 outline-none transition-all resize-none"
                            />
                        </div>
                        <div>
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-2">Banner Image URL</label>
                            <input
                                type="text"
                                value={form.bannerImage}
                                onChange={e => setForm(f => ({ ...f, bannerImage: e.target.value }))}
                                className="w-full bg-gray-50 px-4 py-3 rounded-[16px] text-sm font-medium border-2 border-transparent focus:border-[#f1aa4c]/40 outline-none transition-all"
                            />
                            {form.bannerImage && (
                                <div className="relative h-24 rounded-2xl overflow-hidden mt-3">
                                    <Image src={form.bannerImage} alt="Banner preview" fill className="object-cover" />
                                </div>
                            )}
                        </div>
                        <div className="flex items-center justify-between px-4 py-3 bg-gray-50 rounded-[16px]">
                            <span className="text-sm font-bold text-[#1a3642]">Published</span>
                            <button
                                onClick={() => setForm(f => ({ ...f, isPublished: !f.isPublished }))}
                                className={`relative w-12 h-6 rounded-full transition-colors ${form.isPublished ? "bg-green-500" : "bg-gray-300"}`}
                            >
                                <span className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all shadow-sm ${form.isPublished ? "left-7" : "left-1"}`} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Package Picker */}
                <div className="lg:col-span-8 space-y-6">
                    <div className="bg-white p-8 rounded-[32px] border border-gray-100 min-h-[400px]">
                        <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-50">
                            <div>
                                <h2 className="text-xl font-black text-[#1a3642] tracking-tight">Package List</h2>
                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-0.5">Drag arrows to reorder · {selectedPackages.length} package{selectedPackages.length !== 1 ? "s" : ""}</p>
                            </div>
                            <button
                                onClick={() => setShowSelector(true)}
                                className="bg-[#f1aa4c] text-[#1a3642] px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:scale-[1.02] transition-all"
                            >
                                <Plus size={14} /> Add Package
                            </button>
                        </div>

                        {selectedPackages.length === 0 ? (
                            <div className="py-16 flex flex-col items-center gap-3 bg-gray-50 rounded-[24px] border-2 border-dashed border-gray-100">
                                <Plus size={36} className="text-gray-200" />
                                <p className="text-gray-400 font-black uppercase tracking-widest text-[10px]">No packages added yet</p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {selectedPackages.map((pkg, index) => (
                                    <div
                                        key={pkg._id}
                                        className="flex items-center gap-4 p-4 rounded-[24px] bg-gray-50 border border-transparent hover:border-[#f1aa4c]/30 hover:bg-white transition-all group"
                                    >
                                        <div className="flex flex-col gap-1 items-center text-gray-300">
                                            <button onClick={() => moveUp(index)} className="hover:text-[#f1aa4c] transition-colors"><ChevronUp size={18} /></button>
                                            <span className="font-black text-[10px] text-[#1a3642]">{index + 1}</span>
                                            <button onClick={() => moveDown(index)} className="hover:text-[#f1aa4c] transition-colors"><ChevronDown size={18} /></button>
                                        </div>
                                        <div className="w-14 h-14 rounded-2xl overflow-hidden relative flex-shrink-0">
                                            <Image src={pkg.mainImageUrl} alt={pkg.title} fill className="object-cover" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-black text-[#1a3642] text-sm truncate">{pkg.title}</h3>
                                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{pkg.slug}</p>
                                        </div>
                                        <button
                                            onClick={() => removePackage(pkg._id)}
                                            className="p-2.5 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all opacity-0 group-hover:opacity-100"
                                        >
                                            <X size={18} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Package Selector Modal */}
            {showSelector && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-[#1a3642]/60 backdrop-blur-sm" onClick={() => setShowSelector(false)} />
                    <div className="bg-white w-full max-w-2xl rounded-[40px] shadow-2xl relative z-10 overflow-hidden h-[80vh] flex flex-col">
                        <div className="p-8 border-b border-gray-50 bg-gray-50/50">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h2 className="text-2xl font-black text-[#1a3642] tracking-tight">Select Package</h2>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Add to "{form.name}"</p>
                                </div>
                                <button onClick={() => setShowSelector(false)} className="text-gray-400 hover:text-[#1a3642] bg-white p-2 rounded-xl shadow-sm">
                                    <X size={22} />
                                </button>
                            </div>
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                <input
                                    type="text"
                                    placeholder="Search by title or slug..."
                                    value={searchQuery}
                                    onChange={e => setSearchQuery(e.target.value)}
                                    className="w-full bg-white pl-11 pr-4 py-4 rounded-[20px] text-sm font-medium border-2 border-transparent focus:border-[#f1aa4c]/30 outline-none shadow-sm"
                                />
                            </div>
                        </div>
                        <div className="flex-1 overflow-y-auto p-8 space-y-3">
                            {selectablePackages.length === 0 ? (
                                <div className="py-16 text-center text-gray-400 font-black text-xs uppercase tracking-widest opacity-40">No matching packages</div>
                            ) : (
                                selectablePackages.map(pkg => (
                                    <button
                                        key={pkg._id}
                                        onClick={() => addPackage(pkg)}
                                        className="w-full text-left flex items-center gap-5 p-4 rounded-[24px] bg-gray-50 hover:bg-gray-100 transition-all group"
                                    >
                                        <div className="w-12 h-12 rounded-2xl overflow-hidden relative flex-shrink-0">
                                            <Image src={pkg.mainImageUrl} alt={pkg.title} fill className="object-cover" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-black text-[#1a3642] text-sm truncate">{pkg.title}</h3>
                                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{pkg.slug}</p>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-white text-[#f1aa4c] flex items-center justify-center opacity-0 group-hover:opacity-100 shadow-md">
                                            <Plus size={16} />
                                        </div>
                                    </button>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Sticky Save Bar */}
            <div className="fixed bottom-10 left-72 right-10 z-40">
                <div className="bg-[#1a3642] p-5 rounded-[28px] shadow-2xl flex items-center justify-between gap-6 border border-white/10">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#f1aa4c]">
                            <Save size={20} />
                        </div>
                        <div>
                            <p className="font-black text-sm text-white">Save "{form.name}"?</p>
                            <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">
                                {selectedPackages.length} package{selectedPackages.length !== 1 ? "s" : ""} · /collection/{form.slug}
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={handleSave}
                        disabled={saving}
                        className="bg-[#f1aa4c] text-[#1a3642] px-8 py-3.5 rounded-2xl font-black text-xs tracking-widest uppercase shadow-xl hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-70"
                    >
                        {saved ? "✓ Saved!" : saving ? "Saving..." : "Save Changes"}
                    </button>
                </div>
            </div>
        </div>
    );
}
