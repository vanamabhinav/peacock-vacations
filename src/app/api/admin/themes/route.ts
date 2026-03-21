import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import dbConnect from '@/lib/mongodb';
import Package from '@/models/Package';

export async function GET(request: Request) {
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
        }).sort({ createdAt: -1 });

        return NextResponse.json(packages);
    } catch (error: any) {
        console.error('Error fetching theme packages:', error);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    try {
        await dbConnect();
        const { theme, packageIds } = await request.json();

        if (!theme || !Array.isArray(packageIds)) {
            return NextResponse.json({ message: 'Invalid data format' }, { status: 400 });
        }

        const objectIds = packageIds.map(id => new mongoose.Types.ObjectId(id));

        // 1. Remove this theme from 'themes' and 'featuredInThemes' for all packages NOT in the provided list
        // BUT only if they currently have that theme
        await Package.updateMany(
            {
                $or: [
                    { themes: { $in: [theme] } },
                    { featuredInThemes: { $in: [theme] } }
                ],
                _id: { $nin: objectIds }
            },
            { $pull: { themes: theme, featuredInThemes: theme } }
        );

        // 2. Add this theme to BOTH 'themes' and 'featuredInThemes' for the selected packages
        if (packageIds.length > 0) {
            await Package.updateMany(
                { _id: { $in: objectIds } },
                { $addToSet: { themes: theme, featuredInThemes: theme } }
            );
        }

        return NextResponse.json({ message: `Packages for ${theme} updated successfully` });
    } catch (error: any) {
        console.error('Error updating theme packages:', error);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
