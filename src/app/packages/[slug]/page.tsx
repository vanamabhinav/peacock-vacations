import { fetchSinglePackageAction } from "@/lib/actions/fetchSinglePackageAction";
import { Itinerary } from "@/sections/itinerary";
import { notFound } from "next/navigation";
import { IPackage } from "@/models/Package";
import { fetchPlpDataAction } from "@/lib/actions/fetchPlpAction";
import HeroSection from "@/sections/packages/HeroSection";
import PLPSection from "@/sections/packages/PLPSection";
import { fetchPlpSeoFooterAction } from "@/lib/actions/fetchPlpSeoFooterAction";
import { LinkSection } from "@/sections/global/Footer";
import TestimonialsSection from "@/sections/homepage/TestimonialsSection";
import { fetchTestimonialData } from "@/lib/actions/fetchTestimonialData";
import Link from "next/link";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function PackageDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const packageData = await fetchSinglePackageAction(slug);

    if (!packageData) {
        // Fallback: Check if it's a category/listing page
        const packageURL = "/packages/" + slug;
        const pageData = await fetchPlpDataAction(packageURL);

        if (pageData) {
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
        }

        notFound();
    }

    return (
        <div className="w-full bg-[#f9f9f9]">
            <Itinerary packageData={packageData} />
        </div>
    );
}
