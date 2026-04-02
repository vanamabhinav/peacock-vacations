import { getIconForValue } from "@/lib/utils/iconMapper";
import { Icon } from "./Icon";

interface TravelThemeSelectionItemProps {
  label: string;
  isSelected: boolean;
  onToggle: (theme: string) => void;
}

function TravelThemeSelectionItem({
  label,
  isSelected,
  onToggle,
}: TravelThemeSelectionItemProps) {
  return (
    <button
      onClick={() => onToggle(label)}
      className={`flex justify-between items-center transition-all duration-200 cursor-pointer ${isSelected
          ? "bg-botticelli border-william text-william"
          : "bg-white md:bg-catSkillWhite border-botticelli text-bigstone hover:bg-botticelli/50"
        } ${
        /* Mobile Tile Style */
        "px-3 py-2 rounded-xl border w-fit h-auto md:w-full md:h-[50px] md:px-4 md:py-3 md:rounded-lg"
        }`}
    >
      <span className="font-bold md:font-normal text-sm md:text-lg leading-tight uppercase md:normal-case tracking-tight md:tracking-normal">{label}</span>
      <Icon
        name={getIconForValue(label)}
        className={`${isSelected ? "text-william" : "text-bigstone"} w-4 h-4 md:w-6 md:h-6 ml-1.5 md:ml-0`}
        aria-hidden="true"
      />
    </button>
  );
}

export default TravelThemeSelectionItem;
