import mongoose, { Schema, Document } from 'mongoose';

export interface ICMSContent extends Document {
    pageKey: string; // e.g. "home", "about"
    sectionKey: string; // e.g. "hero", "popularDestinations"
    data: any; // Direct mapping to frontend props
    createdAt: Date;
    updatedAt: Date;
}

const CMSContentSchema: Schema = new Schema(
    {
        pageKey: { type: String, required: true },
        sectionKey: { type: String, required: true },
        data: { type: Schema.Types.Mixed, required: true },
    },
    { timestamps: true }
);

// Unique index for page + section
CMSContentSchema.index({ pageKey: 1, sectionKey: 1 }, { unique: true });

export default mongoose.models.CMSContent || mongoose.model<ICMSContent>('CMSContent', CMSContentSchema);
