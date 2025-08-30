"use client";

import TravelThemeSelectionItem from "../ui/TravelThemeSelectionItem";

interface TravelThemeSelectionProps {
  travelThemes: string[];
  selectedThemes: string[];
  onThemeChange: (selectedThemes: string[]) => void;
}

function TravelThemeSelection({
  travelThemes,
  selectedThemes,
  onThemeChange,
}: TravelThemeSelectionProps) {
  const toggleTheme = (theme: string) => {
    const newSelectedThemes = selectedThemes.includes(theme)
      ? selectedThemes.filter((selectedTheme) => selectedTheme !== theme)
      : [...selectedThemes, theme];

    // Call parent callback if provided
    if (onThemeChange) {
      onThemeChange(newSelectedThemes);
    }
  };

  return (
    <div className="relative flex flex-col gap-3 bg-white p-[14px] border border-botticelli rounded-[14px] h-[450px] overflow-hidden">
      <div className="flex flex-col gap-3 [&::-webkit-scrollbar-thumb]:bg-[#D9D9D9] [&::-webkit-scrollbar-track]:bg-transparent pr-3 [&::-webkit-scrollbar-thumb]:rounded-[38px] [&::-webkit-scrollbar]:w-2 overflow-y-auto">
        {travelThemes.map((theme, idx) => (
          <TravelThemeSelectionItem
            key={idx}
            label={theme}
            isSelected={selectedThemes.includes(theme)}
            onToggle={toggleTheme}
          />
        ))}
      </div>
    </div>
  );
}

export default TravelThemeSelection;
