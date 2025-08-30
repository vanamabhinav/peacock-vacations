import { RegionString } from "./iconMapper";

// Comprehensive mapping of Indian states to regions
const STATE_TO_REGION_MAP: Record<string, RegionString> = {
  // North India
  Delhi: "North India",
  Punjab: "North India",
  Haryana: "North India",
  "Himachal Pradesh": "North India",
  Uttarakhand: "North India",
  "Uttar Pradesh": "North India",
  Chandigarh: "North India",
  "Jammu and Kashmir": "North India",
  Ladakh: "North India",

  // South India
  "Andhra Pradesh": "South India",
  Telangana: "South India",
  Karnataka: "South India",
  Kerala: "South India",
  "Tamil Nadu": "South India",
  Puducherry: "South India",
  Lakshadweep: "South India",
  "Andaman and Nicobar Islands": "South India",

  // West India
  Maharashtra: "West India",
  Gujarat: "West India",
  Rajasthan: "West India",
  Goa: "West India",
  "Dadra and Nagar Haveli and Daman and Diu": "West India",

  // East India
  "West Bengal": "East India",
  Odisha: "East India",
  Jharkhand: "East India",
  Bihar: "East India",

  // North East India
  Assam: "North East India",
  "Arunachal Pradesh": "North East India",
  Manipur: "North East India",
  Meghalaya: "North East India",
  Mizoram: "North East India",
  Nagaland: "North East India",
  Tripura: "North East India",
  Sikkim: "North East India",

  // Central India (can be mapped to nearby regions based on preference)
  "Madhya Pradesh": "North India", // Often considered North/Central
  Chhattisgarh: "East India", // Often considered East/Central

  // International (for packages outside India)
  International: "North India", // Default fallback
};

// Alternative regional mappings for more specific regions
const STATE_TO_SPECIFIC_REGION_MAP: Record<string, RegionString> = {
  // North West India
  Rajasthan: "North West India",
  Gujarat: "North West India",
  Punjab: "North West India",
  Haryana: "North West India",
  "Jammu and Kashmir": "North West India",
  Ladakh: "North West India",

  // South West India
  Maharashtra: "South West India",
  Goa: "South West India",
  Karnataka: "South West India",
  Kerala: "South West India",

  // South East India
  "Andhra Pradesh": "South East India",
  Telangana: "South East India",
  "Tamil Nadu": "South East India",
  Puducherry: "South East India",

  // Use the basic mapping for others
  ...STATE_TO_REGION_MAP,
};

/**
 * Converts a state name to its corresponding region
 * @param stateName - The name of the state
 * @param useSpecificRegions - Whether to use more specific regional divisions (NW, SW, SE, etc.)
 * @returns The region string that the state belongs to
 */
export function stateToRegion(
  stateName: string,
  useSpecificRegions: boolean = false
): RegionString {
  if (!stateName) {
    return "North India"; // Default fallback
  }

  // Normalize the state name (trim, proper case)
  const normalizedStateName = stateName.trim();

  // Choose the appropriate mapping
  const mapping = useSpecificRegions
    ? STATE_TO_SPECIFIC_REGION_MAP
    : STATE_TO_REGION_MAP;

  // Direct match
  if (mapping[normalizedStateName]) {
    return mapping[normalizedStateName];
  }

  // Try case-insensitive match
  const lowerStateName = normalizedStateName.toLowerCase();
  for (const [state, region] of Object.entries(mapping)) {
    if (state.toLowerCase() === lowerStateName) {
      return region;
    }
  }

  // Try partial match (for cases like "West Bengal" vs "Bengal")
  for (const [state, region] of Object.entries(mapping)) {
    if (
      state.toLowerCase().includes(lowerStateName) ||
      lowerStateName.includes(state.toLowerCase())
    ) {
      return region;
    }
  }

  // Default fallback
  return "North India";
}

/**
 * Gets the region for multiple states
 * @param stateNames - Array of state names
 * @param useSpecificRegions - Whether to use more specific regional divisions
 * @returns Array of corresponding regions
 */
export function statesToRegions(
  stateNames: string[],
  useSpecificRegions: boolean = false
): RegionString[] {
  return stateNames.map((state) => stateToRegion(state, useSpecificRegions));
}

/**
 * Gets all states for a given region
 * @param region - The region to get states for
 * @param useSpecificRegions - Whether to use more specific regional divisions
 * @returns Array of states in that region
 */
export function getStatesInRegion(
  region: RegionString,
  useSpecificRegions: boolean = false
): string[] {
  const mapping = useSpecificRegions
    ? STATE_TO_SPECIFIC_REGION_MAP
    : STATE_TO_REGION_MAP;

  return Object.entries(mapping)
    .filter(([, mappedRegion]) => mappedRegion === region)
    .map(([state]) => state);
}

/**
 * Checks if a state belongs to a specific region
 * @param stateName - The state name to check
 * @param region - The region to check against
 * @param useSpecificRegions - Whether to use more specific regional divisions
 * @returns Boolean indicating if the state belongs to the region
 */
export function isStateInRegion(
  stateName: string,
  region: RegionString,
  useSpecificRegions: boolean = false
): boolean {
  return stateToRegion(stateName, useSpecificRegions) === region;
}

// Export the mappings for reference
export { STATE_TO_REGION_MAP, STATE_TO_SPECIFIC_REGION_MAP };
