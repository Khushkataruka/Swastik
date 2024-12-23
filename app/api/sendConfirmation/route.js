import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req) {
    const { email, date, location, phoneNo, Address, notes } = await req.json();
    const portLink = process.env.PORTLINK;

    // Generate a unique token
    const token = crypto.randomBytes(16).toString('hex');

    const data = {
        email,
        phoneNo,
        date,
        location,
        Address,
        notes,
        token,
        expireTime: Date.now() + 24 * 60 * 60 * 1000, // 24 hours from now
        verified: false,
        confirmed: false,
    };

    // Store the details in the database temporarily
    try {
        const response = await fetch(`${portLink}/api/Appointment`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            console.log("response error");
            const error = await response.json();
            console.error(error.message);
            return NextResponse.json({ message: "Failed to book appointment, try again later.", status: 400 });
        } else {
            console.log("reponse success");
            const res = await response.json();
            console.log(res.message);
        }
    } catch (e) {
        console.error("An error occurred: " + e.message);
        return NextResponse.json({ message: e.message, status: 500 });
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    // Generate the confirmation link
    const verificationLink = `${portLink}/VerifyAppointment?token=${encodeURIComponent(
        token
    )}`;

    // Email content
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Appointment Pending Verification',
        html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); overflow: hidden;">
            <div style="padding: 20px; text-align: center; background-color: #1f5e96; color: #ffffff;">
            <h2 style="margin: 0;">Appointment Verification Required</h2>
        </div>
        <div style="padding: 20px;">
            <p style="font-size: 16px; line-height: 1.5;">
                <strong>Date:</strong> <span style="color: #1f5e96;">${new Date(date).toLocaleString("en-US", {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        })}</span><br />
                <strong>Location:</strong> <span style="color: #1f5e96;">${location}</span>
            </p>
            <p style="font-size: 14px; line-height: 1.5; color: #555;">
                Your appointment verification is pending. Please click the button below to verify your request. Our team will Contact you  through What's app for further details and get back to you with confirmation as soon as possible,you will receive an email if your appointment is Confirm.
            </p>
            <div style="text-align: center; margin-top: 20px;">
                <a href="${verificationLink}" style="background-color: #5A9BD5; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-size: 16px;">
                    Verify Appointment
                </a>
            </div>
        </div>
        <div style="padding: 10px; text-align: center; background-color: #FFE5D3;">
            <p style="margin: 0; font-size: 12px; color: #777;">Thank you for choosing Swastik Pathology!</p>
        </div>
    </div>
</div>
        `,
    };

    try {
        // Send the email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ', info.response);

        return NextResponse.json({ message: 'Verification email sent successfully. We will contact you after verification.' });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Error sending email' });
    }
}
