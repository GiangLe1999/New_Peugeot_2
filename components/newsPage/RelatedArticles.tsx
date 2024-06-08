"use client";

import React, { FC } from "react";
import ArticleCardSkeleton from "./ArticleCardSkeleton";
import ArticleCard from "./ArticleCard";
import { useQuery } from "@tanstack/react-query";
import { getRelatedArticles } from "@/service/article.service";

interface Props {
  currentId: string;
  currentCate: string;
}

const RelatedArticles: FC<Props> = ({ currentId, currentCate }) => {
  const { data: relatedArticles, isPending } = useQuery({
    queryKey: ["get-related-articles", currentId, currentCate],
    queryFn: () => getRelatedArticles({ currentId, currentCate }),
  });

  return (
    <section id="related-articles" className="mt-10">
      <p className="text-2xl text-gray-800 font-bold mb-4">
        Bài viết liên quan
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {isPending ? (
          <>
            <ArticleCardSkeleton />
            <ArticleCardSkeleton />
            <ArticleCardSkeleton />
          </>
        ) : (
          <>
            {relatedArticles?.map((article: any) => (
              <ArticleCard article={article} key={article?._id} />
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default RelatedArticles;
