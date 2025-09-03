import PackageCard from "@/components/card/PackageCard";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { DEFAULT_FILTER_OPTIONS } from "@/types/constants/defaults";
import PackageDescription from "./PackageDescription";
import { PackageListingPageData } from "@/types/packages/package";
import PlpFilter from "@/components/client/PlpFilter";
import Pagination from "@/components/ui/Pagination";
import { stateToRegion } from "@/lib/utils/regionMapper";

const PLPSection = ({ pageData }: { pageData: PackageListingPageData }) => {
  const packageCount = pageData.packages?.length || 0;

  return (
    <div className="bg-provincialpink px-4 py-6 w-full">
      <div className="flex flex-col gap-6 mx-auto w-full max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-7xl">
        <Breadcrumb />
        <PackageDescription {...pageData} />

        <div className="gap-6 grid grid-cols-1 lg:grid-cols-6">
          <div className="sticky lg:col-span-2">
            <PlpFilter
              filterOptions={pageData.filterOptions || DEFAULT_FILTER_OPTIONS}
            />
          </div>

          <div className="flex flex-col gap-6 lg:col-span-4">
            {packageCount > 0 ? (
              <>
                {/* Package Cards */}
                <div className="flex flex-col gap-6">
                  {pageData.packages?.map((pkg) => (
                    <PackageCard
                      key={pkg.slug}
                      region={stateToRegion(pkg.destination.stateName, true)}
                      heading={pkg.title}
                      subheading={pkg.tagline || pkg.shortDescription}
                      location={pkg.destination.cityName}
                      currency={pkg.price.currency}
                      originalPrice={pkg.price.originalAmount}
                      discountedPrice={pkg.price.discountedAmount}
                      days={pkg.duration.days}
                      nights={pkg.duration.nights}
                      inclusions={pkg.inclusions.meals}
                      image={pkg.mainImageUrl}
                      url={`/packages/${pkg.slug}`}
                    />
                  ))}
                </div>

                {/* Pagination */}
                {pageData.metadata && pageData.metadata.totalPages > 1 && (
                  <div className="flex justify-center mt-8">
                    <Pagination
                      currentPage={pageData.metadata.currentPage}
                      totalPages={pageData.metadata.totalPages}
                    />
                  </div>
                )}
              </>
            ) : (
              <div className="py-12 text-center">
                <p className="mb-4 text-gray-600">
                  No packages found matching your filters.
                </p>
                <p className="text-gray-500 text-sm">
                  Try adjusting your filters or search criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PLPSection;
