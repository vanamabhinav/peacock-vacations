import Image from "next/image";
import { IPackage } from "@/models/Package";

export const SidebarSection = ({ data }: { data: IPackage }) => {
    const hotelType = data.inclusions?.accommodation?.[0]?.roomType || "Standard Hotel";

    return (
        <aside className="w-full flex flex-col gap-6">
            <div className="flex flex-col gap-6">
                {/* Your Trip Details */}
                <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                    <h3 className="text-lg font-black text-[#1a3642] mb-5 tracking-tight border-b border-gray-100 pb-3">Your Trip Details</h3>

                    <div className="space-y-5">
                        <div className="flex flex-col gap-0.5">
                            <p className="text-[11px] font-black text-[#1a3642]/50 uppercase tracking-widest leading-none">Hotel Type</p>
                            <p className="text-xl font-black text-[#345b63]">{hotelType}</p>
                        </div>

                        <div className="flex items-center justify-between gap-4 py-1">
                            <div className="flex flex-col gap-0.5">
                                <p className="text-[11px] font-black text-[#1a3642]/50 uppercase tracking-widest leading-none">Start At</p>
                                <p className="text-base font-black text-[#1a3642]">{data.duration?.startDate || "TBD"}</p>
                            </div>
                            <div className="flex-1 border-t-2 border-dashed border-gray-200 relative mx-4">
                                <span className="absolute left-1/2 -top-3.5 -translate-x-1/2 text-gray-400 text-xl">→</span>
                            </div>
                            <div className="flex flex-col text-right gap-0.5" >
                                <p className="text-[11px] font-black text-[#1a3642]/50 uppercase tracking-widest leading-none">Return On</p>
                                <p className="text-base font-black text-[#1a3642]">{data.duration?.endDate || "TBD"}</p>
                            </div>
                        </div>

                        {data.packageIncludes && (
                            <div>
                                <p className="text-[11px] font-black text-[#1a3642]/50 mb-3 uppercase tracking-widest">Package Includes</p>
                                <div className="flex flex-wrap gap-3">
                                    {data.packageIncludes.map((item) => (
                                        <div key={item.id} className="w-10 h-10 bg-[#f8f8f8] rounded-xl flex items-center justify-center border border-gray-100 p-2 transition-all hover:scale-110 hover:shadow-md">
                                            <Image src={item.icon || `/images/south-india.png`} alt={item.label} width={32} height={32} className="w-full h-full object-contain opacity-80" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {data.price.emiAmount && (
                            <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                                <div className="flex flex-col">
                                    <p className="text-[10px] text-green-600 font-black italic uppercase tracking-tighter">EMI Available</p>
                                    <p className="text-[10px] font-bold text-[#345b63] hover:underline cursor-pointer">check eligibility</p>
                                </div>
                                <p className="text-xl font-black text-[#1a3642]">₹{data.price.emiAmount} <span className="text-xs font-bold text-gray-400">/month</span></p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Price Summary */}
                <div className="bg-[#fef9f3] border border-[#fef2e2] rounded-2xl p-5 flex flex-col gap-4">
                    <div>
                        <p className="text-[#1a3642]/60 text-[11px] font-black uppercase tracking-widest mb-1.5">Starts From</p>
                        <div className="flex items-baseline gap-1">
                            <p className="text-3xl font-black text-[#1a3642]">₹ {data.price.discountedAmount.toLocaleString()}</p>
                            <p className="text-gray-400 text-sm font-bold">/-</p>
                        </div>
                        <div className="flex flex-col mt-1">
                            <p className="text-[9px] font-black text-[#bc283a] uppercase tracking-wider leading-none">Excludes 5% GST & TCS</p>
                            <p className="text-[11px] font-bold text-[#1a3642]/40">Per Person</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <p className="text-[10px] font-black text-[#1a3642]/50 text-center uppercase tracking-widest">Reach out to our Local Branch Office</p>
                        <a href={`tel:${data.contactPhone || "+91 90000 12345"}`} className="flex items-center justify-center gap-2 text-[#1a3642] font-black text-lg hover:scale-105 transition-all">
                            <span className="text-xl">📞</span> {data.contactPhone || "Call Us"}
                        </a>
                        <div className="flex flex-col gap-2.5 mt-1">
                            <button className="w-full bg-[#1a3642] text-white font-black py-3.5 rounded-xl hover:bg-opacity-95 transition-all shadow-lg hover:shadow-[#1a3642]/20 active:scale-95">
                                Get Trip Quotation
                            </button>
                            <button className="w-full bg-[#f1aa4c] text-white font-black py-3.5 rounded-xl hover:bg-opacity-95 transition-all shadow-lg hover:shadow-[#f1aa4c]/20 active:scale-95">
                                📞 Request a Callback
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};
