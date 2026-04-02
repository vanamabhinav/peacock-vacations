import dbConnect from './src/lib/mongodb';
import Package from './src/models/Package';
import CMSContent from './src/models/CMSContent';
import mongoose from 'mongoose';

async function test() {
    await dbConnect();
    const theme = 'Beach';
    
    // Find a package that should be in Beach
    const goaPkg = await Package.findOne({ title: /Goa Beach Resorts/i }).lean();
    if (!goaPkg) {
        console.error('Goa package not found');
        process.exit(1);
    }
    const goaId = goaPkg._id.toString();
    console.log('Goa ID:', goaId);

    const packageIds = [goaId];
    
    console.log('\n--- SIMULATING CMS-LEVEL PUT FOR BEACH ---');
    let cmsContent = await CMSContent.findOne({ pageKey: 'home', sectionKey: 'travelByThemeSectionData' });
    if (cmsContent) {
        const newData = { ...cmsContent.data };
        if (!newData.packageOrders) newData.packageOrders = {};
        newData.packageOrders[theme] = packageIds;
        cmsContent.data = newData;
        cmsContent.markModified('data');
        await cmsContent.save();
        console.log('CMS Content updated successfully for Beach');
    } else {
        console.error('CMS Content NOT found');
    }

    process.exit(0);
}
test();
