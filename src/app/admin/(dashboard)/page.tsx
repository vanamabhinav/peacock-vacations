import dbConnect from "@/lib/mongodb";
import Package from "@/models/Package";
import User from "@/models/User";
import Blog from "@/models/Blog";
import {
    Package as PackageIcon,
    Users,
    FileText,
    ArrowUpRight,
    TrendingUp
} from "lucide-react";
import Link from "next/link";

export default async function AdminDashboardPage() {
    await dbConnect();

    const [packageCount, userCount, blogCount] = await Promise.all([
        Package.countDocuments(),
        User.countDocuments({ role: { $in: ['admin', 'super_admin'] } }),
        Blog.countDocuments()
    ]);

    const stats = [
        { name: 'Total Packages', value: packageCount, icon: PackageIcon, color: 'bg-blue-50 text-blue-600', href: '/admin/packages' },
        { name: 'Admin Staff', value: userCount, icon: Users, color: 'bg-purple-50 text-purple-600', href: '/admin/users' },
        { name: 'Blog Posts', value: blogCount, icon: FileText, color: 'bg-orange-50 text-orange-600', href: '/admin/blogs' },
    ];

    return (
        <div className="space-y-10 animate-fade-in">
            <header>
                <h1 className="text-4xl font-black text-[#1a3642] tracking-tighter">Dashboard Overview</h1>
                <p className="text-gray-400 font-bold mt-2 uppercase tracking-widest text-xs">Welcome back, Super Admin</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {stats.map((stat) => (
                    <Link key={stat.name} href={stat.href} className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 hover:shadow-xl hover:scale-[1.02] transition-all group">
                        <div className="flex items-start justify-between">
                            <div className={`p-4 rounded-2xl ${stat.color}`}>
                                <stat.icon size={24} />
                            </div>
                            <ArrowUpRight className="text-gray-200 group-hover:text-[#f1aa4c] transition-colors" size={20} />
                        </div>
                        <div className="mt-6">
                            <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">{stat.name}</p>
                            <p className="text-4xl font-black text-[#1a3642] mt-1 tracking-tighter">{stat.value}</p>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-[#1a3642] p-10 rounded-[40px] shadow-2xl text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#f1aa4c]/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                    <div className="relative">
                        <div className="flex items-center gap-3 mb-6">
                            <TrendingUp className="text-[#f1aa4c]" />
                            <span className="font-black uppercase tracking-widest text-xs opacity-60">Quick Actions</span>
                        </div>
                        <h2 className="text-3xl font-black tracking-tight mb-8">Manage your inventory</h2>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/admin/packages/new" className="bg-[#f1aa4c] text-[#1a3642] px-8 py-4 rounded-2xl font-black text-sm tracking-wide hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#f1aa4c]/20">
                                Create New Package
                            </Link>
                            <Link href="/admin/homepage" className="bg-white/10 text-white border border-white/10 px-8 py-4 rounded-2xl font-black text-sm tracking-wide hover:bg-white/20 transition-all backdrop-blur-md">
                                Edit Homepage
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}
