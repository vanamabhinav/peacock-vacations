export default function VisaTypes() {
    const visaTypes = [
        {
            title: "Tourist e-Visa",
            description: "Ideal for travelers visiting India for recreation, sightseeing, or meeting friends and relatives.",
            validity: "30 Days (Non-extendable), 1 Year, or 5 Years.",
            details: [
                "Allows Multiple Entry for 1 or 5-year visa.",
                "Max stay of 90-180 days depending on nationality.",
                "Non-convertible to other visa types.",
            ]
        },
        {
            title: "Business e-Visa",
            description: "Designed for individuals visiting India for technical meetings, business negotiations, or setting up ventures.",
            validity: "Up to 1 year from the date of grant.",
            details: [
                "Multiple Entry allowed.",
                "Registration with FRRO required if stay exceeds 180 days.",
            ]
        },
        {
            title: "Medical e-Visa",
            description: "For patients seeking medical treatment in specialized hospitals/wellness centers in India.",
            validity: "Up to 60 days from the date of first entry.",
            details: [
                "Triple Entry allowed.",
                "Can be combined with Medical Attendant e-Visa.",
            ]
        }
    ];

    return (
        <section className="mb-12">
            <h2 className="bg-[#fedec0] text-[#1a3642] text-xl font-black px-6 py-4 rounded-t-[20px] italic">Types of Indian Visas</h2>
            <div className="bg-white border border-gray-200 rounded-b-[20px] p-8 md:p-10 shadow-sm space-y-10">
                {visaTypes.map((type, index) => (
                    <div key={index} className="space-y-4">
                        <h3 className="text-xl font-black text-[#1a3642] flex items-center gap-3">
                            <span className="w-1.5 h-6 bg-[#f1aa4c] rounded-full"></span>
                            {type.title}
                        </h3>
                        <p className="text-[#345b63] font-bold text-base leading-relaxed">
                            {type.description}
                        </p>
                        <div className="bg-[#fdfbf9] p-5 rounded-xl border border-[#fedec0]/30">
                            <p className="text-[#1a3642] font-black mb-3">Validity: {type.validity}</p>
                            <ul className="space-y-2">
                                {type.details.map((detail, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <span className="text-[#3ed0b3] mt-1">•</span>
                                        <span className="text-[#345b63] font-bold text-sm">{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}

                <button className="bg-[#1a3642] text-white px-8 py-4 rounded-[40px] font-black text-base hover:bg-[#2a4d5c] transition-all shadow-lg">
                    Check your countries
                </button>
            </div>
        </section>
    );
}
