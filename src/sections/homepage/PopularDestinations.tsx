import PopularDestinationsClient from "@/components/client/PopularDestinationsClient";
import { PopularDestinationsSectionData } from "@/types";

export default async function PopularDestinations({
  heading,
  subheading,
  data,
  ...rest
}: PopularDestinationsSectionData & any) {
  const currentMonth = new Intl.DateTimeFormat("en-US", {
    month: "long",
  }).format(new Date());

  const initialData = data || rest;

  return (
    <PopularDestinationsClient
      heading={heading}
      subheading={subheading}
      initialData={initialData}
      initialMonth={currentMonth}
    />
  );
}
