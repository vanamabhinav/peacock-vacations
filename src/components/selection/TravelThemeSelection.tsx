"use client";

import { TravelThemeFilter } from "@/types";
import TravelThemeSelectionItem from "../ui/TravelThemeSelectionItem";

interface TravelThemeSelectionProps {
  travelThemes: TravelThemeFilter[];
  selectedThemes: string[];
  onThemeChange: (selectedThemes: string[]) => void;
}

function TravelThemeSelection({
  travelThemes,
  selectedThemes: controlledSelectedThemes,
  onThemeChange,
}: TravelThemeSelectionProps) {
  const selectedThemes = controlledSelectedThemes;

  const toggleTheme = (themeId: string) => {
    const newSelectedThemes = selectedThemes.includes(themeId)
      ? selectedThemes.filter((id) => id !== themeId)
      : [...selectedThemes, themeId];

    // Call parent callback if provided
    if (onThemeChange) {
      onThemeChange(newSelectedThemes);
    }
  };

  return (
    <div className="relative flex flex-col gap-3 bg-white p-[14px] border border-botticelli rounded-[14px] h-[450px] overflow-hidden">
      <div className="flex flex-col gap-3 [&::-webkit-scrollbar-thumb]:bg-[#D9D9D9] [&::-webkit-scrollbar-track]:bg-transparent pr-3 [&::-webkit-scrollbar-thumb]:rounded-[38px] [&::-webkit-scrollbar]:w-2 overflow-y-auto">
        {travelThemes.map((theme) => (
          <TravelThemeSelectionItem
            key={theme.id}
            id={theme.id}
            label={theme.label}
            icon={theme.icon}
            isSelected={selectedThemes.includes(theme.id)}
            onToggle={toggleTheme}
          />
        ))}
      </div>
    </div>
  );
}

export default TravelThemeSelection;
