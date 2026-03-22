import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Package from '@/models/Package';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const destination = searchParams.get('destination');
        const theme = searchParams.get('theme');
        const search = searchParams.get('search');
        const minPrice = searchParams.get('minPrice');
        const maxPrice = searchParams.get('maxPrice');

        await dbConnect();

        let query: any = { isPublished: true };

        if (destination) {
            query.$or = [
                { 'destination.cityName': { $regex: destination, $options: 'i' } },
                { 'destination.stateName': { $regex: destination, $options: 'i' } },
                { title: { $regex: destination, $options: 'i' } }
            ];
        }

        if (search) {
            query.$or = [
                ...(query.$or || []),
                { 'destination.cityName': { $regex: search, $options: 'i' } },
                { 'destination.stateName': { $regex: search, $options: 'i' } },
                { title: { $regex: search, $options: 'i' } },
                { category: { $regex: search, $options: 'i' } },
                { themes: { $regex: search, $options: 'i' } }
            ];
        }

        if (theme) {
            query.themes = { $in: [theme] };
        }
        if (minPrice || maxPrice) {
            query['price.discountedAmount'] = {};
            if (minPrice) query['price.discountedAmount'].$gte = Number(minPrice);
            if (maxPrice) query['price.discountedAmount'].$lte = Number(maxPrice);
        }

        const packages = await Package.find(query).sort({ createdAt: -1 });

        return NextResponse.json(packages);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
