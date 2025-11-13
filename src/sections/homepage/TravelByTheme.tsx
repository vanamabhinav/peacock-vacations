import TravelByThemeClient from "@/components/client/TravelByThemeClient";
import { TravelByThemeSectionData } from "@/types";

export default function TravelByTheme(data: TravelByThemeSectionData) {
  return (
    <div className="flex justify-center bg-white px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12 md:py-16 font-albertsans">
      <TravelByThemeClient {...data} />
    </div>
  );
}
