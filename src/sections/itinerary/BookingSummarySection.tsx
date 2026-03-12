const event = "/images/south-india.png";
const vector8 = "/images/south-india.png";
const vector10 = "/images/south-india.png";
const vector11 = "/images/south-india.png";
const vector12 = "/images/south-india.png";
const vector13 = "/images/south-india.png";
const vector14 = "/images/south-india.png";
const vector15 = "/images/south-india.png";
const vector16 = "/images/south-india.png";
const vector17 = "/images/south-india.png";
const vector1770 = "/images/south-india.png";

interface PackageInclude {
    id: string;
    icon: string;
    label: string;
    altText: string;
    isComplex?: boolean;
    complexIcons?: { src: string; alt: string; className: string }[];
}

interface TripDetail {
    label: string;
    value: string;
}

export const BookingSummarySection = () => {
    const packageIncludes: PackageInclude[] = [
        { id: "hotel", icon: vector8, label: "Hotel", altText: "Hotel icon" },
        {
            id: "sightseeing",
            icon: "",
            label: "Sightseeing",
            altText: "Sightseeing icon",
            isComplex: true,
            complexIcons: [
                {
                    src: vector10,
                    alt: "Vector",
                    className: "absolute w-[55.57%] h-[74.49%] top-[25.51%] left-[44.43%]",
                },
                {
                    src: vector11,
                    alt: "Vector",
                    className: "absolute w-[92.69%] h-[74.49%] top-[25.51%] left-[7.31%]",
                },
            ],
        },
        { id: "meals", icon: vector12, label: "Meals", altText: "Meals icon" },
        { id: "transport", icon: vector13, label: "Transport", altText: "Transport icon" },
        { id: "experiences", icon: event, label: "Experiences", altText: "Experiences icon" },
    ];

    const tripDetails: TripDetail[] = [
        { label: "Hotel Type", value: "Luxury Hotel" },
    ];

    return (
        <aside className="flex flex-col w-[368px] items-start gap-[15px] px-0 py-[154px] absolute top-[747px] left-[848px]">
            <section className="flex flex-col w-[368px] items-start gap-2.5 px-[21px] py-[27px] relative flex-[0_0_auto] bg-white rounded-[18px] overflow-hidden border border-solid border-[#c7c7c7]">
                <div className="flex flex-col w-[323px] items-start gap-[23px] relative flex-[0_0_auto]">
                    <div className="flex flex-col items-start gap-[23px] relative self-stretch w-full flex-[0_0_auto]">
                        <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Albert_Sans-SemiBold',Helvetica] font-semibold text-black text-xl tracking-[0] leading-[normal]">
                            Your Trip Details
                        </h2>

                        <div className="flex flex-col items-start gap-[33px] relative self-stretch w-full flex-[0_0_auto]">
                            <div className="inline-flex flex-col items-start gap-[18px] relative flex-[0_0_auto]">
                                {tripDetails.map((detail, index) => (
                                    <div key={index} className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
                                        <div className="self-stretch mt-[-1.00px] [font-family:'Albert_Sans-Regular',Helvetica] font-normal text-[#6596a0] text-base tracking-[0] relative leading-[normal]">
                                            {detail.label}
                                        </div>
                                        <div className="relative w-fit [font-family:'Albert_Sans-Medium',Helvetica] font-medium text-variable-collection-p text-lg tracking-[0] leading-[normal]">
                                            {detail.value}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </aside>
    );
};
