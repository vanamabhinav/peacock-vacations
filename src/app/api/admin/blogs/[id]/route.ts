import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Blog from '@/models/Blog';
import { requireAdmin } from '@/lib/admin-auth';

type RouteContext = { params: Promise<{ id: string }> };

export async function GET(
    _request: Request,
    context: RouteContext
) {
    const auth = await requireAdmin();
    if (auth instanceof NextResponse) return auth;

    try {
        const { id } = await context.params;
        await dbConnect();
        const blog = await Blog.findById(id);
        if (!blog) {
            return NextResponse.json({ message: 'Blog not found' }, { status: 404 });
        }
        return NextResponse.json(blog);
    } catch (error: unknown) {
        const msg = error instanceof Error ? error.message : 'Unknown error';
        return NextResponse.json({ message: msg }, { status: 500 });
    }
}

export async function PUT(
    request: Request,
    context: RouteContext
) {
    const auth = await requireAdmin();
    if (auth instanceof NextResponse) return auth;

    try {
        const { id } = await context.params;
        await dbConnect();
        const data = await request.json();

        // Sanitize: strip MongoDB operator keys to prevent operator injection
        const sanitized = Object.fromEntries(
            Object.entries(data).filter(([key]) => !key.startsWith('$'))
        );

        const updatedBlog = await Blog.findByIdAndUpdate(id, { $set: sanitized }, { new: true });
        if (!updatedBlog) {
            return NextResponse.json({ message: 'Blog not found' }, { status: 404 });
        }
        return NextResponse.json(updatedBlog);
    } catch (error: unknown) {
        const msg = error instanceof Error ? error.message : 'Unknown error';
        return NextResponse.json({ message: msg }, { status: 500 });
    }
}

export async function DELETE(
    _request: Request,
    context: RouteContext
) {
    const auth = await requireAdmin();
    if (auth instanceof NextResponse) return auth;

    try {
        const { id } = await context.params;
        await dbConnect();
        const deletedBlog = await Blog.findByIdAndDelete(id);
        if (!deletedBlog) {
            return NextResponse.json({ message: 'Blog not found' }, { status: 404 });
        }
        return NextResponse.json({ message: 'Blog deleted successfully' });
    } catch (error: unknown) {
        const msg = error instanceof Error ? error.message : 'Unknown error';
        return NextResponse.json({ message: msg }, { status: 500 });
    }
}
