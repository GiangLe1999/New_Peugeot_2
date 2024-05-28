import dbConnect from "@/lib/db";
import Article from "@/model/Article";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  try {
    await dbConnect();
    const articles = await Article.find()
      .select("name slug views updatedAt")
      .lean();

    return NextResponse.json(
      { status: 200, msg: "Get all articles successfully", data: articles },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        status: 500,
        error: "Internal server error",
        msg: error.message,
      },
      { status: 500 }
    );
  }
}
