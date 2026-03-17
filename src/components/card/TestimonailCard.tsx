import Image from "next/image";
import Rating from "../ui/Rating";
import TestimonialBentoGrid from "./TestimonialBentoGrid";
import { TestimonialCardData } from "@/types";

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: TestimonialCardData;
}) {
  return (
    <div
      className="flex flex-col justify-start items-start gap-6 bg-[#fffbf2] p-8 border border-orange-100/50 rounded-[40px] w-full max-w-[450px] shadow-sm hover:shadow-xl transition-all duration-500 font-albertsans group"
    >
      <ProfileCard testimonial={testimonial} />

      {testimonial.images && testimonial.images.length > 0 && (
        <div className="w-full pt-6 border-t border-orange-200/30 mt-2">
          <div className="flex items-center justify-between mb-4">
            <span className="font-black text-[#345b63] text-[10px] uppercase tracking-[0.2em]">
              Shared by {testimonial.name.split(" ")[0]}
            </span>
            <span className="text-[10px] font-black text-[#f1aa4c] uppercase tracking-widest cursor-pointer hover:underline">View All</span>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm">
            <TestimonialBentoGrid images={testimonial.images} />
          </div>
        </div>
      )}
    </div>
  );
}

function ProfileCard({ testimonial }: { testimonial: TestimonialCardData }) {
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex items-start gap-4">
        <ProfileIcon src={testimonial.profileImage} />
        <div className="flex flex-col justify-center">
          <p className="font-black text-[#1a3642] text-xl leading-none mb-1">
            {testimonial.name}
            {testimonial.occupation && testimonial.occupation.length > 0 ? `, ${testimonial.occupation}` : ""}
          </p>
          <p className="font-bold text-[#345b63] text-sm opacity-60 tracking-tight">{testimonial.location}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex flex-col gap-2">
          <h3 className="font-black text-[#1a3642] text-2xl leading-tight tracking-tight">{testimonial.title}</h3>
          <div className="relative">
            <p className="text-[#345b63] font-bold text-base leading-relaxed italic opacity-90 line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
              "{testimonial.description}"
            </p>
            <div className="mt-2">
              <button className="font-black text-[#f1aa4c] text-xs uppercase tracking-widest hover:underline flex items-center gap-1">
                Read Full Story <span>→</span>
              </button>
            </div>
          </div>
        </div>
        <Rating rating={testimonial.rating} />
      </div>
    </div>
  );
}

function ProfileIcon({ src }: { src: string }) {
  return (
    <div className="relative w-16 h-16 flex-shrink-0 group-hover:scale-105 transition-transform duration-500">
      <Image
        src={src}
        fill
        alt="Profile image"
        className="object-cover border-2 border-white rounded-full shadow-md"
      />
      <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-sm">
        <div className="bg-green-500 w-2 h-2 rounded-full border border-white" />
      </div>
    </div>
  );
}
