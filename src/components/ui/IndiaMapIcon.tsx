import React from "react";
import { Icon, IconName } from "./Icon";

function IndiaMapIcon({ map }: { map: string }) {
  return (
    <Icon
      name={`india-map-${map}` as IconName}
      className="w-full h-full aspect-square"
    />
  );
}

export default IndiaMapIcon;
