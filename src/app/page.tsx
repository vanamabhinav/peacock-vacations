import PopularDestinations from "@/sections/PopularDestinations";
import PopularPackages from "@/sections/PopularPackage";
import VisaMadeEasy from "@/sections/VisaMadeEasy";

export default function Home() {
  return (
    <div>
      <PopularDestinations />
      <PopularPackages />
      <VisaMadeEasy />
    </div>
  );
}
