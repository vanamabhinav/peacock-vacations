import dbConnect from "@/lib/mongodb";
import Testimonial from "@/models/Testimonial";
import TestimonialForm from "@/components/admin/TestimonialForm";
import { notFound } from "next/navigation";

export default async function EditTestimonialPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    await dbConnect();
    const { id } = await params;

    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        return notFound();
    }

    const testimonial = await Testimonial.findById(id).lean();

    if (!testimonial) {
        return notFound();
    }

    const serializedTestimonial = JSON.parse(JSON.stringify(testimonial));

    return (
        <div className="max-w-5xl mx-auto">
            <TestimonialForm initialData={serializedTestimonial} isEdit={true} />
        </div>
    );
}
