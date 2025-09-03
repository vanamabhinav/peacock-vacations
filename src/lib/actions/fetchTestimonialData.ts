"use server";

import { TestimonialSectionData } from "@/types";

export async function fetchTestimonialData(): Promise<TestimonialSectionData> {
  const testimonialsSectionData: TestimonialSectionData = {
    heading: "Reviews from Travellers who visited this place",
    subheading: "Real stories from explorers who experienced India with us.",
    testimonials: [
      {
        profileImage: "https://randomuser.me/api/portraits/men/81.jpg",
        title: "Amazing Experience",
        description:
          "Had a wonderful time with Peacock Vacations. The service was exceptional and the destinations were breathtaking.",
        rating: 5,
        name: "John Smith",
        location: "New York, USA",
        images: [
          "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg", // Snowy mountains
          "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg", // Indian festival
          "https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg", // Indian palace
          "https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg", // Indian heritage architecture
          "https://images.pexels.com/photos/16166132/pexels-photo-16166132.jpeg", // Kerala backwaters
        ],
      },
      {
        profileImage: "https://randomuser.me/api/portraits/women/44.jpg",
        title: "Incredible Cultural Journey",
        description:
          "The cultural immersion was beyond my expectations. Every moment was carefully curated to showcase the real essence of India.",
        rating: 4.8,
        name: "Sarah Johnson",
        location: "London, UK",
        images: [
          "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg", // Indian market
          "https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg", // Indian palace
          "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg", // Indian festival
          "https://images.pexels.com/photos/8112558/pexels-photo-8112558.jpeg", // Varanasi ghats
        ],
      },
      {
        profileImage: "https://randomuser.me/api/portraits/men/23.jpg",
        title: "Adventure of a Lifetime",
        description:
          "From the Himalayas to the beaches of Goa, every destination was perfectly planned. The guides were knowledgeable and friendly.",
        rating: 4.9,
        name: "Mike Chen",
        occupation: "Photographer",
        location: "Toronto, Canada",
        images: [
          "https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg", // Trekking in Himalayas
          "https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg", // Indian palace
          "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg", // Snowy mountains
          "https://images.pexels.com/photos/16166132/pexels-photo-16166132.jpeg", // Kerala backwaters
        ],
      },
      {
        profileImage: "https://randomuser.me/api/portraits/women/67.jpg",
        title: "Luxury Meets Authenticity",
        description:
          "Perfect balance of luxury accommodation and authentic local experiences. The palace stays were absolutely magical.",
        rating: 5,
        name: "Emma Rodriguez",
        location: "Madrid, Spain",
        images: [
          "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg", // Indian market
          "https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg", // Indian palace
          "https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg", // Indian heritage architecture
          "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg", // Indian market
        ],
      },
    ],
  };
  return new Promise((resolve) => resolve(testimonialsSectionData));
}
