import IndiaMapSectionClient from "@/components/client/IndiaMapSectionClient";
import { IndiaMapSectionData } from "@/types";

function IndiaMapSection({ regionData, indiaData }: IndiaMapSectionData) {
  return (
    <div className="bg-desertstorm px-16 py-19">
      <IndiaMapSectionClient indiaData={indiaData} regionData={regionData} />
    </div>
  );
}

export default IndiaMapSection;
