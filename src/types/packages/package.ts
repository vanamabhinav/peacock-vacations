export type Package = {
  id: string;
  title: string;
  tagline?: string;
  shortDescription: string;
  longDescription: string;
  slug: string;
  isPublished: boolean;
  departureCity: string[];
  destination: {
    cityName: string;
    district?: string;
    stateName: string;
    countryName: string;
  };
  region?: string;
  themes: string[];
  packageType: string[];
  price: {
    originalAmount: number;
    discountedAmount: number;
    currency: string;
  };
  duration: {
    days: number;
    nights: number;
  };
  itinerary: {
    day: number;
    title: string;
    events: {
      timeOfDay: string;
      title: string;
      description: string;
    }[];
  }[];
  inclusions: {
    accommodation: {
      hotelName: string;
      rating: string;
      roomType: string;
      imageUrl: string;
      amenities: string[];
    }[];
    transfers: {
      vehicleName: string;
      type: string;
      imageUrl: string;
      features: string[];
    }[];
    activities: {
      title: string;
      type: string;
      imageUrl: string;
      isRefundable: boolean;
      highlights: string[];
    }[];
    meals: string[];
  };
  mainImageUrl: string;
  galleryImages: string[];
  suggestedFlights?: {
    airline: string;
    departureTime: string;
    arrivalTime: string;
    stops: number;
  }[];
  createdAt: Date;
  updatedAt: Date;
};

export type PackageSummary = Pick<
  Package,
  | "id"
  | "title"
  | "tagline"
  | "shortDescription"
  | "slug"
  | "destination"
  | "themes"
  | "packageType"
  | "price"
  | "duration"
  | "mainImageUrl"
> & {
  inclusions: {
    meals: string[];
  };
};

export type PackageFilters = {
  cityName?: string[];
  district?: string[];
  stateName?: string[];
  region?: string[];
  countryName?: string[];
  minPrice?: number;
  maxPrice?: number;
  minDays?: number;
  maxDays?: number;
  departureCity?: string[];
  themes?: string[];
  packageTypes?: string[]; // Add this line
  minRating?: number;
  isPublished?: boolean;
  search?: string;
};

export type UIFilters = {
  minPrice?: number;
  maxPrice?: number;
  themes?: string[];
  packageTypes?: string[];
  minRating?: number;
};

export interface FilterOptions {
  availableThemes: string[];
  availablePackageTypes: string[];
  priceRange: {
    min: number;
    max: number;
  };
}

export type PackageListingPageData = {
  plpUrl: string;
  backgroundImage: string;
  bigHeading: string;
  shortDescription: string;
  longDescription: string;
  packageFilters: PackageFilters;
  packages?: PackageSummary[];
  metadata?: {
    totalCount: number;
    currentPage: number;
    totalPages: number;
  };
  filterOptions?: {
    availableThemes: string[];
    availablePackageTypes: string[];
    priceRange: {
      min: number;
      max: number;
    };
  };
};
