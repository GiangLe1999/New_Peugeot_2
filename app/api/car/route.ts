import dbConnect from "@/lib/db";
import Car from "@/model/Car2";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export const revalidate = 0;


export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get("slug");

    await dbConnect();
    const car = await Car.findOne({ slug }).lean();

    return NextResponse.json(
      {
        data: car,
        msg: "Get car information successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error", msg: error },
      { status: 500 }
    );
  }
}
