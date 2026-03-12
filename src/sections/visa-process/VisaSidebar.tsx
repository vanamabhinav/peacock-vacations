import Image from "next/image";

export default function VisaSidebar() {
    return (
        <aside className="sticky top-24 flex flex-col gap-6 w-full lg:w-[350px]">
            {/* Experience India Banner */}
            <div className="relative h-[450px] rounded-[30px] overflow-hidden group shadow-xl">
                <Image
                    src="https://images.unsplash.com/photo-1548013146-72479768bbfd?q=80&w=2070&auto=format&fit=crop"
                    alt="Experience India"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col items-center justify-center p-8 text-center text-white">
                    <div className="mb-6">
                        {/* Placeholder for Logo */}
                        <div className="font-black text-2xl uppercase tracking-widest text-[#f1aa4c]">Peacock</div>
                        <div className="font-black text-xs uppercase tracking-[0.4em]">Vacations</div>
                    </div>
                    <h3 className="text-3xl font-black mb-6 leading-tight">
                        Experience India, Beyond the Ordinary
                    </h3>
                    <button className="bg-[#f1aa4c] text-black px-8 py-3 rounded-full font-black text-sm flex items-center gap-2 hover:bg-[#ffb75e] transition-all transform hover:scale-105">
                        View Packages <span>➜</span>
                    </button>
                </div>
            </div>

            {/* Request a Callback Form */}
            <div className="bg-white border border-orange-200 rounded-[30px] p-8 shadow-sm">
                <h3 className="text-xl font-black text-[#1a3642] mb-6 text-center">Request a Callback</h3>
                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Full Name *"
                        className="w-full px-5 py-4 border border-gray-200 rounded-xl font-bold text-[#345b63] placeholder:text-gray-400 focus:outline-none focus:border-[#f1aa4c] transition-colors"
                        required
                    />
                    <div className="flex gap-2">
                        <div className="flex items-center gap-1 px-3 py-4 border border-gray-200 rounded-xl bg-gray-50 text-sm font-bold">
                            <span className="w-6 h-4 bg-green-800 rounded-sm"></span>
                            <span>+91</span>
                            <span className="text-[10px]">▼</span>
                        </div>
                        <input
                            type="tel"
                            placeholder="Mobile Number *"
                            className="flex-1 px-5 py-4 border border-gray-200 rounded-xl font-bold text-[#345b63] placeholder:text-gray-400 focus:outline-none focus:border-[#f1aa4c] transition-colors"
                            required
                        />
                    </div>
                    <button className="w-full bg-[#f1aa4c] text-black py-4 rounded-xl font-black text-base flex items-center justify-center gap-2 hover:bg-[#ffb75e] transition-all shadow-md">
                        <span>📞</span> Request a Callback
                    </button>
                    <p className="text-[10px] text-gray-500 text-center font-bold">
                        We won't spam or misuse your number.
                    </p>
                </form>
            </div>
        </aside>
    );
}
