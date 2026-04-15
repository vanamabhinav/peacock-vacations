"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type CurrencyType = "INR" | "USD" | "EUR" | "GBP" | "AUD" | "CAD";

interface CurrencyContextType {
    selectedCurrency: CurrencyType;
    setCurrency: (currency: CurrencyType) => void;
    formatPrice: (priceInInr: number) => string;
}

// Hardcoded exchange rates relative to INR (e.g., 1 INR = X units of currency)
// Note: These should be updated periodically or fetched from an API in a production environment.
const exchangeRates: Record<CurrencyType, number> = {
    INR: 1,
    USD: 0.012, // e.g. 1 USD = 83 INR
    EUR: 0.011,
    GBP: 0.0095,
    AUD: 0.018,
    CAD: 0.016,
};

const currencyLocales: Record<CurrencyType, string> = {
    INR: "en-IN",
    USD: "en-US",
    EUR: "de-DE",
    GBP: "en-GB",
    AUD: "en-AU",
    CAD: "en-CA",
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
    const [selectedCurrency, setSelectedCurrency] = useState<CurrencyType>("INR");
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        // Try to load from localStorage on mount
        const saved = localStorage.getItem("peacock_currency") as CurrencyType;
        if (saved && exchangeRates[saved]) {
            setSelectedCurrency(saved);
        }
    }, []);

    const setCurrency = (currency: CurrencyType) => {
        setSelectedCurrency(currency);
        localStorage.setItem("peacock_currency", currency);
    };

    const formatPrice = (priceInInr: number) => {
        const rate = exchangeRates[selectedCurrency];
        const converted = priceInInr * rate;

        // Use to LocaleString or Intl.NumberFormat to appropriately format currency
        // For SSR hydration consistency, if not mounted, we fallback to INR formatting without throwing hydration errors.
        const currencyToUse = isMounted ? selectedCurrency : "INR";
        const amountToUse = isMounted ? converted : priceInInr;

        return new Intl.NumberFormat(currencyLocales[currencyToUse], {
            style: "currency",
            currency: currencyToUse,
            maximumFractionDigits: 0, // Usually travel prices don't show cents unless required
        }).format(amountToUse);
    };

    return (
        <CurrencyContext.Provider value={{ selectedCurrency, setCurrency, formatPrice }}>
            {children}
        </CurrencyContext.Provider>
    );
}

export function useCurrency() {
    const context = useContext(CurrencyContext);
    if (context === undefined) {
        throw new Error("useCurrency must be used within a CurrencyProvider");
    }
    return context;
}
