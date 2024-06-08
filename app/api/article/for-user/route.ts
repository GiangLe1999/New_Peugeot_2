import dbConnect from "@/lib/db";
import Article from "@/model/Article";
import User from "@/model/User";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get("slug");

    if (!slug) {
      return NextResponse.json(
        {
          error: "Bad request",
          msg: "Missing article slug",
        },
        { status: 400 }
      );
    }

    await dbConnect();

    const article = await Article.findOne({
      slug,
    })
      .populate({
        path: "author",
        model: User,
        select: "name",
      })
      .select("-__v -updatedAt")
      .lean();

    if (!article) {
      return NextResponse.json(
        {
          error: "Not found",
          msg: "Article does not exist",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        data: article,
        msg: "Get article information successfully",
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
