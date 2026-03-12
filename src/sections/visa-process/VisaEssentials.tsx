import Image from "next/image";

export default function VisaEssentials() {
    const essentials = [
        {
            title: "Valid Passport",
            description: "Passport with at least 6 months validity from date of arrival.",
            icon: "📜"
        },
        {
            title: "Photograph",
            description: "Recent digital photograph with white background.",
            icon: "📸"
        },
        {
            title: "Completed Application Form",
            description: "Apply online and save your application ID for tracking.",
            icon: "📝"
        },
        {
            title: "Payment Receipts",
            description: "Online payment receipt of e-Visa processing fee.",
            icon: "💳"
        },
        {
            title: "Accommodation Details",
            description: "Hotel bookings or sponsorship details in India.",
            icon: "🏨"
        },
        {
            title: "Travel Itinerary & Tickets",
            description: "Confirmed return or onward journey tickets.",
            icon: "✈"
        }
    ];

    return (
        <section className="mb-12">
            <h2 className="bg-[#fedec0] text-[#1a3642] text-xl font-black px-6 py-4 rounded-t-[20px] italic">Quick Essentials</h2>
            <div className="bg-white border border-gray-200 rounded-b-[20px] p-8 md:p-10 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {essentials.map((item, index) => (
                        <div key={index} className="bg-[#fdfbf9] border border-[#fedec0]/20 p-6 rounded-2xl flex flex-col items-center text-center group hover:bg-white hover:shadow-md transition-all">
                            <div className="w-16 h-16 bg-[#fff3e7] rounded-full flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h3 className="font-black text-[#1a3642] mb-2">{item.title}</h3>
                            <p className="text-[#345b63] font-bold text-xs leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
