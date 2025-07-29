import { IconName } from "@/components/ui/Icon";
import iconManifestData from "@/types/icon-manifest";

// Type definitions for better type safety
export type RegionString =
  | "North East India"
  | "South East India"
  | "North West India"
  | "South West India"
  | "North India"
  | "South India"
  | "East India"
  | "West India";

export type InclusionString = "Resort Stay" | "Airport Transfers" | "Breakfast";

export type ThemeString =
  | "Honeymoon"
  | "Adventure"
  | "Beach"
  | "Luxury"
  | "Pilgrimage"
  | "Solo Travel"
  | "Resort";

// Main icon mapper function
export function getIconName(
  value: string,
  type?: "region" | "inclusion" | "theme"
): IconName {
  // Auto-detect type if not provided
  if (!type) {
    if (isRegionString(value)) type = "region";
    else if (isInclusionString(value)) type = "inclusion";
    else if (isThemeString(value)) type = "theme";
  }

  switch (type) {
    case "region":
      return getRegionIcon(value as RegionString);
    case "inclusion":
      return getInclusionIcon(value as InclusionString);
    case "theme":
      return getThemeIcon(value as ThemeString);
    default:
      return getGenericIcon(value);
  }
}

// Region icon mapper
export function getRegionIcon(region: RegionString): IconName {
  const regionMap: Record<RegionString, IconName> = {
    "North East India": "northEastIndia",
    "South East India": "southEastIndia",
    "North West India": "northWestIndia",
    "South West India": "southWestIndia",
    "North India": "northIndia",
    "South India": "southIndia",
    "East India": "eastIndia",
    "West India": "westIndia",
  };

  return regionMap[region] || ""; // fallback
}

// Inclusion icon mapper
export function getInclusionIcon(inclusion: InclusionString): IconName {
  const inclusionMap: Record<InclusionString, IconName> = {
    "Resort Stay": "resort",
    "Airport Transfers": "airport",
    Breakfast: "breakfast",
  };

  return inclusionMap[inclusion] || "resort"; // fallback
}

// Theme icon mapper
export function getThemeIcon(theme: ThemeString): IconName {
  const themeMap: Record<ThemeString, IconName> = {
    Honeymoon: "honeymoon",
    Adventure: "adventure",
    Beach: "beach",
    Luxury: "luxury",
    Pilgrimage: "piligrimage", // Note: typo in original icon name
    "Solo Travel": "solo",
    Resort: "resort",
  };

  return themeMap[theme] || "adventure"; // fallback
}

// Generic fallback for unmatched strings - handles generic icon names
function getGenericIcon(value?: string): IconName {
  if (!value) {
    // Return a safe default that exists in your IconName type
    return "resort";
  }

  // If the value already contains a path (has '/'), use it as is
  if (value.includes("/")) {
    return value as IconName;
  }

  // Normalize a string: lowercase, remove spaces, dashes, underscores
  const normalize = (str: string) => str.toLowerCase().replace(/[-_\s]/g, "");
  const normalizedValue = normalize(value);

  // Build a map of normalized icon keys to actual icon keys
  const availableIcons = Object.keys(iconManifestData);
  const normalizedIconMap: Record<string, string> = {};
  for (const iconKey of availableIcons) {
    normalizedIconMap[normalize(iconKey)] = iconKey;
  }

  if (normalizedValue in normalizedIconMap) {
    return normalizedIconMap[normalizedValue] as IconName;
  }

  // If not found, fallback to a safe default
  return "resort";
}

// Type guard functions
function isRegionString(value: string): value is RegionString {
  const regions: RegionString[] = [
    "North East India",
    "South East India",
    "North West India",
    "South West India",
    "North India",
    "South India",
    "East India",
    "West India",
  ];
  return regions.includes(value as RegionString);
}

function isInclusionString(value: string): value is InclusionString {
  const inclusions: InclusionString[] = [
    "Resort Stay",
    "Airport Transfers",
    "Breakfast",
  ];
  return inclusions.includes(value as InclusionString);
}

function isThemeString(value: string): value is ThemeString {
  const themes: ThemeString[] = [
    "Honeymoon",
    "Adventure",
    "Beach",
    "Luxury",
    "Pilgrimage",
    "Solo Travel",
    "Resort",
  ];
  return themes.includes(value as ThemeString);
}

// Utility function to get multiple icons
export function getIconsForArray(
  values: string[],
  type?: "region" | "inclusion" | "theme"
): IconName[] {
  return values.map((value) => getIconName(value, type));
}

// Export specific mappers for direct use
export const iconMappers = {
  region: getRegionIcon,
  inclusion: getInclusionIcon,
  theme: getThemeIcon,
  generic: getIconName,
} as const;
