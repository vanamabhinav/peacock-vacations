"use client";

import { X, Phone } from "lucide-react";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { cn } from "@/lib/cn";

interface RequestCallbackModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function RequestCallbackModal({ isOpen, onClose }: RequestCallbackModalProps) {
    const [phoneNumber, setPhoneNumber] = useState<string | undefined>("");
    const [name, setName] = useState("");

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm px-0 sm:px-4 animate-in fade-in duration-300">
            {/* Click outside to close */}
            <div className="absolute inset-0" onClick={onClose} />

            <div className="relative bg-white w-full max-w-[440px] rounded-t-[32px] sm:rounded-[32px] p-6 sm:p-8 pt-4 sm:pt-8 shadow-2xl animate-in slide-in-from-bottom duration-500">
                {/* Drag Handle (Mobile only) */}
                <div className="w-12 h-1.5 bg-gray-100 rounded-full mx-auto mb-6 sm:hidden" />

                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-xl sm:text-2xl font-black text-[#1a3642] text-center flex-1">
                        Request a Callback
                    </h2>
                    <button
                        onClick={onClose}
                        className="absolute top-4 sm:top-8 right-4 sm:right-8 p-1 text-gray-400 hover:text-[#1a3642] transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-1">
                        <input
                            type="text"
                            placeholder="Full Name *"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-[#f8f9fa] border border-gray-100 rounded-xl px-4 py-3.5 text-sm font-bold text-[#1a3642] placeholder:text-gray-400 focus:outline-none focus:border-[#f1aa4c] transition-colors"
                            required
                        />
                    </div>

                    <div className="space-y-1 tel-input-wrapper">
                        <PhoneInput
                            placeholder="Enter phone number"
                            value={phoneNumber}
                            onChange={setPhoneNumber}
                            defaultCountry="IN"
                            className="request-callback-phone-input"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#f1aa4c] hover:bg-[#e09a3b] text-[#1a3642] py-4 rounded-xl font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-100 transition-all active:scale-[0.98] mt-2 cursor-pointer"
                    >
                        <Phone className="w-4 h-4 fill-[#1a3642]" />
                        Request a Callback
                    </button>

                    <p className="text-center text-[11px] font-bold text-gray-400 opacity-80 mt-4">
                        We won't spam or misuse your number.
                    </p>
                </form>

                <style jsx global>{`
          .request-callback-phone-input {
            display: flex;
            align-items: center;
            background: #f8f9fa;
            border: 1px solid #f3f4f6;
            border-radius: 12px;
            padding: 8px 16px;
          }
          .request-callback-phone-input input {
            background: transparent;
            border: none;
            width: 100%;
            padding: 8px 12px;
            font-size: 14px;
            font-weight: 700;
            color: #1a3642;
          }
          .request-callback-phone-input input:focus {
            outline: none;
          }
          .PhoneInputCountry {
             margin-right: 8px;
          }
          .PhoneInputCountrySelect {
            cursor: pointer;
          }
        `}</style>
            </div>
        </div>
    );
}
