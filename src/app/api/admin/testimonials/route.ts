import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Testimonial from '@/models/Testimonial';
import { requireAdmin } from '@/lib/admin-auth';

export async function GET() {
    const auth = await requireAdmin();
    if (auth instanceof NextResponse) return auth;

    try {
        await dbConnect();
        const testimonials = await Testimonial.find({}).sort({ createdAt: -1 });
        return NextResponse.json(testimonials);
    } catch (error: unknown) {
        console.error('Error fetching testimonials:', error);
        return NextResponse.json({ message: 'Error fetching testimonials' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    const auth = await requireAdmin();
    if (auth instanceof NextResponse) return auth;

    try {
        await dbConnect();
        const data = await request.json();

        const testimonial = new Testimonial(data);
        const savedTestimonial = await testimonial.save();

        return NextResponse.json(savedTestimonial, { status: 201 });
    } catch (error: unknown) {
        console.error('Error creating testimonial:', error);
        return NextResponse.json({ message: 'Error creating testimonial' }, { status: 500 });
    }
}
