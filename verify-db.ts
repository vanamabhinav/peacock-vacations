import mongoose from 'mongoose';
import dbConnect from './src/lib/mongodb';
import Package from './src/models/Package';
import Blog from './src/models/Blog';
import CMSContent from './src/models/CMSContent';

async function verifyData() {
    try {
        console.log('Connecting to MongoDB...');
        await dbConnect();

        console.log('\n--- Packages ---');
        const packageCount = await Package.countDocuments();
        console.log(`Total packages: ${packageCount}`);
        if (packageCount > 0) {
            const samplePackage = await Package.findOne();
            console.log(`Sample package: ${samplePackage?.title} (${samplePackage?.slug})`);
        }

        console.log('\n--- Blogs ---');
        const blogCount = await Blog.countDocuments();
        console.log(`Total blogs: ${blogCount}`);
        if (blogCount > 0) {
            const sampleBlog = await Blog.findOne();
            console.log(`Sample blog: ${sampleBlog?.title} (${sampleBlog?.slug})`);
        }

        console.log('\n--- CMS Content (Home) ---');
        const cmsCount = await CMSContent.countDocuments({ pageKey: 'home' });
        console.log(`Total Home CMS sections: ${cmsCount}`);
        if (cmsCount > 0) {
            const sections = await CMSContent.find({ pageKey: 'home' }).select('sectionKey');
            console.log(`Sections found: ${sections.map(s => s.sectionKey).join(', ')}`);
        }

        process.exit(0);
    } catch (error) {
        console.error('Verification failed:', error);
        process.exit(1);
    }
}

verifyData();
