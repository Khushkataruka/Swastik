import Admin from "@/app/lib/models/admin";
import Connect from "@/app/lib/Connect";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        await Connect();
        const data = await Admin.find() // Ensure database connection
        return NextResponse.json({
            message: "GET request successful",
            result: data
        });
    } catch (e) {
        console.error("Error in GET handler:", e);
        return NextResponse.json({ error: "Failed to fetch Amdin Data: " + e.message }, { status: 500 });
    }
}

// POST handler
export async function POST(request) {
    try {
        await Connect(); // Ensure database connection
        const body = await request.json()
        const { emailAddress } = body
        const adminData = new Admin(
            {
                email: emailAddress
            }
        )
        await adminData.save();
        return NextResponse.json({ message: "Admin data saved successfully" });
    } catch (e) {
        console.error("Error in POST handler:", e);
        if (e.code == 11000) {
            return NextResponse.json({ error: "Duplicate Email Adress" }, { status: 400 })
        }
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}
