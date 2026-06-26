import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Package from '@/models/Package';
import { revalidatePath } from 'next/cache';
import { requireAdmin } from '@/lib/admin-auth';

export async function GET() {
    const auth = await requireAdmin();
    if (auth instanceof NextResponse) return auth;

    try {
        await dbConnect();
        const packages = await Package.find().sort({ createdAt: -1 });
        return NextResponse.json(packages);
    } catch (error) {
        console.error('Error fetching packages:', error);
        return NextResponse.json({ message: 'Error fetching packages' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    const auth = await requireAdmin();
    if (auth instanceof NextResponse) return auth;

    try {
        await dbConnect();
        const data = await request.json();

        // Basic validation for required fields
        if (!data.title || !data.slug || !data.shortDescription || !data.longDescription) {
            return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
        }

        const newPackage = new Package(data);
        await newPackage.save();

        revalidatePath('/');
        return NextResponse.json(newPackage, { status: 201 });
    } catch (error: any) {
        console.error('Error creating package:', error);
        if (error.code === 11000) {
            return NextResponse.json({ message: 'Slug already exists' }, { status: 400 });
        }
        return NextResponse.json({ message: 'Error creating package' }, { status: 500 });
    }
}
