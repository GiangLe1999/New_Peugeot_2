import dbConnect from "@/lib/db";
import Article from "@/model/Article";
import { NextResponse } from "next/server";

const LIMIT = 13;
const CATEGORIES = {
  uu_dai: "Ưu đãi",
  su_kien: "Sự kiện",
  thong_tin_xe: "Thông tin xe",
};

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("cate");
    const page = Number(searchParams.get("page"));

    await dbConnect();

    const skip = (page - 1) * LIMIT;

    let filterObject = {};

    if (category === CATEGORIES.uu_dai) {
      filterObject = { category: CATEGORIES.uu_dai };
    } else if (category === CATEGORIES.su_kien) {
      filterObject = { category: CATEGORIES.su_kien };
    } else if (category === CATEGORIES.thong_tin_xe) {
      filterObject = { category: CATEGORIES.thong_tin_xe };
    }

    const [articles, countArticles] = await Promise.all([
      Article.find(filterObject)
        .skip(skip)
        .limit(LIMIT)
        .select("name slug description createdAt thumbnail category author")
        .sort({ createdAt: -1 })
        .lean()
        .exec(),
      Article.find(filterObject).count().lean().exec(),
    ]);

    return NextResponse.json(
      {
        data: {
          result: articles,
          pageMaxSize: Math.ceil(countArticles / LIMIT),
        },
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
