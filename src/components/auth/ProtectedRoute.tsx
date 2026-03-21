"use client";

import { useAuth } from "@/context/AuthContext";
import { UserRole } from "@/models/User";
import { useRouter } from "next/navigation";
import { useEffect, ReactNode } from "react";

interface ProtectedRouteProps {
    children: ReactNode;
    allowedRoles?: UserRole[];
}

export default function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push("/login");
        } else if (!loading && user && allowedRoles && !allowedRoles.includes(user.role)) {
            router.push("/"); // Redirect to home if unauthorized
        }
    }, [user, loading, allowedRoles, router]);

    if (loading || !user || (allowedRoles && !allowedRoles.includes(user.role))) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#fafbfc]">
                <div className="flex flex-col items-center">
                    <div className="w-12 h-12 border-4 border-[#f1aa4c] border-t-transparent rounded-full animate-spin mb-4"></div>
                    <p className="text-[#1a3642] font-black uppercase tracking-widest text-xs">Verifying Access...</p>
                </div>
            </div>
        );
    }

    return <>{children}</>;
}
