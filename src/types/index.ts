export type Destination = {
  title: string;
  subtitle: string;
  image: string;
  url: string;
};

export type CtaCard = {
  title: string;
  subtitle: string;
  lowertext: string;
  url: string;
  packageIds?: string[];
};

export type DestinationsData = {
  [key: string]: {
    destinations: Destination[];
    ctaCard: CtaCard;
    bannerImage?: string;
  };
};

export type HeroSectionSlide = {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  videoSrc: any;
};
export type HeroSectionData = {
  slides: HeroSectionSlide[];
};

export type PopularDestinationsSectionData = {
  heading: string;
  subheading: string;
  data: DestinationsData;
};

export type VisaAssistanceSectionData = {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
};

export type PackageData = {
  region: string;
  location: string;
  heading: string;
  subheading: string;
  currency: string;
  days: number;
  nights: number;
  originalPrice: number;
  discountedPrice: number;
  inclusions?: string[];
  packageIncludes?: { label: string; icon: string }[];
  image: string;
  url: string;
};

export type PopularPackagesSectionData = {
  heading: string;
  subheading: string;
  data: PackageData[];
};

export type ThemePackage = {
  _id?: string;
  title: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  theme: string[];
  themeSortOrder?: { [key: string]: number };
};

export type TravelByThemeSectionData = {
  heading: string;
  subheading: string;
  themes: string[];
  packages: ThemePackage[];
  packageOrders?: Record<string, string[]>;
};

export type UspCardType = {
  icon: string;
  title: string;
  description: string;
};
export type WhatMakesUsDifferentSectionData = {
  heading: string;
  subheading: string;
  ctaText: string;
  ctaLink: string;
  cards: UspCardType[];
};

export type TestimonialCardData = {
  profileImage: string;
  title: string;
  description: string;
  rating: number;
  name: string;
  occupation?: string;
  location: string;
  images: string[];
};

export type TestimonialSectionData = {
  heading: string;
  subheading: string;
  testimonials: TestimonialCardData[];
};

export type IndiaMapAttraction = {
  name: string;
  description: string;
};

export type IndiaMapRegionData = {
  destination: string;
  tagline: string;
  bestTime: string;
  temperatureRange: string;
  quote: string;
  description: string;
  attractions: IndiaMapAttraction[];
  exploreLink: string;
};

export type IndiaMapSectionData = {
  indiaData: {
    heading: string;
    description: string;
  };
  regionData: {
    [region: string]: IndiaMapRegionData;
  };
};

export type HomePageData = {
  heroSectionData: HeroSectionData;
  popularDestinationsSectionData: PopularDestinationsSectionData;
  visaAssistanceSectionData: VisaAssistanceSectionData;
  popularPackagesSectionData: PopularPackagesSectionData;
  travelByThemeSectionData: TravelByThemeSectionData;
  whatMakesUsDifferentSectionData: WhatMakesUsDifferentSectionData;
  testimonialsSectionData: TestimonialSectionData;
  indiaMapSectionData: IndiaMapSectionData;
};
