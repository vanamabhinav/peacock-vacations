import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import CollectionModel from '@/models/Collection';

// GET /api/admin/collections/[id]
export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        await dbConnect();
        const { id } = await params;
        const collection = await CollectionModel.findById(id).lean();
        if (!collection) {
            return NextResponse.json({ error: 'Not found' }, { status: 404 });
        }
        return NextResponse.json(JSON.parse(JSON.stringify(collection)));
    } catch (error) {
        console.error('GET /api/admin/collections/[id] error:', error);
        return NextResponse.json({ error: 'Failed to fetch collection' }, { status: 500 });
    }
}

// PUT /api/admin/collections/[id]
export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        await dbConnect();
        const { id } = await params;
        const body = await req.json();

        const updated = await CollectionModel.findByIdAndUpdate(
            id,
            {
                $set: {
                    name: body.name,
                    slug: body.slug,
                    description: body.description,
                    bannerImage: body.bannerImage,
                    packageIds: body.packageIds ?? [],
                    isPublished: body.isPublished ?? true,
                },
            },
            { new: true }
        );

        if (!updated) {
            return NextResponse.json({ error: 'Not found' }, { status: 404 });
        }

        return NextResponse.json(JSON.parse(JSON.stringify(updated)));
    } catch (error) {
        console.error('PUT /api/admin/collections/[id] error:', error);
        return NextResponse.json({ error: 'Failed to update collection' }, { status: 500 });
    }
}

// DELETE /api/admin/collections/[id]
export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        await dbConnect();
        const { id } = await params;
        await CollectionModel.findByIdAndDelete(id);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('DELETE /api/admin/collections/[id] error:', error);
        return NextResponse.json({ error: 'Failed to delete collection' }, { status: 500 });
    }
}
