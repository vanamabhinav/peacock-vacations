import IndiaMapSectionClient from "@/components/client/IndiaMapSectionClient";
import { IndiaMapSectionData } from "@/types";

type Props = {
  regionData: IndiaMapSectionData;
};

function IndiaMapSection({ regionData }: Props) {
  return (
    <div className="bg-desertstorm px-16 py-19">
      <IndiaMapSectionClient regionData={regionData} />
    </div>
  );
}

export default IndiaMapSection;
