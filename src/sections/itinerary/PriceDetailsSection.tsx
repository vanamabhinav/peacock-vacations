import Image from "next/image";
import { itineraryData } from "../../lib/data/cms/itinerarydata";

export const PriceDetailsSection = () => {
    return (
        <section className="bg-white border border-gray-200 rounded-[21px] overflow-hidden shadow-sm mt-6">
            <div className="p-6">
                <div className="flex justify-between font-bold items-center mb-6">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-4 text-2xl text-[#1a3642]">
                            <h1>{itineraryData.departureCity[0]}</h1>
                            <span className="text-gray-400 font-normal">→</span>
                            <h1>{itineraryData.destination.cityName}</h1>
                        </div>
                        <p className="text-[#345b63] text-sm font-medium">{itineraryData.duration.startDate} → {itineraryData.duration.endDate}</p>
                    </div>
                    <button className="border border-[#1a3642] text-[#345b63] font-bold px-6 py-2.5 rounded-xl hover:bg-gray-50 transition text-sm">
                        View Flight Options
                    </button>
                </div>

                <div className="space-y-8 pt-6 border-t border-gray-100">
                    {itineraryData.suggestedFlights.map((flight, index) => (
                        <div key={index} className="flex items-center justify-between gap-8">
                            {/* Airline & Time */}
                            <div className="flex items-center gap-4 min-w-[150px]">
                                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center p-2 relative">
                                    <Image src={flight.logo} alt={flight.airline} fill className="object-contain p-2" />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-[10px] text-gray-400 font-bold">{flight.date}</p>
                                    <p className="text-2xl font-bold text-[#1a3642]">{flight.departureTime}</p>
                                    <p className="text-sm font-bold text-[#1a3642]">{flight.from}</p>
                                </div>
                            </div>

                            {/* Duration & Stops */}
                            <div className="flex-1 flex flex-col items-center">
                                <div className="w-full flex items-center gap-2">
                                    <span className="text-gray-400">✈</span>
                                    <div className="flex-1 border-t-2 border-dashed border-gray-300 relative">
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3">
                                            <p className="text-xs font-bold text-[#1a3642] whitespace-nowrap">{flight.duration}</p>
                                        </div>
                                    </div>
                                    <span className="text-gray-400 scale-x-[-1]">✈</span>
                                </div>
                                <p className="text-[10px] font-bold text-[#1a3642] mt-4">{flight.stops} Stop</p>
                            </div>

                            {/* Arrival */}
                            <div className="flex flex-col text-right min-w-[100px]">
                                <p className="text-[10px] text-gray-400 font-bold">{flight.date}</p>
                                <p className="text-2xl font-bold text-[#1a3642]">{flight.arrivalTime}</p>
                                <p className="text-sm font-bold text-[#1a3642]">{flight.to}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Note Banner */}
            <div className="bg-[#bc283a] p-4">
                <p className="text-white text-sm font-medium">
                    Note: This section is for informational purposes only. We don&apos;t book or manage flights.
                </p>
            </div>
        </section>
    );
};
