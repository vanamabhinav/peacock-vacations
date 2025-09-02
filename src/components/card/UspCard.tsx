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
        "flex flex-col justify-start items-start p-5 border-1 border-bigstone/13 rounded-[20px] w-full h-full transition-colors",
        isActive ? "bg-sandybrown/38" : "bg-springWood"
      )}
    >
      <Icon
        name={getIconForValue(data.icon)}
        className="self-start w-14 h-auto aspect-[26/29]"
        color={isActive ? "#d68d2c" : "#1A3642"}
      />
      <div className="flex flex-col gap-3">
        <h2 className="font-bold text-bigstone text-4xl">{data.title}</h2>
        <p className="font-normal text-bitter text-lg leading-5">
          {data.description}
        </p>
      </div>
    </div>
  );
}

export default UspCard;
