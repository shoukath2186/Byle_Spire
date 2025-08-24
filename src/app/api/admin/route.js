import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from "../dbConnection/connectDb";
import Contact from "../modals/Contact"; 


export async function GET() {

    try {
    // connect to DB
    await connectDB();

    // fetch all contacts sorted by createdAt (latest first)
    const contacts = await Contact.find().sort({ createdAt: -1 });

    return NextResponse.json(
      {
        success: true,
        count: contacts.length,
        data: contacts,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Error fetching contacts",
      },
      { status: 500 }
    );
  }

}

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    // Get admin credentials from .env
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    // Compare credentials
    if (email === adminEmail && password === adminPassword) {
      return new Response(
        JSON.stringify({ success: true, message: "Login successful" }),
        { status: 200 }
      );
    } else {
      return new Response(
        JSON.stringify({ success: false, message: "Invalid credentials" }),
        { status: 401 }
      );
    }
  } catch (error) {
    
    return new Response(
      JSON.stringify({ success: false, message: "Something went wrong" }),
      { status: 500 }
    );
  }
}
