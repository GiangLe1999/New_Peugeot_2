"use client";

import ArticlesTable from "@/components/admin-articles-page/articles-table";
import AdminCardTitle from "@/components/admin-card-title";
import { getAllArticlesForAdmin } from "@/service/article.service";
import { useQuery } from "@tanstack/react-query";
import { MdEditSquare } from "react-icons/md";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Page = () => {
  const { data: articles, isPending } = useQuery({
    queryKey: ["get-admin-articles"],
    queryFn: getAllArticlesForAdmin,
    staleTime: 5000,
  });

  return (
    <div className="admin-page-container">
      {isPending ? (
        <div className="admin-card p-6">
          {[...Array(9).keys()].map((item) => (
            <Skeleton className="w-full h-[70px] mb-4" key={item} />
          ))}
        </div>
      ) : (
        <div className="admin-card">
          <AdminCardTitle
            cardTitle="Bài Viết"
            cardIconClasses="admin-main-gradient"
            icon={MdEditSquare}
            iconSize={22}
          />
          <ArticlesTable articles={articles} />
        </div>
      )}
    </div>
  );
};

export default Page;
