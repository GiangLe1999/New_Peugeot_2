import dbConnect from "@/lib/db";
import Car from "@/model/Car";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");

  await dbConnect();
  const car = await Car.findOne({ slug });

  return NextResponse.json(car);
}

export async function POST(req: Request) {
  const { searchParams } = new URL(req.url);
  const secret = searchParams.get("secret");

  if (!secret || secret !== process.env.API_SECRET_KEY)
    return NextResponse.json(
      { error: "Unauthorized request!" },
      {
        status: 403,
      }
    );

  const { name, priceFrom, slug, avatar, colors, carLines, images } =
    await req.json();

  if (!name && !name.trim() && !slug && !slug.trim() && !priceFrom && !avatar)
    return NextResponse.json(
      { error: "Invalid request body!" },
      {
        status: 422,
      }
    );

  await dbConnect();

  const car = new Car({
    name,
    priceFrom,
    slug,
    avatar,
    colors,
    carLines,
    images,
  });

  await car.save();

  return NextResponse.json(car, {
    status: 201,
  });
}
