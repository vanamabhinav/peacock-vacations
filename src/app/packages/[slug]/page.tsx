import { fetchSinglePackageAction } from "@/lib/actions/fetchSinglePackageAction";
import { Itinerary } from "@/sections/itinerary";
import { notFound } from "next/navigation";
import { IPackage } from "@/models/Package";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function PackageDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const packageData = await fetchSinglePackageAction(slug);

    if (!packageData) {
        notFound();
    }

    return (
        <div className="w-full bg-[#f9f9f9]">
            <Itinerary packageData={packageData} />
        </div>
    );
}
