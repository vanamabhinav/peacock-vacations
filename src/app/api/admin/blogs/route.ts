import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Blog from '@/models/Blog';
import { requireAdmin } from '@/lib/admin-auth';

export async function GET() {
    const auth = await requireAdmin();
    if (auth instanceof NextResponse) return auth;

    try {
        await dbConnect();
        const blogs = await Blog.find({}).sort({ createdAt: -1 });
        return NextResponse.json(blogs);
    } catch (error: any) {
        console.error('Error fetching blogs:', error);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

export async function POST(request: Request) {
    const auth = await requireAdmin();
    if (auth instanceof NextResponse) return auth;

    try {
        await dbConnect();
        const data = await request.json();

        // Basic validation
        if (!data.title || !data.slug) {
            return NextResponse.json({ message: 'Title and Slug are required' }, { status: 400 });
        }

        const newBlog = await Blog.create(data);
        return NextResponse.json(newBlog, { status: 201 });
    } catch (error: any) {
        console.error('Error creating blog:', error);
        if (error.code === 11000) {
            return NextResponse.json({ message: 'Slug already exists' }, { status: 400 });
        }
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
