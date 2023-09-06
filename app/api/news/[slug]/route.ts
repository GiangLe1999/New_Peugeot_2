import matter from "gray-matter";
import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;

  if (!slug.trim())
    return NextResponse.json(
      { error: "Invalid slug!" },
      {
        status: 422,
      }
    );

  const filePathToRead = path.join(
    process.cwd(),
    "posts",
    "news",
    slug + ".md"
  );
  const fileContent = fs.readFileSync(filePathToRead, { encoding: "utf-8" });
  const { content, data } = matter(fileContent);

  return NextResponse.json({ content, data });
}
