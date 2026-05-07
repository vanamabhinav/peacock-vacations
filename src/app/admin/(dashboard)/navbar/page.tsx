"use client";

import { useEffect, useState } from "react";
import { Plus, Trash2, GripVertical, Save, Layout, ChevronDown, ChevronUp, Sun } from "lucide-react";
import { cn } from "@/lib/cn";

interface Collection {
    _id: string;
    name: string;
    slug: string;
    navIcon?: string;
}

interface CustomDropdown {
    id: string;
    label: string;
    collectionSlugs: string[];
}

interface NavbarConfig {
    customDropdowns: CustomDropdown[];
}

export default function NavbarManagementPage() {
    const [config, setConfig] = useState<NavbarConfig>({ customDropdowns: [] });
    const [collections, setCollections] = useState<Collection[]>([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState({ type: "", text: "" });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        try {
            const [configRes, colRes] = await Promise.all([
                fetch("/api/navbar/config"),
                fetch("/api/admin/collections") // Using admin API to get all collections
            ]);

            if (configRes.ok) setConfig(await configRes.json());
            if (colRes.ok) setCollections(await colRes.json());
        } catch (err) {
            console.error("Failed to fetch data", err);
        } finally {
            setLoading(false);
        }
    };

    const handleAddDropdown = () => {
        const newDropdown: CustomDropdown = {
            id: Math.random().toString(36).substr(2, 9),
            label: "New Dropdown",
            collectionSlugs: []
        };
        setConfig(prev => ({
            ...prev,
            customDropdowns: [...prev.customDropdowns, newDropdown]
        }));
    };

    const handleRemoveDropdown = (id: string) => {
        if (!confirm("Remove this dropdown?")) return;
        setConfig(prev => ({
            ...prev,
            customDropdowns: prev.customDropdowns.filter(d => d.id !== id)
        }));
    };

    const handleUpdateLabel = (id: string, label: string) => {
        setConfig(prev => ({
            ...prev,
            customDropdowns: prev.customDropdowns.map(d => d.id === id ? { ...d, label } : d)
        }));
    };

    const toggleCollection = (dropdownId: string, slug: string) => {
        setConfig(prev => ({
            ...prev,
            customDropdowns: prev.customDropdowns.map(d => {
                if (d.id !== dropdownId) return d;
                const isSelected = d.collectionSlugs.includes(slug);
                return {
                    ...d,
                    collectionSlugs: isSelected
                        ? d.collectionSlugs.filter(s => s !== slug)
                        : [...d.collectionSlugs, slug]
                };
            })
        }));
    };

    const handleSave = async () => {
        setSaving(true);
        setMessage({ type: "", text: "" });
        try {
            const res = await fetch("/api/navbar/config", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(config)
            });

            if (res.ok) {
                setMessage({ type: "success", text: "Navbar configuration saved successfully!" });
                setTimeout(() => setMessage({ type: "", text: "" }), 3000);
            } else {
                setMessage({ type: "error", text: "Failed to save configuration." });
            }
        } catch (err) {
            setMessage({ type: "error", text: "An error occurred while saving." });
        } finally {
            setSaving(false);
        }
    };

    const moveDropdown = (index: number, direction: 'up' | 'down') => {
        const newDropdowns = [...config.customDropdowns];
        const targetIndex = direction === 'up' ? index - 1 : index + 1;
        if (targetIndex < 0 || targetIndex >= newDropdowns.length) return;

        const temp = newDropdowns[index];
        newDropdowns[index] = newDropdowns[targetIndex];
        newDropdowns[targetIndex] = temp;

        setConfig(prev => ({ ...prev, customDropdowns: newDropdowns }));
    };

    if (loading) {
        return <div className="p-8 animate-pulse space-y-4">
            <div className="h-10 w-48 bg-gray-100 rounded-lg"></div>
            <div className="h-64 bg-gray-50 rounded-3xl"></div>
        </div>;
    }

    return (
        <div className="max-w-5xl space-y-8 animate-fade-in pb-20">
            <header className="flex items-center justify-between">
                <div>
                    <h1 className="text-4xl font-black text-[#1a3642] tracking-tighter">Navbar Management</h1>
                    <p className="text-gray-400 font-bold mt-2 uppercase tracking-widest text-[10px]">
                        Customize dynamic dropdowns and assign collections to them.
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    {message.text && (
                        <span className={cn(
                            "text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full",
                            message.type === "success" ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"
                        )}>
                            {message.text}
                        </span>
                    )}
                    <button
                        onClick={handleSave}
                        disabled={saving}
                        className="bg-[#1a3642] text-white px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:scale-[1.02] transition-all shadow-xl disabled:opacity-50"
                    >
                        <Save size={16} />
                        {saving ? "Saving..." : "Save Changes"}
                    </button>
                </div>
            </header>

            <div className="space-y-6">
                {config.customDropdowns.map((dropdown, index) => (
                    <div key={dropdown.id} className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden group hover:border-[#f1aa4c]/30 transition-all">
                        <div className="p-6 flex items-center gap-6 border-b border-gray-50 bg-gray-50/30">
                            <div className="flex flex-col gap-1">
                                <button
                                    onClick={() => moveDropdown(index, 'up')}
                                    disabled={index === 0}
                                    className="p-1 text-gray-300 hover:text-[#f1aa4c] disabled:opacity-0 transition-all"
                                >
                                    <ChevronUp size={20} />
                                </button>
                                <button
                                    onClick={() => moveDropdown(index, 'down')}
                                    disabled={index === config.customDropdowns.length - 1}
                                    className="p-1 text-gray-300 hover:text-[#f1aa4c] disabled:opacity-0 transition-all"
                                >
                                    <ChevronDown size={20} />
                                </button>
                            </div>

                            <div className="flex-1 space-y-1">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Dropdown Label</label>
                                <input
                                    type="text"
                                    value={dropdown.label}
                                    onChange={(e) => handleUpdateLabel(dropdown.id, e.target.value)}
                                    className="w-full bg-transparent text-xl font-black text-[#1a3642] border-b-2 border-transparent focus:border-[#f1aa4c] outline-none transition-all placeholder:text-gray-200"
                                    placeholder="e.g. Seasonal Picks"
                                />
                            </div>

                            <button
                                onClick={() => handleRemoveDropdown(dropdown.id)}
                                className="p-3 bg-red-50 text-red-400 hover:text-red-600 rounded-2xl transition-all opacity-0 group-hover:opacity-100"
                            >
                                <Trash2 size={18} />
                            </button>
                        </div>

                        <div className="p-8">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-sm font-black text-[#1a3642] uppercase tracking-wider flex items-center gap-2">
                                    <Layout size={16} className="text-[#f1aa4c]" />
                                    Assigned Collections
                                </h3>
                                <span className="text-[10px] font-bold text-gray-400">
                                    {dropdown.collectionSlugs.length} Collections Selected
                                </span>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {collections.map(col => {
                                    const isSelected = dropdown.collectionSlugs.includes(col.slug);
                                    return (
                                        <button
                                            key={col._id}
                                            onClick={() => toggleCollection(dropdown.id, col.slug)}
                                            className={cn(
                                                "relative flex items-center gap-3 px-4 py-3 rounded-2xl border-2 text-left transition-all group/col",
                                                isSelected
                                                    ? "bg-[#fffbf2] border-[#f1aa4c] text-[#1a3642] shadow-md shadow-[#f1aa4c]/5"
                                                    : "bg-white border-gray-100 text-gray-400 hover:border-gray-200"
                                            )}
                                        >
                                            <div className={cn(
                                                "w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors",
                                                isSelected ? "bg-[#f1aa4c]/10 text-[#f1aa4c]" : "bg-gray-50 text-gray-300"
                                            )}>
                                                {col.navIcon ? (
                                                    <img src={col.navIcon} alt="" className="w-5 h-5 object-contain" />
                                                ) : (
                                                    <Sun size={14} />
                                                )}
                                            </div>
                                            <span className="text-xs font-black truncate">{col.name}</span>

                                            {isSelected && (
                                                <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#f1aa4c]" />
                                            )}
                                        </button>
                                    );
                                })}
                            </div>

                            {collections.length === 0 && (
                                <div className="text-center py-8 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">No collections found</p>
                                    <Link href="/admin/collections" className="text-[#f1aa4c] text-[10px] font-black underline mt-1 block">Create some collections first</Link>
                                </div>
                            )}
                        </div>
                    </div>
                ))}

                <button
                    onClick={handleAddDropdown}
                    className="w-full py-8 border-4 border-dashed border-gray-100 rounded-[40px] flex flex-col items-center justify-center gap-3 text-gray-300 hover:text-[#f1aa4c] hover:border-[#f1aa4c]/20 hover:bg-[#fffbf2]/30 transition-all group"
                >
                    <div className="p-4 bg-gray-50 rounded-full group-hover:bg-[#f1aa4c]/10 transition-colors">
                        <Plus size={32} />
                    </div>
                    <span className="font-black uppercase tracking-[0.2em] text-xs">Add New Dropdown Menu</span>
                </button>
            </div>
        </div>
    );
}
