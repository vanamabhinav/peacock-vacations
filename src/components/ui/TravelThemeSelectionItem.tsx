import { getThemeIcon, ThemeString } from "@/lib/utils/iconMapper";
import { Icon } from "./Icon";

interface TravelThemeSelectionItemProps {
  label: ThemeString;
  isSelected: boolean;
  onToggle: (theme: ThemeString) => void;
}

function TravelThemeSelectionItem({
  label,
  isSelected,
  onToggle,
}: TravelThemeSelectionItemProps) {
  return (
    <button
      onClick={() => onToggle(label)}
      className={`flex justify-between items-center w-full px-4 py-3 border rounded-lg h-[50px] transition-all duration-200 cursor-pointer ${
        isSelected
          ? "bg-botticelli border-william text-william"
          : "bg-catSkillWhite border-botticelli text-bigstone hover:bg-botticelli/50"
      }`}
    >
      <span className="font-normal text-lg leading-normal">{label}</span>
      <Icon
        name={getThemeIcon(label)}
        className={`w-6 h-6 ${isSelected ? "text-william" : "text-bigstone"}`}
      />
    </button>
  );
}

export default TravelThemeSelectionItem;
