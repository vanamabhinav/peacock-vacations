import { getDestinationsAction } from "@/lib/actions/destinations";
import PopularDestinationsClient from "@/components/client/PopularDestinationsClient";

export default async function PopularDestinations() {
  const selectedMonth = "January";

  // Fetch data on server side
  const initialData = await getDestinationsAction();

  return (
    <PopularDestinationsClient
      initialData={initialData}
      initialMonth={
        selectedMonth.charAt(0).toUpperCase() + selectedMonth.slice(1)
      }
    />
  );
}
