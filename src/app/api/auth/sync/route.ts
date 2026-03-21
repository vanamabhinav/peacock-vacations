import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User, { UserRole } from "@/models/User";

export async function POST(req: Request) {
    try {
        const { uid, email, displayName, photoURL } = await req.json();

        if (!uid || !email) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        await dbConnect();

        // Find or create user in MongoDB
        let user = await User.findOne({ firebaseUid: uid });

        if (!user) {
            user = await User.create({
                firebaseUid: uid,
                email,
                displayName,
                photoURL,
                role: UserRole.USER, // Default role
            });
        } else {
            // Update info if changed
            user.displayName = displayName;
            user.photoURL = photoURL;
            await user.save();
        }

        return NextResponse.json({
            role: user.role,
            message: "User synced successfully",
        });
    } catch (error: any) {
        console.error("Sync error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
