import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Package from '@/models/Package';

export async function GET() {
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
    try {
        await dbConnect();
        const data = await request.json();

        // Basic validation for required fields
        if (!data.title || !data.slug || !data.shortDescription || !data.longDescription) {
            return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
        }

        const newPackage = new Package(data);
        await newPackage.save();

        return NextResponse.json(newPackage, { status: 201 });
    } catch (error: any) {
        console.error('Error creating package:', error);
        if (error.code === 11000) {
            return NextResponse.json({ message: 'Slug already exists' }, { status: 400 });
        }
        return NextResponse.json({ message: 'Error creating package' }, { status: 500 });
    }
}
