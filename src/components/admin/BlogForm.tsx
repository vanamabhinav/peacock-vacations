"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
    Plus,
    X,
    Save,
    ArrowLeft,
    Image as ImageIcon,
    Type,
    AlignLeft,
    User,
    Clock,
    Tag,
    Layout,
    Search,
    Package as PackageIcon,
    ChevronUp,
    ChevronDown,
    CheckCircle2
} from "lucide-react";

interface BlogSection {
    subheading: string;
    text: string[];
    imageUrl: string;
}

interface Package {
    _id: string;
    title: string;
    slug: string;
    mainImageUrl: string;
}

interface BlogFormProps {
    initialData?: any;
    isEdit?: boolean;
}

export default function BlogForm({ initialData, isEdit = false }: BlogFormProps) {
    const router = useRouter();
    const [saving, setSaving] = useState(false);
    const [allPackages, setAllPackages] = useState<Package[]>([]);
    const [showSelector, setShowSelector] = useState<{ show: boolean, type: 'for' | 'from' }>({ show: false, type: 'for' });
    const [searchQuery, setSearchQuery] = useState("");

    const [formData, setFormData] = useState({
        title: initialData?.title || "",
        slug: initialData?.slug || "",
        excerpt: initialData?.excerpt || "",
        author: initialData?.author || "Peacock Vacations",
        authorRole: initialData?.authorRole || "Travel Expert",
        readTime: initialData?.readTime || "5 min read",
        imageUrl: initialData?.imageUrl || "",
        category: initialData?.category || "Travel Guides",
        tags: initialData?.tags || [],
        content: initialData?.content || [""],
        sections: initialData?.sections || [],
        packagesForBlog: initialData?.packagesForBlog || [],
        packagesFromBlog: initialData?.packagesFromBlog || [],
        isPublished: initialData?.isPublished ?? true
    });

    useEffect(() => {
        const fetchPackages = async () => {
            try {
                const res = await fetch("/api/admin/packages");
                if (res.ok) {
                    const data = await res.json();
                    setAllPackages(data);
                }
            } catch (error) {
                console.error("Error fetching packages:", error);
            }
        };
        fetchPackages();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSectionChange = (index: number, field: string, value: any) => {
        const newSections = [...formData.sections];
        newSections[index] = { ...newSections[index], [field]: value };
        setFormData(prev => ({ ...prev, sections: newSections }));
    };

    const addSection = () => {
        setFormData(prev => ({
            ...prev,
            sections: [...prev.sections, { subheading: "", text: [""], imageUrl: "" }]
        }));
    };

    const removeSection = (index: number) => {
        setFormData(prev => ({
            ...prev,
            sections: prev.sections.filter((_: BlogSection, i: number) => i !== index)
        }));
    };

    const handleContentChange = (index: number, value: string) => {
        const newContent = [...formData.content];
        newContent[index] = value;
        setFormData(prev => ({ ...prev, content: newContent }));
    };

    const addContentLine = () => {
        setFormData(prev => ({ ...prev, content: [...prev.content, ""] }));
    };

    const removeContentLine = (index: number) => {
        setFormData(prev => ({ ...prev, content: prev.content.filter((_: string, i: number) => i !== index) }));
    };

    const togglePackage = (packageId: string, type: 'for' | 'from') => {
        const field = type === 'for' ? 'packagesForBlog' : 'packagesFromBlog';
        const currentList = formData[field] as string[];

        const newList = currentList.includes(packageId)
            ? currentList.filter((id: string) => id !== packageId)
            : [...currentList, packageId];

        setFormData(prev => ({ ...prev, [field]: newList }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);

        try {
            const url = isEdit ? `/api/admin/blogs/${initialData._id}` : "/api/admin/blogs";
            const method = isEdit ? "PUT" : "POST";

            const res = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                router.push("/admin/blogs");
                router.refresh();
            } else {
                const err = await res.json();
                alert(err.message || "Something went wrong");
            }
        } catch (error) {
            console.error("Error saving blog:", error);
            alert("Failed to save blog");
        } finally {
            setSaving(false);
        }
    };

    const movePackage = (index: number, type: 'for' | 'from', direction: 'up' | 'down') => {
        const field = type === 'for' ? 'packagesForBlog' : 'packagesFromBlog';
        const newList = [...formData[field]];

        if (direction === 'up' && index > 0) {
            [newList[index - 1], newList[index]] = [newList[index], newList[index - 1]];
        } else if (direction === 'down' && index < newList.length - 1) {
            [newList[index + 1], newList[index]] = [newList[index], newList[index + 1]];
        }

        setFormData(prev => ({ ...prev, [field]: newList }));
    };

    const getSelectedPackages = (type: 'for' | 'from') => {
        const ids = type === 'for' ? formData.packagesForBlog : formData.packagesFromBlog;
        return (ids as string[]).map((id: string) => allPackages.find(p => p._id === id)).filter(Boolean) as Package[];
    };

    const selectablePackages = allPackages.filter(p =>
        (p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.slug.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <form onSubmit={handleSubmit} className="space-y-12 animate-fade-in pb-32">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 sticky top-0 bg-[#fafbfc]/80 backdrop-blur-md z-30 py-4 -mx-4 px-4">
                <div className="flex items-center gap-4">
                    <button
                        type="button"
                        onClick={() => router.back()}
                        className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#1a3642] transition-all"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <div>
                        <h1 className="text-3xl font-black text-[#1a3642] tracking-tighter">
                            {isEdit ? "Edit Story" : "Craft New Story"}
                        </h1>
                        <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">
                            {isEdit ? `Editing: ${formData.title}` : "Create a masterpiece for your readers"}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-gray-100 shadow-sm">
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Status:</span>
                        <select
                            name="isPublished"
                            value={formData.isPublished.toString()}
                            onChange={(e) => setFormData(prev => ({ ...prev, isPublished: e.target.value === "true" }))}
                            className="text-[10px] font-black uppercase tracking-widest text-[#1a3642] bg-transparent outline-none cursor-pointer"
                        >
                            <option value="true">Published</option>
                            <option value="false">Draft</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        disabled={saving}
                        className="bg-[#1a3642] text-white px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-blue-900/20"
                    >
                        <Save size={18} /> {saving ? "Saving..." : "Save Story"}
                    </button>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Main Content Form */}
                <div className="lg:col-span-8 space-y-12">
                    {/* Basic Info */}
                    <section className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 space-y-8">
                        <div className="flex items-center gap-4 mb-2">
                            <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500">
                                <Type size={20} />
                            </div>
                            <h2 className="text-2xl font-black text-[#1a3642] tracking-tight">Core Information</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Story Title</label>
                                <input
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    placeholder="Enter a catchy title..."
                                    className="w-full bg-gray-50 border-2 border-transparent focus:border-[#f1aa4c]/30 p-4 rounded-2xl outline-none font-bold text-sm transition-all"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Slug (URL Path)</label>
                                <input
                                    name="slug"
                                    value={formData.slug}
                                    onChange={handleChange}
                                    placeholder="e.g. hidden-gems-of-sikkim"
                                    className="w-full bg-gray-50 border-2 border-transparent focus:border-[#f1aa4c]/30 p-4 rounded-2xl outline-none font-bold text-sm transition-all"
                                    required
                                />
                            </div>
                            <div className="md:col-span-2 space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Excerpt (Brief Summary)</label>
                                <textarea
                                    name="excerpt"
                                    value={formData.excerpt}
                                    onChange={handleChange}
                                    placeholder="Add a short description for the search results..."
                                    className="w-full bg-gray-50 border-2 border-transparent focus:border-[#f1aa4c]/30 p-4 rounded-2xl outline-none font-medium text-sm transition-all min-h-[100px] resize-none"
                                    required
                                />
                            </div>
                        </div>
                    </section>

                    {/* Blog Content Sections */}
                    <section className="space-y-8">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-500">
                                    <AlignLeft size={20} />
                                </div>
                                <h2 className="text-2xl font-black text-[#1a3642] tracking-tight">Story Content</h2>
                            </div>
                            <button
                                type="button"
                                onClick={addSection}
                                className="text-[10px] font-black uppercase tracking-widest text-[#f1aa4c] hover:bg-[#f1aa4c]/10 px-4 py-2 rounded-xl transition-all flex items-center gap-2"
                            >
                                <Plus size={14} /> Add New Section
                            </button>
                        </div>

                        <div className="space-y-12">
                            {formData.sections.map((section: any, idx: number) => (
                                <div key={idx} className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 relative group">
                                    <button
                                        type="button"
                                        onClick={() => removeSection(idx)}
                                        className="absolute top-8 right-8 text-gray-300 hover:text-red-500 transition-all opacity-0 group-hover:opacity-100"
                                    >
                                        <X size={20} />
                                    </button>

                                    <div className="space-y-8">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Section {idx + 1} Subheading</label>
                                            <input
                                                value={section.subheading}
                                                onChange={(e) => handleSectionChange(idx, 'subheading', e.target.value)}
                                                placeholder="Section title..."
                                                className="w-full bg-gray-50 border-2 border-transparent focus:border-[#f1aa4c]/30 p-4 rounded-2xl outline-none font-black text-sm transition-all"
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="space-y-4">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Section Text (Paragraphs)</label>
                                                {section.text.map((p: string, pIdx: number) => (
                                                    <div key={pIdx} className="flex gap-2">
                                                        <textarea
                                                            value={p}
                                                            onChange={(e) => {
                                                                const newText = [...section.text];
                                                                newText[pIdx] = e.target.value;
                                                                handleSectionChange(idx, 'text', newText);
                                                            }}
                                                            className="flex-1 bg-gray-50 border-2 border-transparent focus:border-[#f1aa4c]/30 p-4 rounded-2xl outline-none font-medium text-sm transition-all min-h-[120px] resize-none"
                                                            placeholder={`Paragraph ${pIdx + 1}...`}
                                                        />
                                                        <button
                                                            type="button"
                                                            onClick={() => {
                                                                const newText = section.text.filter((_: any, i: number) => i !== pIdx);
                                                                handleSectionChange(idx, 'text', newText);
                                                            }}
                                                            className="self-start mt-4 text-gray-300 hover:text-red-500"
                                                        >
                                                            <X size={16} />
                                                        </button>
                                                    </div>
                                                ))}
                                                <button
                                                    type="button"
                                                    onClick={() => handleSectionChange(idx, 'text', [...section.text, ""])}
                                                    className="text-[10px] font-black text-[#f1aa4c] flex items-center gap-1 uppercase tracking-widest mt-2"
                                                >
                                                    <Plus size={14} /> Add Paragraph
                                                </button>
                                            </div>
                                            <div className="space-y-4">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Section Image URL</label>
                                                <div className="relative group/img">
                                                    <div className="aspect-video rounded-[32px] bg-gray-50 border-2 border-dashed border-gray-100 overflow-hidden relative flex items-center justify-center">
                                                        {section.imageUrl ? (
                                                            <Image src={section.imageUrl} alt="Section" fill className="object-cover" />
                                                        ) : (
                                                            <ImageIcon size={40} className="text-gray-200" />
                                                        )}
                                                    </div>
                                                    <input
                                                        value={section.imageUrl}
                                                        onChange={(e) => handleSectionChange(idx, 'imageUrl', e.target.value)}
                                                        placeholder="Paste image URL here..."
                                                        className="mt-4 w-full bg-white border-2 border-gray-100 p-4 rounded-2xl outline-none font-medium text-xs focus:border-[#f1aa4c]/40 transition-all shadow-sm"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Sidebar Details & Meta */}
                <div className="lg:col-span-4 space-y-10">
                    {/* Authorship & Meta */}
                    <section className="bg-[#1a3642] p-10 rounded-[40px] shadow-sm text-white space-y-8">
                        <div className="flex items-center gap-4 mb-2">
                            <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-[#f1aa4c]">
                                <User size={20} />
                            </div>
                            <h2 className="text-xl font-black tracking-tight">Post Metadata</h2>
                        </div>

                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-2">Author Name</label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={16} />
                                    <input
                                        name="author"
                                        value={formData.author}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border-2 border-transparent focus:border-[#f1aa4c]/40 p-4 pl-12 rounded-2xl outline-none font-bold text-sm transition-all text-white"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-2">Author Role</label>
                                <input
                                    name="authorRole"
                                    value={formData.authorRole}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border-2 border-transparent focus:border-[#f1aa4c]/40 p-4 rounded-2xl outline-none font-bold text-sm transition-all text-white"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-2">Read Time</label>
                                    <div className="relative">
                                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={16} />
                                        <input
                                            name="readTime"
                                            value={formData.readTime}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border-2 border-transparent focus:border-[#f1aa4c]/40 p-4 pl-12 rounded-2xl outline-none font-bold text-sm transition-all text-white"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-2">Category</label>
                                    <div className="relative">
                                        <Tag className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={16} />
                                        <input
                                            name="category"
                                            value={formData.category}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border-2 border-transparent focus:border-[#f1aa4c]/40 p-4 pl-12 rounded-2xl outline-none font-bold text-sm transition-all text-white"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-2">Main Cover Image</label>
                                <div className="relative h-40 rounded-[32px] bg-white/5 border-2 border-dashed border-white/10 overflow-hidden mb-4 flex items-center justify-center group/cover">
                                    {formData.imageUrl ? (
                                        <Image src={formData.imageUrl} alt="Cover" fill className="object-cover group-hover/cover:scale-105 transition-transform" />
                                    ) : (
                                        <ImageIcon size={32} className="text-white/10" />
                                    )}
                                </div>
                                <input
                                    name="imageUrl"
                                    value={formData.imageUrl}
                                    onChange={handleChange}
                                    placeholder="Cover image URL..."
                                    className="w-full bg-white/5 border-2 border-transparent focus:border-[#f1aa4c]/40 p-4 rounded-2xl outline-none font-bold text-xs transition-all text-white"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Blog Packages Sections (The User's specific request) */}
                    <div className="space-y-8">
                        <PackageSelectorBlock
                            title="Packages for Your Blog"
                            type="for"
                            selectedPackages={getSelectedPackages('for')}
                            onAdd={() => setShowSelector({ show: true, type: 'for' })}
                            onRemove={(id: string) => togglePackage(id, 'for')}
                            onMove={(idx: number, dir: 'up' | 'down') => movePackage(idx, 'for', dir)}
                        />

                        <PackageSelectorBlock
                            title="Packages from Blog"
                            type="from"
                            selectedPackages={getSelectedPackages('from')}
                            onAdd={() => setShowSelector({ show: true, type: 'from' })}
                            onRemove={(id: string) => togglePackage(id, 'from')}
                            onMove={(idx: number, dir: 'up' | 'down') => movePackage(idx, 'from', dir)}
                        />
                    </div>
                </div>
            </div>

            {/* Package Selector Modal */}
            {showSelector.show && (
                <>
                    <div className="fixed inset-0 z-[99] bg-[#1a3642]/60 backdrop-blur-sm shadow-inner" onClick={() => setShowSelector({ ...showSelector, show: false })} />
                    <div className="fixed inset-0 z-[100] overflow-y-auto">
                    <div className="flex min-h-screen items-start justify-center py-8 px-6" onClick={() => setShowSelector({ ...showSelector, show: false })}>
                    <div className="bg-white w-full max-w-2xl rounded-[40px] shadow-2xl overflow-hidden animate-slide-up h-[70vh] flex flex-col my-auto" onClick={e => e.stopPropagation()}>
                        <div className="p-8 border-b border-gray-50 flex items-center justify-between bg-gray-50/50">
                            <div>
                                <h2 className="text-2xl font-black text-[#1a3642] tracking-tight">Link Packages</h2>
                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Linking to: {showSelector.type === 'for' ? 'Packages for Your Blog' : 'Packages from Blog'}</p>
                            </div>
                            <button onClick={() => setShowSelector({ ...showSelector, show: false })} className="text-gray-400 hover:text-[#1a3642]">
                                <X size={24} />
                            </button>
                        </div>

                        <div className="p-8 pb-4">
                            <div className="relative group">
                                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#f1aa4c] transition-colors" size={20} />
                                <input
                                    type="text"
                                    placeholder="Search by title or slug..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-gray-50 border-2 border-transparent focus:border-[#f1aa4c]/30 p-5 pl-14 rounded-3xl outline-none font-bold text-sm transition-all"
                                />
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto p-8 pt-4 space-y-4 custom-scrollbar">
                            {selectablePackages.map(pkg => {
                                const isSelected = formData[showSelector.type === 'for' ? 'packagesForBlog' : 'packagesFromBlog'].includes(pkg._id);
                                return (
                                    <button
                                        key={pkg._id}
                                        type="button"
                                        onClick={() => togglePackage(pkg._id, showSelector.type)}
                                        className={`w-full text-left flex items-center gap-6 p-4 rounded-3xl border-2 transition-all group ${isSelected
                                            ? "bg-[#f1aa4c]/5 border-[#f1aa4c]/30 shadow-sm"
                                            : "bg-white border-gray-50 hover:border-gray-100 hover:bg-gray-50"
                                            }`}
                                    >
                                        <div className="w-14 h-14 rounded-2xl overflow-hidden relative shadow-sm flex-shrink-0">
                                            <Image src={pkg.mainImageUrl} alt={pkg.title} fill className="object-cover" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-black text-[#1a3642] text-sm truncate">{pkg.title}</h3>
                                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1 uppercase">Slug: {pkg.slug}</p>
                                        </div>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isSelected ? "bg-[#f1aa4c] text-white" : "bg-gray-100 text-gray-300 group-hover:bg-[#f1aa4c]/20 group-hover:text-[#f1aa4c]"
                                            }`}>
                                            {isSelected ? <CheckCircle2 size={18} /> : <Plus size={18} />}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    </div>
                    </div>
                </>
            )}
        </form>
    );
}

function PackageSelectorBlock({ title, type, selectedPackages, onAdd, onRemove, onMove }: any) {
    return (
        <section className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-100 space-y-6">
            <div className="flex items-center justify-between px-2">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600">
                        <PackageIcon size={20} />
                    </div>
                    <h3 className="text-xl font-black text-[#1a3642] tracking-tight">{title}</h3>
                </div>
                <button
                    type="button"
                    onClick={onAdd}
                    className="p-2 rounded-xl bg-[#f1aa4c]/10 text-[#f1aa4c] hover:bg-[#f1aa4c] hover:text-white transition-all shadow-sm"
                >
                    <Plus size={20} />
                </button>
            </div>

            <div className="space-y-3">
                {selectedPackages.length > 0 ? (
                    selectedPackages.map((pkg: any, idx: number) => (
                        <div key={pkg._id} className="flex items-center gap-4 p-4 rounded-[28px] bg-gray-50 border border-transparent hover:border-[#f1aa4c]/20 hover:bg-white transition-all group">
                            <div className="flex flex-col gap-1 items-center scale-75 opacity-20 group-hover:opacity-100 transition-opacity">
                                <button type="button" onClick={() => onMove(idx, 'up')} className="hover:text-[#f1aa4c]"><ChevronUp size={16} /></button>
                                <button type="button" onClick={() => onMove(idx, 'down')} className="hover:text-[#f1aa4c]"><ChevronDown size={16} /></button>
                            </div>
                            <div className="w-12 h-12 rounded-xl overflow-hidden relative shadow-sm flex-shrink-0">
                                <Image src={pkg.mainImageUrl} alt={pkg.title} fill className="object-cover" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="font-bold text-[#1a3642] text-xs truncate">{pkg.title}</h4>
                            </div>
                            <button
                                type="button"
                                onClick={() => onRemove(pkg._id)}
                                className="p-2 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all opacity-0 group-hover:opacity-100"
                            >
                                <X size={16} />
                            </button>
                        </div>
                    ))
                ) : (
                    <div className="py-10 text-center flex flex-col items-center gap-3 opacity-30">
                        <PackageIcon size={32} />
                        <p className="text-[10px] font-black uppercase tracking-widest italic">No packages linked</p>
                    </div>
                )}
            </div>
        </section>
    );
}

