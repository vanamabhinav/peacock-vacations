import dbConnect from './src/lib/mongodb';
import Package from './src/models/Package';
import mongoose from 'mongoose';

async function test() {
    await dbConnect();
    const theme = 'Resort';
    // Use the IDs we found earlier
    const maduraiId = '69b99c34e32405c7017eed1e';
    const munnarId = '69b99c34e32405c7017eec71';
    
    console.log('--- BEFORE TEST ---');
    const before = await Package.find({ _id: { $in: [maduraiId, munnarId] } });
    before.forEach(p => console.log(`${p.title}: ${JSON.stringify(p.themeSortOrder)}`));

    // Simulate ordering: Munnar first (1), Madurai second (2)
    const packageIds = [munnarId, maduraiId];
    
    console.log('\n--- SIMULATING PUT ---');
    const updatePromises = packageIds.map((id, index) =>
        Package.findByIdAndUpdate(id, {
            $addToSet: { themes: theme, featuredInThemes: theme },
            $set: { [`themeSortOrder.${theme}`]: index + 1 }
        }, { 
            new: true,
            strict: false 
        })
    );
    const results = await Promise.all(updatePromises);
    results.forEach(p => console.log(`Updated ${p?.title} to order ${p?.themeSortOrder?.get(theme)}`));

    console.log('\n--- VERIFYING FROM DB ---');
    const after = await Package.find({ _id: { $in: [maduraiId, munnarId] } });
    after.forEach(p => console.log(`${p.title}: ${JSON.stringify(p.themeSortOrder)}`));

    process.exit(0);
}
test();
