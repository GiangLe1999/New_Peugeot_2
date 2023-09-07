import dbConnect from "@/lib/db";
import Contact from "@/model/Contact";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, phone, email, carName, carLine, content, section, service } =
    await req.json();

  if (
    !name ||
    !name.trim() ||
    !phone ||
    !phone.trim() ||
    !email ||
    !email.trim() ||
    !carName ||
    !carLine ||
    !section ||
    !service
  )
    return NextResponse.json(
      { error: "Invalid request body!" },
      {
        status: 422,
      }
    );

  await dbConnect();

  const contact = new Contact({
    name,
    phone,
    email,
    carName,
    carLine,
    content,
    section,
    service,
  });

  await contact.save();

  return NextResponse.json(contact, {
    status: 201,
  });
}
