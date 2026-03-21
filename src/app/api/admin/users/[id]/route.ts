import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';
import { cookies } from 'next/headers';
import { verifyToken } from '@/lib/auth-utils';

async function checkSuperAdmin() {
    const cookieStore = await cookies();
    const token = cookieStore.get('admin-token')?.value;
    if (!token) return false;

    const payload = verifyToken(token);
    return payload && payload.role === 'super_admin';
}

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    if (!(await checkSuperAdmin())) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 403 });
    }

    try {
        await dbConnect();
        const { id } = await params;

        // Don't allow deleting yourself or the first super admin if we want to be safe
        // For now, just a basic check
        const userToDelete = await User.findById(id);
        if (!userToDelete) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        if (userToDelete.username === 'peacock vacation') {
            return NextResponse.json({ message: 'Primary super admin cannot be deleted' }, { status: 403 });
        }

        await User.findByIdAndDelete(id);
        return NextResponse.json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        return NextResponse.json({ message: 'Error deleting user' }, { status: 500 });
    }
}
