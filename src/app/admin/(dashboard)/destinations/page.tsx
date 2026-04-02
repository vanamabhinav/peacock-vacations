"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
    Calendar,
    MapPin,
    Plus,
    X,
    Save,
    Trash2,
    Globe,
    Zap,
    ChevronRight,
    Loader2,
    AlertCircle,
    Search,
    Star
} from "lucide-react";
import { Destination, CtaCard, DestinationsData, PopularDestinationsSectionData } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const MONTHS = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const REGIONS = [
    "North", "South", "East", "West", "Northeast", "Northwest", "Southeast", "Southwest"
];

export default function DestinationsAdminPage() {
    const [selectedItem, setSelectedItem] = useState("January");
    const [totalData, setTotalData] = useState<PopularDestinationsSectionData | null>(null);
    const [currentDestinations, setCurrentDestinations] = useState<Destination[]>([]);
    const [currentCta, setCurrentCta] = useState<CtaCard>({
        title: "",
        subtitle: "",
        lowertext: "",
        url: "",
        packageIds: []
    });
    const [bannerImage, setBannerImage] = useState<string>("");
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Package selection states
    const [allPackages, setAllPackages] = useState<any[]>([]);
    const [showPackageSelector, setShowPackageSelector] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (totalData) {
            const key = selectedItem.toLowerCase();
            const dataMap = totalData.data as any;
            const sectionData = (dataMap && dataMap[key]) || {
                destinations: [],
                ctaCard: { title: "", subtitle: "", lowertext: "", url: "", packageIds: [] },
                bannerImage: ""
            };
            setCurrentDestinations(sectionData.destinations || []);
            setBannerImage(sectionData.bannerImage || "");
            setCurrentCta({
                ...(sectionData.ctaCard || { title: "", subtitle: "", lowertext: "", url: "", packageIds: [] }),
                packageIds: sectionData.ctaCard?.packageIds || []
            });
        }
    }, [selectedItem, totalData]);

    const fetchData = async () => {
        setLoading(true);
        try {
            const [destRes, pkgRes] = await Promise.all([
                fetch("/api/admin/homepage/destinations"),
                fetch("/api/admin/packages")
            ]);

            if (destRes.ok && pkgRes.ok) {
                const destData = await destRes.json();
                const pkgData = await pkgRes.json();
                setTotalData(destData);
                setAllPackages(pkgData);
            } else {
                setError("Failed to load data.");
            }
        } catch (err) {
            setError("An error occurred while fetching data.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async () => {
        setSaving(true);
        setError(null);
        try {
            const normalizedCta = {
                ...currentCta,
                url: currentCta.url.replace(/^\/package\//, "/packages/")
            };

            const res = await fetch("/api/admin/homepage/destinations", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    selection: selectedItem,
                    destinations: currentDestinations,
                    ctaCard: normalizedCta,
                    bannerImage: bannerImage
                })
            });

            if (res.ok) {
                // Update local totalData to keep it in sync
                if (totalData) {
                    const key = selectedItem.toLowerCase();
                    const newTotalData = { ...totalData };
                    if (!newTotalData.data) newTotalData.data = {} as any;
                    (newTotalData.data as any)[key] = {
                        destinations: currentDestinations,
                        ctaCard: normalizedCta,
                        bannerImage: bannerImage
                    };
                    setCurrentCta(normalizedCta);
                    setTotalData(newTotalData);
                }
                alert(`Successfully updated destinations for ${selectedItem}`);
            } else {
                const errData = await res.json();
                setError(errData.message || "Failed to save changes.");
            }
        } catch (err) {
            setError("An error occurred while saving.");
            console.error(err);
        } finally {
            setSaving(false);
        }
    };

    const addDestination = () => {
        if (currentDestinations.length >= 5) {
            alert("Maximum 5 destinations allowed for the grid layout.");
            return;
        }
        setCurrentDestinations([
            ...currentDestinations,
            { title: "", subtitle: "", image: "", url: "" }
        ]);
    };

    const removeDestination = (index: number) => {
        const updated = [...currentDestinations];
        updated.splice(index, 1);
        setCurrentDestinations(updated);
    };

    const updateDestination = (index: number, field: keyof Destination, value: string) => {
        const updated = [...currentDestinations];
        updated[index] = { ...updated[index], [field]: value };
        setCurrentDestinations(updated);
    };

    const updateCta = (field: keyof CtaCard, value: any) => {
        setCurrentCta({ ...currentCta, [field]: value });
    };

    const togglePackageSelection = (pkgId: string) => {
        const currentIds = currentCta.packageIds || [];
        if (currentIds.includes(pkgId)) {
            updateCta("packageIds", currentIds.filter(id => id !== pkgId));
        } else {
            updateCta("packageIds", [...currentIds, pkgId]);
        }
    };

    const removePackage = (pkgId: string) => {
        const currentIds = currentCta.packageIds || [];
        updateCta("packageIds", currentIds.filter(id => id !== pkgId));
    };

    const filteredPackages = allPackages.filter(pkg =>
        pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.slug.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (loading) {
        return (
            <div className="flex h-[60vh] items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-[#f1aa4c]" />
            </div>
        );
    }

    const isMonth = MONTHS.includes(selectedItem);

    return (
        <div className="space-y-8 animate-fade-in pb-24 relative">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-black text-[#1a3642] tracking-tighter italic">Destinations Admin</h1>
                    <p className="text-gray-400 font-bold mt-2 uppercase tracking-widest text-xs">
                        Manage month/region based destination cards and featured packages
                    </p>
                </div>
            </header>

            {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-2xl flex items-center gap-3">
                    <AlertCircle size={20} />
                    <p className="font-bold text-sm">{error}</p>
                </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Navigation Sidebar */}
                <div className="lg:col-span-3 space-y-6">
                    <div className="bg-white p-6 rounded-[40px] shadow-sm border border-gray-100 flex flex-col gap-2">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-300 ml-4 mb-2 flex items-center gap-2">
                            <Calendar size={12} /> Explore By Month
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                            {MONTHS.map(month => (
                                <button
                                    key={month}
                                    onClick={() => setSelectedItem(month)}
                                    className={`flex items-center justify-center p-3 rounded-2xl transition-all duration-300 text-xs font-black tracking-tight ${selectedItem === month
                                        ? "bg-amber-50 text-[#f1aa4c] ring-2 ring-inset ring-amber-200"
                                        : "text-gray-400 hover:bg-gray-50 hover:text-[#1a3642]"
                                        }`}
                                >
                                    {month.substring(0, 3)}
                                </button>
                            ))}
                        </div>

                        <div className="h-px bg-gray-50 my-4 mx-4" />

                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-300 ml-4 mb-2 flex items-center gap-2">
                            <Globe size={12} /> Popular By Region
                        </p>
                        <div className="grid grid-cols-1 gap-2">
                            {REGIONS.map(region => (
                                <button
                                    key={region}
                                    onClick={() => setSelectedItem(region)}
                                    className={`flex items-center gap-4 px-6 py-3 rounded-2xl transition-all duration-300 ${selectedItem === region
                                        ? "bg-blue-50 text-blue-600 ring-2 ring-inset ring-blue-100"
                                        : "text-gray-400 hover:bg-gray-50 hover:text-[#1a3642]"
                                        }`}
                                >
                                    <MapPin size={16} className={selectedItem === region ? "opacity-100" : "opacity-40"} />
                                    <span className={`font-black tracking-tight text-sm ${selectedItem === region ? "text-[#1a3642]" : ""}`}>{region}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main Editor Area */}
                <div className="lg:col-span-9 space-y-8">
                    <div className="bg-white p-8 md:p-10 rounded-[40px] shadow-sm border border-gray-100 min-h-[600px] space-y-10">
                        {/* destinations editor section */}
                        <div className="space-y-8">
                            <div className="flex items-center justify-between border-b border-gray-50 pb-6">
                                <div className="flex items-center gap-4">
                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isMonth ? "bg-amber-50 text-amber-500" : "bg-blue-50 text-blue-500"}`}>
                                        {isMonth ? <Calendar size={24} /> : <MapPin size={24} />}
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-black text-[#1a3642] tracking-tight">{selectedItem} Destinations</h2>
                                        <p className="text-gray-400 font-bold text-[10px] uppercase tracking-widest mt-0.5 whitespace-nowrap">Manage top locations for this selection</p>
                                    </div>
                                </div>
                                <button
                                    onClick={addDestination}
                                    className="bg-[#f1aa4c] text-[#1a3642] px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:scale-[1.02] transition-all shadow-lg shadow-[#f1aa4c]/10 h-fit"
                                >
                                    <Plus size={16} /> Add Card
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {currentDestinations.map((dest, index) => (
                                    <div key={index} className="p-6 rounded-[32px] bg-gray-50 border border-gray-100 relative group animate-slide-up flex flex-col gap-4">
                                        <button
                                            onClick={() => removeDestination(index)}
                                            className="absolute top-4 right-4 text-gray-300 hover:text-red-500 transition-all opacity-0 group-hover:opacity-100"
                                        >
                                            <Trash2 size={16} />
                                        </button>

                                        <div className="flex gap-4">
                                            <div className="w-20 h-20 rounded-2xl overflow-hidden relative shadow-sm shrink-0 border-2 border-white">
                                                {dest.image ? (
                                                    <img src={dest.image} alt={dest.title} className="w-full h-full object-cover" />
                                                ) : (
                                                    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 font-black text-[10px] uppercase text-center p-2">No Image</div>
                                                )}
                                            </div>
                                            <div className="flex-1 space-y-1 pt-1">
                                                <p className="text-gray-300 font-black text-[10px] uppercase tracking-[0.2em]">Card {index + 1}</p>
                                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest italic">{index < 3 ? "Visible on All Devices" : "Hidden on Mobile"}</p>
                                            </div>
                                        </div>

                                        <div className="space-y-4 pt-2">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-1">
                                                    <label className="text-[9px] font-black uppercase tracking-widest text-[#1a3642]/60 ml-1">Title</label>
                                                    <input
                                                        value={dest.title}
                                                        onChange={(e) => updateDestination(index, "title", e.target.value)}
                                                        className="w-full bg-white border-transparent focus:border-amber-200 rounded-xl px-4 py-2 text-sm font-bold text-[#1a3642] outline-none shadow-sm transition-all"
                                                        placeholder="e.g. Varanasi"
                                                    />
                                                </div>
                                                <div className="space-y-1">
                                                    <label className="text-[9px] font-black uppercase tracking-widest text-[#1a3642]/60 ml-1">Sub-Title</label>
                                                    <input
                                                        value={dest.subtitle}
                                                        onChange={(e) => updateDestination(index, "subtitle", e.target.value)}
                                                        className="w-full bg-white border-transparent focus:border-amber-200 rounded-xl px-4 py-2 text-sm font-bold text-[#1a3642] outline-none shadow-sm transition-all italic"
                                                        placeholder="e.g. City of Lights"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-1">
                                                <label className="text-[9px] font-black uppercase tracking-widest text-[#1a3642]/60 ml-1">Image URL</label>
                                                <input
                                                    value={dest.image}
                                                    onChange={(e) => updateDestination(index, "image", e.target.value)}
                                                    className="w-full bg-white border-transparent focus:border-amber-200 rounded-xl px-4 py-2 text-[10px] font-medium text-gray-500 outline-none shadow-sm transition-all"
                                                    placeholder="https://..."
                                                />
                                            </div>

                                            <div className="space-y-1">
                                                <label className="text-[9px] font-black uppercase tracking-widest text-[#1a3642]/60 ml-1">Target Redirection URL</label>
                                                <input
                                                    value={dest.url}
                                                    onChange={(e) => updateDestination(index, "url", e.target.value)}
                                                    className="w-full bg-white border-transparent focus:border-amber-200 rounded-xl px-4 py-2 text-[10px] font-medium text-gray-500 outline-none shadow-sm transition-all"
                                                    placeholder="/destinations/varanasi"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {currentDestinations.length === 0 && (
                                    <div className="col-span-full py-20 text-center flex flex-col items-center justify-center gap-4 bg-gray-50 rounded-[40px] border-2 border-dashed border-gray-100">
                                        <p className="text-gray-400 font-black uppercase tracking-widest text-xs italic">No destinations listed for {selectedItem}</p>
                                        <button onClick={addDestination} className="text-[#f1aa4c] font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:underline"><Plus size={14} /> Add First Card</button>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Featured Section (Winter Whispers) */}
                        <div className="space-y-8 pt-6 border-t border-gray-50">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
                                    <Zap size={24} />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-black text-[#1a3642] tracking-tight">Featured "{isMonth ? "Special Package" : "Region Highlight"}" Card</h2>
                                    <p className="text-gray-400 font-bold text-[10px] uppercase tracking-widest mt-0.5 italic">Commonly known as "Winter Whispers" / "Monsoon Romance"</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#fff9f1] p-10 rounded-[40px] border-2 border-amber-100 shadow-sm animate-fade-in relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/20 rounded-full -mr-16 -mt-16 blur-3xl group-hover:scale-150 transition-transform duration-700"></div>

                                <div className="col-span-full space-y-2 mb-4">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-[#1a3642]/60 ml-2">PLP Top Banner Image URL</label>
                                    <div className="relative">
                                        <input
                                            value={bannerImage}
                                            onChange={(e) => setBannerImage(e.target.value)}
                                            className="w-full bg-white border-2 border-transparent focus:border-amber-200 rounded-[20px] px-6 py-4 pl-12 text-xs font-medium text-[#1a3642] outline-none shadow-sm transition-all"
                                            placeholder="e.g. https://images.pexels.com/photos/..."
                                        />
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#f1aa4c]">
                                            <Globe size={18} />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-[#1a3642]/60 ml-2">Main Title Header</label>
                                        <input
                                            value={currentCta.title}
                                            onChange={(e) => updateCta("title", e.target.value)}
                                            className="w-full bg-white border-2 border-transparent focus:border-amber-200 rounded-[20px] px-6 py-4 text-base font-black text-[#1a3642] outline-none shadow-sm transition-all"
                                            placeholder="e.g. Winter Whispers"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-[#1a3642]/60 ml-2">Sub-Header Text</label>
                                        <textarea
                                            value={currentCta.subtitle}
                                            onChange={(e) => updateCta("subtitle", e.target.value)}
                                            className="w-full bg-white border-2 border-transparent focus:border-amber-200 rounded-[20px] px-6 py-4 text-sm font-bold text-[#1a3642] outline-none shadow-sm transition-all min-h-[80px]"
                                            placeholder="e.g. Snow-Clad Serenity, Festive Charm"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-[#1a3642]/60 ml-2">Description / Lower Text</label>
                                        <textarea
                                            value={currentCta.lowertext}
                                            onChange={(e) => updateCta("lowertext", e.target.value)}
                                            className="w-full bg-white border-2 border-transparent focus:border-amber-200 rounded-[20px] px-6 py-4 text-xs font-bold text-gray-500 outline-none shadow-sm transition-all min-h-[80px] italic"
                                            placeholder="e.g. Chill in the air, Warmth in the soul"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-[#1a3642]/60 ml-2">Target Package/Page URL</label>
                                        <div className="relative">
                                            <input
                                                value={currentCta.url}
                                                onChange={(e) => updateCta("url", e.target.value)}
                                                className="w-full bg-white border-2 border-transparent focus:border-amber-200 rounded-[20px] px-6 py-4 pl-12 text-xs font-medium text-[#1a3642] outline-none shadow-sm transition-all"
                                                placeholder="/packages/winter-in-ladakh"
                                            />
                                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#f1aa4c]">
                                                <Globe size={18} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Selected Packages Section */}
                                    <div className="space-y-4 pt-4 border-t border-amber-100/50">
                                        <div className="flex items-center justify-between">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-[#1a3642]/60 ml-2">Selected Packages</label>
                                            <button
                                                type="button"
                                                onClick={() => setShowPackageSelector(true)}
                                                className="text-[10px] font-black uppercase tracking-widest text-[#f1aa4c] hover:underline"
                                            >
                                                + Manage Packages
                                            </button>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {currentCta.packageIds && currentCta.packageIds.length > 0 ? (
                                                currentCta.packageIds.map(pkgId => {
                                                    const pkg = allPackages.find(p => p._id === pkgId);
                                                    return (
                                                        <div key={pkgId} className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-amber-100 text-[10px] font-bold text-[#1a3642] shadow-sm group/pkg">
                                                            <span className="truncate max-w-[120px]">{pkg?.title || pkgId}</span>
                                                            <button
                                                                onClick={() => removePackage(pkgId)}
                                                                className="text-gray-300 hover:text-red-500 transition-colors"
                                                            >
                                                                <X size={12} />
                                                            </button>
                                                        </div>
                                                    );
                                                })
                                            ) : (
                                                <p className="text-[9px] text-gray-400 italic">No packages selected for this category.</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Package Selector Modal */}
            {showPackageSelector && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-[#1a3642]/60 backdrop-blur-sm" onClick={() => setShowPackageSelector(false)}></div>
                    <div className="bg-white w-full max-w-2xl rounded-[40px] shadow-2xl relative z-10 overflow-hidden animate-slide-up h-[80vh] flex flex-col">
                        <div className="p-8 border-b border-gray-50 flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-black text-[#1a3642] tracking-tight">Select Category Packages</h2>
                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Assign tours to the "{currentCta.title || selectedItem}" highlight</p>
                            </div>
                            <button onClick={() => setShowPackageSelector(false)} className="text-gray-400 hover:text-[#1a3642]">
                                <X size={24} />
                            </button>
                        </div>

                        <div className="p-6 bg-gray-50 border-b border-gray-100">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search by name or slug..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-white border-none rounded-2xl px-6 py-4 pl-12 text-sm font-bold text-[#1a3642] outline-none shadow-sm focus:ring-2 focus:ring-[#f1aa4c]/50 transition-all"
                                />
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto p-8 space-y-4 custom-scrollbar">
                            {filteredPackages.map(pkg => {
                                const isSelected = currentCta.packageIds?.includes(pkg._id);
                                return (
                                    <button
                                        key={pkg._id}
                                        onClick={() => togglePackageSelection(pkg._id)}
                                        className={cn(
                                            "w-full text-left flex items-center gap-6 p-4 rounded-3xl transition-all group border-2",
                                            isSelected
                                                ? "bg-amber-50 border-amber-200"
                                                : "bg-gray-50 border-transparent hover:bg-gray-100"
                                        )}
                                    >
                                        <div className="w-14 h-14 rounded-2xl overflow-hidden relative shadow-sm flex-shrink-0 border-2 border-white">
                                            <Image src={pkg.mainImageUrl} alt={pkg.title} fill className="object-cover" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-black text-[#1a3642] text-sm truncate">{pkg.title}</h3>
                                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">{pkg.slug}</p>
                                        </div>
                                        <div className={cn(
                                            "w-10 h-10 rounded-full flex items-center justify-center transition-all",
                                            isSelected
                                                ? "bg-[#f1aa4c] text-[#1a3642] shadow-lg shadow-[#f1aa4c]/20"
                                                : "bg-white text-gray-300 opacity-0 group-hover:opacity-100"
                                        )}>
                                            {isSelected ? <Save size={18} /> : <Plus size={20} />}
                                        </div>
                                    </button>
                                );
                            })}

                            {filteredPackages.length === 0 && (
                                <div className="py-20 text-center flex flex-col items-center gap-4">
                                    <Search size={40} className="text-gray-200" />
                                    <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">No packages match your search</p>
                                </div>
                            )}
                        </div>

                        <div className="p-8 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="w-6 h-6 rounded-lg bg-[#f1aa4c]/20 text-[#f1aa4c] flex items-center justify-center text-[10px] font-black">
                                    {currentCta.packageIds?.length || 0}
                                </span>
                                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Packages assigned</span>
                            </div>
                            <button
                                onClick={() => setShowPackageSelector(false)}
                                className="bg-[#1a3642] text-white px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:scale-[1.02] transition-all"
                            >
                                Done
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Sticky Action Footer */}
            <div className="fixed bottom-10 left-72 right-10 z-[60]">
                <div className="bg-[#1a3642] p-8 rounded-[40px] shadow-2xl border border-white/10 backdrop-blur-md bg-opacity-95 text-white flex flex-col md:flex-row items-center justify-between gap-8 animate-slide-up">
                    <div className="flex items-center gap-6">
                        <div className="w-14 h-14 rounded-3xl bg-white/10 flex items-center justify-center text-[#f1aa4c] shadow-inner">
                            <Save size={28} />
                        </div>
                        <div>
                            <h3 className="font-black text-lg tracking-tight text-white flex items-center gap-2 italic">
                                Publish changes for <span className="text-[#f1aa4c] not-italic">{selectedItem}</span>?
                            </h3>
                            <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">Updates the home page destinations grid instantly</p>
                        </div>
                    </div>

                    <button
                        onClick={handleSave}
                        disabled={saving}
                        className="w-full md:w-auto bg-[#f1aa4c] text-[#1a3642] px-12 py-5 rounded-[24px] font-black text-xs tracking-widest uppercase shadow-2xl shadow-[#f1aa4c]/40 hover:scale-[1.03] active:scale-95 transition-all flex items-center justify-center gap-3 group disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                        {saving ? (
                            <>
                                <Loader2 size={20} className="animate-spin" />
                                Publishing Updates...
                            </>
                        ) : (
                            <>
                                <Save size={20} className="group-hover:rotate-12 transition-transform" />
                                Publish to Homepage
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
