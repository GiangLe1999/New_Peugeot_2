import React, { FC } from "react";
import Link from "next/link";
import { formatLongDate } from "@/lib/formatData";
import NextImage from "@/components/NextImage";
import { LuClock } from "react-icons/lu";

interface Props {
  article: any;
}

const ArticleCard: FC<Props> = ({ article }) => {
  return (
    <article className="group rounded-md border shadow-md">
      <Link href={`/tin-tuc/${article.slug}`}>
        <div className="relative block w-full aspect-video border-b overflow-hidden rounded-t-md">
          <NextImage
            className="group-hover:scale-105 transition duration-500"
            src={article?.thumbnail.url}
            alt={article?.name}
            priority
          />
        </div>

        <div className="p-5">
          <span className="uppercase font-bold text-sm text-gray-500 mb-2 block">
            {article?.category}
          </span>
          <h4 className="min-h-[64px] line-clamp-2 font-bold text-lg text-gray-800 leading-8 group-hover:text-primary transition">
            {article?.name}
          </h4>

          <p className="line-clamp-3 text-gray-600 mt-2 leading-7 text-sm min-h-[84px]">
            {article?.description}
          </p>

          <p className="text-gray-600 text-xs mt-4 mb-2">
            <span className="flex items-center gap-[3px]">
              <LuClock className="w-4 h-4" />
              Ngày xuất bản :{"  "}
              <b>{formatLongDate(article?.createdAt)}</b>
            </span>
          </p>
        </div>
      </Link>
    </article>
  );
};

export default ArticleCard;
