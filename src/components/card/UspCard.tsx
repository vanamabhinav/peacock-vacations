import { UspCardType } from "@/types";
import { Icon } from "../ui/Icon";

import { twMerge } from "tailwind-merge";
import { getIconForValue } from "@/lib/utils/iconMapper";

function UspCard({
  data,
  isActive = false,
}: {
  data: UspCardType;
  isActive?: boolean;
}) {
  return (
    <div
      className={twMerge(
        "flex flex-col justify-start items-start p-4 sm:p-5 gap-2 sm:gap-0 border-1 border-bigstone/13 rounded-[20px] w-full h-full transition-colors",
        isActive ? "bg-sandybrown/38" : "bg-springWood"
      )}
    >
      <div className="flex flex-row sm:flex-col items-center sm:items-start gap-3 sm:gap-0">
        <Icon
          name={getIconForValue(data.icon)}
          className="shrink-0 w-12 sm:w-14 h-auto aspect-[26/29]"
          color={isActive ? "#d68d2c" : "#1A3642"}
        />
        <h2 className="font-bold text-bigstone text-xl sm:text-4xl sm:mt-3 leading-tight">{data.title}</h2>
      </div>
      <div className="flex flex-col sm:mt-3 w-full">
        <p className="font-normal text-bitter text-sm sm:text-lg leading-tight sm:leading-5 text-left">
          {data.description}
        </p>
      </div>
    </div>
  );
}

export default UspCard;
