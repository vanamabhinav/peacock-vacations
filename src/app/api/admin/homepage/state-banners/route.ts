import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import CMSContent from '@/models/CMSContent';
import { requireAdmin } from '@/lib/admin-auth';

export async function GET() {
    const auth = await requireAdmin();
    if (auth instanceof NextResponse) return auth;

    try {
        await dbConnect();
        const content = await CMSContent.findOne({
            pageKey: 'global',
            sectionKey: 'stateBanners'
        });

        return NextResponse.json(content?.data || {});
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    const auth = await requireAdmin();
    if (auth instanceof NextResponse) return auth;

    try {
        const body = await request.json();
        await dbConnect();

        const content = await CMSContent.findOneAndUpdate(
            { pageKey: 'global', sectionKey: 'stateBanners' },
            {
                pageKey: 'global',
                sectionKey: 'stateBanners',
                data: body
            },
            { upsert: true, new: true }
        );

        return NextResponse.json(content.data);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
