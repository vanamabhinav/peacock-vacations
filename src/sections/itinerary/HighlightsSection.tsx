import Image from "next/image";
import { IPackage } from "@/models/Package";

const highlightsData = [
    {
        title: "Experience India's Rich Culture",
        description: "Immerse in authentic places.",
        icon: "/icons/Component 106.svg",
        id: "h-1"
    },
    {
        title: "100% Happy Travelers",
        description: "We ensure every journey creates a smile.",
        icon: "/icons/Smiley Face.svg",
        id: "h-2"
    },
    {
        title: "24x7 Personal Support",
        description: "Get real-time help from our team.",
        icon: "/icons/24 Hours.svg",
        id: "h-3"
    },
    {
        title: "Trusted & Secure Journeys",
        description: "Safe stays and smooth travels.",
        icon: "/icons/Verified.svg",
        id: "h-4"
    }
];

export const HighlightsSection = ({ highlights }: { highlights?: IPackage['highlights'] }) => {
    // We prioritize the specific design items requested by the user
    const items = highlightsData;

    return (
        <section className="flex flex-col w-full items-start gap-6 mt-6 overflow-hidden">
            <h2 className="text-xl md:text-2xl font-black text-[#1a3642] px-1">
                Why Choose Peacock Vacation ?
            </h2>

            {/* Container with horizontal scroll on mobile, grid on desktop */}
            <div className="flex overflow-x-auto no-scrollbar gap-4 pb-4 px-1 w-full md:grid md:grid-cols-2 lg:gap-6 md:pb-0 md:overflow-visible">
                {items.map((highlight) => (
                    <article
                        key={highlight.id}
                        className="flex-shrink-0 w-[280px] md:w-full flex items-center gap-4 md:gap-6 p-5 md:p-6 bg-white rounded-[24px] border border-gray-100 shadow-sm transition-all hover:shadow-md h-full"
                    >
                        <div className="flex-shrink-0 w-12 md:w-14 h-12 md:h-14 flex items-center justify-center">
                            <Image
                                src={highlight.icon}
                                alt={highlight.title}
                                width={60}
                                height={60}
                                className="w-full h-full object-contain"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <h3 className="text-sm md:text-lg font-black text-[#1a3642] leading-tight md:leading-snug">
                                {highlight.title}
                            </h3>
                            <p className="text-gray-400 text-xs md:text-sm font-bold opacity-80 leading-relaxed">
                                {highlight.description}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};
