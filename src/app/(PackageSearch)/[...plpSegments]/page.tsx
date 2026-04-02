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
  const { plpSegments } = await params;
  const resolvedSearchParams = await searchParams;
  const packageURL = "/" + plpSegments.join("/");

  const pageData = await fetchPlpDataAction(packageURL, resolvedSearchParams);

  // Handle null/not found case
  if (!pageData) {
    return (
      <main
        role="main"
        className="flex flex-col justify-center items-center bg-provincialpink px-4 min-h-screen"
      >
        <div className="flex flex-col items-center mx-auto max-w-md text-center">
          <div className="mb-8">
            <h1 className="mb-4 font-bold text-bigstone text-6xl">404</h1>
            <h2 className="mb-2 font-semibold text-bigstone text-2xl">
              Page Not Found
            </h2>
            <p className="mb-6 text-codgrey text-lg leading-relaxed">
              Sorry, we couldn&apos;t find the travel destination you&apos;re
              looking for. The page may have been moved or doesn&apos;t exist.
            </p>
          </div>

          <div className="flex sm:flex-row flex-col gap-4 w-full">
            <Link
              href="/"
              className="flex justify-center items-center bg-bigstone hover:bg-bigstone/90 px-6 py-3 rounded-lg font-medium text-white transition-colors"
            >
              Go Home
            </Link>
            <Link
              href="/india/c"
              className="flex justify-center items-center bg-white hover:bg-gray-50 px-6 py-3 border border-bigstone rounded-lg font-medium text-bigstone transition-colors"
            >
              Browse All Packages
            </Link>
          </div>

          <p className="mt-6 text-codgrey text-sm">
            Need help?{" "}
            <Link href="/contact" className="text-william hover:underline">
              Contact our support team
            </Link>
          </p>
        </div>
      </main>
    );
  }

  // Render normal page if data exists
  try {
    const plpSeoFooterData = await fetchPlpSeoFooterAction();
    const testimonialSectionData = await fetchTestimonialData();

    return (
      <main role="main">
        <HeroSection
          packageImageUrl={pageData.backgroundImage}
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

    // Fallback error page
    return (
      <main
        role="main"
        className="flex flex-col justify-center items-center bg-provincialpink px-4 min-h-screen"
      >
        <div className="flex flex-col items-center mx-auto max-w-md text-center">
          <h1 className="mb-4 font-bold text-bigstone text-2xl">
            Something went wrong
          </h1>
          <p className="mb-4 text-codgrey">
            We encountered an error while loading this page.
          </p>
          <Link
            href="/"
            className="bg-bigstone hover:bg-bigstone/90 px-6 py-3 rounded-lg font-medium text-white transition-colors"
          >
            Go Home
          </Link>
        </div>
      </main>
    );
  }
}
