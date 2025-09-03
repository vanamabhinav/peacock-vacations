import TestimonailCard from "@/components/card/TestimonailCard";
import TravelPackageSlider from "@/components/slider/TravelPackageSlider";
import { TestimonialSectionData } from "@/types";
import { twMerge } from "tailwind-merge";

function TestimonialsSection({
  heading,
  subheading,
  testimonials,
  className,
}: TestimonialSectionData & { className?: string }) {
  return (
    <div
      className={twMerge(
        "flex justify-center p-4 py-16 font-albertsans",
        className
      )}
    >
      <TravelPackageSlider heading={heading} subheading={subheading}>
        {testimonials.map((testimonial, idx) => (
          <div key={idx} className="min-w-max">
            <TestimonailCard testimonial={testimonial} />
          </div>
        ))}
      </TravelPackageSlider>
    </div>
  );
}

export default TestimonialsSection;
