export default function VisaFullChecklist() {
    const items = [
        "Check visa requirements for your nationality.",
        "Ensure passport has at least 6 months validity.",
        "Upload a recent photograph according to guidelines.",
        "Payment of e-Visa fee (Credit/Debit card).",
        "Check status for eVisa application (after 3 days).",
        "Carry printed copy of Electronic Travel Authorization (ETA).",
        "Confirmed Air tickets for onward and return journeys.",
        "Valid international yellow fever vaccination card (if applicable).",
        "Hotel bookings or proof of accommodation.",
        "Sufficient funds for expenses during the stay in India.",
        "Proof of business/medical documents (if applicable).",
        "Last six months bank statement or tax assessment documents.",
    ];

    return (
        <section className="mb-12">
            <h2 className="bg-[#fedec0] text-[#1a3642] text-xl font-black px-6 py-4 rounded-t-[20px] italic flex justify-between items-center">
                <span>Full Checklist</span>
                <span className="text-xs font-bold bg-[#1a3642] text-white px-3 py-1 rounded-full not-italic tracking-widest uppercase">Traveler</span>
            </h2>
            <div className="bg-white border border-gray-200 rounded-b-[20px] p-8 md:p-10 shadow-sm">
                <p className="text-[#345b63] font-bold text-sm mb-8 leading-relaxed">
                    Make sure you have all the documents ready. Below is the checklist to ensure a hassle-free journey.
                </p>
                <div className="space-y-4">
                    {items.map((item, index) => (
                        <div key={index} className="flex items-start gap-4 group">
                            <div className="mt-1 w-5 h-5 border-2 border-[#f1aa4c] rounded flex items-center justify-center flex-shrink-0 group-hover:bg-[#f1aa4c] transition-colors">
                                <span className="text-[#f1aa4c] group-hover:text-white text-xs">✔</span>
                            </div>
                            <span className="text-[#345b63] font-bold text-[15px] group-hover:text-[#1a3642] transition-colors">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
