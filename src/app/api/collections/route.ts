import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import CollectionModel from '@/models/Collection';

// GET /api/collections — public listing of published collections
export async function GET() {
    try {
        await dbConnect();
        const collections = await CollectionModel.find({ isPublished: true })
            .select('name slug navIcon navImage description')
            .lean();
        return NextResponse.json(JSON.parse(JSON.stringify(collections)));
    } catch (error) {
        console.error('GET /api/collections error:', error);
        return NextResponse.json({ error: 'Failed to fetch collections' }, { status: 500 });
    }
}
