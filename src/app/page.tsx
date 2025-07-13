import VideoCarousel from "@/components/slider/VideoCarousel";
import PopularDestinations from "@/sections/PopularDestinations";
import PopularPackages from "@/sections/PopularPackage";
import TravelByTheme from "@/sections/TravelByTheme";
import VisaMadeEasy from "@/sections/VisaMadeEasy";

export default function Home() {
  return (
    <div>
      <VideoCarousel />
      <PopularDestinations />
      <VisaMadeEasy />
      <PopularPackages />
      <TravelByTheme />
    </div>
  );
}
