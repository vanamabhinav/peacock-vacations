import Image from "next/image";

export default function BlogHero() {
    return (
        <section className="relative w-full h-[200px] md:h-[450px] overflow-hidden flex items-center justify-center">
            <Image
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop"
                alt="Travel Blog"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent" />
            <div className="relative text-center text-white z-10 px-4">
                <h1 className="text-4xl md:text-8xl font-black mb-1 md:mb-2 tracking-tight drop-shadow-2xl uppercase">
                    Travel Blog
                </h1>
                <p className="text-lg md:text-3xl font-bold italic opacity-95 tracking-wide drop-shadow-lg font-serif">
                    of Real Stories
                </p>
            </div>
        </section>
    );
}
