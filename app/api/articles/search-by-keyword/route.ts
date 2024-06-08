import dbConnect from "@/lib/db";
import Article from "@/model/Article";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const keyword = searchParams.get("keyword");

    await dbConnect();

    let filterObject = {};

    if (keyword) {
      const queries = keyword.split(" ");
      const regexPatterns = queries.map((kw) => new RegExp(kw, "i"));
      (filterObject as any).$or = [
        { title: { $all: regexPatterns } },
        { description: { $all: regexPatterns } },
      ];
    }

    const results = await Article.find(filterObject)
      .select("name slug description")
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json(
      {
        data: results,

        msg: "Get article by keyword successfully",
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
