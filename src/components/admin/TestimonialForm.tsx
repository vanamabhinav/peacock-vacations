"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Plus, X, Save, ArrowLeft, ImageIcon, User, MapPin, Briefcase, Star, Type, AlignLeft } from "lucide-react";

interface TestimonialFormProps {
    initialData?: any;
    isEdit?: boolean;
}

export default function TestimonialForm({ initialData, isEdit = false }: TestimonialFormProps) {
    const router = useRouter();
    const [saving, setSaving] = useState(false);

    const [formData, setFormData] = useState({
        name: initialData?.name || "",
        occupation: initialData?.occupation || "",
        location: initialData?.location || "",
        profileImage: initialData?.profileImage || "",
        title: initialData?.title || "",
        description: initialData?.description || "",
        rating: initialData?.rating || 5,
        images: initialData?.images || [],
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: name === "rating" ? Number(value) : value }));
    };

    const addImage = () => {
        setFormData(prev => ({ ...prev, images: [...prev.images, ""] }));
    };

    const handleImageChange = (index: number, value: string) => {
        const newImages = [...formData.images];
        newImages[index] = value;
        setFormData(prev => ({ ...prev, images: newImages }));
    };

    const removeImage = (index: number) => {
        setFormData(prev => ({
            ...prev,
            images: prev.images.filter((_: string, i: number) => i !== index)
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);

        try {
            const url = isEdit ? `/api/admin/testimonials/${initialData._id}` : "/api/admin/testimonials";
            const method = isEdit ? "PUT" : "POST";

            const res = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                router.push("/admin/testimonials");
                router.refresh();
            } else {
                const err = await res.json();
                alert(err.message || "Something went wrong");
            }
        } catch (error) {
            console.error("Error saving testimonial:", error);
            alert("Failed to save testimonial");
        } finally {
            setSaving(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="relative pb-24">
            {/* Header */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
                <div className="flex items-center gap-4">
                    <button
                        type="button"
                        onClick={() => router.back()}
                        className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5 text-gray-600" />
                    </button>
                    <div>
                        <h1 className="text-2xl font-black text-[#1a3642]">
                            {isEdit ? "Edit Testimonial" : "Create New Testimonial"}
                        </h1>
                        <p className="text-sm text-gray-500 font-medium mt-1">
                            {isEdit ? "Update existing review" : "Add a new client review"}
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Main Details */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Basic Info Card */}
                    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                        <h2 className="text-lg font-black text-[#1a3642] mb-6 flex items-center gap-2">
                            <User className="w-5 h-5 text-[#f1aa4c]" />
                            Reviewer Details
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#f1aa4c] transition-all outline-none"
                                    placeholder="e.g. John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Location</label>
                                <div className="relative">
                                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        name="location"
                                        required
                                        value={formData.location}
                                        onChange={handleChange}
                                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#f1aa4c] transition-all outline-none"
                                        placeholder="e.g. London, UK"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-bold text-gray-700 mb-2">Occupation (Optional)</label>
                            <div className="relative">
                                <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    name="occupation"
                                    value={formData.occupation}
                                    onChange={handleChange}
                                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#f1aa4c] transition-all outline-none"
                                    placeholder="e.g. Software Engineer"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Review Content Card */}
                    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                        <h2 className="text-lg font-black text-[#1a3642] mb-6 flex items-center gap-2">
                            <AlignLeft className="w-5 h-5 text-[#f1aa4c]" />
                            Review Content
                        </h2>

                        <div className="mb-6">
                            <label className="block text-sm font-bold text-gray-700 mb-2">Review Title</label>
                            <div className="relative">
                                <Type className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    name="title"
                                    required
                                    value={formData.title}
                                    onChange={handleChange}
                                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#f1aa4c] transition-all outline-none font-bold"
                                    placeholder="e.g. Amazing Experience!"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Description</label>
                            <textarea
                                name="description"
                                required
                                value={formData.description}
                                onChange={handleChange}
                                rows={6}
                                className="w-full px-4 py-4 rounded-xl bg-gray-50 border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#f1aa4c] transition-all outline-none resize-none leading-relaxed"
                                placeholder="Write the full review here..."
                            />
                        </div>
                    </div>

                    {/* Gallery Images Card */}
                    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-lg font-black text-[#1a3642] flex items-center gap-2">
                                <ImageIcon className="w-5 h-5 text-[#f1aa4c]" />
                                Trip Gallery (Optional)
                            </h2>
                            <button
                                type="button"
                                onClick={addImage}
                                className="text-sm font-bold text-[#f1aa4c] bg-orange-50 px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-orange-100 transition-colors"
                            >
                                <Plus className="w-4 h-4" /> Add Image
                            </button>
                        </div>

                        <div className="space-y-4">
                            {formData.images.map((img: string, index: number) => (
                                <div key={index} className="flex gap-4 p-4 rounded-2xl bg-gray-50 ring-1 ring-gray-200 group">
                                    <div className="flex-1">
                                        <input
                                            type="url"
                                            value={img}
                                            onChange={(e) => handleImageChange(index, e.target.value)}
                                            className="w-full px-4 py-3 rounded-xl bg-white border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#f1aa4c] transition-all outline-none"
                                            placeholder="Image URL"
                                        />
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => removeImage(index)}
                                        className="w-12 h-12 rounded-xl bg-red-50 text-red-500 flex items-center justify-center hover:bg-red-100 transition-colors opacity-0 group-hover:opacity-100 flex-shrink-0"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>
                            ))}
                            {formData.images.length === 0 && (
                                <div className="text-center py-8 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                                    <ImageIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                                    <p className="text-sm font-medium text-gray-500">No gallery images added</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Right Column - Meta */}
                <div className="space-y-6">
                    {/* Media Card */}
                    <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                        <h2 className="text-sm font-black text-gray-500 uppercase tracking-widest mb-4">Profile Image</h2>
                        <div className="space-y-4">
                            {formData.profileImage ? (
                                <div className="relative w-full aspect-square rounded-2xl overflow-hidden ring-1 ring-gray-200">
                                    <Image
                                        src={formData.profileImage}
                                        alt="Preview"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ) : (
                                <div className="w-full aspect-square rounded-2xl bg-gray-50 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-gray-400">
                                    <ImageIcon className="w-8 h-8 mb-2" />
                                    <span className="text-sm font-medium">No Image</span>
                                </div>
                            )}
                            <input
                                type="url"
                                name="profileImage"
                                required
                                value={formData.profileImage}
                                onChange={handleChange}
                                className="w-full px-4 py-3 text-sm rounded-xl bg-gray-50 border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#f1aa4c] transition-all outline-none"
                                placeholder="Profile Image URL"
                            />
                        </div>
                    </div>

                    {/* Rating Card */}
                    <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                        <h2 className="text-sm font-black text-gray-500 uppercase tracking-widest mb-4">Rating</h2>
                        <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl ring-1 ring-gray-200">
                            <Star className="w-6 h-6 text-[#f1aa4c] fill-[#f1aa4c]" />
                            <input
                                type="number"
                                name="rating"
                                min="1"
                                max="5"
                                required
                                value={formData.rating}
                                onChange={handleChange}
                                className="w-20 px-4 py-2 text-xl font-bold rounded-xl bg-white border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#f1aa4c] outline-none text-center"
                            />
                            <span className="text-gray-500 font-bold">/ 5</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Sticky Action Bar */}
            <div className="fixed bottom-0 right-0 left-0 md:left-64 bg-white border-t border-gray-200 p-4 shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.1)] z-50">
                <div className="max-w-5xl mx-auto flex justify-end gap-4">
                    <button
                        type="button"
                        onClick={() => router.back()}
                        className="px-6 py-3 rounded-xl font-bold text-gray-600 hover:bg-gray-100 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={saving}
                        className="flex justify-center items-center gap-2 bg-[#1a3642] px-8 py-3 rounded-xl font-bold text-white transition-all hover:bg-[#2a4d5e] disabled:opacity-50 active:scale-95 shadow-xl shadow-[#1a3642]/20"
                    >
                        {saving ? (
                            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                            <>
                                <Save className="w-5 h-5" />
                                {isEdit ? "Update Testimonial" : "Publish Testimonial"}
                            </>
                        )}
                    </button>
                </div>
            </div>
        </form>
    );
}
