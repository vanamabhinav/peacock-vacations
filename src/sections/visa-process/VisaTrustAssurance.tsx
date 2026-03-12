export default function VisaTrustAssurance() {
    const points = [
        "Official Visa Assistance through government channels",
        "Secure, encrypted payments",
        "Verified travel partners (airlines, hotels, local services)",
        "100% transparency, no hidden fees",
        "24/7 expert support for travelers",
        "Trusted by thousands of international visitors",
    ];

    return (
        <section className="mb-12">
            <h2 className="bg-[#fedec0] text-[#1a3642] text-xl font-black px-6 py-4 rounded-t-[20px] italic">Trust & Assurance – Peacock Vacations</h2>
            <div className="bg-white border border-gray-200 rounded-b-[20px] p-8 md:p-10 shadow-sm">
                <div className="grid gap-6">
                    {points.map((point, index) => (
                        <div key={index} className="flex items-center gap-5 group">
                            <div className="w-10 h-10 bg-[#fff3e7] rounded-full flex items-center justify-center text-xl group-hover:bg-[#f1aa4c] transition-colors">
                                🏮
                            </div>
                            <span className="text-[#1a3642] font-black text-lg">{point}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
