export default function VisaImportantNotes() {
    const notes = [
        { icon: "📅", text: "Visa Validity: Tourist visa validity starts from the date of first entry to India." },
        { icon: "📄", text: "Entry Ports: e-Visa is valid for entry through 31 designated Airports and 5 designated Seaports." },
        { icon: "💳", text: "Fee Payment: Only one payment attempt per day is allowed for e-Visa applications." },
        { icon: "🖨", text: "Carry Printout: You must carry a printed copy of the approved ETA during your journey." },
        { icon: "📍", text: "Travel Limit: e-Visa is not valid for visiting protected/Restricted and Cantonment Areas." },
        { icon: "🧳", text: "No Overstay: Overstaying on an Indian Visa is a serious offense and may lead to fines or deportation." },
        { icon: "🛂", text: "Entry Restrictions: e-Visa is not available to individuals of Pakistani origin or holding Pakistani passports." },
        { icon: "🛡", text: "Travel Insurance: Recommended to have comprehensive health and travel insurance during your stay." },
        { icon: "🏥", text: "Medical Treatment: Specify treatment details if traveling on a Medical e-Visa." },
        { icon: "💰", text: "Currency Regulations: Check currency import/export limits for travelers visiting India." },
    ];

    return (
        <section className="mb-12">
            <h2 className="bg-[#fedec0] text-[#1a3642] text-xl font-black px-6 py-4 rounded-t-[20px] italic">Important Notes for Travelers</h2>
            <div className="bg-white border border-gray-200 rounded-b-[20px] p-8 md:p-10 shadow-sm">
                <div className="space-y-6">
                    {notes.map((note, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <span className="text-xl mt-1">{note.icon}</span>
                            <span className="text-[#345b63] font-bold text-[15px] leading-relaxed italic">{note.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
