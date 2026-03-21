"use client";

import { useEffect, useState } from "react";
import {
    Package as PackageIcon,
    Plus,
    Search,
    Filter,
    Edit,
    Trash2,
    ExternalLink,
    ChevronLeft,
    ChevronRight,
    Eye
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Package {
    _id: string;
    title: string;
    slug: string;
    price: {
        discountedAmount: number;
    };
    destination: {
        cityName: string;
    };
    mainImageUrl: string;
    isPublished: boolean;
    createdAt: string;
}

export default function PackagesListPage() {
    const [packages, setPackages] = useState<Package[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetchPackages();
    }, []);

    const fetchPackages = async () => {
        try {
            const response = await fetch("/api/admin/packages");
            if (response.ok) {
                const data = await response.json();
                setPackages(data);
            }
        } catch (error) {
            console.error("Error fetching packages:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string, title: string) => {
        if (confirm(`Are you sure you want to delete "${title}"?`)) {
            try {
                const response = await fetch(`/api/admin/packages/${id}`, {
                    method: "DELETE",
                });
                if (response.ok) {
                    setPackages(packages.filter(pkg => pkg._id !== id));
                }
            } catch (error) {
                console.error("Error deleting package:", error);
            }
        }
    };

    const filteredPackages = packages.filter(pkg =>
        pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pkg.destination.cityName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-8 animate-fade-in">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-black text-[#1a3642] tracking-tighter">Package Inventory</h1>
                    <p className="text-gray-400 font-bold mt-2 uppercase tracking-widest text-xs">Manage your travel products</p>
                </div>
                <Link
                    href="/admin/packages/new"
                    className="bg-[#1a3642] text-white px-8 py-4 rounded-2xl font-black text-sm tracking-widest uppercase shadow-xl shadow-[#1a3642]/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 group"
                >
                    <Plus size={20} />
                    <span>Create New</span>
                </Link>
            </header>

            {/* Filters Bar */}
            <div className="bg-white p-4 rounded-[32px] shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative group">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#f1aa4c] transition-colors" size={20} />
                    <input
                        type="text"
                        placeholder="Search packages by title or city..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-gray-50 border-2 border-transparent focus:border-[#f1aa4c] rounded-[24px] pl-14 pr-6 py-4 outline-none transition-all font-bold text-[#1a3642]"
                    />
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-[40px] shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-gray-50">
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Package</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Location</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Price</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Status</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {loading ? (
                                Array.from({ length: 5 }).map((_, i) => (
                                    <tr key={i} className="animate-pulse">
                                        <td className="px-8 py-6"><div className="h-12 bg-gray-50 rounded-2xl w-48"></div></td>
                                        <td className="px-8 py-6"><div className="h-4 bg-gray-50 rounded w-24"></div></td>
                                        <td className="px-8 py-6"><div className="h-4 bg-gray-50 rounded w-16"></div></td>
                                        <td className="px-8 py-6"><div className="h-6 bg-gray-50 rounded-full w-20"></div></td>
                                        <td className="px-8 py-6"><div className="h-10 bg-gray-50 rounded-xl w-32 ml-auto"></div></td>
                                    </tr>
                                ))
                            ) : filteredPackages.map((pkg) => (
                                <tr key={pkg._id} className="hover:bg-gray-50/50 transition-colors group">
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 h-16 rounded-2xl overflow-hidden relative shadow-sm">
                                                <Image src={pkg.mainImageUrl} alt={pkg.title} fill className="object-cover" />
                                            </div>
                                            <div>
                                                <p className="font-black text-[#1a3642] tracking-tight">{pkg.title}</p>
                                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-0.5">Slug: {pkg.slug}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-2 text-gray-500 font-bold text-xs uppercase tracking-wider">
                                            <PackageIcon size={14} className="text-[#f1aa4c]" />
                                            {pkg.destination.cityName}
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 font-black text-[#1a3642]">
                                        ₹{pkg.price.discountedAmount.toLocaleString()}
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${pkg.isPublished ? "bg-green-50 text-green-600" : "bg-gray-100 text-gray-400"
                                            }`}>
                                            {pkg.isPublished ? "Published" : "Draft"}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <Link
                                                href={`/packages/${pkg.slug}`}
                                                target="_blank"
                                                className="p-3 text-gray-300 hover:text-[#1a3642] hover:bg-white rounded-xl transition-all shadow-sm shadow-transparent hover:shadow-gray-200/50"
                                            >
                                                <ExternalLink size={18} />
                                            </Link>
                                            <Link
                                                href={`/admin/packages/${pkg._id}/edit`}
                                                className="p-3 text-gray-300 hover:text-[#f1aa4c] hover:bg-white rounded-xl transition-all shadow-sm shadow-transparent hover:shadow-[#f1aa4c]/10"
                                            >
                                                <Edit size={18} />
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(pkg._id, pkg.title)}
                                                className="p-3 text-gray-300 hover:text-red-500 hover:bg-white rounded-xl transition-all shadow-sm shadow-transparent hover:shadow-red-100"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {!loading && filteredPackages.length === 0 && (
                    <div className="py-20 text-center flex flex-col items-center gap-4">
                        <PackageIcon size={48} className="text-gray-100" />
                        <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">No packages found Matching your search</p>
                    </div>
                )}
            </div>


        </div>
    );
}
