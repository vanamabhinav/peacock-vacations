import { PackageSummary } from "../package";
import { PackageFilters } from "../packageFilters";

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
