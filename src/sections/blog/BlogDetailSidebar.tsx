import Image from "next/image";
import { BlogPost } from "@/lib/data/cms/blogData";

interface BlogDetailSidebarProps {
    post: BlogPost;
}

export default function BlogDetailSidebar({ post }: BlogDetailSidebarProps) {
    return (
        <aside className="lg:col-span-4 self-start sticky top-24 space-y-8">
            {/* Experience India Banner */}
            <div className="relative h-[450px] rounded-[40px] overflow-hidden group shadow-xl">
                <Image
                    src="https://images.unsplash.com/photo-1524492717734-e07d522693a7?q=80&w=2070&auto=format&fit=crop"
                    alt="Experience India"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col items-center justify-center p-8 text-center text-white">
                    <div className="mb-6">
                        <div className="font-black text-2xl uppercase tracking-widest text-[#f1aa4c]">Peacock</div>
                        <div className="font-black text-xs uppercase tracking-[0.4em]">Vacations</div>
                    </div>
                    <h3 className="text-3xl font-black mb-10 leading-tight">
                        Experience India, Beyond the Ordinary
                    </h3>
                    <div className="flex flex-col w-full gap-3">
                        <button className="bg-[#1a3642] text-white px-8 py-3.5 rounded-full font-black text-sm flex items-center justify-center gap-2 hover:bg-[#2a4d5c] transition-all transform hover:scale-105 border border-white/20">
                            View All Packages <span>➜</span>
                        </button>
                        <button className="bg-[#f1aa4c] text-black px-8 py-3.5 rounded-full font-black text-sm flex items-center justify-center gap-2 hover:bg-[#ffb75e] transition-all transform hover:scale-105">
                            Request a Callback <span>➜</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Packages for Your Blog */}
            <div className="bg-white rounded-[40px] p-8 shadow-sm border border-gray-100">
                <h3 className="text-2xl font-black text-[#1a3642] mb-8 tracking-tight leading-none px-2">
                    Packages for Your Blog
                </h3>
                <div className="space-y-6">
                    {[
                        { title: "Sikkim Adventure Rush", days: "6 Days", price: "₹38,590/-", img: "https://images.unsplash.com/photo-1589136142558-18c0c143af6c?q=80&w=2070&auto=format&fit=crop" },
                        { title: "Kerala Backwater Escape", days: "5 Days", price: "₹15,190/-", img: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=2070&auto=format&fit=crop" },
                        { title: "Rishikesh Spiritual Retreat", days: "7 Days", price: "₹63,999/-", img: "https://images.unsplash.com/photo-1544735745-b89b57c51fe2?q=80&w=2070&auto=format&fit=crop" }
                    ].map((pkg, i) => (
                        <div key={i} className="flex gap-4 group cursor-pointer hover:bg-gray-50 p-2 rounded-2xl transition-all">
                            <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 shadow-sm">
                                <Image src={pkg.img} alt={pkg.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="flex flex-col justify-center flex-1">
                                <h4 className="text-base font-black text-[#1a3642] mb-1 leading-tight group-hover:text-[#f1aa4c] transition-colors">{pkg.title}</h4>
                                <span className="text-[#345b63] text-xs font-bold mb-2">{pkg.days}</span>
                                <div className="text-lg font-black text-[#1a3642]">
                                    {pkg.price} <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider ml-1">Per Person</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </aside>
    );
}
