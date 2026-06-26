import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Booking from '@/models/Booking';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Basic validation
        const requiredFields = ['userEmail', 'packageId', 'packageName', 'travelDate', 'numberOfTravelers', 'totalPrice', 'contactNumber'];
        for (const field of requiredFields) {
            if (!body[field]) {
                return NextResponse.json({ error: `Missing field: ${field}` }, { status: 400 });
            }
        }

        await dbConnect();

        // Strip client-supplied status — always start as 'pending' regardless of what client sends
        const { status: _status, ...bookingData } = body;
        const booking = await Booking.create({ ...bookingData, status: 'pending' });

        return NextResponse.json(booking, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const userEmail = searchParams.get('userEmail');

        if (!userEmail) {
            return NextResponse.json({ error: 'User email is required' }, { status: 400 });
        }

        await dbConnect();

        const bookings = await Booking.find({ userEmail }).sort({ createdAt: -1 });

        return NextResponse.json(bookings);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
