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
};

export type DestinationsData = {
  [key: string]: {
    destinations: Destination[];
    ctaCard: CtaCard;
  };
};

// New Data for HomePage CMS
export type HeroSectionSlide = {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  videoUrl: string;
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
export type RegionType =
  | "North East India"
  | "South East India"
  | "North West India"
  | "South West India"
  | "North India"
  | "South India"
  | "East India"
  | "West India";

export type InclusionType =
  | "Resort Stay"
  | "Airport Transfers"
  | "Breakfast"
  | "Celebrate";

export type PackageData = {
  region: RegionType;
  location: string;
  heading: string;
  subheading: string;
  currency: "INR" | "USD";
  days: number;
  nights: number;
  originalPrice: number;
  discountedPrice: number;
  inclusions: InclusionType[];
  image: string;
  url: string;
};

export type PopularPackagesSectionData = {
  heading: string;
  subheading: string;
  data: PackageData[];
};

export type ThemeType =
  | "Honeymoon"
  | "Adventure"
  | "Beach"
  | "Luxury"
  | "Pilgrimage"
  | "Solo Travel"
  | "Resort";

export type ThemePackage = {
  title: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  theme: ThemeType[];
};

export type TravelByThemeSectionData = {
  heading: string;
  subheading: string;
  themes: ThemeType[];
  packages: ThemePackage[];
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
