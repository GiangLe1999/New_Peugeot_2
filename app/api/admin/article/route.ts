import { CreateArticleInput } from "@/dtos/article/create-article.dto";
import { editCloudinaryImage } from "@/lib/cloudinary";
import dbConnect from "@/lib/db";
import { NextResponse } from "next/server";
import cloudinary from "cloudinary";
import Article from "@/model/Article";
import User from "@/model/User";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body: CreateArticleInput = await req.json();

    const { thumbnail, author } = body;

    const requiredFields = ["name", "description", "category", "slug"];

    for (let index = 0; index < requiredFields.length; index++) {
      const requiredField = requiredFields[index];
      if (!(requiredField in body) || (body as any)[requiredField] === "") {
        return NextResponse.json(
          {
            status: 400,
            error: "Bad request",
            msg: "Missing required fields",
          },
          { status: 400 }
        );
      }
    }

    const existedArticle = await Article.findOne({ slug: body.slug });
    if (existedArticle) {
      return NextResponse.json(
        {
          status: 400,
          error: "Bad request",
          msg: "Article already exists",
        },
        { status: 400 }
      );
    }

    let savedThumbnail = { public_id: "", url: "" };
    const processedImage = await editCloudinaryImage(thumbnail);
    if (processedImage) {
      savedThumbnail = {
        public_id: processedImage.public_id,
        url: processedImage.secure_url,
      };
    }

    await dbConnect();

    const article = await Article.create({
      ...body,
      thumbnail: savedThumbnail,
      author: author,
    });

    const user = await User.findById(author).select("articles");

    if (user && user.articles) {
      user.articles.push(article._id);
      await user.save();
    }

    return NextResponse.json(
      {
        status: 201,
        msg: "Create article successfully",
        data: article,
      },
      { status: 201 }
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

export async function PUT(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        {
          status: 400,
          error: "Bad request",
          msg: "Missing article id",
        },
        { status: 400 }
      );
    }

    const body: CreateArticleInput = await req.json();

    const { thumbnail } = body;

    await dbConnect();

    const requiredFields = ["name", "description", "category", "slug"];

    for (let index = 0; index < requiredFields.length; index++) {
      const requiredField = requiredFields[index];
      if (!(requiredField in body) || (body as any)[requiredField] === "") {
        return NextResponse.json(
          {
            status: 400,
            error: "Bad request",
            msg: "Missing required fields",
          },
          { status: 400 }
        );
      }
    }

    const article = await Article.findById(id);

    if (!article) {
      return NextResponse.json(
        {
          status: 404,
          error: "Not found",
          msg: "Article does not exist",
        },
        { status: 404 }
      );
    }

    const newThumbnail = await editCloudinaryImage(
      thumbnail,
      article.thumbnail
    );
    if (newThumbnail) {
      article.thumbnail = {
        public_id: newThumbnail.public_id,
        url: newThumbnail.secure_url,
      };
    }

    const updatedArticle = await Article.findByIdAndUpdate(
      id,
      { ...body, thumbnail: newThumbnail },
      { new: true }
    );

    return NextResponse.json(
      {
        status: 200,
        msg: "Update article successfully",
        data: updatedArticle,
      },
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

export async function DELETE(req: Request) {
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

    const article = await Article.findOne({ slug });

    if (!article) {
      return NextResponse.json(
        {
          status: 404,
          error: "Not found",
          msg: "Article does not exist",
        },
        { status: 404 }
      );
    }

    await cloudinary.v2.uploader.destroy(article.thumbnail.public_id);

    const user = await User.findById(article.author.toString()).select(
      "articles"
    );

    if (user) {
      const articleIndex = user.articles.findIndex((r) => {
        return r.toString() === article._id.toString();
      });

      user.articles.splice(articleIndex, 1);
      user.save();
    }

    await Article.deleteOne({ slug });

    return NextResponse.json(
      {
        status: 200,
        msg: "Delete article successfully",
      },
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
