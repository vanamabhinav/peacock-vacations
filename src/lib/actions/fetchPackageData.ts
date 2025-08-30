"use server";

import { PackageFilters } from "@/types/packageFilters";
import { Package } from "@/types/package";
import { getFilteredPackages } from "../data/cms/packageData";

export async function fetchPackageDataAction(
  filters: PackageFilters
): Promise<Package[]> {
  try {
    const data = await getFilteredPackages(filters);
    return data as Package[];
  } catch (err) {
    console.log("Error: ", err);
    throw new Error("Failed to fetch package data");
  }
}
