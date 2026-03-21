import Image from "next/image";
import { IPackage } from "@/models/Package";

export const PriceDetailsSection = ({ price, departureCity, destination, duration, suggestedFlights }: {
    price: IPackage['price'],
    departureCity: string[],
    destination: IPackage['destination'],
    duration: IPackage['duration'],
    suggestedFlights?: IPackage['suggestedFlights']
}) => {
    return (
        <section className="bg-white border border-gray-100 rounded-[24px] md:rounded-[21px] overflow-hidden shadow-sm mt-4 md:mt-6">
            <div className="p-5 md:p-6">
                <div className="flex flex-col md:flex-row justify-between font-bold items-start md:items-center gap-4 mb-6">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-3 md:gap-4 text-xl md:text-2xl text-[#1a3642]">
                            <h1>{departureCity?.[0] || "Anywhere"}</h1>
                            <span className="text-gray-400 font-normal">→</span>
                            <h1>{destination?.cityName || "Destination"}</h1>
                        </div>
                        <p className="text-[#345b63] text-xs md:text-sm font-bold opacity-70">
                            {(duration?.startDate || duration?.endDate) ? `${duration.startDate || "TBD"} → ${duration.endDate || "TBD"}` : "Travel dates flexible"}
                        </p>
                    </div>
                    <button className="w-full md:w-auto border border-[#1a3642] text-[#345b63] font-black px-6 py-3 md:py-2.5 rounded-xl hover:bg-gray-50 transition text-sm">
                        View Flight Options
                    </button>
                </div>

                <div className="space-y-6 md:space-y-8 pt-6 border-t border-gray-100">
                    {suggestedFlights && suggestedFlights.length > 0 ? suggestedFlights.map((flight, index) => (
                        <div key={index} className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 bg-gray-50/30 md:bg-transparent p-4 md:p-0 rounded-2xl md:rounded-none">
                            <div className="flex items-center justify-between w-full md:w-auto gap-4">
                                {/* Airline & Time */}
                                <div className="flex items-center gap-3 md:gap-4 min-w-[120px] md:min-w-[150px]">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white md:bg-gray-100 rounded-lg flex items-center justify-center p-2 relative shadow-sm md:shadow-none">
                                        {flight.logo && <Image src={flight.logo} alt={flight.airline} fill className="object-contain p-2" />}
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-[9px] md:text-[10px] text-gray-400 font-bold">{flight.date || ""}</p>
                                        <p className="text-xl md:text-2xl font-black text-[#1a3642] leading-tight">{flight.departureTime}</p>
                                        <p className="text-sm font-black text-[#1a3642]">{flight.from || ""}</p>
                                    </div>
                                </div>

                                {/* Arrival for mobile */}
                                <div className="flex flex-col text-right md:hidden min-w-[80px]">
                                    <p className="text-[9px] text-gray-400 font-bold">{flight.date || ""}</p>
                                    <p className="text-xl font-black text-[#1a3642] leading-tight">{flight.arrivalTime}</p>
                                    <p className="text-sm font-black text-[#1a3642]">{flight.to || ""}</p>
                                </div>
                            </div>

                            {/* Duration & Stops */}
                            <div className="w-full md:flex-1 flex flex-col items-center">
                                <div className="w-full flex items-center gap-2">
                                    <span className="text-gray-300 text-sm">✈</span>
                                    <div className="flex-1 border-t-2 border-dashed border-gray-200 relative">
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#fcfbfb] md:bg-white px-3">
                                            <p className="text-[10px] md:text-xs font-black text-[#1a3642] whitespace-nowrap">{flight.duration || "N/A"}</p>
                                        </div>
                                    </div>
                                    <span className="text-gray-300 text-sm scale-x-[-1]">✈</span>
                                </div>
                                <p className="text-[9px] md:text-[10px] font-black text-[#1a3642] mt-3 md:mt-4 opacity-60">
                                    {flight.stops === 0 ? "Non-stop" : `${flight.stops} Stop${flight.stops > 1 ? 's' : ''}`}
                                </p>
                            </div>

                            {/* Arrival for Desktop */}
                            <div className="hidden md:flex flex-col text-right min-w-[100px]">
                                <p className="text-[10px] text-gray-400 font-bold">{flight.date || ""}</p>
                                <p className="text-2xl font-black text-[#1a3642] leading-tight">{flight.arrivalTime}</p>
                                <p className="text-sm font-black text-[#1a3642]">{flight.to || ""}</p>
                            </div>
                        </div>
                    )) : (
                        <p className="text-sm text-gray-500 italic text-center py-4">No suggested flights available for this package.</p>
                    )}
                </div>
            </div>

            {/* Note Banner */}
            <div className="bg-[#bc283a] p-3 md:p-4 text-center md:text-left">
                <p className="text-white text-[11px] md:text-sm font-bold opacity-90">
                    Note: This section is for informational purposes only. We don&apos;t book or manage flights.
                </p>
            </div>
        </section>
    );
};
