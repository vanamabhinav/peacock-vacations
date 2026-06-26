import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { verifyToken } from './auth-utils';

export type AdminPayload = { userId: string; role: string };

export async function requireAdmin(): Promise<AdminPayload | NextResponse> {
    const cookieStore = await cookies();
    const token = cookieStore.get('admin-token')?.value;
    if (!token) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
    const payload = verifyToken(token);
    if (!payload) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
    return payload;
}

export async function requireSuperAdmin(): Promise<AdminPayload | NextResponse> {
    const result = await requireAdmin();
    if (result instanceof NextResponse) return result;
    if (result.role !== 'super_admin') {
        return NextResponse.json({ message: 'Forbidden' }, { status: 403 });
    }
    return result;
}
