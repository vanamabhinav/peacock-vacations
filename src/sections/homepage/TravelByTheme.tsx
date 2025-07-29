import TravelByThemeClient from "@/components/client/TravelByThemeClient";
import { TravelByThemeSectionData } from "@/types";

export default function TravelByTheme(data: TravelByThemeSectionData) {
  return (
    <div className="flex justify-center bg-white p-4 py-16 font-albertsans">
      <TravelByThemeClient {...data} />
    </div>
  );
}
