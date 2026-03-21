"use server";

import { PackageFilters, Package } from "@/types/packages/package";
import { getFilteredPackagesFromDb } from "@/lib/services/packageService";

export async function fetchPackageDataAction(
  filters: PackageFilters
): Promise<Package[]> {
  try {
    return await getFilteredPackagesFromDb(filters);
  } catch (err) {
    console.error("Error fetching package data action:", err);
    throw new Error("Failed to fetch package data");
  }
}
