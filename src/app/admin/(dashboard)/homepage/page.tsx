"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
    Home,
    ChevronUp,
    ChevronDown,
    Star,
    Plus,
    X,
    Save,
    CheckCircle2,
    Eye
} from "lucide-react";

interface Package {
    _id: string;
    title: string;
    slug: string;
    mainImageUrl: string;
    showOnHome: boolean;
    homePageSortOrder: number;
}

export default function HomepageManagementPage() {
    const [allPackages, setAllPackages] = useState<Package[]>([]);
    const [featuredPackages, setFeaturedPackages] = useState<Package[]>([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [showSelector, setShowSelector] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        try {
            const [allRes, featRes] = await Promise.all([
                fetch("/api/admin/packages"),
                fetch("/api/admin/homepage")
            ]);

            if (allRes.ok && featRes.ok) {
                const allData = await allRes.json();
                const featData = await featRes.json();
                setAllPackages(allData);
                setFeaturedPackages(featData);
            }
        } catch (error) {
            console.error("Error fetching homepage data:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async () => {
        setSaving(true);
        try {
            const response = await fetch("/api/admin/homepage", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ packageIds: featuredPackages.map(p => p._id) }),
            });

            if (response.ok) {
                alert("Homepage updated successfully!");
            }
        } catch (error) {
            console.error("Error saving homepage:", error);
        } finally {
            setSaving(false);
        }
    };

    const moveUp = (index: number) => {
        if (index === 0) return;
        const newList = [...featuredPackages];
        [newList[index - 1], newList[index]] = [newList[index], newList[index - 1]];
        setFeaturedPackages(newList);
    };

    const moveDown = (index: number) => {
        if (index === featuredPackages.length - 1) return;
        const newList = [...featuredPackages];
        [newList[index + 1], newList[index]] = [newList[index], newList[index + 1]];
        setFeaturedPackages(newList);
    };

    const addToHomepage = (pkg: Package) => {
        if (featuredPackages.find(p => p._id === pkg._id)) return;
        setFeaturedPackages([...featuredPackages, pkg]);
        setShowSelector(false);
    };

    const removeFromHomepage = (id: string) => {
        setFeaturedPackages(featuredPackages.filter(p => p._id !== id));
    };

    return (
        <div className="space-y-8 animate-fade-in relative pb-24">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-black text-[#1a3642] tracking-tighter">Homepage Content</h1>
                    <p className="text-gray-400 font-bold mt-2 uppercase tracking-widest text-xs">Customize the "Popular Destinations" block</p>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                {/* Popular List */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-100">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h2 className="text-2xl font-black text-[#1a3642] tracking-tight">Popular Packages</h2>
                                <p className="text-gray-400 font-bold text-[10px] uppercase tracking-widest mt-1">This order is reflected in the main carousel</p>
                            </div>
                            <button
                                onClick={() => setShowSelector(true)}
                                className="bg-[#f1aa4c] text-[#1a3642] px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:scale-[1.02] transition-all shadow-lg shadow-[#f1aa4c]/10"
                            >
                                <Plus size={16} /> Add Package
                            </button>
                        </div>


                        {loading ? (
                            <div className="space-y-4 animate-pulse">
                                {[1, 2, 3].map(i => <div key={i} className="h-24 bg-gray-50 rounded-3xl w-full"></div>)}
                            </div>
                        ) : featuredPackages.length > 0 ? (
                            <div className="space-y-4">
                                {featuredPackages.map((pkg, index) => (
                                    <div key={pkg._id} className="flex items-center gap-6 p-6 rounded-[32px] bg-gray-50 border border-transparent hover:border-[#f1aa4c]/30 hover:bg-white transition-all group">
                                        <div className="flex flex-col gap-1 items-center justify-center text-gray-300">
                                            <button onClick={() => moveUp(index)} className="hover:text-[#f1aa4c] transition-colors"><ChevronUp size={20} /></button>
                                            <span className="font-black text-[10px] text-[#1a3642]">{index + 1}</span>
                                            <button onClick={() => moveDown(index)} className="hover:text-[#f1aa4c] transition-colors"><ChevronDown size={20} /></button>
                                        </div>

                                        <div className="w-16 h-16 rounded-2xl overflow-hidden relative shadow-sm flex-shrink-0">
                                            <Image src={pkg.mainImageUrl} alt={pkg.title} fill className="object-cover" />
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-black text-[#1a3642] text-sm truncate">{pkg.title}</h3>
                                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Slug: {pkg.slug}</p>
                                        </div>

                                        <button
                                            onClick={() => removeFromHomepage(pkg._id)}
                                            className="p-2 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all opacity-0 group-hover:opacity-100"
                                        >
                                            <X size={20} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="py-20 text-center flex flex-col items-center gap-4 bg-gray-50 rounded-[32px] border-2 border-dashed border-gray-100">
                                <Star size={40} className="text-gray-200" />
                                <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">No packages featured on homepage</p>
                                <button onClick={() => setShowSelector(true)} className="text-[#f1aa4c] font-black text-xs uppercase tracking-widest">Click to feature items</button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Information / Preview Side */}
                <div className="space-y-8">
                    <div className="bg-[#1a3642] p-10 rounded-[40px] shadow-2xl text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#f1aa4c]/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                        <h2 className="text-2xl font-black tracking-tight mb-4 relative">Live View</h2>
                        <p className="text-white/60 text-sm font-medium mb-8 leading-relaxed relative">
                            Changes saved here will immediately affect the "Popular Destinations" grid on the main website.
                        </p>
                        <div className="space-y-4 relative">
                            <div className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/10">
                                <CheckCircle2 size={20} className="text-green-400" />
                                <span className="font-bold text-sm">Dynamic Sorting</span>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/10">
                                <Eye size={20} className="text-[#f1aa4c]" />
                                <span className="font-bold text-sm">Instant Preview</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Selector Modal */}
            {showSelector && (
                <>
                    <div className="fixed inset-0 z-[99] bg-[#1a3642]/60 backdrop-blur-sm" onClick={() => setShowSelector(false)} />
                    <div className="fixed inset-0 z-[100] overflow-y-auto">
                    <div className="flex min-h-screen items-start justify-center py-8 px-6" onClick={() => setShowSelector(false)}>
                    <div className="bg-white w-full max-w-2xl rounded-[40px] shadow-2xl overflow-hidden animate-slide-up h-[70vh] flex flex-col my-auto" onClick={e => e.stopPropagation()}>
                        <div className="p-8 border-b border-gray-50 flex items-center justify-between">
                            <h2 className="text-2xl font-black text-[#1a3642] tracking-tight">Select Packages to Feature</h2>
                            <button onClick={() => setShowSelector(false)} className="text-gray-400 hover:text-[#1a3642]">
                                <X size={24} />
                            </button>
                        </div>
                        <div className="flex-1 overflow-y-auto p-8 space-y-4">
                            {allPackages
                                .filter(p => !featuredPackages.find(fp => fp._id === p._id))
                                .map(pkg => (
                                    <button
                                        key={pkg._id}
                                        onClick={() => addToHomepage(pkg)}
                                        className="w-full text-left flex items-center gap-6 p-4 rounded-3xl bg-gray-50 hover:bg-gray-100 transition-all group"
                                    >
                                        <div className="w-14 h-14 rounded-2xl overflow-hidden relative shadow-sm flex-shrink-0">
                                            <Image src={pkg.mainImageUrl} alt={pkg.title} fill className="object-cover" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-black text-[#1a3642] text-sm truncate">{pkg.title}</h3>
                                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">{pkg.slug}</p>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-white text-[#f1aa4c] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                                            <Plus size={20} />
                                        </div>
                                    </button>
                                ))}
                        </div>
                    </div>
                    </div>
                    </div>
                </>
            )}


            {/* Sticky Bottom Bar */}
            <div className="sticky bottom-6 left-0 right-0 z-40 mt-10">
                <div className="bg-[#1a3642] p-6 rounded-[32px] shadow-2xl shadow-[#1a3642]/40 flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10 backdrop-blur-md bg-opacity-95">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#f1aa4c]">
                            <Star size={24} />
                        </div>
                        <div>
                            <p className="text-white font-black text-sm tracking-tight">Ready to update the website?</p>
                            <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Selected packages will be featured on home</p>
                        </div>
                    </div>

                    <button
                        onClick={handleSave}
                        disabled={saving}
                        className="w-full md:w-auto bg-[#f1aa4c] text-[#1a3642] px-10 py-4 rounded-2xl font-black text-xs tracking-widest uppercase shadow-xl shadow-[#f1aa4c]/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 group disabled:opacity-70"
                    >
                        <Save size={18} className="transition-transform group-hover:rotate-12" />
                        {saving ? "Publishing..." : "Publish to Homepage"}
                    </button>
                </div>
            </div>
        </div>
    );
}

