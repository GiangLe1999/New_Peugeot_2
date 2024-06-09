import Link from "next/link";
import { FC } from "react";
import { formatLongDate } from "@/lib/formatData";
import NextImage from "@/components/NextImage";
import { LuClock } from "react-icons/lu";

interface Props {
  article: any;
}

const BigArticleCard: FC<Props> = ({ article }): JSX.Element => {
  return (
    <article className="group">
      <Link
        href={`/tin-tuc/${article?.slug}`}
        className="xl:grid grid-cols-2 gap-x-8"
      >
        <div className="w-full aspect-video rounded-md overflow-hidden border shadow-md">
          <div className="relative w-full aspect-video">
            <NextImage
              src={article?.thumbnail.url}
              alt={article?.name}
              className="group-hover:scale-105 transition duration-500"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between py-4">
          <div>
            <span className="uppercase font-bold text-sm text-gray-500 mb-3 block">
              {article?.category}
            </span>
            <h3 className="font-bold text-3xl text-gray-800 leading-10 group-hover:text-primary transition">
              {article?.name}
            </h3>
            <p className="line-clamp-3 text-gray-700 mt-4 leading-8">
              {article?.description}
            </p>
          </div>

          <div className="xl:mt-0 mt-4">
            <p className="text-gray-600 text-xs mb-2">
              <span className="flex items-center gap-[3px]">
                <LuClock className="w-4 h-4" />
                Ngày xuất bản :{"  "}
                <b>{formatLongDate(article?.createdAt)}</b>
              </span>
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BigArticleCard;
