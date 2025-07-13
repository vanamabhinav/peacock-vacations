import { Icon } from "./Icon";
import { type IconName } from "@/types/name";

interface TravelThemeSelectionItemProps {
  id: string;
  label: string;
  icon: string;
  isSelected: boolean;
  onToggle: (themeId: string) => void;
}

function TravelThemeSelectionItem({
  id,
  label,
  icon,
  isSelected,
  onToggle,
}: TravelThemeSelectionItemProps) {
  return (
    <button
      onClick={() => onToggle(id)}
      className={`flex justify-between items-center w-full px-4 py-3 border rounded-lg h-[50px] transition-all duration-200 cursor-pointer ${
        isSelected
          ? "bg-botticelli border-william text-william"
          : "bg-catSkillWhite border-botticelli text-bigstone hover:bg-botticelli/50"
      }`}
    >
      <span className="font-normal text-lg leading-normal">{label}</span>
      <Icon
        name={icon as IconName}
        className={`w-6 h-6 ${isSelected ? "text-william" : "text-bigstone"}`}
      />
    </button>
  );
}

export default TravelThemeSelectionItem;
