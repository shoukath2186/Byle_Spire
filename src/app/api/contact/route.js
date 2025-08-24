import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from "../dbConnection/connectDb";
import Contact from "../modals/Contact"; 

export async function POST(request) {
  try {
    await connectDB();
    
    const body = await request.json();
    const { name, email, phone, message } = body;
    console.log(name, email, phone, message);
    
    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "All fields are required" }, 
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" }, 
        { status: 400 }
      );
    }

    // Create new contact
    const newContact = new Contact({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      message: message.trim(),
      createdAt: new Date()
    });

    await newContact.save();

    return NextResponse.json(
      { 
        message: "✅ Message sent successfully!", 
        success: true 
      },
      { status: 201 }
    );

  } catch (error) {

    console.error("❌ Error in POST /api/contact:", error);

  }
}
