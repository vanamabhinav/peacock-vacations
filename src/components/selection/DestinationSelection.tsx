import { months, regions } from "@/lib/constants";
import { twMerge } from "tailwind-merge";
import DateUI from "../ui/Date";
import { Icon } from "../ui/Icon";
import RegionIcon from "../ui/Region";

interface DestinationSelectionProps {
  className?: string;
  onSelect?: (selection: string) => void;
}

function DestinationSelection({
  className,
  onSelect,
}: DestinationSelectionProps) {
  const handleSelection = (selection: string) => {
    if (onSelect) {
      onSelect(selection);
    }
  };

  return (
    <div
      className={twMerge(
        "gap-5 grid grid-cols-2 bg-white px-20 py-10 rounded-[20px] divide-x divide-alto w-full h-[18.75rem]",
        className
      )}
    >
      <div className="col-span-1">
        <div className="flex flex-col gap-9">
          <h3 className="font-black text-xl">Explore By Month</h3>
          <div className="flex-1 gap-x-3 gap-y-5 grid grid-cols-3 grid-rows-4">
            {months.map((month, index) => (
              <div
                key={month}
                className="group flex items-center gap-4"
                onClick={() => handleSelection(month)}
              >
                <div className="flex items-center gap-2 h-6 font-medium group-hover:text-bigstone text-lg transition-colors cursor-pointer">
                  <DateUI
                    number={index + 1}
                    className="w-6 h-5 group-hover:text-bigstone"
                    aria-hidden="true"
                  />
                  {month}
                </div>
                <Icon
                  name="up-arrow"
                  width={13}
                  height={11}
                  fill="#1A3642"
                  className="opacity-0 group-hover:opacity-100 rotate-45 transition-all -translate-x-2 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 duration-300"
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <div className="flex flex-col gap-9">
          <h3 className="font-black text-xl">Popular By Region</h3>
          <div className="flex-1 gap-x-3 gap-y-5 grid grid-cols-3 grid-rows-4">
            {regions.map((region) => (
              <div
                key={region}
                className="group flex items-center gap-4"
                onClick={() => handleSelection(region)}
              >
                <div className="flex items-center gap-2 h-6 font-medium hover:text-bigstone text-lg transition-colors cursor-pointer">
                  <RegionIcon
                    region={region}
                    className="w-5 h-5 text-bigstone"
                    fill="#1a3642"
                    aria-hidden="true"
                  />
                  {region}
                </div>
                <Icon
                  name="up-arrow"
                  width={13}
                  height={11}
                  fill="#1A3642"
                  className="opacity-0 group-hover:opacity-100 rotate-45 transition-all -translate-x-2 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 duration-300"
                  aria-hidden="true"
                />
              </div>
            ))}
            <div className="col-span-1 col-start-3 row-span-4 row-start-1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationSelection;
