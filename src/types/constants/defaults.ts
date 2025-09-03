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

export const DEFAULT_FILTER_OPTIONS = {
  availableThemes: [],
  availablePackageTypes: [],
  priceRange: { min: 0, max: 1000000 },
};

export type Currency = (typeof CURRENCIES)[number];
export type TimeOfDay = (typeof TIME_OF_DAY)[number];
