import Link from "next/link";
import { fetchPlpDataAction } from "@/lib/actions/fetchPlpData";
import HeroSection from "@/sections/packages/HeroSection";
import PLPSection from "@/sections/packages/PLPSection";

interface PageProps {
  params: Promise<{ plpSegments: string[] }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function PlpPage({ params, searchParams }: PageProps) {
  try {
    const { plpSegments } = await params;
    const resolvedSearchParams = await searchParams;
    const packageURL = "/" + plpSegments.join("/");

    const pageData = await fetchPlpDataAction(packageURL, resolvedSearchParams);

    return (
      <main role="main">
        <HeroSection
          packageImageUrl={pageData.backgroundImage}
          average_duration="5 - 7 days"
          basePrice={48921}
          userRating={{
            rating: 4.2,
            count: 7023,
          }}
        />
        <PLPSection pageData={pageData} />
      </main>
    );
  } catch (error) {
    console.error("PLP Page Error:", error);

    return (
      <div className="flex flex-col justify-center items-center min-h-[400px] text-center">
        <h1 className="mb-4 font-bold text-2xl">Page Not Found</h1>
        <p className="mb-4 text-gray-600">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <Link
          href="/"
          className="bg-goldentainoi hover:bg-koromiko px-4 py-2 rounded text-black transition-colors"
        >
          Go Home
        </Link>
      </div>
    );
  }
}
