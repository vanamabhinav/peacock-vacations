"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
    MapPin,
    Save,
    Loader2,
    AlertCircle,
    ChevronRight,
    Zap,
    Image as ImageIcon
} from "lucide-react";
import { regionsData } from "@/lib/data/cms/destinationsData";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export default function StateBannersAdminPage() {
    const [banners, setBanners] = useState<Record<string, string>>({});
    const [selectedRegion, setSelectedRegion] = useState(regionsData[0].name);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/admin/homepage/state-banners");
            if (res.ok) {
                const data = await res.json();
                setBanners(data);
            } else {
                setError("Failed to load state banners.");
            }
        } catch (err) {
            setError("An error occurred while fetching banners.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async () => {
        setSaving(true);
        setSuccess(false);
        setError(null);
        try {
            const res = await fetch("/api/admin/homepage/state-banners", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(banners),
            });

            if (res.ok) {
                setSuccess(true);
                setTimeout(() => setSuccess(false), 3000);
            } else {
                setError("Failed to save banners.");
            }
        } catch (err) {
            setError("An error occurred while saving.");
            console.error(err);
        } finally {
            setSaving(false);
        }
    };

    const updateBanner = (stateName: string, url: string) => {
        setBanners(prev => ({
            ...prev,
            [stateName.toLowerCase()]: url
        }));
    };

    const currentRegion = regionsData.find(r => r.name === selectedRegion);

    if (loading) {
        return (
            <div className="flex flex-col justify-center items-center min-h-[400px]">
                <Loader2 className="mb-4 w-12 h-12 text-bigstone animate-spin" />
                <p className="text-bigstone/60 animate-pulse">Loading destination data...</p>
            </div>
        );
    }

    return (
        <div className="p-4 md:p-8 max-w-7xl">
            <div className="flex md:flex-row flex-col justify-between items-start md:items-center gap-4 mb-8">
                <div>
                    <h1 className="font-bold text-bigstone text-3xl">State Banners</h1>
                    <p className="text-bigstone/60">Manage top banner images for each state and their cities.</p>
                </div>
                <button
                    onClick={handleSave}
                    disabled={saving}
                    className="flex items-center gap-2 bg-bigstone disabled:bg-bigstone/50 hover:bg-bigstone/90 shadow-lg px-6 py-3 rounded-xl font-semibold text-white transition-all active:scale-95"
                >
                    {saving ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
                    {saving ? "Saving Changes..." : "Publish to Site"}
                </button>
            </div>

            {error && (
                <div className="flex items-center gap-3 bg-red-50 mb-6 p-4 border border-red-100 rounded-xl text-red-600">
                    <AlertCircle className="w-5 h-5" />
                    <p>{error}</p>
                </div>
            )}

            {success && (
                <div className="flex items-center gap-3 bg-green-50 mb-6 p-4 border border-green-100 rounded-xl text-green-600">
                    <Zap className="w-5 h-5" />
                    <p>Banners updated successfully!</p>
                </div>
            )}

            <div className="flex lg:flex-row flex-col gap-8">
                {/* Sidebar */}
                <div className="lg:w-64 space-y-2">
                    {regionsData.map((region) => (
                        <button
                            key={region.name}
                            onClick={() => setSelectedRegion(region.name)}
                            className={cn(
                                "w-full flex items-center justify-between p-4 rounded-xl transition-all duration-200 group",
                                selectedRegion === region.name
                                    ? "bg-bigstone text-white shadow-md translate-x-2"
                                    : "bg-white hover:bg-provincialpink text-bigstone/70 border border-gray-100"
                            )}
                        >
                            <span className="font-semibold">{region.name}</span>
                            <ChevronRight className={cn(
                                "w-4 h-4 transition-transform",
                                selectedRegion === region.name ? "rotate-90" : "group-hover:translate-x-1"
                            )} />
                        </button>
                    ))}
                </div>

                {/* Main Content */}
                <div className="flex-1 space-y-6">
                    <div className="bg-white shadow-sm border border-gray-100 rounded-2xl overflow-hidden">
                        <div className="bg-provincialpink/30 px-6 py-4 border-b border-gray-100">
                            <h2 className="flex items-center gap-2 font-bold text-bigstone text-xl">
                                <MapPin className="w-5 h-5 text-bigstone" />
                                {selectedRegion} States
                            </h2>
                        </div>
                        <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {currentRegion?.states.map((state) => (
                                    <div key={state.name} className="space-y-3">
                                        <div className="flex justify-between items-center">
                                            <label className="font-bold text-bigstone text-sm uppercase tracking-wider">
                                                {state.name}
                                            </label>
                                            {banners[state.name.toLowerCase()] && (
                                                <span className="text-green-600 text-xs font-semibold flex items-center gap-1">
                                                    <Zap className="w-3 h-3" /> Customized
                                                </span>
                                            )}
                                        </div>
                                        <div className="relative group">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                                <ImageIcon className="w-5 h-5 text-gray-400 group-focus-within:text-bigstone transition-colors" />
                                            </div>
                                            <input
                                                type="text"
                                                value={banners[state.name.toLowerCase()] || ""}
                                                onChange={(e) => updateBanner(state.name, e.target.value)}
                                                placeholder="Enter banner image URL (e.g. pexels.com/...)"
                                                className="w-full bg-gray-50 border border-gray-200 focus:border-bigstone focus:ring-4 focus:ring-bigstone/5 rounded-xl py-3 pl-12 pr-4 outline-none transition-all placeholder:text-gray-400"
                                            />
                                        </div>
                                        {banners[state.name.toLowerCase()] && (
                                            <div className="relative h-24 w-full rounded-lg overflow-hidden border border-gray-200">
                                                <img
                                                    src={banners[state.name.toLowerCase()]}
                                                    alt={state.name}
                                                    className="w-full h-full object-cover"
                                                    onError={(e) => {
                                                        (e.target as HTMLImageElement).src = 'https://placehold.co/600x200?text=Invalid+Image+URL';
                                                    }}
                                                />
                                            </div>
                                        )}
                                        {state.cities.length > 0 && (
                                            <p className="text-[10px] text-gray-400 italic">
                                                Applies to cities: {state.cities.slice(0, 3).map(c => c.name).join(", ")}{state.cities.length > 3 ? "..." : ""}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
