"use client";
import Image from "next/image";

export default function BlogCTA() {
    return (
        <>
            {/* Existing CTA (Desktop and Mobile) - This is the original content */}
            <section className="relative h-[400px] md:h-[350px] rounded-[30px] md:rounded-[50px] overflow-hidden mb-20 group shadow-2xl">
                <Image
                    src="https://images.unsplash.com/photo-1548013146-72479768bbfd?q=80&w=2070&auto=format&fit=crop"
                    alt="Experience India"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-8 text-center text-white">
                    <h3 className="text-3xl md:text-5xl font-black mb-10 leading-tight drop-shadow-xl tracking-tight">
                        Experience India, Beyond the Ordinary
                    </h3>

                    <button className="bg-[#f1aa4c] text-[#1a3642] px-10 py-4 rounded-full font-black text-sm flex items-center gap-3 hover:bg-white transition-all transform hover:scale-105 shadow-xl">
                        View Packages <span className="text-xl leading-none">➜</span>
                    </button>
                </div>
            </section>

            {/* Mobile Bottom Banner */}
            <section className="md:hidden mt-8 mb-20 bg-white border border-gray-100 rounded-[32px] overflow-hidden shadow-xl shadow-gray-100 flex flex-col items-center text-center p-8 gap-6 relative">
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#fceec7] flex items-center justify-center">
                        <span className="text-sm">🦚</span>
                    </div>
                    <span className="text-[10px] font-black text-[#1a3642]/40 uppercase tracking-[0.2em]">Peacock Vacations</span>
                </div>
                <h3 className="text-2xl font-black text-[#1a3642] leading-tight">
                    Beyond The Ordinary, <br />
                    <span className="text-[#f1aa4c]">Seize Every Moment</span>
                </h3>
                <div className="flex flex-col w-full gap-3 mt-4">
                    <button className="w-full bg-[#1a3642] text-white py-4 rounded-2xl font-black text-sm tracking-widest uppercase shadow-lg shadow-[#1a3642]/20">
                        Explore Destinations
                    </button>
                    <button className="w-full bg-[#f1aa4c] text-[#1a3642] py-4 rounded-2xl font-black text-sm tracking-widest uppercase shadow-lg shadow-[#f1aa4c]/20">
                        Request a Callback
                    </button>
                </div>
            </section>

            {/* Floating Action Buttons (Mobile) */}
            <div className="md:hidden fixed bottom-6 right-5 flex flex-col gap-4 z-50">
                <a href="https://wa.me/916305309803" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white text-3xl shadow-xl hover:scale-110 active:scale-90 transition-all">
                    <p className="text-2xl">💬</p>
                </a>
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-14 h-14 bg-[#eef1f6] rounded-full flex items-center justify-center text-[#1a3642] text-2xl shadow-xl hover:scale-110 active:scale-90 transition-all">
                    ↑
                </button>
            </div>
        </>
    );
}
