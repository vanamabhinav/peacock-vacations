"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@/components/ui/Icon";

export default function NavbarSearch() {
    const [query, setQuery] = useState("");
    const [expanded, setExpanded] = useState(false);
    const router = useRouter();
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleOutside = (e: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                if (!query.trim()) setExpanded(false);
            }
        };
        document.addEventListener("mousedown", handleOutside);
        return () => document.removeEventListener("mousedown", handleOutside);
    }, [query]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            router.push(`/search?q=${encodeURIComponent(query.trim())}`);
            setQuery("");
            setExpanded(false);
        }
    };

    return (
        <div
            ref={containerRef}
            className={`flex items-center rounded-full border transition-all duration-300 h-8 sm:h-9 px-2.5 ${expanded
                ? "w-56 sm:w-64 lg:w-80 bg-white/10 border-white/30"
                : "w-10 border-transparent bg-transparent hover:bg-white/10"
                }`}
        >
            <button
                type="button"
                onClick={() => {
                    setExpanded(true);
                    inputRef.current?.focus();
                }}
                className="shrink-0"
                aria-label="Open search"
            >
                <Icon name="search" className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-white/90" />
            </button>

            <form onSubmit={handleSubmit} className="flex-1 min-w-0">
                <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search destinations..."
                    onFocus={() => setExpanded(true)}
                    className={`bg-transparent text-white text-sm placeholder:text-white/50 outline-none transition-[width,padding,opacity] duration-300 ease-out ${expanded ? "w-full pl-2.5 pr-1 py-1.5 opacity-100" : "w-0 p-0 opacity-0 pointer-events-none"
                        }`}
                />
            </form>

            {/* Optional clear button */}
            {expanded && query.trim() && (
                <button
                    type="button"
                    onClick={() => setQuery("")}
                    className="text-white/60 hover:text-white text-xl leading-none px-1"
                    aria-label="Clear"
                >
                    ×
                </button>
            )}
        </div>
    );
}