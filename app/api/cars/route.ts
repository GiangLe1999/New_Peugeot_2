import dbConnect from "@/lib/db";
import Car from "@/model/Car";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const getAll = searchParams.get("getAll");
  const getLines = searchParams.get("getLines");

  await dbConnect();
  let cars = [];

  if (getAll) {
    cars = await Car.find();
  } else if (getLines) {
    cars = await Car.find().select("name carLines");
  } else {
    cars = await Car.find().select("name priceFrom mainInfo avatar slug");
  }

  return NextResponse.json(cars);
}
