import dbConnect from "@/lib/db";
import Article from "@/model/Article";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  try {
    await dbConnect();
    const articles = await Article.find().select("views").lean();

    const data = articles.reduce((acc, cur) => acc + cur.views, 0);

    return NextResponse.json(
      {
        data,
        status: 200,
        msg: "Get article total views successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { status: 500, error: "Internal server error", msg: error },
      { status: 500 }
    );
  }
}
