import TravelByThemeClient from "@/components/client/TravelByThemeClient";

// Sample theme data with SEO-friendly content
const themeData = [
  {
    title: "Romantic Honeymoon",
    description:
      "Romantic sunsets, private beaches, and 5-star luxury for two.",
    bgColor: "#7F9F90",
    imageUrl: "https://picsum.photos/400/600?random=1",
    href: "/themes/honeymoon",
    ctaText: "Plan Honeymoon",
  },
  {
    title: "Adventure Travel",
    description:
      "Experience thrilling adventures across India's diverse landscapes and challenging terrains.",
    bgColor: "#A97B65",
    imageUrl: "https://picsum.photos/400/600?random=2",
    href: "/themes/adventure",
    ctaText: "Book Adventure",
  },
  {
    title: "Beach Destinations",
    description:
      "Relax and unwind at India's stunning beaches with crystal clear waters.",
    bgColor: "#3D394D",
    imageUrl: "https://picsum.photos/400/600?random=3",
    href: "/themes/beach",
    ctaText: "Explore Beaches",
  },
  {
    title: "Luxury Travel",
    description:
      "Indulge in luxury and comfort with premium accommodations and personalized services.",
    bgColor: "#A28979",
    imageUrl: "https://picsum.photos/400/600?random=4",
    href: "/themes/luxury",
    ctaText: "Book Luxury",
  },
  {
    title: "Solo Travel",
    description:
      "Embark on a personal journey of discovery and self-exploration across India.",
    bgColor: "#80BEC6",
    imageUrl: "https://picsum.photos/400/600?random=5",
    href: "/themes/solo",
    ctaText: "Start Journey",
  },
  {
    title: "Spiritual Pilgrimage",
    description:
      "Connect with your spiritual side at India's sacred temples and holy sites.",
    bgColor: "#8F8F8F",
    imageUrl: "https://picsum.photos/400/600?random=6",
    href: "/themes/pilgrimage",
    ctaText: "Begin Pilgrimage",
  },
];

export default function TravelByTheme() {
  return (
    <div className="flex justify-center bg-white p-16">
      <TravelByThemeClient themeData={themeData} />
    </div>
  );
}
