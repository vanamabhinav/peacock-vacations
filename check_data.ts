import dbConnect from './src/lib/mongodb';
import Package from './src/models/Package';
import CMSContent from './src/models/CMSContent';

async function check() {
    await dbConnect();
    const contents = await CMSContent.find({ pageKey: 'home' });
    console.log('CMS HOME CONTENT:');
    const themeSection = contents.find(c => c.sectionKey === 'travelByThemeSectionData');
    console.log(JSON.stringify(themeSection?.data?.themes, null, 2));

    const allPackages = await Package.find({ isPublished: true });
    console.log('\nPACKAGES WITH SOLO TRAVEL:');
    const solo = allPackages.filter(p => 
        (p.themes && p.themes.includes('Solo Travel')) || 
        (p.featuredInThemes && p.featuredInThemes.includes('Solo Travel'))
    );
    console.log(JSON.stringify(solo.map(p => ({ 
        title: p.title, 
        themes: p.themes, 
        featuredInThemes: p.featuredInThemes,
        showOnHome: p.showOnHome 
    })), null, 2));

    process.exit(0);
}
check();
