import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import CMSContent from '@/models/CMSContent';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const pageKey = searchParams.get('pageKey');
        const sectionKey = searchParams.get('sectionKey');

        await dbConnect();

        let query: any = {};
        if (pageKey) query.pageKey = pageKey;
        if (sectionKey) query.sectionKey = sectionKey;

        const content = await CMSContent.find(query);

        return NextResponse.json(content);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const { pageKey, sectionKey, data } = await request.json();

        if (!pageKey || !sectionKey || !data) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        await dbConnect();

        const content = await CMSContent.findOneAndUpdate(
            { pageKey, sectionKey },
            { data },
            { upsert: true, new: true }
        );

        return NextResponse.json(content);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
