import { fetchHomePageCmsData } from "@/lib/data/cms/HomePageCmsData";
import { HomePageData } from "@/types";
import { NextResponse } from "next/server";

export async function GET() {
  const data: HomePageData = await fetchHomePageCmsData();
  return NextResponse.json(data);
}
