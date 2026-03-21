import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Blog from '@/models/Blog';

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        await dbConnect();
        const blog = await Blog.findById(params.id);
        if (!blog) {
            return NextResponse.json({ message: 'Blog not found' }, { status: 404 });
        }
        return NextResponse.json(blog);
    } catch (error: any) {
        console.error('Error fetching blog:', error);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

export async function PUT(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        await dbConnect();
        const data = await request.json();

        const updatedBlog = await Blog.findByIdAndUpdate(params.id, data, { new: true });
        if (!updatedBlog) {
            return NextResponse.json({ message: 'Blog not found' }, { status: 404 });
        }
        return NextResponse.json(updatedBlog);
    } catch (error: any) {
        console.error('Error updating blog:', error);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        await dbConnect();
        const deletedBlog = await Blog.findByIdAndDelete(params.id);
        if (!deletedBlog) {
            return NextResponse.json({ message: 'Blog not found' }, { status: 404 });
        }
        return NextResponse.json({ message: 'Blog deleted successfully' });
    } catch (error: any) {
        console.error('Error deleting blog:', error);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
