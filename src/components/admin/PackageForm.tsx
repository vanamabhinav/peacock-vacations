"use client";

import { useState, useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import {
    Save,
    X,
    Plus,
    Trash2,
    Image as ImageIcon,
    MapPin,
    Clock,
    CreditCard,
    CheckCircle2,
    Layers,
    Utensils,
    Car,
    Bed,
    Zap,
    Tag
} from "lucide-react";
import { useRouter } from "next/navigation";
import { regionsData } from "@/lib/data/cms/destinationsData";


interface PackageFormProps {
    initialData?: any;
    isEditing?: boolean;
}

function DayEvents({ control, dayIndex, register }: { control: any, dayIndex: number, register: any }) {
    const { fields, append, remove } = useFieldArray({
        control,
        name: `itinerary.${dayIndex}.events`
    });

    return (
        <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#345b63]">Events & Activities</label>
                <button
                    type="button"
                    onClick={() => append({ timeOfDay: "Morning", title: "", description: "" })}
                    className="text-[9px] font-black uppercase tracking-widest text-[#f1aa4c] hover:underline"
                >
                    + Add Event
                </button>
            </div>
            {fields.map((field, index) => (
                <div key={field.id} className="bg-white p-4 rounded-2xl border border-gray-100 flex flex-col gap-4 relative group/event">
                    <button
                        type="button"
                        onClick={() => remove(index)}
                        className="absolute top-2 right-2 text-gray-300 hover:text-red-500 transition-all opacity-0 group-hover/event:opacity-100"
                    >
                        <X size={14} />
                    </button>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="md:col-span-1">
                            <select
                                {...register(`itinerary.${dayIndex}.events.${index}.timeOfDay` as const)}
                                className="w-full bg-gray-50 border-none rounded-xl px-3 py-2 text-xs font-bold text-[#1a3642] outline-none focus:ring-1 focus:ring-[#f1aa4c]"
                            >
                                <option value="Morning">Morning</option>
                                <option value="Afternoon">Afternoon</option>
                                <option value="Evening">Evening</option>
                                <option value="Night">Night</option>
                                <option value="Full Day">Full Day</option>
                            </select>
                        </div>
                        <div className="md:col-span-3">
                            <input
                                {...register(`itinerary.${dayIndex}.events.${index}.title` as const)}
                                className="w-full bg-transparent border-b border-gray-100 focus:border-[#f1aa4c] outline-none font-bold text-[#1a3642] py-2 text-sm"
                                placeholder="Event Title (e.g. Visit to Amber Fort)"
                            />
                        </div>
                    </div>
                    <textarea
                        {...register(`itinerary.${dayIndex}.events.${index}.description` as const)}
                        className="w-full bg-gray-50/50 rounded-xl p-3 text-xs font-medium text-gray-500 outline-none focus:bg-white transition-all min-h-[60px]"
                        placeholder="Short description of the activity..."
                    />
                </div>
            ))}
        </div>
    );
}

function AccommodationFields({ control, register }: { control: any, register: any }) {
    const { fields, append, remove } = useFieldArray({
        control,
        name: "inclusions.accommodation"
    });

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h3 className="text-xl font-black text-[#1a3642] tracking-tight italic">Stay / Hotels</h3>
                <button type="button" onClick={() => append({ hotelName: "", rating: "3 Star", roomType: "Standard", amenities: [] })} className="text-xs font-black uppercase tracking-widest text-[#f1aa4c] hover:bg-[#f1aa4c]/10 px-4 py-2 rounded-xl transition-all">
                    + Add stay
                </button>
            </div>
            <div className="grid grid-cols-1 gap-6">
                {fields.map((field, index) => (
                    <div key={field.id} className="p-6 rounded-[32px] bg-gray-50 border border-gray-100 relative group">
                        <button type="button" onClick={() => remove(index)} className="absolute top-4 right-4 text-gray-300 hover:text-red-500 transition-all opacity-0 group-hover:opacity-100">
                            <Trash2 size={16} />
                        </button>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[9px] font-black uppercase tracking-widest text-gray-400">Hotel Name</label>
                                <input {...register(`inclusions.accommodation.${index}.hotelName` as const)} className="input-field py-2" placeholder="e.g. Grand Mercure" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[9px] font-black uppercase tracking-widest text-gray-400">Rating</label>
                                <select {...register(`inclusions.accommodation.${index}.rating` as const)} className="input-field py-2">
                                    <option value="3 Star">3 Star</option>
                                    <option value="4 Star">4 Star</option>
                                    <option value="5 Star">5 Star</option>
                                    <option value="Boutique">Boutique</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[9px] font-black uppercase tracking-widest text-gray-400">Room Type</label>
                                <input {...register(`inclusions.accommodation.${index}.roomType` as const)} className="input-field py-2" placeholder="e.g. Deluxe Room" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[9px] font-black uppercase tracking-widest text-gray-400">Hotel Image URL</label>
                                <input {...register(`inclusions.accommodation.${index}.imageUrl` as const)} className="input-field py-2" placeholder="https://..." />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function PackageIncludesFields({ control, register, availableIcons }: { control: any, register: any, availableIcons: string[] }) {
    const { fields, append, remove } = useFieldArray({
        control,
        name: "packageIncludes"
    });

    return (
        <div className="space-y-6 pt-10 border-t border-gray-100">
            <div className="flex items-center justify-between">
                <h3 className="text-xl font-black text-[#1a3642] tracking-tight italic">Custom Highlights / Tags</h3>
                <button type="button" onClick={() => append({ label: "", icon: "" })} className="text-xs font-black uppercase tracking-widest text-[#f1aa4c] hover:bg-[#f1aa4c]/10 px-4 py-2 rounded-xl transition-all">
                    + Add Tag
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {fields.map((field, index) => (
                    <div key={field.id} className="p-6 rounded-[32px] bg-gray-50 border border-gray-100 relative group">
                        <button type="button" onClick={() => remove(index)} className="absolute top-4 right-4 text-gray-300 hover:text-red-500 transition-all opacity-0 group-hover:opacity-100">
                            <Trash2 size={16} />
                        </button>
                        <div className="flex flex-col gap-4">
                            <div className="space-y-2">
                                <label className="text-[9px] font-black uppercase tracking-widest text-gray-400">Tag Label</label>
                                <input {...register(`packageIncludes.${index}.label` as const)} className="input-field py-2" placeholder="e.g. All Meals Included" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[9px] font-black uppercase tracking-widest text-gray-400">Select Icon</label>
                                <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 max-h-[150px] overflow-y-auto p-2 bg-white rounded-xl border border-gray-100">
                                    {availableIcons.map(icon => (
                                        <label key={icon} className="relative cursor-pointer group/icon">
                                            <input
                                                type="radio"
                                                {...register(`packageIncludes.${index}.icon` as const)}
                                                value={icon}
                                                className="peer sr-only"
                                            />
                                            <div className="w-10 h-10 rounded-lg border-2 border-transparent peer-checked:border-[#f1aa4c] peer-checked:bg-orange-50 flex items-center justify-center hover:bg-gray-50 transition-all">
                                                <img src={`/icons/${icon}`} alt={icon} className="w-6 h-6 object-contain" />
                                            </div>
                                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 bg-black text-white text-[8px] px-1 rounded opacity-0 group-hover/icon:opacity-100 pointer-events-none whitespace-nowrap">
                                                {icon}
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function TransferFields({ control, register }: { control: any, register: any }) {
    const { fields, append, remove } = useFieldArray({
        control,
        name: "inclusions.transfers"
    });

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h3 className="text-xl font-black text-[#1a3642] tracking-tight italic">Transfers / Vehicles</h3>
                <button type="button" onClick={() => append({ vehicleName: "", type: "Private", features: [] })} className="text-xs font-black uppercase tracking-widest text-[#f1aa4c] hover:bg-[#f1aa4c]/10 px-4 py-2 rounded-xl transition-all">
                    + Add Transfer
                </button>
            </div>
            <div className="grid grid-cols-1 gap-6">
                {fields.map((field, index) => (
                    <div key={field.id} className="p-6 rounded-[32px] bg-gray-50 border border-gray-100 relative group">
                        <button type="button" onClick={() => remove(index)} className="absolute top-4 right-4 text-gray-300 hover:text-red-500 transition-all opacity-0 group-hover:opacity-100">
                            <Trash2 size={16} />
                        </button>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[9px] font-black uppercase tracking-widest text-gray-400">Vehicle Name</label>
                                <input {...register(`inclusions.transfers.${index}.vehicleName` as const)} className="input-field py-2" placeholder="e.g. Sedan (Inova/Crysta)" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[9px] font-black uppercase tracking-widest text-gray-400">Type</label>
                                <input {...register(`inclusions.transfers.${index}.type` as const)} className="input-field py-2" placeholder="e.g. Private / AC" />
                            </div>
                            <div className="md:col-span-2 space-y-2">
                                <label className="text-[9px] font-black uppercase tracking-widest text-gray-400">Vehicle Image URL</label>
                                <input {...register(`inclusions.transfers.${index}.imageUrl` as const)} className="input-field py-2" placeholder="https://..." />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function CollagePreview({ images }: { images: string[] }) {
    const displayImages = images.map(img => img || "https://placehold.co/600x400/f1f2f4/a1a1a1?text=Empty+Position");

    return (
        <div className="mt-10 space-y-6">
            <h3 className="text-xl font-black text-[#1a3642] tracking-tight italic">Live Collage Preview</h3>
            <div className="grid w-full h-[400px] grid-cols-12 grid-rows-6 gap-2 bg-gray-50 p-4 rounded-[40px] border border-gray-100 shadow-inner">
                {/* Pos 0: Main Left */}
                <div className="col-span-5 row-span-6 relative rounded-3xl overflow-hidden border-2 border-white shadow-sm">
                    <img src={displayImages[0]} alt="P1" className="w-full h-full object-cover" />
                    <div className="absolute top-2 left-2 bg-black/60 text-white text-[8px] px-2 py-0.5 rounded-full font-black uppercase">Position 1</div>
                </div>

                <div className="col-span-7 row-span-6 grid grid-cols-12 grid-rows-12 gap-2">
                    {/* Pos 1: Top Center */}
                    <div className="col-span-8 row-span-5 relative rounded-2xl overflow-hidden border-2 border-white shadow-sm">
                        <img src={displayImages[1]} alt="P2" className="w-full h-full object-cover" />
                        <div className="absolute top-2 left-2 bg-black/60 text-white text-[8px] px-2 py-0.5 rounded-full font-black uppercase">Position 2</div>
                    </div>
                    {/* Pos 2: Far Right Top */}
                    <div className="col-span-4 row-span-7 relative rounded-2xl overflow-hidden border-2 border-white shadow-sm">
                        <img src={displayImages[2]} alt="P3" className="w-full h-full object-cover" />
                        <div className="absolute top-2 left-2 bg-black/60 text-white text-[8px] px-2 py-0.5 rounded-full font-black uppercase">Position 3</div>
                    </div>
                    {/* Pos 3: Middle Center */}
                    <div className="col-span-4 row-span-7 relative rounded-2xl overflow-hidden border-2 border-white shadow-sm">
                        <img src={displayImages[3]} alt="P4" className="w-full h-full object-cover" />
                        <div className="absolute top-2 left-2 bg-black/60 text-white text-[8px] px-2 py-0.5 rounded-full font-black uppercase">Position 4</div>
                    </div>
                    {/* Pos 4: Bottom Center */}
                    <div className="col-span-4 row-span-4 relative rounded-2xl overflow-hidden border-2 border-white shadow-sm">
                        <img src={displayImages[4]} alt="P5" className="w-full h-full object-cover" />
                        <div className="absolute top-2 left-2 bg-black/60 text-white text-[8px] px-2 py-0.5 rounded-full font-black uppercase">Position 5</div>
                    </div>
                    {/* Pos 5: Small Accent 1 */}
                    <div className="col-span-4 row-span-3 relative rounded-2xl overflow-hidden border-2 border-white shadow-sm">
                        <img src={displayImages[5]} alt="P6" className="w-full h-full object-cover" />
                        <div className="absolute top-2 left-2 bg-black/60 text-white text-[8px] px-2 py-0.5 rounded-full font-black uppercase">Pos 6</div>
                    </div>
                    {/* Pos 6: Small Accent 2 */}
                    <div className="col-span-4 row-span-5 relative rounded-2xl overflow-hidden border-2 border-white shadow-sm">
                        <img src={displayImages[6]} alt="P7" className="w-full h-full object-cover" />
                        <div className="absolute top-2 left-2 bg-black/60 text-white text-[8px] px-2 py-0.5 rounded-full font-black uppercase">Pos 7</div>
                    </div>
                </div>
            </div>
            <p className="text-[10px] text-center text-gray-400 font-bold uppercase tracking-widest leading-relaxed">
                This preview approximates the desktop layout. <br />Ensure images are high-resolution for the best effect.
            </p>
        </div>
    );
}

export default function PackageForm({ initialData, isEditing = false }: PackageFormProps) {



    const router = useRouter();
    const [activeTab, setActiveTab] = useState("basic");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [availableIcons, setAvailableIcons] = useState<string[]>([]);
    const [availableCollections, setAvailableCollections] = useState<{ _id: string; name: string; slug: string }[]>([]);

    useEffect(() => {
        fetch("/api/admin/icons")
            .then(res => res.json())
            .then(data => setAvailableIcons(data.icons || []))
            .catch(err => console.error("Failed to fetch icons", err));
        fetch("/api/admin/collections")
            .then(res => res.json())
            .then(data => setAvailableCollections(data || []))
            .catch(err => console.error("Failed to fetch collections", err));
    }, []);

    const { register, control, handleSubmit, watch, setValue, formState: { errors } } = useForm({
        defaultValues: initialData || {
            title: "",
            slug: "",
            shortDescription: "",
            longDescription: "",
            isPublished: false,
            departureCity: [""],
            destination: {
                cityName: "",
                stateName: "",
                countryName: "India"
            },
            region: "",
            themes: [""],
            packageType: [""],
            price: {
                originalAmount: 0,
                discountedAmount: 0,
                currency: "INR"
            },
            duration: {
                days: 1,
                nights: 0
            },
            mainImageUrl: "",
            galleryImages: ["", "", "", "", "", "", ""],
            itinerary: [{ day: 1, title: "", events: [{ timeOfDay: "Morning", title: "", description: "" }] }],
            inclusions: {
                meals: [],
                accommodation: [],
                transfers: []
            },
            tourInclusionsList: [],
            tourExclusionsList: [],
            packageIncludes: [],
            collections: []
        }
    });


    const { fields: itineraryFields, append: appendDay, remove: removeDay } = useFieldArray({
        control,
        name: "itinerary"
    });

    const selectedRegion = watch("region");
    const selectedState = watch("destination.stateName");

    const availableStates = regionsData.find(r => r.name === selectedRegion)?.states || [];
    const availableCities = availableStates.find(s => s.name === selectedState)?.cities || [];


    const onSubmit = async (data: any) => {
        setLoading(true);
        setError("");
        try {
            const url = isEditing ? `/api/admin/packages/${initialData._id}` : "/api/admin/packages";
            const method = isEditing ? "PUT" : "POST";

            const response = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                router.push("/admin/packages");
                router.refresh();
            } else {
                const result = await response.json();
                setError(result.message || "Something went wrong");
            }
        } catch (err) {
            setError("Network error. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const tabs = [
        { id: "basic", name: "Basic Info", icon: Layers },
        { id: "destination", name: "Destination", icon: MapPin },
        { id: "pricing", name: "Pricing & Duration", icon: CreditCard },
        { id: "media", name: "Media & Images", icon: ImageIcon },
        { id: "itinerary", name: "Itinerary", icon: Clock },
        { id: "inclusion", name: "Inclusions", icon: Zap },
    ];

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 animate-fade-in">
            {/* Form Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-gray-100">
                <div>
                    <h1 className="text-4xl font-black text-[#1a3642] tracking-tighter">
                        {isEditing ? "Edit Package" : "Create New Package"}
                    </h1>
                    <p className="text-gray-400 font-bold mt-2 uppercase tracking-widest text-xs">
                        {isEditing ? `Editing: ${initialData.title}` : "Add a new destination to your inventory"}
                    </p>
                </div>

            </div>

            {error && (
                <div className="bg-red-50 text-red-600 p-6 rounded-[24px] border border-red-100 font-bold text-sm flex items-center gap-3">
                    <span className="text-xl">⚠️</span> {error}
                </div>
            )}

            <div className="flex flex-col lg:flex-row gap-10">
                {/* Tabs Sidebar */}
                <div className="lg:w-64 flex-shrink-0">
                    <div className="sticky top-10 space-y-2 bg-white p-4 rounded-[32px] border border-gray-100 shadow-sm">
                        {tabs.map((tab) => {
                            const Icon = tab.icon;
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    type="button"
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all font-bold text-sm tracking-tight ${isActive
                                        ? "bg-[#f1aa4c] text-[#1a3642] shadow-lg shadow-[#f1aa4c]/10"
                                        : "text-gray-400 hover:bg-gray-50 hover:text-[#1a3642]"
                                        }`}
                                >
                                    <Icon size={18} />
                                    {tab.name}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Form Content */}
                <div className="flex-1 bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-gray-100">
                    {activeTab === "basic" && (
                        <div className="space-y-8 animate-slide-up">
                            <h2 className="text-2xl font-black text-[#1a3642] tracking-tight mb-8">General Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Package Title</label>
                                    <input {...register("title", { required: true })} className="input-field" placeholder="e.g. Magical Shimla & Manali" />
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">URL Slug</label>
                                    <input {...register("slug", { required: true })} className="input-field" placeholder="e.g. magical-shimla-manali" />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Tagline</label>
                                    <input {...register("tagline")} className="input-field" placeholder="e.g. Experience the beauty of Himalayas" />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Short Description</label>
                                    <textarea {...register("shortDescription", { required: true })} className="input-field min-h-[100px]" placeholder="Brief overview for cards..." />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Long Description</label>
                                    <textarea {...register("longDescription", { required: true })} className="input-field min-h-[200px]" placeholder="Detailed itinerary description..." />
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-3xl mt-4">
                                <input type="checkbox" {...register("isPublished")} className="w-6 h-6 rounded-lg accent-[#1a3642]" />
                                <div>
                                    <span className="block font-black text-[#1a3642] text-sm">Publish this package</span>
                                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Visibility on the public website</span>
                                </div>
                            </div>

                            {/* Collections selector */}
                            {availableCollections.length > 0 && (
                                <div className="space-y-3 pt-4">
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Collections</label>
                                    <div className="flex flex-wrap gap-2">
                                        {availableCollections.map(col => {
                                            const current: string[] = watch("collections") || [];
                                            const isSelected = current.includes(col.slug);
                                            return (
                                                <button
                                                    key={col._id}
                                                    type="button"
                                                    onClick={() => {
                                                        const cur: string[] = watch("collections") || [];
                                                        setValue("collections", isSelected
                                                            ? cur.filter((s: string) => s !== col.slug)
                                                            : [...cur, col.slug]
                                                        );
                                                    }}
                                                    className={`px-4 py-2 rounded-full font-black text-xs transition-all ${isSelected
                                                        ? "bg-[#1a3642] text-white shadow-sm"
                                                        : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                                                        }`}
                                                >
                                                    {isSelected && <span className="mr-1">✓</span>}
                                                    {col.name}
                                                </button>
                                            );
                                        })}
                                    </div>
                                    <p className="text-[9px] text-gray-300 ml-1">This package will appear on the selected collection pages.</p>
                                </div>
                            )}
                        </div>

                    )}


                    {activeTab === "destination" && (
                        <div className="space-y-8 animate-slide-up">
                            <h2 className="text-2xl font-black text-[#1a3642] tracking-tight mb-8">Target Destination</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Region</label>
                                    <select {...register("region")} className="input-field">
                                        <option value="">Select Region</option>
                                        {regionsData.map(r => <option key={r.slug} value={r.name}>{r.name}</option>)}
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">State Name</label>
                                    <select {...register("destination.stateName", { required: true })} className="input-field">
                                        <option value="">Select State</option>
                                        {availableStates.map(s => <option key={s.slug} value={s.name}>{s.name}</option>)}
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">City Name</label>
                                    <select {...register("destination.cityName", { required: true })} className="input-field">
                                        <option value="">Select City</option>
                                        {availableCities.map(c => <option key={c.slug} value={c.name}>{c.name}</option>)}
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Country</label>
                                    <input {...register("destination.countryName")} className="input-field" defaultValue="India" />
                                </div>
                            </div>
                        </div>
                    )}


                    {activeTab === "pricing" && (
                        <div className="space-y-8 animate-slide-up">
                            <h2 className="text-2xl font-black text-[#1a3642] tracking-tight mb-8">Pricing & Duration</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Original Price (₹)</label>
                                    <input type="number" {...register("price.originalAmount", { required: true })} className="input-field" />
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Discounted Price (₹)</label>
                                    <input type="number" {...register("price.discountedAmount", { required: true })} className="input-field" />
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Duration Days</label>
                                    <input type="number" {...register("duration.days", { required: true })} className="input-field" />
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Duration Nights</label>
                                    <input type="number" {...register("duration.nights", { required: true })} className="input-field" />
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "media" && (
                        <div className="space-y-12 animate-slide-up">
                            <div className="flex items-center justify-between">
                                <h2 className="text-2xl font-black text-[#1a3642] tracking-tight">Media & Gallery</h2>
                            </div>

                            <div className="space-y-6">
                                <div className="p-8 border-4 border-dashed border-gray-100 rounded-[32px] bg-gray-50 flex flex-col items-center gap-4 text-center">
                                    <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#f1aa4c]">
                                        <ImageIcon size={32} />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="font-black text-[#1a3642] text-sm tracking-tight">Main Card Cover</p>
                                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Used in search results and sliders</p>
                                    </div>
                                    <input {...register("mainImageUrl", { required: true })} className="input-field max-w-lg text-center font-medium" placeholder="Paste main image URL here..." />
                                </div>
                            </div>

                            <div className="space-y-10 border-t border-gray-100 pt-10">
                                <div>
                                    <h3 className="text-xl font-black text-[#1a3642] tracking-tight italic mb-2">Package Collage Images</h3>
                                    <p className="text-gray-400 font-bold text-[10px] uppercase tracking-widest mb-8">Supply 7 images to populate the premium collage layout</p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                                            <div key={i} className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">
                                                    Position {i + 1} {i === 0 ? "(Large Left)" : i === 1 ? "(Top Center)" : i === 2 ? "(Far Right)" : ""}
                                                </label>
                                                <input
                                                    {...register(`galleryImages.${i}`)}
                                                    className="input-field py-3 text-xs font-medium"
                                                    placeholder={`URL for position ${i + 1}...`}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <CollagePreview images={watch("galleryImages") || []} />
                            </div>
                        </div>
                    )}


                    {/* Simplified Itinerary and Inclusion for brevity, will expand if needed */}
                    {activeTab === "itinerary" && (
                        <div className="space-y-8 animate-slide-up">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-2xl font-black text-[#1a3642] tracking-tight">Daily Itinerary</h2>
                                <button type="button" onClick={() => appendDay({ day: itineraryFields.length + 1, title: "", events: [] })} className="flex items-center gap-2 text-[#f1aa4c] font-black text-xs uppercase tracking-widest hover:bg-[#f1aa4c]/10 px-4 py-2 rounded-xl transition-all">
                                    <Plus size={16} /> Add Day
                                </button>
                            </div>

                            <div className="space-y-6">
                                {itineraryFields.map((field, index) => (
                                    <div key={field.id} className="p-8 rounded-[32px] bg-gray-50 border border-gray-100 relative group">
                                        <button type="button" onClick={() => removeDay(index)} className="absolute top-6 right-6 text-red-400 hover:text-red-500 transition-all opacity-0 group-hover:opacity-100">
                                            <Trash2 size={18} />
                                        </button>
                                        <div className="flex items-center gap-4 mb-6">
                                            <span className="w-10 h-10 rounded-xl bg-[#1a3642] text-white flex items-center justify-center font-black text-sm">
                                                {index + 1}
                                            </span>
                                            <div className="flex-1 space-y-4">
                                                <input {...register(`itinerary.${index}.title` as const)} className="bg-transparent border-b-2 border-gray-200 focus:border-[#f1aa4c] outline-none font-bold text-[#1a3642] w-full py-1 text-lg mb-2" placeholder="Day Subtitle (e.g. Arrival & Local Sightseeing)" />
                                                <div className="space-y-1">
                                                    <label className="text-[9px] font-black uppercase tracking-widest text-gray-400">Day Overview</label>
                                                    <textarea
                                                        {...register(`itinerary.${index}.dayDescription` as const)}
                                                        className="w-full bg-white border border-gray-100 rounded-xl p-4 text-sm font-medium text-[#1a3642] outline-none focus:border-[#f1aa4c]/30 focus:bg-white transition-all min-h-[80px]"
                                                        placeholder="Provide a brief summary for this day..."
                                                    />
                                                </div>
                                                <DayEvents control={control} dayIndex={index} register={register} />
                                            </div>

                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === "inclusion" && (
                        <div className="space-y-12 animate-slide-up">
                            <h2 className="text-2xl font-black text-[#1a3642] tracking-tight">What's Included</h2>

                            <AccommodationFields control={control} register={register} />

                            <TransferFields control={control} register={register} />

                            <PackageIncludesFields control={control} register={register} availableIcons={availableIcons} />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-gray-100 pt-10">
                                <div className="space-y-4">
                                    <label className="text-base font-black text-[#1a3642] tracking-tight italic">Tour Inclusions (List)</label>
                                    <textarea
                                        {...register("tourInclusionsList")}
                                        className="input-field min-h-[150px] text-sm font-medium"
                                        placeholder="Comma separated list (e.g. Breakfast, Lunch, 5 Star Hotels...)"
                                        onChange={(e) => {
                                            const val = e.target.value.split(',').map(s => s.trim()).filter(s => s !== "");
                                            setValue("tourInclusionsList", val);
                                        }}
                                        defaultValue={initialData?.tourInclusionsList?.join(", ") || ""}
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-base font-black text-[#1a3642] tracking-tight italic">Tour Exclusions (List)</label>
                                    <textarea
                                        {...register("tourExclusionsList")}
                                        className="input-field min-h-[150px] text-sm font-medium"
                                        placeholder="Comma separated list (e.g. Airfare, Entry Fees, Tips...)"
                                        onChange={(e) => {
                                            const val = e.target.value.split(',').map(s => s.trim()).filter(s => s !== "");
                                            setValue("tourExclusionsList", val);
                                        }}
                                        defaultValue={initialData?.tourExclusionsList?.join(", ") || ""}
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>


            {/* Sticky Bottom Bar */}
            <div className="sticky bottom-6 left-0 right-0 z-40 mt-10">
                <div className="bg-[#1a3642] p-6 rounded-[32px] shadow-2xl shadow-[#1a3642]/40 flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10 backdrop-blur-md bg-opacity-95">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#f1aa4c]">
                            <CheckCircle2 size={24} />
                        </div>
                        <div>
                            <p className="text-white font-black text-sm tracking-tight">Ready to publish?</p>
                            <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Ensure all details are accurate</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <button
                            type="button"
                            onClick={() => router.back()}
                            className="flex-1 md:flex-none px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest text-white/60 hover:text-white hover:bg-white/5 transition-all"
                        >
                            Discard Changes
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex-1 md:flex-none bg-[#f1aa4c] text-[#1a3642] px-10 py-4 rounded-2xl font-black text-xs tracking-widest uppercase shadow-xl shadow-[#f1aa4c]/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 group disabled:opacity-70"
                        >
                            <Save size={18} className="transition-transform group-hover:rotate-12" />
                            {loading ? "Processing..." : (isEditing ? "Update Package" : "Create Package")}
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}
