import mongoose, { Schema, Document } from 'mongoose';

export interface ICollection extends Document {
    name: string;
    slug: string;
    description: string;
    bannerImage?: string;
    packageIds: string[];
    isPublished: boolean;
    navIcon?: string;
    navImage?: string;
    createdAt: Date;
    updatedAt: Date;
}

const CollectionSchema: Schema = new Schema(
    {
        name: { type: String, required: true, trim: true },
        slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
        description: { type: String, default: '' },
        bannerImage: { type: String },
        packageIds: [{ type: String }],
        isPublished: { type: Boolean, default: true },
        navIcon: { type: String, default: '' },
        navImage: { type: String, default: '' },
    },
    { timestamps: true }
);

export default mongoose.models.Collection ||
    mongoose.model<ICollection>('Collection', CollectionSchema);
