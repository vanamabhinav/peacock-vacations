import PopularDestinations from "@/sections/PopularDestinations";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Popular Travel Destinations | Peacock Vacations",
  description:
    "Discover amazing travel destinations across India. From snow-capped mountains to pristine beaches, find your perfect vacation spot.",
};

export default function Home() {
  return (
    <div>
      <PopularDestinations />
    </div>
  );
}
