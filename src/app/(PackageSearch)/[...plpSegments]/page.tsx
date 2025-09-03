import Link from "next/link";
import { fetchPlpDataAction } from "@/lib/actions/fetchPlpAction";
import HeroSection from "@/sections/packages/HeroSection";
import PLPSection from "@/sections/packages/PLPSection";
import { fetchPlpSeoFooterAction } from "@/lib/actions/fetchPlpSeoFooterAction";
import { LinkSection } from "@/sections/global/Footer";
import TestimonialsSection from "@/sections/homepage/TestimonialsSection";
import { fetchTestimonialData } from "@/lib/actions/fetchTestimonialData";

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

    const plpSeoFooterData = await fetchPlpSeoFooterAction();

    const testimonialSectionData = await fetchTestimonialData();

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

        <TestimonialsSection
          {...testimonialSectionData}
          className="bg-provincialpink"
        />
        <div className="bg-provincialpink px-4 py-6 w-full">
          <div className="flex flex-col gap-6 mx-auto w-full max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-7xl">
            <nav
              aria-label="Related Travel Options"
              className="divide-y-[1px] divide-silver"
            >
              {plpSeoFooterData.map(({ title, links, isFooter }, idx) => {
                return (
                  <LinkSection
                    key={idx}
                    title={title}
                    links={links}
                    isFooter={isFooter}
                  />
                );
              })}
            </nav>
          </div>
        </div>
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
