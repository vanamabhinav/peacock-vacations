import type { SVGProps } from "react";
import { Icon } from "./Icon";

export type RegionType =
  | "northIndia"
  | "southIndia"
  | "eastIndia"
  | "westIndia"
  | "northEastIndia"
  | "northWestIndia"
  | "southEastIndia"
  | "southWestIndia";

// Mapping from display region to RegionType
const regionMap: Record<string, RegionType> = {
  North: "northIndia",
  South: "southIndia",
  East: "eastIndia",
  West: "westIndia",
  Northeast: "northEastIndia",
  Northwest: "northWestIndia",
  Southeast: "southEastIndia",
  Southwest: "southWestIndia",
};

interface RegionIconProps extends Omit<SVGProps<SVGSVGElement>, "fill"> {
  region: keyof typeof regionMap; // "North" | "South" | ...
  fill?: string;
  width?: number;
  height?: number;
}

export default function RegionIcon({
  region,
  fill,
  width,
  height,
  className,
}: RegionIconProps): React.ReactElement | null {
  const mappedRegion = regionMap[region];
  if (!mappedRegion) return null;

  return (
    <Icon
      name={`homepage/${mappedRegion}`}
      fill={fill ?? "currentColor"}
      width={width ?? 20}
      height={height ?? 22}
      className={className}
    />
  );
}
