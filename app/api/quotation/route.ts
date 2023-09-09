import dbConnect from "@/lib/db";
import Quotation from "@/model/Quotation";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, phone, email, carName, carLine, content } = await req.json();

  if (
    !name ||
    !name.trim() ||
    !phone ||
    !phone.trim() ||
    !email ||
    !email.trim() ||
    !carName ||
    !carLine
  )
    return NextResponse.json(
      { error: "Invalid request body!" },
      {
        status: 422,
      }
    );

  await dbConnect();

  const quotation = new Quotation({
    name,
    phone,
    email,
    carName,
    carLine,
    content,
  });

  await quotation.save();

  return NextResponse.json(quotation, {
    status: 201,
  });
}
