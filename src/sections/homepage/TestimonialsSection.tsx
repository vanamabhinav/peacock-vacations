import TestimonailCard from "@/components/card/TestimonailCard";
import TravelPackageSlider from "@/components/slider/TravelPackageSlider";
import { TestimonialSectionData } from "@/types";

function TestimonialsSection({
  heading,
  subheading,
  testimonials,
}: TestimonialSectionData) {
  return (
    <div className="flex justify-center bg-white p-4 py-16 font-albertsans">
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
