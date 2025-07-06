"use server";
import { DestinationsData } from "@/types";
import { fetchDestinationsData } from "../data/destinationsData";

export async function getDestinationsAction(): Promise<DestinationsData> {
  return fetchDestinationsData();
}
