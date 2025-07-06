"use server";

import { PackageData } from "@/types";
import { fetchPackagesData } from "../data/packagesData";

export async function getPackagesAction(): Promise<PackageData[]> {
  return fetchPackagesData();
}
