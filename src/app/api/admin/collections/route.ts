import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import CollectionModel from '@/models/Collection';

// GET /api/admin/collections — list all collections
export async function GET() {
    try {
        await dbConnect();
        const collections = await CollectionModel.find({})
            .sort({ createdAt: -1 })
            .lean();
        return NextResponse.json(JSON.parse(JSON.stringify(collections)));
    } catch (error) {
        console.error('GET /api/admin/collections error:', error);
        return NextResponse.json({ error: 'Failed to fetch collections' }, { status: 500 });
    }
}

// POST /api/admin/collections — create a new collection
export async function POST(req: NextRequest) {
    try {
        await dbConnect();
        const body = await req.json();
        const { name, slug, description, bannerImage, packageIds, isPublished, navIcon, navImage } = body;

        if (!name || !slug) {
            return NextResponse.json({ error: 'name and slug are required' }, { status: 400 });
        }

        const existing = await CollectionModel.findOne({ slug });
        if (existing) {
            return NextResponse.json({ error: 'A collection with this slug already exists' }, { status: 409 });
        }

        const collection = await CollectionModel.create({
            name,
            slug,
            description: description || '',
            bannerImage: bannerImage || '',
            packageIds: packageIds || [],
            isPublished: isPublished ?? true,
            navIcon: navIcon || '',
            navImage: navImage || '',
        });

        return NextResponse.json(JSON.parse(JSON.stringify(collection)), { status: 201 });
    } catch (error) {
        console.error('POST /api/admin/collections error:', error);
        return NextResponse.json({ error: 'Failed to create collection' }, { status: 500 });
    }
}
