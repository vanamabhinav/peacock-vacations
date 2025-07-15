import HeroSectionCarousel from "@/components/slider/HeroSectionCarousel";
import { fetchHomePageCmsDataAction } from "@/lib/actions/fetchHomePageCmsAction";
import PopularDestinations from "@/sections/PopularDestinations";
import PopularPackages from "@/sections/PopularPackage";
import TravelByTheme from "@/sections/TravelByTheme";
import VisaMadeEasy from "@/sections/VisaMadeEasy";

export default async function Home() {
  const homePageData = await fetchHomePageCmsDataAction();
  return (
    <div>
      <HeroSectionCarousel {...homePageData.heroSectionData} />
      <PopularDestinations {...homePageData.popularDestinationsSectionData} />
      <VisaMadeEasy {...homePageData.visaAssistanceSectionData} />
      <PopularPackages {...homePageData.popularPackagesSectionData} />
      <TravelByTheme {...homePageData.travelByThemeSectionData} />
    </div>
  );
}
