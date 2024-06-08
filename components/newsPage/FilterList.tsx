"use client";

import { FC, useEffect, useState } from "react";
import FilterBar from "./FilterBar";
import ArticleList from "./ArticleList";
// import ArticleListPagination from "./Pagination";
import { getAllArticlesForUsers } from "@/service/article.service";
import { useQuery } from "@tanstack/react-query";
import { ArticleEntity } from "@/entities/article.entity";
import ArticleListPagination from "./ArticleListPagination/ArticleListPagination";

interface Props {}

const FilterList: FC<Props> = (): JSX.Element => {
  const [selectedCate, setSelectedCate] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isPending } = useQuery({
    queryKey: ["get-articles-for-users", selectedCate, currentPage],
    queryFn: () => getAllArticlesForUsers({ selectedCate, currentPage }),
  });

  useEffect(() => {
    const articleListSectionTop =
      document.getElementById("article-list")?.offsetTop;

    window.scrollTo({
      left: 0,
      top: (articleListSectionTop as number) - 100,
      behavior: "smooth",
    });
  }, [currentPage]);

  return (
    <>
      <FilterBar
        selectedCate={selectedCate}
        setSelectedCate={setSelectedCate}
        setCurrentPage={setCurrentPage}
      />
      <ArticleList
        articles={(data as any)?.result as ArticleEntity[]}
        isLoading={isPending}
      />
      <ArticleListPagination
        pageMaxSize={(data as any)?.pageMaxSize}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default FilterList;
