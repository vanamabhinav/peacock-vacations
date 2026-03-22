import Image from "next/image";

export default function BlogTestimonialsSection({ testimonials }: { testimonials: any[] }) {
    if (!testimonials || testimonials.length === 0) return null;

    return (
        <section className="mb-20">
            <div className="flex items-center justify-between mb-10">
                <div>
                    <h2 className="text-4xl font-black text-[#1a3642] mb-3 tracking-tight">Testimonials</h2>
                    <p className="text-[#345b63] font-bold text-lg opacity-80">Real stories from explorers who experienced India with us.</p>
                </div>
                <div className="hidden md:flex gap-3">
                    <button className="w-12 h-12 rounded-full border-2 border-gray-100 flex items-center justify-center text-gray-400 hover:border-[#f1aa4c] hover:text-[#f1aa4c] transition-all">←</button>
                    <button className="w-12 h-12 rounded-full border-2 border-gray-100 flex items-center justify-center text-gray-400 hover:border-[#f1aa4c] hover:text-[#f1aa4c] transition-all">→</button>
                </div>
            </div>

            <div className="flex gap-8 overflow-x-auto pb-10 no-scrollbar px-1">
                {testimonials.map((t, i) => (
                    <div key={i} className="min-w-[400px] bg-[#fffbf2] rounded-[40px] p-8 shadow-sm border border-orange-100/50">
                        <div className="flex gap-4 mb-6">
                            <div className="relative w-16 h-16 rounded-full overflow-hidden shadow-md bg-gray-100 flex-shrink-0">
                                {t.profileImage && <Image src={t.profileImage} alt={t.name} fill className="object-cover" />}
                            </div>
                            <div className="flex flex-col justify-center">
                                <h4 className="text-xl font-black text-[#1a3642] leading-none mb-1">{t.name}{t.occupation ? `, ${t.occupation}` : ""}</h4>
                                <span className="text-[#345b63] text-sm font-bold opacity-70">{t.location}</span>
                            </div>
                        </div>
                        <p className="text-[#345b63] font-black text-base line-clamp-3 mb-4 leading-relaxed italic">"{t.description}"</p>
                        <div className="flex gap-1 mb-6">
                            {[...Array(5)].map((_, starIndex) => (
                                <span key={starIndex} className={`text-xl ${starIndex < Math.floor(t.rating) ? 'text-[#f1aa4c]' : 'text-gray-200'}`}>★</span>
                            ))}
                            <span className="ml-2 text-sm font-black text-[#1a3642]">{t.rating.toFixed(1)}</span>
                        </div>

                        {(t.images && t.images.length > 0) && (
                            <div className="pt-6 border-t border-orange-200/30">
                                <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#345b63] mb-4">Shared By {t.name.split(" ")[0]}</h5>
                                <div className="grid grid-cols-4 gap-2 h-20">
                                    {t.images.slice(0, 4).map((img: string, imgIndex: number) => (
                                        <div key={imgIndex} className="relative rounded-xl overflow-hidden shadow-sm group cursor-pointer bg-gray-50">
                                            <Image src={img} alt="Gallery" fill className="object-cover group-hover:scale-110 transition-transform" />
                                            {imgIndex === 3 && t.images.length > 4 && (
                                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-[10px] font-black uppercase tracking-widest backdrop-blur-[2px]">
                                                    +{t.images.length - 3}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
