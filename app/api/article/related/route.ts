import Article from "@/model/Article";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const currentId = searchParams.get("currentId");
    const currentCate = searchParams.get("currentCate");

    if (!currentId || !currentCate) {
      return NextResponse.json(
        {
          msg: "Missing article id or category",
        },
        { status: 400 }
      );
    }

    const relatedArticles = await Article.find({
      category: currentCate,
      _id: { $ne: currentId },
    })
      .select("name slug description thumbnail createdAt category")
      .sort({ createdAt: -1 })
      .limit(3)
      .lean();

    return NextResponse.json(
      {
        data: relatedArticles,
        msg: "Get related articles information successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal server error", msg: error },
      { status: 500 }
    );
  }
}
