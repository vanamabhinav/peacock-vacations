import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';
import { hashPassword } from '@/lib/auth-utils';
import { cookies } from 'next/headers';
import { verifyToken } from '@/lib/auth-utils';

async function checkSuperAdmin() {
    const cookieStore = await cookies();
    const token = cookieStore.get('admin-token')?.value;
    if (!token) return false;

    const payload = verifyToken(token);
    return payload && payload.role === 'super_admin';
}

export async function GET() {
    if (!(await checkSuperAdmin())) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 403 });
    }

    try {
        await dbConnect();
        // Return only admin and super_admin users, excluding sensitive passwords
        const users = await User.find({
            role: { $in: ['admin', 'super_admin'] }
        }).select('-password').sort({ createdAt: -1 });

        return NextResponse.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        return NextResponse.json({ message: 'Error fetching users' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    if (!(await checkSuperAdmin())) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 403 });
    }

    try {
        await dbConnect();
        const { username, email, password, role, displayName } = await request.json();

        if (!username || !email || !password || !role) {
            return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
        }

        const existingUser = await User.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            return NextResponse.json({ message: 'User already exists' }, { status: 400 });
        }

        const hashedPassword = await hashPassword(password);
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            role,
            displayName: displayName || username,
        });

        await newUser.save();

        const userResponse = newUser.toObject();
        delete userResponse.password;

        return NextResponse.json(userResponse, { status: 201 });
    } catch (error) {
        console.error('Error creating user:', error);
        return NextResponse.json({ message: 'Error creating user' }, { status: 500 });
    }
}
