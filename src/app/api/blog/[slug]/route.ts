import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Blog from '@/models/Blog';

export async function GET(
    request: Request,
    { params }: { params: { slug: string } }
) {
    try {
        const { slug } = await params;
        await dbConnect();

        const blog = await Blog.findOne({ slug });

        if (!blog) {
            return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
        }

        return NextResponse.json(blog);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
