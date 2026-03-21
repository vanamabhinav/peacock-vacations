import mongoose, { Schema, Document } from 'mongoose';

export interface ITestimonial extends Document {
    profileImage: string;
    title: string;
    description: string;
    rating: number;
    name: string;
    occupation?: string;
    location: string;
    images: string[];
    createdAt: Date;
    updatedAt: Date;
}

const TestimonialSchema: Schema = new Schema(
    {
        profileImage: { type: String, required: true },
        title: { type: String, required: true },
        description: { type: String, required: true },
        rating: { type: Number, required: true, min: 0, max: 5 },
        name: { type: String, required: true },
        occupation: { type: String },
        location: { type: String, required: true },
        images: [{ type: String }],
    },
    { timestamps: true }
);

export default mongoose.models.Testimonial || mongoose.model<ITestimonial>('Testimonial', TestimonialSchema);
