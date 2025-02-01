import { NextResponse } from 'next/server';
import Connect from '@/app/lib/Connect';
import Appointment from '@/app/lib/models/appointment';
import nodemailer from 'nodemailer';

export async function GET(req) {
    const url = new URL(req.url);
    const token = url.searchParams.get('token');

    if (!token) {
        return NextResponse.json({ message: 'Invalid or missing token' }, { status: 400 });
    }

    try {
        await Connect();
        // Find the appointment by token
        const appointment = await Appointment.findOne({ token });
        if (!appointment.verified) {
            return NextResponse.json({ message: 'Appointment not Verified.' });
        }
        if (appointment.confirmed) {
            return NextResponse.json({ message: 'Appointment Already Confirmed' });
        }
        // Update the appointment as verified
        await Appointment.updateOne(
            { token },
            { $set: { confirmed: true } }
        );
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });
        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: appointment.email,
            subject: 'Appointment Status',
            html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); overflow: hidden;">
          <div style="padding: 20px; text-align: center; background-color: #1f5e96; color: #ffffff;">
          <h2 style="margin: 0;">Appointment Verification Required</h2>
      </div>
      <div style="padding: 20px;">
          <p style="font-size: 16px; line-height: 1.5;">
              <strong>Date:</strong> <span style="color: #1f5e96;">${new Date(appointment.date).toLocaleString("en-US", {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
            })}</span><br />
              <strong style="color: #1f5e96; font-weight: bold;">Location:</strong> <span  style="font-weight: semibold;">${appointment.location}</span><br/>
              <strong style="color: #1f5e96; font-weight: bold;">Phone:</strong> <span style="font-weight:semibold">${appointment.phoneNo}</span><br/>
              <strong style="color: #1f5e96; font-weight: bold;">Email:</strong> <span style="font-weight:semibold">${appointment.email}</span>
          </p>
          <p style="font-size: 14px; line-height: 1.5; color: #555;">
              Your appointment is Sucessfully Confirmed. Please come Prior 10 min before the Appointment</p>
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
        } catch (error) {
            console.error('Error sending email:', error);
            return NextResponse.json({ message: 'Error sending email' });
        }

        // Construct the absolute URL for the redirect
        const baseUrl = `${req.headers.get('x-forwarded-proto') || 'http'}://${req.headers.get('host')}`;
        const redirectUrl = new URL(`${baseUrl}/`);
        redirectUrl.searchParams.set('message', 'appointment has been successfully Confirmed.');

        return NextResponse.json({ message: "Appointment Succesfully Confirmed", status: 200 });
    } catch (error) {
        console.error('Error confirming appointment:', error);
        return NextResponse.json({ message: 'Error processing confirmation' }, { status: 500 });
    }
}
