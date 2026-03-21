"use server";

import { getPackageBySlugFromDb } from "@/lib/services/packageService";
import { IPackage } from "@/models/Package";

export async function fetchSinglePackageAction(slug: string): Promise<IPackage | null> {
    try {
        const pkg = await getPackageBySlugFromDb(slug);
        return pkg as IPackage | null;
    } catch (err) {
        console.error(`Error fetching package with slug ${slug}:`, err);
        throw new Error("Failed to fetch package data");
    }
}
