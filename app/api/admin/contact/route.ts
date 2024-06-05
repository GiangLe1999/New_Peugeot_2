import dbConnect from "@/lib/db";
import Contact from "@/model/Contact";
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
  try {
    const { contactId, newStatus } = await req.json();

    await dbConnect();

    await Contact.updateOne(
      { _id: contactId },
      { $set: { status: newStatus } }
    );

    return NextResponse.json(
      { updated: true, status: 200, msg: "Update contact successfully" },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { status: 500, msg: "Internal server error" },
      {
        status: 500,
      }
    );
  }
}
