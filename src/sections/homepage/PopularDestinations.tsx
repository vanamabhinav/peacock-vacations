import PopularDestinationsClient from "@/components/client/PopularDestinationsClient";
import { PopularDestinationsSectionData } from "@/types";

export default async function PopularDestinations({
  heading,
  subheading,
  data,
}: PopularDestinationsSectionData) {
  const selectedMonth = "January";

  return (
    <PopularDestinationsClient
      heading={heading}
      subheading={subheading}
      initialData={data}
      initialMonth={selectedMonth}
    />
  );
}
