export function normalizeKey(str: string): string {
  return str.toLowerCase().replace(/[-_\s]/g, "");
}
