import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    try {
        const iconsDir = path.join(process.cwd(), 'public', 'icons');
        const files = fs.readdirSync(iconsDir);

        // Filter for individual SVG files, excluding sprites
        const svgFiles = files.filter(file =>
            file.endsWith('.svg') &&
            !['customize-sprite.svg', 'map-sprite.svg', 'ui-sprite.svg'].includes(file)
        );

        return NextResponse.json({ icons: svgFiles });
    } catch (error) {
        console.error('Error listing icons:', error);
        return NextResponse.json({ error: 'Failed to list icons' }, { status: 500 });
    }
}
