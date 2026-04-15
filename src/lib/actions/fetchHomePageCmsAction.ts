"use server";
import { HomePageData } from "@/types";
import dbConnect from "@/lib/mongodb";
import CMSContent from "@/models/CMSContent";
import PackageModel from "@/models/Package";
import { mapIPackagesToPackageData } from "../utils/packageMapper";
import { fetchTestimonialData } from "./fetchTestimonialData";

export async function fetchHomePageCmsDataAction(): Promise<HomePageData> {
  try {
    await dbConnect();
    const contents = await CMSContent.find({ pageKey: "home" });

    // Reduce sections into a single HomePageData object
    const data = contents.reduce((acc: any, curr: any) => {
      acc[curr.sectionKey as keyof HomePageData] = curr.data;
      return acc;
    }, {} as HomePageData);

    // Defensive fix for Visa Assistance link
    if (data.visaAssistanceSectionData && (data.visaAssistanceSectionData.ctaLink === "#" || data.visaAssistanceSectionData.ctaLink === "/visa-assistance" || !data.visaAssistanceSectionData.ctaLink)) {
      data.visaAssistanceSectionData.ctaLink = "/visa-process";
    }

    // Fetch featured packages for the "Popular Packages" section
    let livePackages = await PackageModel.find({ isPublished: true, showOnHome: true })
      .sort({ homePageSortOrder: 1 })
      .limit(8);

    // Fallback if no packages are explicitly featured
    if (livePackages.length === 0) {
      livePackages = await PackageModel.find({ isPublished: true })
        .limit(8)
        .sort({ createdAt: -1 });
    }

    if (data.popularPackagesSectionData) {
      data.popularPackagesSectionData.data = mapIPackagesToPackageData(livePackages);
    }

    // Fetch theme packages for the "Travel by Theme" section
    if (data.travelByThemeSectionData) {
      const themes = data.travelByThemeSectionData.themes || [];

      // 1. Fetch ALL packages featured in themes (priority)
      const featuredThemePackages = await PackageModel.find({
        isPublished: true,
        featuredInThemes: { $exists: true, $not: { $size: 0 } }
      }).lean();

      // 2. Fetch ALL packages tagged with these themes (fallback/variety)
      const taggedThemePackages = await PackageModel.find({
        isPublished: true,
        themes: { $in: themes },
        _id: { $nin: featuredThemePackages.map((p: any) => p._id) }
      }).limit(100).sort({ createdAt: -1 }).lean();

      const allThemePackagesRaw = [...featuredThemePackages, ...taggedThemePackages];

      const packageOrders = data.travelByThemeSectionData.packageOrders || {};

      data.travelByThemeSectionData.packages = allThemePackagesRaw.map((pkg: any) => ({
        _id: pkg._id.toString(),
        title: pkg.title,
        description: pkg.tagline || pkg.shortDescription,
        image: pkg.mainImageUrl,
        ctaText: "View Details",
        ctaLink: `/packages/${pkg.slug}`,
        theme: [...new Set([...(pkg.themes || []), ...(pkg.featuredInThemes || [])])],
        themeSortOrder: pkg.themeSortOrder || {}
      }));

      // NOTE: We do not sort the entire array globally here because 
      // the client needs to filter first. But the client-side sorting 
      // will use the packageOrders we just ensured is in the data.
    }

    // Fetch dynamic testimonials from the Testimonial DB model, replacing any static CMS entry
    data.testimonialsSectionData = await fetchTestimonialData();

    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    console.error("Error fetching home page CMS data from MongoDB:", error);
    throw new Error("Failed to fetch home page data");
  }
}
