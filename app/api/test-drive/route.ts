import dbConnect from "@/lib/db";
import TestDriver from "@/model/TestDriver";
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

  const testDriver = new TestDriver({
    name,
    phone,
    email,
    carName,
    carLine,
    content,
  });

  await testDriver.save();

  return NextResponse.json(testDriver, {
    status: 201,
  });
}
