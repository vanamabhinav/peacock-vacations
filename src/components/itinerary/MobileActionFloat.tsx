"use client";

import Link from "next/link";

interface MobileActionFloatProps {
    price: number;
    currency: string;
}

export const MobileActionFloat = ({ price, currency }: MobileActionFloatProps) => {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-[100] bg-white border-t border-gray-100 px-6 pt-3 pb-6 md:hidden shadow-[0_-10px_30px_rgba(0,0,0,0.08)] rounded-t-[40px]">
            <div className="flex flex-col gap-5">
                {/* Top Handle Decor */}
                <div className="w-16 h-1.5 bg-gray-100 rounded-full mx-auto mb-1" />

                <div className="flex flex-col gap-1">
                    <div className="flex justify-between items-baseline">
                        <span className="text-xs font-black text-[#1a3642] opacity-80 uppercase tracking-widest">Starts From</span>
                        <span className="text-2xl font-black text-[#1a3642]">
                            {currency === "INR" ? "₹" : "$"}{price.toLocaleString("en-IN")}/-
                        </span>
                    </div>
                    <div className="flex justify-between items-center">
                        <Link href="/cancellation-policy" className="text-[11px] font-bold text-blue-500 underline underline-offset-2">
                            Cancellation Policy
                        </Link>
                        <span className="text-[11px] font-bold text-gray-400 italic">Par Person</span>
                    </div>
                </div>

                <Link
                    href="/request-callback"
                    className="w-full bg-[#f1aa4c] text-[#1a3642] py-4 rounded-2xl font-black text-sm flex justify-center items-center gap-2 shadow-xl shadow-orange-100 active:scale-[0.98] transition-all"
                >
                    <span className="text-xl">📞</span> Request a Callback
                </Link>
            </div>
        </div>
    );
};
