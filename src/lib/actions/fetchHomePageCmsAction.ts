"use server";
import { HomePageData } from "@/types";
import { fetchHomePageCmsData } from "../data/cms/HomePageCmsData";

export async function fetchHomePageCmsDataAction(): Promise<HomePageData> {
  try {
    const data = await fetchHomePageCmsData();
    return data;
  } catch (error) {
    console.error("Error fetching home page CMS data:", error);
    throw new Error("Failed to fetch home page data");
  }
}
