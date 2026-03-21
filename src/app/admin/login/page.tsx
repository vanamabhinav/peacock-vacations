"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const response = await fetch("/api/admin/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                router.push("/admin");
                router.refresh();
            } else {
                const data = await response.json();
                setError(data.message || "Login failed");
            }
        } catch (err) {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#1a3642] flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-[32px] shadow-2xl overflow-hidden border border-white/10 p-8 md:p-12 relative">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#f1aa4c]/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#f1aa4c]/10 rounded-full -ml-16 -mb-16 blur-3xl"></div>

                <div className="text-center mb-10 relative">
                    <div className="flex flex-col items-center mb-6">
                        <span className="font-black text-2xl uppercase tracking-[0.3em] text-[#f1aa4c]">
                            Peacock
                        </span>
                        <span className="font-black text-[10px] uppercase tracking-[0.6em] -mt-1 opacity-80 text-[#1a3642]">
                            Vacations
                        </span>
                    </div>
                    <h1 className="text-3xl font-black text-[#1a3642] tracking-tighter">Admin Portal</h1>
                    <p className="text-gray-400 font-bold text-sm mt-2 uppercase tracking-widest">Management Access</p>
                </div>

                {error && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-2xl text-xs font-bold mb-6 border border-red-100 flex items-center gap-3 animate-shake">
                        <span className="text-lg">⚠️</span> {error}
                    </div>
                )}

                <form onSubmit={handleLogin} className="space-y-6 relative">
                    <div className="space-y-2">
                        <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1">Username</label>
                        <div className="relative">
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full bg-gray-50 border-2 border-transparent focus:border-[#f1aa4c] focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all font-bold text-[#1a3642] placeholder-gray-300"
                                placeholder="Enter admin username"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1">Security Key</label>
                        <div className="relative">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-gray-50 border-2 border-transparent focus:border-[#f1aa4c] focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all font-bold text-[#1a3642] placeholder-gray-300"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#1a3642] text-white py-4 rounded-2xl font-black text-sm tracking-widest uppercase shadow-xl shadow-[#1a3642]/30 hover:bg-[#2a4d5c] hover:scale-[1.02] active:scale-95 transition-all mt-4 disabled:opacity-70 disabled:hover:scale-100"
                    >
                        {loading ? (
                            <div className="flex items-center justify-center gap-2">
                                <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                                <span>Authenticating...</span>
                            </div>
                        ) : (
                            "Sign In to Dashboard"
                        )}
                    </button>
                </form>

                <p className="text-center mt-10 text-gray-400 font-bold text-[10px] uppercase tracking-widest">
                    Authorized Personnel Only
                </p>
            </div>

            <style jsx>{`
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-4px); }
                    75% { transform: translateX(4px); }
                }
                .animate-shake {
                    animation: shake 0.4s ease-in-out;
                }
            `}</style>
        </div>
    );
}
