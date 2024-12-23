
import Connect from "@/app/lib/Connect"; // Ensure database connection
import { NextResponse } from "next/server";
import Contact from "@/app/lib/models/contact";


// POST handler to create a new appointment and validate phone number length
export async function POST(request) {
    try {
        await Connect(); // Ensure database connection

        // // Parse the request body
        const body = await request.json();
        const { email, phoneNo, message } = body;
        console.log(phoneNo);

        // // Validate required fields
        if (!email || !phoneNo || !message) {
            console.log(email, phoneNo, message)
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }


        // Validate phone number length
        if (phoneNo.toString().length !== 10) {
            return NextResponse.json(
                { error: "Invalid phone number. It must be exactly 10 digits." },
                { status: 400 }
            );
        }

        // Create a new appointment record
        const contact = new Contact({
            email,
            phone: phoneNo,
            message,
        });

        // Save the record to the database
        const savedContact = await contact.save();

        return NextResponse.json({
            message: "Message Received successfully",
            result: savedContact,
        });
    } catch (error) {
        console.error("Error in POST handler:", error);
        return NextResponse.json(
            { error: "Failed to create appointment", details: error.message },
            { status: 500 }
        );
    }
}