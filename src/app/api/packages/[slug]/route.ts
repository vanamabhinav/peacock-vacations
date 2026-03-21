import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Package from '@/models/Package';

export async function GET(
    request: Request,
    { params }: { params: { slug: string } }
) {
    try {
        const { slug } = await params;
        await dbConnect();

        const pkg = await Package.findOne({ slug, isPublished: true });

        if (!pkg) {
            return NextResponse.json({ error: 'Package not found' }, { status: 404 });
        }

        return NextResponse.json(pkg);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
