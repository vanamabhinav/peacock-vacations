import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Package from '@/models/Package';

export async function GET() {
    try {
        await dbConnect();
        const featuredPackages = await Package.find({ showOnHome: true }).sort({ homePageSortOrder: 1 });
        return NextResponse.json(featuredPackages);
    } catch (error) {
        console.error('Error fetching homepage packages:', error);
        return NextResponse.json({ message: 'Error fetching homepage packages' }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    try {
        await dbConnect();
        const { packageIds } = await request.json(); // Array of IDs in order

        if (!Array.isArray(packageIds)) {
            return NextResponse.json({ message: 'Invalid data format' }, { status: 400 });
        }

        // Reset all
        await Package.updateMany({}, { showOnHome: false, homePageSortOrder: 0 });

        // Set new featured ones in order
        const updatePromises = packageIds.map((id, index) =>
            Package.findByIdAndUpdate(id, {
                showOnHome: true,
                homePageSortOrder: index + 1
            })
        );

        await Promise.all(updatePromises);

        return NextResponse.json({ message: 'Homepage updated successfully' });
    } catch (error) {
        console.error('Error updating homepage:', error);
        return NextResponse.json({ message: 'Error updating homepage' }, { status: 500 });
    }
}
