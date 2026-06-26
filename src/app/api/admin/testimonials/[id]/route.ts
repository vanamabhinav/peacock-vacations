import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Testimonial from '@/models/Testimonial';
import { requireAdmin } from '@/lib/admin-auth';

type RouteContext = { params: Promise<{ id: string }> };

export async function GET(
    _request: Request,
    context: RouteContext
) {
    const auth = await requireAdmin();
    if (auth instanceof NextResponse) return auth;

    try {
        await dbConnect();
        const { id } = await context.params;
        const testimonial = await Testimonial.findById(id);
        if (!testimonial) {
            return NextResponse.json({ message: 'Testimonial not found' }, { status: 404 });
        }
        return NextResponse.json(testimonial);
    } catch (error: unknown) {
        console.error('Error fetching testimonial:', error);
        return NextResponse.json({ message: 'Error fetching testimonial' }, { status: 500 });
    }
}

export async function PUT(
    request: Request,
    context: RouteContext
) {
    const auth = await requireAdmin();
    if (auth instanceof NextResponse) return auth;

    try {
        await dbConnect();
        const { id } = await context.params;
        const data = await request.json();

        const updatedTestimonial = await Testimonial.findByIdAndUpdate(id, data, { new: true, runValidators: true });
        if (!updatedTestimonial) {
            return NextResponse.json({ message: 'Testimonial not found' }, { status: 404 });
        }

        return NextResponse.json(updatedTestimonial);
    } catch (error: unknown) {
        console.error('Error updating testimonial:', error);
        return NextResponse.json({ message: 'Error updating testimonial' }, { status: 500 });
    }
}

export async function DELETE(
    _request: Request,
    context: RouteContext
) {
    const auth = await requireAdmin();
    if (auth instanceof NextResponse) return auth;

    try {
        await dbConnect();
        const { id } = await context.params;

        const deletedTestimonial = await Testimonial.findByIdAndDelete(id);
        if (!deletedTestimonial) {
            return NextResponse.json({ message: 'Testimonial not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Testimonial deleted successfully' });
    } catch (error: unknown) {
        console.error('Error deleting testimonial:', error);
        return NextResponse.json({ message: 'Error deleting testimonial' }, { status: 500 });
    }
}
