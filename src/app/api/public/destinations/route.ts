import { NextResponse } from "next/server";
import { fetchDestinationsData } from "@/lib/data/destinationsData";

export async function GET() {
  const data = await fetchDestinationsData();
  return NextResponse.json(data, { status: 200 });
}
