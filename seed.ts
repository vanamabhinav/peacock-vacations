import mongoose from 'mongoose';
import dbConnect from './src/lib/mongodb';
import Package from './src/models/Package';
import Blog from './src/models/Blog';
import CMSContent from './src/models/CMSContent';
import Testimonial from './src/models/Testimonial';

// Import mock data (we need to be careful with paths here as this script runs from root)
import { packageData } from './src/lib/data/cms/packageData';
import { allBlogPosts, highlightPosts } from './src/lib/data/cms/blogData';
import { fetchHomePageCmsData } from './src/lib/data/cms/HomePageCmsData';
import { testimonialData } from './src/lib/data/cms/testimonialData';

async function seed() {
    try {
        console.log('Connecting to MongoDB...');
        await dbConnect();
        console.log('Connected to MongoDB.');

        // 1. Seed Packages
        console.log('Clearing existing packages...');
        await Package.deleteMany({});
        console.log('Packages cleared.');
        console.log(`Seeding ${packageData.length} packages...`);
        await Package.insertMany(packageData);

        // 2. Seed Blogs
        console.log('Clearing existing blogs...');
        await Blog.deleteMany({});
        console.log('Blogs cleared.');
        // Merge highlights and all posts, unique by slug
        const blogsMap = new Map();
        [...allBlogPosts, ...highlightPosts].forEach(blog => {
            blogsMap.set(blog.slug, blog);
        });
        const uniqueBlogs = Array.from(blogsMap.values()).map(blog => ({
            ...blog,
            isPublished: true
        }));
        console.log(`Seeding ${uniqueBlogs.length} blogs...`);
        await Blog.insertMany(uniqueBlogs);
        console.log('Blogs seeded.');

        // 3. Seed CMS Content (Homepage)
        console.log('Clearing existing CMS content...');
        await CMSContent.deleteMany({ pageKey: 'home' });
        console.log('CMS content cleared.');
        console.log('Fetching homepage content...');
        const homeData = await fetchHomePageCmsData();
        console.log('Homepage content fetched.');
        const cmsItems = Object.entries(homeData).map(([key, val]) => ({
            pageKey: 'home',
            sectionKey: key,
            data: val
        }));
        console.log(`Seeding ${cmsItems.length} CMS sections for homepage...`);
        await CMSContent.insertMany(cmsItems);
        console.log('CMS content seeded.');

        // 4. Seed Testimonials
        console.log('Clearing existing testimonials...');
        await Testimonial.deleteMany({});
        console.log('Testimonials cleared.');
        console.log(`Seeding ${testimonialData.length} testimonials...`);
        await Testimonial.insertMany(testimonialData);
        console.log('Testimonials seeded.');

        console.log('Seeding completed successfully!');
        process.exit(0);
    } catch (error: any) {
        console.error('Seeding failed!');
        if (error.name === 'ValidationError') {
            for (const field in error.errors) {
                console.error(`Field "${field}": ${error.errors[field].message}`);
            }
        } else if (error.code === 11000) {
            console.error('Duplicate key error:', error.keyValue);
        } else {
            console.error(error);
        }
        process.exit(1);
    }
}

seed();
