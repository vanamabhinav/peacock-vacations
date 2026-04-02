"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
    LayoutDashboard,
    Package,
    Users,
    Home,
    LogOut,
    ChevronRight,
    Search,
    PlusCircle,
    Settings,
    BookOpen,
    MessageSquare,
    MapPin,
    Image
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export default function AdminSidebar() {
    const pathname = usePathname();
    const router = useRouter();

    const menuItems = [
        { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
        { name: "Package Inventory", href: "/admin/packages", icon: Package },
        { name: "Popular Packages", href: "/admin/homepage", icon: Home },
        { name: "Travel by Theme", href: "/admin/themes", icon: Home },
        { name: "Popular Destinations", href: "/admin/destinations", icon: MapPin },
        { name: "State Banners", href: "/admin/state-banners", icon: Image },
        { name: "Blog Management", href: "/admin/blogs", icon: BookOpen },
        { name: "Testimonials", href: "/admin/testimonials", icon: MessageSquare },
        { name: "Employee Access", href: "/admin/users", icon: Users },
    ];



    const handleLogout = async () => {
        // We can just clear the cookie by calling an API or client-side if it's not HttpOnly
        // But since it's HttpOnly, we need an API route.
        await fetch("/api/admin/logout", { method: "POST" });
        router.push("/admin/login");
        router.refresh();
    };

    return (
        <aside className="w-72 bg-[#1a3642] h-screen fixed left-0 top-0 text-white flex flex-col z-50 transition-all duration-300 border-r border-white/5 shadow-2xl">
            {/* Logo Area */}
            <div className="p-8 pb-12">
                <div className="flex flex-col">
                    <span className="font-black text-xl uppercase tracking-[0.3em] text-[#f1aa4c]">
                        Peacock
                    </span>
                    <span className="font-black text-[9px] uppercase tracking-[0.6em] -mt-1 opacity-60 text-white">
                        Admin Portal
                    </span>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 space-y-2 overflow-y-auto custom-scrollbar">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 px-4 mb-4">Main Menu</p>

                {menuItems.map((item) => {
                    const isActive = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href));
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 group relative",
                                isActive
                                    ? "bg-[#f1aa4c] text-[#1a3642] shadow-lg shadow-[#f1aa4c]/20"
                                    : "text-white/60 hover:text-white hover:bg-white/5"
                            )}
                        >
                            <Icon size={20} className={cn("transition-transform group-hover:scale-110", isActive ? "text-[#1a3642]" : "text-inherit")} />
                            <span className="font-bold text-sm tracking-tight">{item.name}</span>
                            {isActive && (
                                <div className="absolute right-4 w-1.5 h-1.5 rounded-full bg-[#1a3642]" />
                            )}
                        </Link>
                    );
                })}

                <div className="pt-8 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 px-4 mb-4">Quick Actions</p>
                    <Link
                        href="/admin/blogs/new"
                        className="flex items-center gap-4 px-4 py-3.5 rounded-2xl text-white/60 hover:text-[#f1aa4c] hover:bg-[#f1aa4c]/5 transition-all group border border-dashed border-white/10"
                    >
                        <PlusCircle size={20} />
                        <span className="font-bold text-sm tracking-tight">New Blog</span>
                    </Link>
                </div>
            </nav>

            {/* User Profile / Logout */}
            <div className="p-6 mt-auto border-t border-white/5">
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f1aa4c] to-[#ffc57a] flex items-center justify-center text-[#1a3642] font-black text-sm">
                        PV
                    </div>
                    <div className="flex flex-col min-w-0">
                        <span className="text-sm font-bold truncate">Super Admin</span>
                        <span className="text-[10px] text-white/40 uppercase font-black truncate tracking-widest">peacock vacation</span>
                    </div>
                </div>

                <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl text-red-400 hover:bg-red-500/10 transition-all font-bold text-sm active:scale-95 group"
                >
                    <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span>Logout Account</span>
                </button>
            </div>
        </aside>
    );
}
