import HeroSectionCarousel from "@/components/slider/HeroSectionCarousel";
import { fetchHomePageCmsDataAction } from "@/lib/actions/fetchHomePageCmsAction";
import PopularDestinations from "@/sections/homepage/PopularDestinations";
import PopularPackages from "@/sections/homepage/PopularPackage";
import TravelByTheme from "@/sections/homepage/TravelByTheme";
import VisaMadeEasy from "@/sections/homepage/VisaMadeEasy";

export default async function Home() {
  const homePageData = await fetchHomePageCmsDataAction();
  return (
    <main role="main">
      <HeroSectionCarousel {...homePageData.heroSectionData} />
      <PopularDestinations {...homePageData.popularDestinationsSectionData} />
      <VisaMadeEasy {...homePageData.visaAssistanceSectionData} />
      <PopularPackages {...homePageData.popularPackagesSectionData} />
      <TravelByTheme {...homePageData.travelByThemeSectionData} />
    </main>
  );
}
