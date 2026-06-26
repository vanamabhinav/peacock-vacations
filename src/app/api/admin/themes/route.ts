import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import dbConnect from '@/lib/mongodb';
import Package, { IPackage } from '@/models/Package';
import CMSContent from '@/models/CMSContent';
import { revalidatePath } from 'next/cache';
import { requireAdmin } from '@/lib/admin-auth';

export async function GET(request: Request) {
    const auth = await requireAdmin();
    if (auth instanceof NextResponse) return auth;

    try {
        const { searchParams } = new URL(request.url);
        const theme = searchParams.get('theme');

        await dbConnect();

        if (!theme) {
            return NextResponse.json({ message: 'Theme is required' }, { status: 400 });
        }

        // Find packages tagged with this theme OR explicitly featured in it
        const packages = await Package.find({
            $or: [
                { themes: { $in: [theme] } },
                { featuredInThemes: { $in: [theme] } }
            ]
        }).lean();

        // Fetch CMS data to get the custom order
        const cmsContent = await CMSContent.findOne({ pageKey: 'home', sectionKey: 'travelByThemeSectionData' });
        const packageOrder = cmsContent?.data?.packageOrders?.[theme] || [];

        // Sort manually by packageOrder first, then fallback
        const sortedPackages = packages.sort((a: any, b: any) => {
            const indexA = packageOrder.indexOf(a._id.toString());
            const indexB = packageOrder.indexOf(b._id.toString());

            // If both in ordered list, follow the list
            if (indexA !== -1 && indexB !== -1) return indexA - indexB;
            // If only one in list, it comes first
            if (indexA !== -1) return -1;
            if (indexB !== -1) return 1;

            // Fallback to creation date
            return (new Date(b.createdAt).getTime()) - (new Date(a.createdAt).getTime());
        });

        return NextResponse.json(sortedPackages);
    } catch (error: any) {
        console.error('Error fetching theme packages:', error);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    const auth = await requireAdmin();
    if (auth instanceof NextResponse) return auth;

    try {
        await dbConnect();
        const { theme, packageIds } = await request.json();

        if (!theme || !Array.isArray(packageIds)) {
            return NextResponse.json({ message: 'Invalid data format' }, { status: 400 });
        }

        const objectIds = packageIds.map(id => new mongoose.Types.ObjectId(id));

        // 1. Update CMS Content with the new order
        let cmsContent = await CMSContent.findOne({ pageKey: 'home', sectionKey: 'travelByThemeSectionData' });
        if (cmsContent) {
            const newData = { ...cmsContent.data };
            if (!newData.packageOrders) newData.packageOrders = {};
            newData.packageOrders[theme] = packageIds;
            cmsContent.data = newData;
            cmsContent.markModified('data');
            await cmsContent.save();
        }

        // 2. Sync Package metadata (themes, featuredInThemes AND themeSortOrder)
        // 2.a Remove this theme from packages NOT in the provided list
        await Package.updateMany(
            {
                $or: [
                    { themes: { $in: [theme] } },
                    { featuredInThemes: { $in: [theme] } }
                ],
                _id: { $nin: objectIds }
            },
            {
                $pull: { themes: theme, featuredInThemes: theme },
                $unset: { [`themeSortOrder.${theme}`]: "" }
            }
        );

        // 2.b Update selected packages with their NEW order
        if (packageIds.length > 0) {
            for (let i = 0; i < packageIds.length; i++) {
                const pkgId = packageIds[i];
                const pkg = await Package.findById(pkgId);
                if (pkg) {
                    if (!pkg.themeSortOrder) pkg.themeSortOrder = new Map();
                    pkg.themeSortOrder.set(theme, i + 1);

                    if (!pkg.featuredInThemes.includes(theme)) {
                        pkg.featuredInThemes.push(theme);
                    }
                    if (!pkg.themes.includes(theme)) {
                        pkg.themes.push(theme);
                    }

                    pkg.markModified('themeSortOrder');
                    await pkg.save();
                }
            }
        }

        revalidatePath('/');

        return NextResponse.json({ message: `Packages for ${theme} updated successfully` });
    } catch (error: any) {
        console.error('Error updating theme packages:', error);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
