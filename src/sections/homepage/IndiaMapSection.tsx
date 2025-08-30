import IndiaMapSectionClient from "@/components/client/IndiaMapSectionClient";
import { IndiaMapSectionData } from "@/types";

function IndiaMapSection({ regionData, indiaData }: IndiaMapSectionData) {
  return (
    <div className="bg-desertstorm px-4 py-16">
      <IndiaMapSectionClient indiaData={indiaData} regionData={regionData} />
    </div>
  );
}

export default IndiaMapSection;
