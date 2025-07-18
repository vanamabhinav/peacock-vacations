import { UspCardType } from "@/types";
import { Icon } from "../ui/Icon";
import { getIconName } from "@/lib/utils/iconMapper";

function UspCard({ data }: { data: UspCardType }) {
  return (
    <div
      className={
        "flex flex-col justify-start items-start bg-springWood group hover:bg-sandybrown/38 p-5 border-1 border-bigstone/13 rounded-[20px] w-72 aspect-[269/403] transition-colors"
      }
    >
      <Icon
        name={getIconName(data.icon)}
        className="self-start w-14 h-auto aspect-[26/29] group-hover:text-[#d68d2c] transition-colors"
        color="#1A3642"
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
