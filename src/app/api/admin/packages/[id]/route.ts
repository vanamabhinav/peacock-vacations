import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Package from '@/models/Package';
import { revalidatePath } from 'next/cache';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await dbConnect();
        const { id } = await params;
        const pkg = await Package.findById(id);
        if (!pkg) {
            return NextResponse.json({ message: 'Package not found' }, { status: 404 });
        }
        return NextResponse.json(pkg);
    } catch (error) {
        console.error('Error fetching package:', error);
        return NextResponse.json({ message: 'Error fetching package' }, { status: 500 });
    }
}

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await dbConnect();
        const { id } = await params;
        const data = await request.json();

        console.log(`Updating package ${id}...`);

        const pkg = await Package.findById(id);

        if (!pkg) {
            console.log(`Package ${id} not found`);
            return NextResponse.json({ message: 'Package not found' }, { status: 404 });
        }

        // Deep merge data into pkg
        Object.assign(pkg, data);

        // Explicitly mark price as modified if it's nested
        pkg.markModified('price');

        await pkg.save();

        console.log(`Successfully saved package ${id}`);
        revalidatePath('/');
        return NextResponse.json(pkg);
    } catch (error: any) {
        console.error('Error updating package:', error);
        if (error.code === 11000) {
            return NextResponse.json({ message: 'Slug already exists' }, { status: 400 });
        }
        return NextResponse.json({ message: 'Error updating package' }, { status: 500 });
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await dbConnect();
        const { id } = await params;

        const deletedPackage = await Package.findByIdAndDelete(id);
        if (!deletedPackage) {
            return NextResponse.json({ message: 'Package not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Package deleted successfully' });
    } catch (error) {
        console.error('Error deleting package:', error);
        return NextResponse.json({ message: 'Error deleting package' }, { status: 500 });
    }
}
