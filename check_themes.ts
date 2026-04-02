import dbConnect from './src/lib/mongodb';
import CMSContent from './src/models/CMSContent';
import Package from './src/models/Package';

async function check() {
    await dbConnect();
    const contents = await CMSContent.find({ pageKey: 'home', sectionKey: 'travelByThemeSectionData' });
    console.log('CMS THEMES:');
    console.log(JSON.stringify(contents[0]?.data?.themes, null, 2));

    const packages = await Package.find({
        $or: [
            { title: /Madurai/i },
            { title: /Munnar/i }
        ]
    });
    console.log('\nPACKAGES ORDER:');
    console.log(JSON.stringify(packages.map(p => ({
        title: p.title,
        featuredInThemes: p.featuredInThemes,
        themeSortOrder: p.themeSortOrder
    })), null, 2));

    process.exit(0);
}
check();
