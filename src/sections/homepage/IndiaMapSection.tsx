import IndiaMapSectionClient from "@/components/client/IndiaMapSectionClient";
import { IndiaMapSectionData } from "@/types";

function IndiaMapSection({ regionData, indiaData }: IndiaMapSectionData) {
  return (
    <div className="bg-desertstorm px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12 md:py-16">
      <IndiaMapSectionClient indiaData={indiaData} regionData={regionData} />
    </div>
  );
}

export default IndiaMapSection;
