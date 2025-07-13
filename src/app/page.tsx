import VideoCarousel from "@/components/slider/VideoCarousel";
import PopularDestinations from "@/sections/PopularDestinations";
import PopularPackages from "@/sections/PopularPackage";
import VisaMadeEasy from "@/sections/VisaMadeEasy";

export default function Home() {
  return (
    <div>
      <VideoCarousel />
      <PopularDestinations />
      <PopularPackages />
      <VisaMadeEasy />
    </div>
  );
}
