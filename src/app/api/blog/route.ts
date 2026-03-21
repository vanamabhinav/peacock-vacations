import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Blog from '@/models/Blog';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const category = searchParams.get('category');
        const tag = searchParams.get('tag');

        await dbConnect();

        let query: any = {};

        if (category && category !== 'All') {
            query.category = { $regex: category, $options: 'i' };
        }
        if (tag) {
            query.tags = { $in: [tag] };
        }

        const blogs = await Blog.find(query).sort({ createdAt: -1 });

        return NextResponse.json(blogs);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
