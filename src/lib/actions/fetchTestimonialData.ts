"use server";

import dbConnect from "@/lib/mongodb";
import Testimonial from "@/models/Testimonial";
import { TestimonialSectionData } from "@/types";

export async function fetchTestimonialData(): Promise<TestimonialSectionData> {
  await dbConnect();

  try {
    const testimonials = await Testimonial.find({}).sort({ createdAt: -1 });

    return {
      heading: "Reviews from Travellers who visited this place",
      subheading: "Real stories from explorers who experienced India with us.",
      testimonials: JSON.parse(JSON.stringify(testimonials)),
    };
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return {
      heading: "Reviews from Travellers who visited this place",
      subheading: "Real stories from explorers who experienced India with us.",
      testimonials: [],
    };
  }
}

