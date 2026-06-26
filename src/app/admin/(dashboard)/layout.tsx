import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { verifyToken } from '@/lib/auth-utils';
import AdminSidebar from "@/components/admin/AdminSidebar";

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const cookieStore = await cookies();
    const token = cookieStore.get('admin-token')?.value;
    if (!token || !verifyToken(token)) {
        redirect('/admin/login');
    }

    return (
        <div className="min-h-screen bg-[#fafbfc] flex">
            <AdminSidebar />
            <main className="flex-1 ml-72 min-h-screen">
                <div className="p-8 md:p-12 max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
