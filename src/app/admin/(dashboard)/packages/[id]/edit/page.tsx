import dbConnect from "@/lib/mongodb";
import Package from "@/models/Package";
import PackageForm from "@/components/admin/PackageForm";
import { notFound } from "next/navigation";

export default async function EditPackagePage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    await dbConnect();
    const { id } = await params;

    // Validate MongoDB ObjectId
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        return notFound();
    }

    const pkg = await Package.findById(id).lean();

    if (!pkg) {
        return notFound();
    }

    // Serialize MongoDB data for use in client component
    const serializedPkg = JSON.parse(JSON.stringify(pkg));

    return (
        <div className="max-w-5xl mx-auto">
            <PackageForm initialData={serializedPkg} isEditing={true} />
        </div>
    );
}
