import { getDestinationsAction } from "@/lib/actions/destinations";
import PopularDestinationsClient from "@/components/client/PopularDestinationsClient";

interface PopularDestinationsProps {
  searchParams?: {
    month?: string;
  };
}

export default async function PopularDestinations({
  searchParams,
}: PopularDestinationsProps) {
  const selectedMonth = searchParams?.month || "January";

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
