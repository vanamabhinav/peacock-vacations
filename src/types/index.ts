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

export type PackageData = {
  location: {
    icon: string;
    name: string;
  };
  image: string;
  title: string;
  description: string;
  url: string;
  pricing: {
    original: string;
    discounted: string;
  };
  includes: Array<{
    icon: string;
    text: string;
  }>;
};

export type TravelThemeFilter = {
  id: string;
  label: string;
  icon: string;
};

export type TravelThemeCard = {
  title: string;
  description: string;
  bgColor: string;
  imageUrl: string;
  href: string;
  ctaText: string;
  categories?: string[];
};
export type TravelThemeData = {
  themeData: TravelThemeCard[];
};
