import { getNewsPostData } from "@/lib/fetchData";
import { NextPage } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import NewsContent from "@/components/newsPage/NewsContent";
import Link from "next/link";
import { IoReturnUpBackSharp } from "react-icons/io5";
import { linkConstants } from "@/data/constants";

interface Props {
  params: { postSlug: string };
}

export type frontType = {
  title: string;
  description: string;
  avt: string;
  date: string;
  author: string;
  slug: string;
};

const page: NextPage<Props> = async ({ params }) => {
  const mdContent = (await getNewsPostData(params.postSlug)) as {
    content: string;
    data: frontType;
  } as any;

  const { date, author } = mdContent.data as any;

  const serializedContent = (await serialize(
    mdContent.content
  )) as MDXRemoteSerializeResult;

  return (
    <div className="container my-12 text-textColor">
      <Link
        href={linkConstants.news}
        className="flex items-center w-fit gap-1 mb-10 text-sm hover:text-primary hover:-translate-x-4 transition"
      >
        <IoReturnUpBackSharp size={20} /> Quay lại trang tin tức
      </Link>

      <p className="mb-4">
        Đăng vào ngày <span className="font-bold">{date}</span> bởi{" "}
        <span className="font-bold uppercase">{author}</span>
      </p>
      <NewsContent content={serializedContent} />
    </div>
  );
};

export default page;
