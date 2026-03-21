import Image from "next/image";
import { IPackage } from "@/models/Package";

const defaultHighlights = [
    { title: "Customized Itinerary", description: "Tailored to your preferences", id: "default-1" },
    { title: "24/7 Support", description: "Expert assistance anytime", id: "default-2" },
    { title: "Secure Payments", description: "Safe and verified transactions", id: "default-3" },
    { title: "Verified Stays", description: "Quality assured accommodation", id: "default-4" }
];

export const HighlightsSection = ({ highlights }: { highlights?: IPackage['highlights'] }) => {
    const items = (highlights && highlights.length > 0) ? highlights : defaultHighlights;

    return (
        <section className="flex flex-col w-full items-start gap-6 mt-6">
            <h2 className="text-2xl font-bold text-[#1a3642]">
                Why Choose Peacock Vacation ?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {items.map((highlight, index) => (
                    <article
                        key={highlight.id || index}
                        className="flex items-center gap-4 md:gap-6 p-4 md:p-6 bg-[#fdfbf9] rounded-[24px] border border-gray-100 shadow-sm transition-all hover:shadow-md"
                    >
                        <div className="flex-shrink-0 w-10 md:w-12 h-10 md:h-12 flex items-center justify-center">
                            <Image
                                src="/images/south-india.png"
                                alt={highlight.title || "Highlight"}
                                width={48}
                                height={48}
                                className="w-full h-full object-contain opacity-70"
                            />
                        </div>

                        <div className="flex flex-col gap-0.5">
                            <h3 className="text-base md:text-lg font-black text-[#1a3642] leading-tight">
                                {highlight.title}
                            </h3>
                            <p className="text-gray-500 text-xs md:text-sm font-bold opacity-80">
                                {highlight.description}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};
