import PackageCard from "@/components/card/PackageCard";
import Breadcrumb from "@/components/ui/Breadcrumb";
import PackageDescription from "./PackageDescription";

const PackageSection = () => {
  const packageDescriptionProps = {
    packageName: "Goa Tour Package",
    packageShortDescription:
      "Lorem fwheihwe efw ewhfowe eoc eoheo we eco hogew owejj we  eoweh ocwe cohweo coo weh coewt co weto hwcoh wecowhohwe co weohewo hoe cowehoc oewhoheoeh wcoechtoec oc weowo hocqwth qcqwpoweq cp cow0",
    packageLongDescription:
      "Long desc fwheihwe efw ewhfowe eoc eoheo we eco hogew owejj we  eoweh ocwe cohweo coo weh coewt co weto hwcoh wecowhohwe co weohewo hoe cowehoc oewhoheoeh wcoechtoec oc weowo hocqwth qcqwpoweq cp cow0 orem fwheihwe efw ewhfowe eoc eoheo we eco hogew owejj we  eoweh ocwe cohweo coo weh coewt co weto hwcoh wecowhohwe co weohewo hoe cowehoc oewhoheoeh wcoechtoec oc weowo hocqwth qcqwpoweq cp cow0 orem fwheihwe efw ewhfowe eoc eoheo we eco hogew owejj we  eoweh ocwe cohweo coo weh coewt co weto hwcoh wecowhohwe co weohewo hoe cowehoc oewhoheoeh wcoechtoec oc weowo hocqwth qcqwpoweq cp cow0",
  };
  return (
    <div className="bg-provincialpink px-4 py-6 w-full">
      <div className="flex flex-col gap-6 mx-auto w-full max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-7xl">
        <Breadcrumb />

        <PackageDescription {...packageDescriptionProps} />

        <PackageCard
          region="West India"
          heading="Goa Beach Getaway"
          subheading="Beaches and Nightlife"
          location="Goa"
          currency="INR"
          originalPrice={52097}
          discountedPrice={38590}
          days={4}
          nights={3}
          inclusions={[
            "Resort Stay",
            "Airport Transfers",
            "Breakfast",
            "Celebrate",
          ]}
          image="https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg"
          url="/packages/goa-beach-getaway"
        />
      </div>
    </div>
  );
};

export default PackageSection;
