"use client";

import { useEffect, useState } from "react";
import {
    Users,
    Plus,
    Trash2,
    ShieldCheck,
    Mail,
    User,
    X,
    CheckCircle2
} from "lucide-react";

interface AdminUser {
    _id: string;
    username: string;
    email: string;
    role: "admin" | "super_admin";
    displayName?: string;
    createdAt: string;
}

export default function UserManagementPage() {
    const [users, setUsers] = useState<AdminUser[]>([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [newUser, setNewUser] = useState({
        username: "",
        email: "",
        password: "",
        role: "admin",
        displayName: ""
    });
    const [modalError, setModalError] = useState("");
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        setLoading(true);
        try {
            const response = await fetch("/api/admin/users");
            if (response.ok) {
                const data = await response.json();
                setUsers(data);
            }
        } catch (error) {
            console.error("Error fetching users:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleCreateUser = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        setModalError("");
        try {
            const response = await fetch("/api/admin/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newUser),
            });

            if (response.ok) {
                setShowModal(false);
                setNewUser({ username: "", email: "", password: "", role: "admin", displayName: "" });
                fetchUsers();
            } else {
                const data = await response.json();
                setModalError(data.message || "Failed to create user");
            }
        } catch (error) {
            setModalError("Network error");
        } finally {
            setSubmitting(false);
        }
    };

    const handleDeleteUser = async (id: string, username: string) => {
        if (confirm(`Are you sure you want to remove admin access for "${username}"?`)) {
            try {
                const response = await fetch(`/api/admin/users/${id}`, {
                    method: "DELETE",
                });
                if (response.ok) {
                    setUsers(users.filter(u => u._id !== id));
                } else {
                    const data = await response.json();
                    alert(data.message || "Failed to delete user");
                }
            } catch (error) {
                console.error("Error deleting user:", error);
            }
        }
    };

    return (
        <div className="space-y-8 animate-fade-in">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-black text-[#1a3642] tracking-tighter text-wrap">Employee Management</h1>
                    <p className="text-gray-400 font-bold mt-2 uppercase tracking-widest text-xs">Manage administrative access</p>
                </div>
                <button
                    onClick={() => setShowModal(true)}
                    className="bg-[#1a3642] text-white px-8 py-4 rounded-2xl font-black text-sm tracking-widest uppercase shadow-xl shadow-[#1a3642]/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 group"
                >
                    <Plus size={20} />
                    <span>Add New Employee</span>
                </button>
            </header>

            {/* User Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {loading ? (
                    Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="bg-white p-8 rounded-[32px] border border-gray-100 animate-pulse">
                            <div className="w-16 h-16 bg-gray-50 rounded-2xl mb-6"></div>
                            <div className="h-4 bg-gray-50 rounded w-3/4 mb-2"></div>
                            <div className="h-4 bg-gray-50 rounded w-1/2"></div>
                        </div>
                    ))
                ) : users.map((user) => (
                    <div key={user._id} className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 relative group">
                        <div className="flex items-start justify-between mb-6">
                            <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-[#1a3642] shadow-inner font-black text-xl">
                                {user.username[0].toUpperCase()}
                            </div>
                            <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${user.role === 'super_admin' ? 'bg-purple-50 text-purple-600' : 'bg-blue-50 text-blue-600'
                                }`}>
                                {user.role.replace('_', ' ')}
                            </span>
                        </div>

                        <div className="space-y-1">
                            <h3 className="font-black text-[#1a3642] text-lg tracking-tight">{user.displayName || user.username}</h3>
                            <div className="flex items-center gap-2 text-gray-400 font-bold text-xs uppercase tracking-wider">
                                <User size={12} /> @{user.username}
                            </div>
                            <div className="flex items-center gap-2 text-gray-300 font-medium text-xs truncate">
                                <Mail size={12} /> {user.email}
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-between">
                            <span className="text-[10px] text-gray-300 font-bold uppercase tracking-widest">Added {new Date(user.createdAt).toLocaleDateString()}</span>
                            {user.username !== 'peacock vacation' && (
                                <button
                                    onClick={() => handleDeleteUser(user._id, user.username)}
                                    className="p-2 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                                >
                                    <Trash2 size={18} />
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Creation Modal */}
            {showModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-[#1a3642]/60 backdrop-blur-sm" onClick={() => setShowModal(false)}></div>
                    <div className="bg-white w-full max-w-lg rounded-[40px] shadow-2xl relative z-10 overflow-hidden animate-slide-up">
                        <div className="p-8 md:p-12">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-2xl font-black text-[#1a3642] tracking-tight">New Employee Account</h2>
                                <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-[#1a3642] transition-colors">
                                    <X size={24} />
                                </button>
                            </div>

                            {modalError && (
                                <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-2xl text-xs font-bold border border-red-100">
                                    {modalError}
                                </div>
                            )}

                            <form onSubmit={handleCreateUser} className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Username (Login ID)</label>
                                    <input
                                        type="text"
                                        required
                                        value={newUser.username}
                                        onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                                        className="w-full bg-gray-50 border-2 border-transparent focus:border-[#f1aa4c] rounded-2xl px-6 py-4 outline-none transition-all font-bold text-[#1a3642]"
                                        placeholder="e.g. abhinav_admin"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        value={newUser.email}
                                        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                                        className="w-full bg-gray-50 border-2 border-transparent focus:border-[#f1aa4c] rounded-2xl px-6 py-4 outline-none transition-all font-bold text-[#1a3642]"
                                        placeholder="e.g. employee@peacock.com"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Password</label>
                                    <input
                                        type="password"
                                        required
                                        value={newUser.password}
                                        onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                                        className="w-full bg-gray-50 border-2 border-transparent focus:border-[#f1aa4c] rounded-2xl px-6 py-4 outline-none transition-all font-bold text-[#1a3642]"
                                        placeholder="••••••••"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Access Level</label>
                                        <select
                                            value={newUser.role}
                                            onChange={(e) => setNewUser({ ...newUser, role: e.target.value as any })}
                                            className="w-full bg-gray-50 border-2 border-transparent focus:border-[#f1aa4c] rounded-2xl px-6 py-4 outline-none transition-all font-bold text-[#1a3642]"
                                        >
                                            <option value="admin">Admin</option>
                                            <option value="super_admin">Super Admin</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Display Name</label>
                                        <input
                                            type="text"
                                            value={newUser.displayName}
                                            onChange={(e) => setNewUser({ ...newUser, displayName: e.target.value })}
                                            className="w-full bg-gray-50 border-2 border-transparent focus:border-[#f1aa4c] rounded-2xl px-6 py-4 outline-none transition-all font-bold text-[#1a3642]"
                                            placeholder="e.g. Abhinav"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="w-full bg-[#1a3642] text-white py-5 rounded-3xl font-black text-sm tracking-widest uppercase shadow-xl shadow-[#1a3642]/30 hover:scale-[1.02] active:scale-95 transition-all mt-4 disabled:opacity-70"
                                >
                                    {submitting ? "Creating..." : "Generate Account"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}


        </div>
    );
}
