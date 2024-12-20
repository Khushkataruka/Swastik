import Appointment from "@/app/lib/models/appointment"; // Import the Appointment model
import Connect from "@/app/lib/Connect"; // Ensure database connection
import { NextResponse } from "next/server";
import { Query } from "mongoose";

// GET handler to fetch all appointments
export async function GET(request) {
    try {
        await Connect(); // Ensure database connection
        const emailAddress = request.nextUrl.searchParams.get("email");

        const appointments = await Appointment.find({ email: emailAddress, confirmed: true }); // Fetch all appointments
        return NextResponse.json({
            message: "GET request successful",
            result: appointments,
        });
    } catch (error) {
        console.error("Error in GET handler:", error);

        return NextResponse.json(
            { error: "Failed to fetch appointments", details: error.message },
            { status: 500 }
        );
    }
}

// POST handler to create a new appointment and validate phone number length
export async function POST(request) {
    try {
        await Connect(); // Ensure database connection

        // // Parse the request body
        const body = await request.json();
        const { email, phoneNo, date, location, Address, notes, confirmed, token, expireTime } = body;

        // // Validate required fields
        if (!email || !phoneNo || !date) {
            console.log(email, phoneNo, date)
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
        const newAppointment = new Appointment({
            email,
            phoneNo,
            date,
            location,
            Address,
            notes,
            token,
            expireTime,
            verified: false,
            confirmed: false,
        });

        // Save the record to the database
        const savedAppointment = await newAppointment.save();

        return NextResponse.json({
            message: "Appointment created successfully,You will receive a confirmation email",
            result: savedAppointment,
        });
    } catch (error) {
        console.error("Error in POST handler:", error);
        return NextResponse.json(
            { error: "Failed to create appointment", details: error.message },
            { status: 500 }
        );
    }
}