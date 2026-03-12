import Image from "next/image";
import { itineraryData } from "../../lib/data/cms/itinerarydata";

export const HighlightsSection = () => {
    return (
        <section className="flex flex-col w-full items-start gap-6 mt-6">
            <h2 className="text-2xl font-bold text-[#1a3642]">
                Why Choose Peacock Vacation ?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                {itineraryData.highlights.map((highlight) => (
                    <article
                        key={highlight.id}
                        className="flex items-center gap-6 p-6 bg-[#fdfbf9] rounded-2xl border border-gray-200 shadow-sm"
                    >
                        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                            {/* In a real app, these would be specific SVGs or Icon components */}
                            <Image
                                src="/images/south-india.png"
                                alt={highlight.title}
                                width={48}
                                height={48}
                                className="w-full h-full object-contain opacity-70"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <h3 className="text-lg font-bold text-[#1a3642]">
                                {highlight.title}
                            </h3>
                            <p className="text-gray-500 text-sm font-medium">
                                {highlight.description}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};
