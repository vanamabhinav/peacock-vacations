import TravelPackageSlider from "@/components/slider/TravelPackageSlider";
import TravelPackageCard from "@/components/card/TravelPackageCard";
import { getPackagesAction } from "@/lib/actions/packages";

async function PopularPackages() {
  const packages = await getPackagesAction();
  return (
    <div className="flex justify-center bg-twilightBlue p-16">
      <TravelPackageSlider>
        {packages.map((pkg, idx) => (
          <div key={idx} className="min-w-max">
            <TravelPackageCard packageData={pkg} />
          </div>
        ))}
      </TravelPackageSlider>
    </div>
  );
}

export default PopularPackages;
