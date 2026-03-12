export default function VisaEligibility() {
    return (
        <section className="mb-12">
            <h2 className="bg-[#fedec0] text-[#1a3642] text-xl font-black px-6 py-4 rounded-t-[20px] italic">Who Can Apply (Eligibility)</h2>
            <div className="bg-white border border-gray-200 rounded-b-[20px] p-8 md:p-10 shadow-sm">
                <p className="text-[#345b63] font-bold text-base leading-relaxed mb-6">
                    The e-Visa is available for citizens of over 160 countries visiting India for recreation, business, or medical purposes.
                </p>
                <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                        <span className="text-[#f1aa4c] text-xl mt-1">✔</span>
                        <span className="text-[#345b63] font-bold text-base">Your passport must have at least 6 months validity from the date of arrival in India.</span>
                    </li>
                    <li className="flex items-start gap-4">
                        <span className="text-[#f1aa4c] text-xl mt-1">✔</span>
                        <span className="text-[#345b63] font-bold text-base">Passport should have at least two blank pages for stamping by the Immigration Officer.</span>
                    </li>
                    <li className="flex items-start gap-4">
                        <span className="text-[#f1aa4c] text-xl mt-1">✔</span>
                        <span className="text-[#345b63] font-bold text-base">International Travelers must have return ticket or onward journey ticket.</span>
                    </li>
                </ul>
                <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-400 text-blue-800 text-sm font-bold">
                    Note: Diplomatic/Official Passport holders or Laissez-passer travel document holders are not eligible for e-Visa.
                </div>
            </div>
        </section>
    );
}
