import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import CMSContent from '@/models/CMSContent';
import { revalidatePath } from 'next/cache';

export async function GET() {
    try {
        await dbConnect();
        const content = await CMSContent.findOne({ pageKey: 'home', sectionKey: 'popularDestinationsSectionData' });

        if (!content) {
            return NextResponse.json({ message: 'Popular destinations data not found' }, { status: 404 });
        }

        return NextResponse.json(content.data);
    } catch (error: any) {
        console.error('Error fetching popular destinations:', error);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    try {
        await dbConnect();
        const { selection, destinations, ctaCard, bannerImage } = await request.json();

        if (!selection || !destinations || !ctaCard) {
            return NextResponse.json({ message: 'Invalid data format' }, { status: 400 });
        }

        let content = await CMSContent.findOne({ pageKey: 'home', sectionKey: 'popularDestinationsSectionData' });

        if (!content) {
            return NextResponse.json({ message: 'Popular destinations data not found' }, { status: 404 });
        }

        // Update the specific selection
        const newData = { ...content.data };

        newData[selection.toLowerCase()] = {
            destinations,
            ctaCard,
            bannerImage
        };

        content.data = newData;
        content.markModified('data');
        await content.save();

        revalidatePath('/');

        return NextResponse.json({ message: `Popular destinations for ${selection} updated successfully` });
    } catch (error: any) {
        console.error('Error updating popular destinations:', error);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
