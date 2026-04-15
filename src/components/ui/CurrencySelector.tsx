"use client";

import { useCurrency, CurrencyType } from "@/contexts/CurrencyContext";
import { useState, useRef, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { Icon } from "./Icon";

const CURRENCIES: { code: CurrencyType; label: string; symbol: string }[] = [
    { code: "INR", label: "INR (₹)", symbol: "₹" },
    { code: "USD", label: "USD ($)", symbol: "$" },
    { code: "EUR", label: "EUR (€)", symbol: "€" },
    { code: "GBP", label: "GBP (£)", symbol: "£" },
    { code: "AUD", label: "AUD (A$)", symbol: "A$" },
    { code: "CAD", label: "CAD (C$)", symbol: "C$" },
];

export default function CurrencySelector() {
    const { selectedCurrency, setCurrency } = useCurrency();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const activeCurrency = CURRENCIES.find((c) => c.code === selectedCurrency) || CURRENCIES[0];

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1 hover:bg-white/10 px-2 py-1.5 rounded-md text-white transition-colors"
                aria-expanded={isOpen}
                aria-haspopup="true"
            >
                <span className="font-semibold text-sm">{activeCurrency.code}</span>
                <Icon name="chevron" className={twMerge("w-3 h-3 text-white transition-transform", isOpen && "rotate-180")} />
            </button>

            {isOpen && (
                <div className="right-0 z-50 absolute mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {CURRENCIES.map((currency) => (
                            <button
                                key={currency.code}
                                onClick={() => {
                                    setCurrency(currency.code);
                                    setIsOpen(false);
                                }}
                                className={twMerge(
                                    "block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 transition-colors",
                                    selectedCurrency === currency.code ? "bg-gray-50 font-bold text-bigstone" : "text-gray-700 font-medium"
                                )}
                                role="menuitem"
                            >
                                {currency.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
