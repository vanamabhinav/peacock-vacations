import iconManifestData from "@/types/icon-manifest";
import { IconName } from "@/types/name";
import { normalizeKey } from "@/lib/utils/normalizeKey";

const normalizedIconMap: Record<string, IconName> = {};

Object.keys(iconManifestData).forEach((key) => {
  normalizedIconMap[normalizeKey(key)] = key as IconName;
});

export function getIconForValue(value: string): IconName {
  const normalized = normalizeKey(value);
  return normalizedIconMap[normalized] || "generic";
}
