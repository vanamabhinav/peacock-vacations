"use server";

import dbConnect from "@/lib/mongodb";
import BlogModel from "@/models/Blog";
import { IBlog } from "@/models/Blog";

export async function fetchBlogsAction(category?: string): Promise<IBlog[]> {
    try {
        await dbConnect();
        let query: any = { isPublished: true };
        if (category && category !== "All") {
            query.category = { $regex: category, $options: "i" };
        }
        const blogs = await BlogModel.find(query).sort({ createdAt: -1 });
        console.log(`fetchBlogsAction: Found ${blogs.length} blogs for category: ${category}`);
        return JSON.parse(JSON.stringify(blogs));
    } catch (error) {
        console.error("Error fetching blogs from MongoDB:", error);
        throw new Error("Failed to fetch blogs");
    }
}

import PackageModel from "@/models/Package";

export async function fetchBlogBySlugAction(slug: string): Promise<any | null> {
    try {
        await dbConnect();
        const blog = await BlogModel.findOne({ slug, isPublished: true }).lean();

        if (!blog) return null;

        // Populate packages if they exist
        const populatedBlog = { ...blog };

        if (blog.packagesForBlog && blog.packagesForBlog.length > 0) {
            populatedBlog.packagesForBlog = await PackageModel.find({
                _id: { $in: blog.packagesForBlog }
            }).lean();
        }

        if (blog.packagesFromBlog && blog.packagesFromBlog.length > 0) {
            populatedBlog.packagesFromBlog = await PackageModel.find({
                _id: { $in: blog.packagesFromBlog }
            }).lean();
        }

        return JSON.parse(JSON.stringify(populatedBlog));
    } catch (error) {

        console.error("Error fetching blog by slug from MongoDB:", error);
        throw new Error("Failed to fetch blog");
    }
}

export async function fetchHighlightBlogsAction(): Promise<IBlog[]> {
    try {
        await dbConnect();
        // For now, let's just fetch the 3 most recent posts as highlights
        // or we could add a 'isHighlight' field to the model if needed.
        const blogs = await BlogModel.find({ isPublished: true }).limit(3).sort({ createdAt: -1 });
        return JSON.parse(JSON.stringify(blogs));
    } catch (error) {
        console.error("Error fetching highlight blogs from MongoDB:", error);
        throw new Error("Failed to fetch highlights");
    }
}
