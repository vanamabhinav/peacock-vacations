import { PackageSummary } from "@/types/package";
import { FilterOptions } from "@/types/packageFilters";

export function extractFilterOptions(
  packages: PackageSummary[]
): FilterOptions {
  const availableThemes = [
    ...new Set(packages.flatMap((pkg) => pkg.themes || [])),
  ];
  const availablePackageTypes = [
    ...new Set(packages.flatMap((pkg) => pkg.packageType || [])),
  ];
  const prices = packages.map((pkg) => pkg.price.discountedAmount);
  const priceRange = {
    min: prices.length ? Math.min(...prices) : 0,
    max: prices.length ? Math.max(...prices) : 10000000,
  };

  return { availableThemes, availablePackageTypes, priceRange };
}
