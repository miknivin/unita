import { NextResponse } from "next/server";
import dbConnect from "../../../lib/db/connection";
import Contact from "../../../models/Contacts";

export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();

    const newContact = new Contact(body);
    await newContact.save();

    return NextResponse.json(
      { message: "Contact form submitted successfully!" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong", details: error },
      { status: 500 }
    );
  }
}
