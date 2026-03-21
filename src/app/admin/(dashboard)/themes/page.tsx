"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
    Heart,
    Compass,
    Umbrella,
    Diamond,
    Church,
    User,
    Building2,
    Plus,
    X,
    Save,
    Star,
    Search,
    ChevronUp,
    ChevronDown
} from "lucide-react";

interface Package {
    _id: string;
    title: string;
    slug: string;
    mainImageUrl: string;
    themes: string[];
    featuredInThemes: string[];
}

const THEMES = [
    { id: "Honeymoon", icon: Heart, color: "text-pink-500", bg: "bg-pink-50" },
    { id: "Adventure", icon: Compass, color: "text-orange-500", bg: "bg-orange-50" },
    { id: "Beach", icon: Umbrella, color: "text-blue-500", bg: "bg-blue-50" },
    { id: "Luxury", icon: Diamond, color: "text-amber-500", bg: "bg-amber-50" },
    { id: "Pilgrimage", icon: Church, color: "text-indigo-500", bg: "bg-indigo-50" },
    { id: "Solo Travel", icon: User, color: "text-teal-500", bg: "bg-teal-50" },
    { id: "Resort", icon: Building2, color: "text-emerald-500", bg: "bg-emerald-50" },
];

export default function ThemeManagementPage() {
    const [selectedTheme, setSelectedTheme] = useState(THEMES[0].id);
    const [allPackages, setAllPackages] = useState<Package[]>([]);
    const [themePackages, setThemePackages] = useState<Package[]>([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [showSelector, setShowSelector] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        fetchAllPackages();
    }, []);

    useEffect(() => {
        fetchThemePackages();
    }, [selectedTheme]);

    const fetchAllPackages = async () => {
        try {
            const res = await fetch("/api/admin/packages");
            if (res.ok) {
                const data = await res.json();
                setAllPackages(data);
            }
        } catch (error) {
            console.error("Error fetching all packages:", error);
        }
    };

    const fetchThemePackages = async () => {
        setLoading(true);
        try {
            const res = await fetch(`/api/admin/themes?theme=${selectedTheme}`);
            if (res.ok) {
                const data = await res.json();
                setThemePackages(data);
            }
        } catch (error) {
            console.error("Error fetching theme packages:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async () => {
        setSaving(true);
        try {
            const response = await fetch("/api/admin/themes", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    theme: selectedTheme,
                    packageIds: themePackages.map(p => p._id)
                }),
            });

            if (response.ok) {
                alert(`Featured packages for ${selectedTheme} saved successfully!`);
            }
        } catch (error) {
            console.error("Error saving theme packages:", error);
        } finally {
            setSaving(false);
        }
    };

    const moveUp = (index: number) => {
        if (index === 0) return;
        const newList = [...themePackages];
        [newList[index - 1], newList[index]] = [newList[index], newList[index - 1]];
        setThemePackages(newList);
    };

    const moveDown = (index: number) => {
        if (index === themePackages.length - 1) return;
        const newList = [...themePackages];
        [newList[index + 1], newList[index]] = [newList[index], newList[index + 1]];
        setThemePackages(newList);
    };

    const addToTheme = (pkg: Package) => {
        if (themePackages.find(p => p._id === pkg._id)) return;
        setThemePackages([...themePackages, pkg]);
        setShowSelector(false);
    };

    const removeFromTheme = (id: string) => {
        setThemePackages(themePackages.filter(p => p._id !== id));
    };

    const selectablePackages = allPackages
        .filter(p => !themePackages.find(tp => tp._id === p._id))
        .filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.slug.toLowerCase().includes(searchQuery.toLowerCase()))
        .sort((a, b) => {
            const aTagged = a.themes.includes(selectedTheme) ? 1 : 0;
            const bTagged = b.themes.includes(selectedTheme) ? 1 : 0;
            return bTagged - aTagged; // Tagged first
        });


    return (
        <div className="space-y-8 animate-fade-in relative pb-24">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-black text-[#1a3642] tracking-tighter">Travel by Theme</h1>
                    <p className="text-gray-400 font-bold mt-2 uppercase tracking-widest text-xs">Hand-pick and sort packages for each theme section</p>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Theme Navigation */}
                <div className="lg:col-span-3 space-y-4">
                    <div className="bg-white p-6 rounded-[40px] shadow-sm border border-gray-100 flex flex-col gap-2">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-300 ml-4 mb-2">Select Theme</p>
                        {THEMES.map((theme) => {
                            const Icon = theme.icon;
                            const isActive = selectedTheme === theme.id;
                            return (
                                <button
                                    key={theme.id}
                                    onClick={() => setSelectedTheme(theme.id)}
                                    className={`flex items-center gap-4 px-6 py-4 rounded-[28px] transition-all duration-300 group ${isActive
                                        ? `${theme.bg} ${theme.color} ring-2 ring-inset ring-current/20`
                                        : "text-gray-400 hover:bg-gray-50 hover:text-[#1a3642]"
                                        }`}
                                >
                                    <Icon size={20} className={isActive ? "scale-110" : "opacity-60 grayscale group-hover:grayscale-0"} />
                                    <span className={`font-black tracking-tight text-sm ${isActive ? "text-[#1a3642]" : ""}`}>{theme.id}</span>
                                    {isActive && <div className={`ml-auto w-1.5 h-1.5 rounded-full bg-current`} />}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Theme Packages List */}
                <div className="lg:col-span-9 space-y-6">
                    <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-100 min-h-[500px]">
                        <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-50">
                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-2xl ${THEMES.find(t => t.id === selectedTheme)?.bg} flex items-center justify-center ${THEMES.find(t => t.id === selectedTheme)?.color}`}>
                                    {(() => {
                                        const themeData = THEMES.find(t => t.id === selectedTheme);
                                        const Icon = themeData?.icon || Star;
                                        return <Icon size={24} />;
                                    })()}
                                </div>
                                <div>
                                    <h2 className="text-2xl font-black text-[#1a3642] tracking-tight">{selectedTheme} Feature List</h2>
                                    <p className="text-gray-400 font-bold text-[10px] uppercase tracking-widest mt-0.5">Use arrows to sort the display order on home</p>
                                </div>
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
                        ) : themePackages.length > 0 ? (
                            <div className="space-y-4">
                                {themePackages.map((pkg, index) => (
                                    <div key={pkg._id} className="flex items-center gap-6 p-6 rounded-[32px] bg-gray-50 border border-transparent hover:border-[#f1aa4c]/30 hover:bg-white transition-all group shadow-sm">
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
                                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{pkg.slug}</p>
                                        </div>

                                        <button
                                            onClick={() => removeFromTheme(pkg._id)}
                                            className="p-3 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all opacity-0 group-hover:opacity-100"
                                        >
                                            <X size={20} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="py-20 text-center flex flex-col items-center justify-center gap-4 bg-gray-50 rounded-[40px] border-2 border-dashed border-gray-100">
                                <div className={`w-16 h-16 rounded-full ${THEMES.find(t => t.id === selectedTheme)?.bg} flex items-center justify-center ${THEMES.find(t => t.id === selectedTheme)?.color} opacity-40`}>
                                    {(() => {
                                        const themeData = THEMES.find(t => t.id === selectedTheme);
                                        const Icon = themeData?.icon || Star;
                                        return <Icon size={32} />;
                                    })()}
                                </div>
                                <div className="space-y-1">
                                    <p className="text-gray-400 font-black uppercase tracking-widest text-xs">No {selectedTheme} packages featured yet</p>
                                    <p className="text-[10px] text-gray-300 font-medium">Click "Add Package" to select from your inventory.</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Selector Modal */}
            {showSelector && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-[#1a3642]/60 backdrop-blur-sm" onClick={() => setShowSelector(false)}></div>
                    <div className="bg-white w-full max-w-2xl rounded-[40px] shadow-2xl relative z-10 overflow-hidden animate-slide-up h-[80vh] flex flex-col">
                        <div className="p-8 border-b border-gray-50 bg-gray-50/50">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h2 className="text-2xl font-black text-[#1a3642] tracking-tight">Select Package to Feature</h2>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Add to the "{selectedTheme}" section</p>
                                </div>
                                <button onClick={() => setShowSelector(false)} className="text-gray-400 hover:text-[#1a3642] bg-white p-2 rounded-xl shadow-sm">
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                    type="text"
                                    placeholder="Search by title or slug..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-white pl-12 pr-4 py-4 rounded-[20px] text-sm font-medium border-2 border-transparent focus:border-[#f1aa4c]/30 outline-none transition-all shadow-sm"
                                />
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto p-8 space-y-4 custom-scrollbar">
                            {selectablePackages.length > 0 ? (
                                selectablePackages.map(pkg => (
                                    <button
                                        key={pkg._id}
                                        onClick={() => addToTheme(pkg)}
                                        className="w-full text-left flex items-center gap-6 p-5 rounded-[32px] bg-gray-50 hover:bg-gray-100 transition-all group border border-transparent hover:border-[#f1aa4c]/20"
                                    >
                                        <div className="w-14 h-14 rounded-2xl overflow-hidden relative shadow-sm flex-shrink-0">
                                            <Image src={pkg.mainImageUrl} alt={pkg.title} fill className="object-cover" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2">
                                                <h3 className="font-black text-[#1a3642] text-sm truncate">{pkg.title}</h3>
                                                {pkg.themes.includes(selectedTheme) && (
                                                    <span className="bg-green-100 text-green-700 text-[8px] px-2 py-0.5 rounded-full font-black uppercase tracking-tighter">Tagged</span>
                                                )}
                                            </div>
                                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Slug: {pkg.slug}</p>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-white text-[#f1aa4c] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-md">
                                            <Plus size={20} />
                                        </div>
                                    </button>
                                ))
                            ) : (
                                <div className="py-20 text-center flex flex-col items-center gap-4 opacity-40">
                                    <Search size={48} />
                                    <p className="font-black text-sm uppercase tracking-widest">No matching packages found</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Sticky Bottom Bar */}
            <div className="fixed bottom-10 left-72 right-10 z-40">
                <div className="bg-[#1a3642] p-6 rounded-[32px] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10 backdrop-blur-md bg-opacity-95 text-white">
                    <div className="flex items-center gap-4 text-left">
                        <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#f1aa4c]">
                            <Save size={24} />
                        </div>
                        <div>
                            <p className="font-black text-sm tracking-tight text-white">Save {selectedTheme} selection?</p>
                            <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Publish changes to the homepage</p>
                        </div>
                    </div>

                    <button
                        onClick={handleSave}
                        disabled={saving}
                        className="w-full md:w-auto bg-[#f1aa4c] text-[#1a3642] px-10 py-4 rounded-2xl font-black text-xs tracking-widest uppercase shadow-xl shadow-[#f1aa4c]/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 group disabled:opacity-70"
                    >
                        {saving ? "Publishing..." : `Publish ${selectedTheme} List`}
                    </button>
                </div>
            </div>
        </div>
    );
}
