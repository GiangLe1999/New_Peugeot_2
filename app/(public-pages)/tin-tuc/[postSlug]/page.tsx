import { NextPage } from "next";
import NewsContent from "@/components/newsPage/NewsContent";
import Link from "next/link";
import { IoReturnUpBackSharp } from "react-icons/io5";
import { linkConstants } from "@/data/constants";
import { getArticleBySlugForUser } from "@/service/article.service";
import { formatLongDate } from "@/lib/formatData";
import { ArticleEntity } from "@/entities/article.entity";
import RelatedArticles from "@/components/newsPage/RelatedArticles";

interface Props {
  params: { postSlug: string };
}

const page: NextPage<Props> = async ({ params }) => {
  const data = (await getArticleBySlugForUser(
    params.postSlug
  )) as ArticleEntity;

  return (
    <div className="container my-12 text-textColor">
      <Link
        href={linkConstants.news}
        className="flex items-center w-fit gap-1 mb-10 text-sm hover:text-primary hover:-translate-x-4 transition"
      >
        <IoReturnUpBackSharp size={20} /> Quay lại trang tin tức
      </Link>

      <p className="mb-4">
        Đăng vào ngày{" "}
        <span className="font-bold">{formatLongDate(data?.createdAt)}</span> bởi{" "}
        <span className="font-bold uppercase">{data?.author.name}</span>
      </p>

      <h1 className="font-bold text-2xl text-primary mb-8">{data?.name}</h1>
      <div className="border-[1px] border-dashed mb-8"></div>
      <NewsContent content={data?.content} />

      <RelatedArticles currentId={data?._id} currentCate={data?.category} />
    </div>
  );
};

export default page;
