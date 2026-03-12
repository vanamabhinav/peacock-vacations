export default function VisaWhyImportant() {
    const points = [
        "Simplify your application process",
        "Avoid common errors that lead to rejection",
        "Real-time status tracking and support",
        "Expert assistance for document verification",
        "Seamless experience for individual & group travel",
    ];

    return (
        <section className="bg-[#fff3e7] rounded-[30px] p-8 md:p-12 mb-10">
            <h2 className="text-xl font-black text-[#1a3642] mb-8">why a visa is important ?</h2>
            <ul className="grid gap-5">
                {points.map((point, index) => (
                    <li key={index} className="flex items-start gap-4">
                        <span className="text-[#f1aa4c] text-xl mt-1">✔</span>
                        <span className="text-[#345b63] text-lg font-bold">{point}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}
