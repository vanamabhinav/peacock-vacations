import dbConnect from "@/lib/mongodb";
import PackageModel from "@/models/Package";
import { PackageFilters, Package } from "@/types/packages/package";

export async function getFilteredPackagesFromDb(filters: PackageFilters): Promise<Package[]> {
    await dbConnect();

    let query: any = { isPublished: true };

    if (filters.cityName?.length) {
        query["destination.cityName"] = { $in: filters.cityName };
    }
    if (filters.district?.length) {
        query["destination.district"] = { $in: filters.district };
    }
    if (filters.stateName?.length) {
        query["destination.stateName"] = { $in: filters.stateName };
    }
    if (filters.region?.length) {
        query.region = { $in: filters.region };
    }
    if (filters.countryName?.length) {
        query["destination.countryName"] = { $in: filters.countryName };
    }

    if (filters.search) {
        query.$or = [
            ...(query.$or || []),
            { 'destination.cityName': { $regex: filters.search, $options: 'i' } },
            { 'destination.stateName': { $regex: filters.search, $options: 'i' } },
            { title: { $regex: filters.search, $options: 'i' } },
            { category: { $regex: filters.search, $options: 'i' } },
            { themes: { $regex: filters.search, $options: 'i' } }
        ];
    }

    if (filters.minPrice || filters.maxPrice) {
        query["price.discountedAmount"] = {};
        if (filters.minPrice) query["price.discountedAmount"].$gte = filters.minPrice;
        if (filters.maxPrice) query["price.discountedAmount"].$lte = filters.maxPrice;
    }
    if (filters.themes?.length) {
        query.themes = { $in: filters.themes };
    }
    if (filters.packageTypes?.length) {
        query.packageType = { $in: filters.packageTypes };
    }
    if (filters.minDays || filters.maxDays) {
        query["duration.days"] = {};
        if (filters.minDays) query["duration.days"].$gte = filters.minDays;
        if (filters.maxDays) query["duration.days"].$lte = filters.maxDays;
    }
    if (filters.departureCity?.length) {
        query.departureCity = { $in: filters.departureCity };
    }
    if (filters.packageIds?.length) {
        query._id = { $in: filters.packageIds };
    }

    const data = await PackageModel.find(query).sort({ createdAt: -1 });
    return JSON.parse(JSON.stringify(data));
}

export async function getPackageBySlugFromDb(slug: string): Promise<Package | null> {
    await dbConnect();
    const pkg = await PackageModel.findOne({ slug, isPublished: true });
    return pkg ? JSON.parse(JSON.stringify(pkg)) : null;
}
