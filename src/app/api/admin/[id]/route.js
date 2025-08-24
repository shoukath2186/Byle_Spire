
import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from "../../dbConnection/connectDb";
import Contact from "../../modals/Contact"; 



export async function PATCH(request, { params }) {
   const {id} =await params;  // this will be messageId
  const { status } = await request.json();

  

  if (!['new', 'read', 'replied', 'archived'].includes(status)) {
    return NextResponse.json(
      { success: false, message: 'Invalid status value' },
      { status: 400 }
    );
  }

  try {
    
    await connectDB();

    const updatedContact = await Contact.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedContact) {
      return NextResponse.json(
        { success: false, message: 'Contact not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, data: updatedContact },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message || 'Error updating contact status',
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  const {id} =await params;  // this will be messageId

  try {
    
    await connectDB();

    const deletedContact = await Contact.findByIdAndDelete(id);

    if (!deletedContact) {
      return NextResponse.json(
        { success: false, message: 'Contact not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Contact deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message || 'Error deleting contact',
      },
      { status: 500 }
    );
  }
}   