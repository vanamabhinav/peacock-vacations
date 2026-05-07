import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import CMSContent from "@/models/CMSContent";

export async function GET() {
    try {
        await dbConnect();
        const config = await CMSContent.findOne({
            pageKey: "global",
            sectionKey: "navbar",
        });

        return NextResponse.json(config?.data || { customDropdowns: [] });
    } catch (error) {
        console.error("Failed to fetch navbar config:", error);
        return NextResponse.json({ error: "Failed to fetch navbar config" }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const data = await request.json();
        await dbConnect();

        // Validate structure (basic check)
        if (!data.customDropdowns || !Array.isArray(data.customDropdowns)) {
            return NextResponse.json({ error: "Invalid data format" }, { status: 400 });
        }

        const updatedConfig = await CMSContent.findOneAndUpdate(
            { pageKey: "global", sectionKey: "navbar" },
            { data },
            { upsert: true, new: true }
        );

        return NextResponse.json(updatedConfig.data);
    } catch (error) {
        console.error("Failed to update navbar config:", error);
        return NextResponse.json({ error: "Failed to update navbar config" }, { status: 500 });
    }
}
