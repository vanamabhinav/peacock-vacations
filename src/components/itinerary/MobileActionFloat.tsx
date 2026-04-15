"use client";

import { useState } from "react";
import Link from "next/link";
import { useCurrency } from "@/contexts/CurrencyContext";
import { Icon } from "@/components/ui/Icon";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/cn";

interface MobileActionFloatProps {
    price: number;
    currency: string;
    onAction: () => void;
    showScrollTop: boolean;
    onScrollTop: () => void;
    isModalOpen: boolean;
}

export const MobileActionFloat = ({
    price,
    onAction,
    showScrollTop,
    onScrollTop,
    isModalOpen
}: MobileActionFloatProps) => {
    const { formatPrice } = useCurrency();
    // Start minimized as a pill, as requested
    const [isPushedDown, setIsPushedDown] = useState(true);

    if (isModalOpen) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[100] md:hidden">
            {/* Unified Scroll Top Button - Always here, same for both states */}
            <button
                onClick={onScrollTop}
                className={cn(
                    "absolute right-6 transition-all active:scale-90 flex items-center justify-center bg-white border border-gray-100 w-14 h-14 rounded-full shadow-2xl",
                    isPushedDown ? "bottom-24" : "-top-20", // Position depends on whether sheet is open
                    showScrollTop ? "opacity-100 scale-100" : "opacity-0 scale-50 pointer-events-none"
                )}
            >
                <ArrowUp className="w-6 h-6 text-[#1a3642]" strokeWidth={2.5} />
            </button>

            {/* Bottom Section */}
            <div className="relative px-4 pb-8 flex flex-col items-center">
                {isPushedDown ? (
                    /* PILL STYLE - Initial State */
                    <div className="flex items-center gap-3 w-full max-w-[420px] animate-in slide-in-from-bottom-5 duration-300">
                        {/* Price Display Pill */}
                        <div
                            onClick={() => setIsPushedDown(false)}
                            className="flex flex-col items-center justify-center bg-white/90 border border-white px-5 h-14 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.08)] backdrop-blur-md cursor-pointer"
                        >
                            <div className="flex flex-col -gap-1">
                                <span className="text-[10px] font-black text-[#1a3642] opacity-60 uppercase leading-none">Price</span>
                                <span className="text-base font-black text-[#1a3642]">{formatPrice(price)}</span>
                            </div>
                        </div>

                        {/* Main Action Pill - Using requested color #ffd8ba */}
                        <button
                            onClick={onAction}
                            className="flex-1 bg-[#ffd8ba] text-[#1a3642] h-14 rounded-full font-black text-sm flex items-center justify-center gap-2 active:scale-[0.98] transition-all shadow-[0_8px_20px_rgba(255,216,186,0.3)] border border-[#1a3642]/10"
                        >
                            <Icon name="phone" className="w-4 h-4 fill-[#1a3642]" />
                            Request a Callback
                        </button>
                    </div>
                ) : (
                    /* BOTTOM SHEET STYLE - Expanded */
                    <div className="w-full relative animate-in slide-in-from-bottom-full duration-500">
                        <div className="bg-white border-t border-gray-100 px-6 pt-3 pb-6 shadow-[0_-15px_40px_rgba(0,0,0,0.1)] rounded-[40px] relative">
                            {/* Tap to minimize */}
                            <button
                                onClick={() => setIsPushedDown(true)}
                                className="w-full flex flex-col items-center pt-2 pb-4 active:opacity-50 transition-opacity"
                            >
                                <div className="w-16 h-1.5 bg-gray-100 rounded-full" />
                                <span className="text-[9px] font-black text-gray-300 uppercase mt-1 tracking-tighter">Tap to minimize</span>
                            </button>

                            <div className="flex flex-col gap-6">
                                <div className="flex justify-between items-start">
                                    <div className="flex flex-col gap-0.5">
                                        <span className="text-[11px] font-black text-[#1a3642] opacity-40 uppercase tracking-widest leading-none">Starts From</span>
                                        <span className="text-2xl font-black text-[#1a3642] leading-tight">
                                            {formatPrice(price)}
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-end gap-0.5">
                                        <Link href="/cancellation-policy" className="text-[11px] font-bold text-blue-500 underline underline-offset-2">
                                            Cancellation Policy
                                        </Link>
                                        <span className="text-[11px] font-bold text-[#1a3642] opacity-40 italic">Par Person</span>
                                    </div>
                                </div>

                                <button
                                    onClick={onAction}
                                    className="w-full bg-[#ffb948] text-[#1a3642] py-4.5 rounded-[22px] font-black text-base flex justify-center items-center gap-3 shadow-[0_12px_24px_rgba(255,185,72,0.3)] active:scale-[0.98] transition-all border border-white/20"
                                >
                                    <Icon name="phone" className="w-5 h-5 fill-[#1a3642]" />
                                    Request a Callback
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
