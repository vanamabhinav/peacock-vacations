import TravelPackageSlider from "@/components/slider/TravelPackageSlider";
import TravelPackageCard from "@/components/card/TravelPackageCard";
import { PackageData } from "@/types";

async function PopularPackages({
  heading,
  subheading,
  data,
}: {
  heading: string;
  subheading: string;
  data: PackageData[];
}) {
  return (
    <div className="flex justify-center bg-twilightBlue p-16 font-albertsans">
      <TravelPackageSlider heading={heading} subheading={subheading}>
        {data.map((pkg, idx) => (
          <div key={idx} className="min-w-max">
            <TravelPackageCard {...pkg} />
          </div>
        ))}
      </TravelPackageSlider>
    </div>
  );
}

export default PopularPackages;
