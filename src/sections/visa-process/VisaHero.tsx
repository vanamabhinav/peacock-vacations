import Image from "next/image";

export default function VisaHero() {
    return (
        <section className="relative w-full h-[250px] md:h-[350px] overflow-hidden">
            <Image
                src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2070&auto=format&fit=crop"
                alt="Visa Process to India"
                fill
                className="object-cover"
                priority
            />
        </section>
    );
}
