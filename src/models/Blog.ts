import mongoose, { Schema, Document } from 'mongoose';

export interface IBlogSection {
    subheading?: string;
    text: string[];
    imageUrl?: string;
}

export interface IBlog extends Document {
    title: string;
    slug: string;
    excerpt: string;
    author: string;
    authorRole?: string;
    date?: string;
    readTime: string;
    imageUrl: string;
    category: string;
    content?: string[];
    sections?: IBlogSection[];
    tags: string[];
    packagesForBlog?: string[];
    packagesFromBlog?: string[];
    relatedPackageIds?: string[];
    isPublished: boolean;

    createdAt: Date;
    updatedAt: Date;
}

const BlogSchema: Schema = new Schema(
    {
        title: { type: String, required: true },
        slug: { type: String, required: true, unique: true },
        excerpt: { type: String, required: true },
        author: { type: String, required: true },
        authorRole: { type: String },
        date: { type: String },
        readTime: { type: String, required: true },
        imageUrl: { type: String, required: true },
        category: { type: String, required: true },
        content: [{ type: String }],
        sections: [
            {
                subheading: { type: String },
                text: [{ type: String }],
                imageUrl: { type: String },
            },
        ],
        tags: [{ type: String }],
        packagesForBlog: [{ type: String }],
        packagesFromBlog: [{ type: String }],
        relatedPackageIds: [{ type: String }],
        isPublished: { type: Boolean, default: true },

    },
    { timestamps: true, collection: 'blogs' }
);

export default mongoose.models.Blog || mongoose.model<IBlog>('Blog', BlogSchema);
