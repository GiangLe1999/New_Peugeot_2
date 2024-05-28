import dbConnect from "@/lib/db";
import Article from "@/model/Article";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get("slug");

    if (!slug) {
      return NextResponse.json(
        {
          status: 400,
          error: "Bad request",
          msg: "Missing article slug",
        },
        { status: 400 }
      );
    }

    await dbConnect();
    const article = await Article.findOne({ slug }).select(
      "name description createdAt content views"
    );

    article.views += 1;
    await article.save();

    return NextResponse.json(
      {
        data: article,
        status: 200,
        msg: "Get article information successfully",
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
