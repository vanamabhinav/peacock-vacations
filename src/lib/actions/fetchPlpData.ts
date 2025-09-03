"use server";
import { getFilteredPackages } from "../data/cms/packageData";
import { PackageFilters } from "@/types/packages/package";
import {
  getFilteredPlpByUrl,
  PackageListingPageData,
} from "../data/cms/packageListingPageData";
import { PACKAGES_PER_PAGE } from "../constants";

function parseSearchParamsToFilters(
  searchParams: Record<string, string | string[] | undefined>
): Partial<PackageFilters> {
  const get = (key: string) =>
    Array.isArray(searchParams[key])
      ? searchParams[key]?.[0]
      : searchParams[key];

  const filters: Partial<PackageFilters> = {};

  if (get("minPrice")) {
    filters.minPrice = Number(get("minPrice"));
  }
  if (get("maxPrice")) {
    filters.maxPrice = Number(get("maxPrice"));
  }

  if (get("themes")) {
    filters.themes = get("themes")
      ?.split(",")
      .map((t) => decodeURIComponent(t.trim()))
      .filter(Boolean);
  }

  if (get("packageTypes")) {
    filters.packageTypes = get("packageTypes")
      ?.split(",")
      .map((t) => decodeURIComponent(t.trim()))
      .filter(Boolean);
  }

  if (get("minDays")) {
    filters.minDays = Number(get("minDays"));
  }
  if (get("maxDays")) {
    filters.maxDays = Number(get("maxDays"));
  }

  if (get("departureCity")) {
    filters.departureCity = get("departureCity")
      ?.split(",")
      .map((city) => decodeURIComponent(city.trim()))
      .filter(Boolean);
  }

  if (get("minRating")) {
    filters.minRating = Number(get("minRating"));
  }

  return filters;
}

function paginateResults<T>(
  items: T[],
  page: number,
  limit: number
): {
  paginatedItems: T[];
  totalCount: number;
  totalPages: number;
  currentPage: number;
} {
  const totalCount = items.length;
  const totalPages = Math.ceil(totalCount / limit);
  const validPage = Math.max(1, Math.min(page, totalPages));
  const startIndex = (validPage - 1) * limit;
  const endIndex = startIndex + limit;

  return {
    paginatedItems: items.slice(startIndex, endIndex),
    totalCount,
    totalPages: totalPages || 1,
    currentPage: validPage,
  };
}

export async function fetchPlpDataAction(
  plpUrl: string,
  searchParams?: Record<string, string | string[] | undefined>
): Promise<PackageListingPageData> {
  try {
    const plpPageData = await getFilteredPlpByUrl(plpUrl);

    // Get pagination params
    const page = searchParams?.page
      ? Number(
          Array.isArray(searchParams.page)
            ? searchParams.page[0]
            : searchParams.page
        ) || 1
      : 1;

    if (searchParams && Object.keys(searchParams).length > 0) {
      const userFilters = parseSearchParamsToFilters(searchParams);

      const combinedFilters: PackageFilters = {
        ...plpPageData.packageFilters,
        ...userFilters,
      };

      // Get all filtered packages (without pagination at data level)
      const allFilteredPackages = await getFilteredPackages(combinedFilters);

      // Apply pagination
      const paginationResult = paginateResults(
        allFilteredPackages,
        page,
        PACKAGES_PER_PAGE
      );

      plpPageData.packages = paginationResult.paginatedItems;
      plpPageData.metadata = {
        totalCount: paginationResult.totalCount,
        currentPage: paginationResult.currentPage,
        totalPages: paginationResult.totalPages,
      };
    } else {
      // No filters applied, just paginate the default packages
      const allPackages = plpPageData.packages || [];
      const paginationResult = paginateResults(
        allPackages,
        page,
        PACKAGES_PER_PAGE
      );

      plpPageData.packages = paginationResult.paginatedItems;
      plpPageData.metadata = {
        totalCount: paginationResult.totalCount,
        currentPage: paginationResult.currentPage,
        totalPages: paginationResult.totalPages,
      };
    }

    return plpPageData;
  } catch (error) {
    console.error("Error fetching PLP data:", error);
    throw new Error("Failed to fetch package listing data");
  }
}
