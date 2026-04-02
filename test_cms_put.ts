import dbConnect from './src/lib/mongodb';
import Package from './src/models/Package';
import CMSContent from './src/models/CMSContent';
import mongoose from 'mongoose';

async function test() {
    await dbConnect();
    const theme = 'Resort';
    const maduraiId = '69b99c34e32405c7017eed1e';
    const munnarId = '69b99c34e32405c7017eec71';
    
    console.log('--- SIMULATING CMS-LEVEL PUT ---');
    // Set Munnar first (0), Madurai second (1)
    const packageIds = [munnarId, maduraiId];
    
    // 1. Update CMS Content
    let cmsContent = await CMSContent.findOne({ pageKey: 'home', sectionKey: 'travelByThemeSectionData' });
    if (cmsContent) {
        const newData = { ...cmsContent.data };
        if (!newData.packageOrders) newData.packageOrders = {};
        newData.packageOrders[theme] = packageIds;
        cmsContent.data = newData;
        cmsContent.markModified('data');
        await cmsContent.save();
        console.log('CMS Content updated successfully with packageOrders');
    }

    // 2. Sync Package metadata (themes and featuredInThemes)
    const objectIds = packageIds.map(id => new mongoose.Types.ObjectId(id));
    await Package.updateMany(
        { _id: { $in: objectIds } },
        { $addToSet: { themes: theme, featuredInThemes: theme } }
    );
    console.log('Package metadata synced');

    console.log('\n--- VERIFYING CMS DATA ---');
    const verifiedCms = await CMSContent.findOne({ pageKey: 'home', sectionKey: 'travelByThemeSectionData' });
    console.log('CMS themeOrders for Resort:', JSON.stringify(verifiedCms?.data?.packageOrders?.Resort, null, 2));

    process.exit(0);
}
test();
