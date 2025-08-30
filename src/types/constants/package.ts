export const PACKAGE_THEMES = [
  "Beach",
  "Adventure",
  "Honeymoon",
  "Wildlife",
  "Heritage",
  "Spiritual",
  "Nature",
] as const;

export const PACKAGE_TYPES = [
  "Solo Tour",
  "Group Tour",
  "Couple Tour",
] as const;

export const CURRENCIES = ["INR", "USD"] as const;

export const TIME_OF_DAY = [
  "Morning",
  "Noon",
  "Afternoon",
  "Evening",
  "Full Day",
  "Noon to Evening",
  "Night",
] as const;

export type PackageTheme = (typeof PACKAGE_THEMES)[number];
export type PackageType = (typeof PACKAGE_TYPES)[number];
export type Currency = (typeof CURRENCIES)[number];
export type TimeOfDay = (typeof TIME_OF_DAY)[number];
