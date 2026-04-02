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
    <div className="relative flex flex-col md:gap-3 bg-transparent md:bg-white p-0 md:p-[14px] md:border md:border-botticelli md:rounded-[14px] md:h-[450px] overflow-visible md:overflow-hidden">
      <div className="flex flex-row flex-wrap md:flex-col gap-2 md:gap-3 [&::-webkit-scrollbar-thumb]:bg-[#D9D9D9] [&::-webkit-scrollbar-track]:bg-transparent md:pr-3 [&::-webkit-scrollbar-thumb]:rounded-[38px] [&::-webkit-scrollbar]:w-2 md:overflow-y-auto overflow-visible">
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
