"use client";

import { useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    updateProfile,
} from "firebase/auth";
import { auth } from "@/lib/firebase";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function SignupPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(userCredential.user, { displayName: name });
            router.push("/");
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        setLoading(true);
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            router.push("/");
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#fafbfc] flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-[32px] shadow-xl overflow-hidden border border-gray-100 p-8 md:p-12">
                <div className="text-center mb-10">
                    <div className="flex flex-col items-center mb-4">
                        <span className="font-black text-2xl uppercase tracking-[0.3em] text-[#f1aa4c]">
                            Peacock
                        </span>
                        <span className="font-black text-[10px] uppercase tracking-[0.6em] -mt-1 opacity-80 text-[#1a3642]">
                            Vacations
                        </span>
                    </div>
                    <h1 className="text-3xl font-black text-[#1a3642] tracking-tighter">Create Account</h1>
                    <p className="text-gray-400 font-bold text-sm mt-2">Start your journey with us today</p>
                </div>

                {error && (
                    <div className="bg-red-50 text-red-500 p-4 rounded-xl text-xs font-bold mb-6 border border-red-100 flex items-center gap-2">
                        <span>⚠️</span> {error}
                    </div>
                )}

                <form onSubmit={handleSignup} className="space-y-4">
                    <div>
                        <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 ml-1">Full Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-gray-50 border border-transparent focus:border-[#f1aa4c] focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all font-bold text-[#1a3642]"
                            placeholder="John Doe"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 ml-1">Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-gray-50 border border-transparent focus:border-[#f1aa4c] focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all font-bold text-[#1a3642]"
                            placeholder="name@example.com"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 ml-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-gray-50 border border-transparent focus:border-[#f1aa4c] focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all font-bold text-[#1a3642]"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#1a3642] text-white py-4 rounded-2xl font-black text-sm tracking-widest uppercase shadow-lg shadow-[#1a3642]/20 hover:scale-[1.02] active:scale-95 transition-all mt-4 disabled:opacity-70"
                    >
                        {loading ? "Creating account..." : "Create Account"}
                    </button>
                </form>

                <div className="relative my-10 text-center">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-100"></div>
                    </div>
                    <span className="relative px-4 bg-white text-[10px] font-black text-gray-300 uppercase tracking-widest">
                        or signup with
                    </span>
                </div>

                <button
                    onClick={handleGoogleLogin}
                    disabled={loading}
                    className="w-full bg-white border border-gray-200 text-[#1a3642] py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-3 hover:bg-gray-50 active:scale-95 transition-all"
                >
                    <Image src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" width={18} height={18} />
                    Google Account
                </button>

                <p className="text-center mt-10 text-gray-500 font-bold text-sm">
                    Already have an account?{" "}
                    <Link href="/login" className="text-[#f1aa4c] hover:underline">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
}
