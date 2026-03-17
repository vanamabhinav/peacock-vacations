import Link from "next/link";
import PackageCard from "@/components/card/PackageCard";

export default function BlogPackagesSection() {
    const packages = [
        {
            heading: "Sikkim Adventure Rush",
            subheading: "Adventure & Mountains",
            location: "Northeast India",
            region: "Northeast India",
            discountedPrice: 38590,
            originalPrice: 48590,
            image: "https://images.unsplash.com/photo-1589136142558-18c0c143af6c?q=80&w=2070&auto=format&fit=crop",
            days: 6,
            nights: 5,
            currency: "INR",
            inclusions: ["Luxury Hotel", "Transport", "Meals", "Experiences"],
            url: "#"
        },
        {
            heading: "Andaman Island Explorer",
            subheading: "Island Adventure",
            location: "South India",
            region: "South India",
            discountedPrice: 38590,
            originalPrice: 48590,
            image: "https://images.unsplash.com/photo-1589909202802-8f4abbce7502?q=80&w=2070&auto=format&fit=crop",
            days: 6,
            nights: 5,
            currency: "INR",
            inclusions: ["Luxury Hotel", "Transport", "Meals", "Experiences"],
            url: "#"
        }
    ];

    return (
        <section className="mb-24">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
                <div className="max-w-2xl">
                    <h2 className="text-4xl md:text-5xl font-black text-[#1a3642] mb-4 tracking-tight leading-none">Packages from Blog</h2>
                    <p className="text-[#345b63] font-bold text-lg md:text-xl opacity-70">Handpicked travel experiences across India's most iconic routes</p>
                </div>
                <Link href="/india/c" className="text-[#f1aa4c] font-black text-sm uppercase tracking-widest flex items-center gap-2 hover:underline">
                    View All Packages <span>→</span>
                </Link>
            </div>

            <div className="flex flex-col gap-10">
                {packages.map((pkg, i) => (
                    <PackageCard key={i} {...pkg} />
                ))}
            </div>

            <div className="mt-12 text-center md:hidden">
                <button className="bg-[#1a3642] text-white px-10 py-5 rounded-[24px] font-black text-sm tracking-widest shadow-xl shadow-blue-900/20 active:scale-95 transition-all">
                    SEE ALL STORIES
                </button>
            </div>
        </section>
    );
}
