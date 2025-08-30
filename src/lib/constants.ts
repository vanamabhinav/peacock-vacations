export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const regions = [
  "North",
  "South",
  "East",
  "West",
  "Northeast",
  "Northwest",
  "Southeast",
  "Southwest",
];

export const PACKAGES_PER_PAGE = 12;
export const DEFAULT_PAGE = 1;

// Export as object for easier imports
export const PAGINATION_CONSTANTS = {
  PACKAGES_PER_PAGE,
  DEFAULT_PAGE,
} as const;
