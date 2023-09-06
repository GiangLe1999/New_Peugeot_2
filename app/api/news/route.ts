import matter from "gray-matter";
import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

const readPostsInfo = () => {
  const dirPathToRead = path.join(process.cwd(), "posts", "news");
  //Đọc folder posts chứa tất cả các bài viết
  const dirs = fs.readdirSync(dirPathToRead);
  //Lặp qua mảng chứa tên các file trong folder posts
  return dirs.map((filename) => {
    const filePathToRead = path.join(process.cwd(), "posts", "news", filename);
    //Nếu không có encoding, data đọc của file sẽ có dạng Buffer
    const fileContent = fs.readFileSync(filePathToRead, { encoding: "utf-8" });
    //Extract ra phần chứa các front-matter của markdown (title, description và slug)
    return matter(fileContent).data;
  });
};

export async function GET(request: Request) {
  const data = readPostsInfo();
  return NextResponse.json(data);
}
