import dbConnect from "@/lib/db";
import QuickConsult from "@/model/QuickConsult";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, phone, choseCar } = await req.json();

  if (!name || !name.trim() || !phone || !phone.trim() || !choseCar)
    return NextResponse.json(
      { error: "Invalid request body!" },
      {
        status: 422,
      }
    );

  await dbConnect();

  const quickConsult = new QuickConsult({
    name,
    phone,
    carName: choseCar,
  });

  await quickConsult.save();

  return NextResponse.json(quickConsult, {
    status: 201,
  });
}
