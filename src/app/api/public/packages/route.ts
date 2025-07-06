import { fetchPackagesData } from "@/lib/data/packagesData";
import { PackageData } from "@/types";
import { NextResponse } from "next/server";

export async function GET() {
  const data: PackageData[] = await fetchPackagesData();
  return NextResponse.json(data, { status: 200 });
}
