import { IPackage } from "@/models/Package";
import { PackageData } from "@/types";
import { stateToRegion } from "./regionMapper";

/**
 * Maps an IPackage (Mongoose model instance) to the PackageData type
 * used by the frontend components like PopularPackages and PackageCard.
 * @param pkg - The IPackage object from the database
 * @returns A PackageData object formatted for the frontend
 */
export const mapIPackageToPackageData = (pkg: IPackage): PackageData => {
    return {
        region: stateToRegion(pkg.destination.stateName, true),
        location: pkg.destination.cityName,
        heading: pkg.title,
        subheading: pkg.tagline || pkg.shortDescription,
        currency: pkg.price.currency,
        days: pkg.duration.days,
        nights: pkg.duration.nights,
        originalPrice: pkg.price.originalAmount,
        discountedPrice: pkg.price.discountedAmount,
        inclusions: pkg.inclusions.meals || [],
        packageIncludes: pkg.packageIncludes || [],
        image: pkg.mainImageUrl,
        url: `/packages/${pkg.slug}`
    };
};

/**
 * Maps a list of IPackage objects to a list of PackageData objects.
 * @param packages - Array of IPackage objects
 * @returns Array of PackageData objects
 */
export const mapIPackagesToPackageData = (packages: IPackage[]): PackageData[] => {
    return packages.map(mapIPackageToPackageData);
};
