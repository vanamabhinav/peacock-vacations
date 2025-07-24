import HeroSectionCarousel from "@/components/slider/HeroSectionCarousel";
import { fetchHomePageCmsDataAction } from "@/lib/actions/fetchHomePageCmsAction";
import IndiaMapSection from "@/sections/homepage/IndiaMapSection";
import PopularDestinations from "@/sections/homepage/PopularDestinations";
import PopularPackages from "@/sections/homepage/PopularPackage";
import TestimonialsSection from "@/sections/homepage/TestimonialsSection";
import TravelByTheme from "@/sections/homepage/TravelByTheme";
import VisaMadeEasy from "@/sections/homepage/VisaMadeEasy";
import WhatMakesDifferent from "@/sections/homepage/WhatMakesDifferent";

export default async function Home() {
  const homePageData = await fetchHomePageCmsDataAction();
  return (
    <main role="main">
      <HeroSectionCarousel {...homePageData.heroSectionData} />
      <PopularDestinations {...homePageData.popularDestinationsSectionData} />
      <VisaMadeEasy {...homePageData.visaAssistanceSectionData} />
      <PopularPackages {...homePageData.popularPackagesSectionData} />
      <TravelByTheme {...homePageData.travelByThemeSectionData} />
      <WhatMakesDifferent {...homePageData.whatMakesUsDifferentSectionData} />
      <TestimonialsSection {...homePageData.testimonialsSectionData} />
      <IndiaMapSection regionData={homePageData.indiaMapSectionData} />
    </main>
  );
}
