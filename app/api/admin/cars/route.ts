import dbConnect from "@/lib/db";
import Car from "@/model/Car2";
import { NextResponse } from "next/server";
export const revalidate = 0;

export async function GET(req: Request) {
  try {
    await dbConnect();
    const cars = await Car.find().select("name priceFrom slug").lean();
    return NextResponse.json(cars, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Internal Server Error", msg: error.message },
      { status: 500 }
    );
  }
}
