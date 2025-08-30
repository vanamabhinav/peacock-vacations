export type PackageFilters = {
  cityName?: string[];
  stateName?: string[];
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
