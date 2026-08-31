import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    const fieldErrors = {};

    if (!name?.trim()) fieldErrors.name = "Name is required";
    if (!email?.trim()) {
      fieldErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      fieldErrors.email = "Please provide a valid email address";
    }
    if (!phone?.trim()) {
      fieldErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s\-()]+$/.test(phone)) {
      fieldErrors.phone = "Phone number can only contain numbers.";
    } else if (phone.replace(/[^0-9]/g, '').length < 10) {
      fieldErrors.phone = "Phone number must contain at least 10 digits";
    }
    if (!service?.trim()) fieldErrors.service = "Service selection is required";

    if (Object.keys(fieldErrors).length > 0) {
      return NextResponse.json(
        { fieldErrors },
        { status: 400 }
      );
    }

    // Configure Nodemailer transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your sending email (e.g., your gmail address)
        pass: process.env.EMAIL_PASS, // Your Gmail App Password
      },
    });

    // Setup the email data
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'bytespire1@gmail.com', // Sending directly to your email!
      subject: `New ByteSpire Inquiry from ${name} - ${service}`,
      text: `
        New Contact Form Submission:
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Service Requested: ${service}
        
        Message:
        ${message || 'No message provided.'}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #8e2157;">New Lead from ByteSpire Website</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Name:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Service:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${service}</td>
            </tr>
          </table>
          <h3 style="margin-top: 30px;">Message:</h3>
          <p style="background: #f9f9f9; padding: 15px; border-radius: 8px;">
            ${message ? message.replace(/\n/g, '<br/>') : '<em>No message provided.</em>'}
          </p>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      {
        message: "✅ Email sent successfully!",
        success: true
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("❌ Error sending email:", error);

    // Check if it's an authentication error
    if (error.code === 'EAUTH') {
      return NextResponse.json(
        { error: "Email authentication failed. Please configure your EMAIL_USER and EMAIL_PASS in the .env file." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
