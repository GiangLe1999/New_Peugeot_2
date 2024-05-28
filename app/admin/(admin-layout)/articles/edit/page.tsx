"use client";

import EditArticleForm from "@/components/admin-articles-page/edit-article-form";
import AdminCardTitle from "@/components/admin-card-title";
import { ArticleEntity } from "@/entities/article.entity";
import { getArticleBySlugForAdmin } from "@/service/article.service";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MdEditSquare } from "react-icons/md";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const EditArticlePage = () => {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");

  const [article, setArticle] = useState<ArticleEntity>();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await getArticleBySlugForAdmin(slug as string);
      if (res) {
        setArticle(res);
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const { data: session } = useSession();

  return (
    <div className="admin-page-container">
      {isLoading ? (
        <div className="admin-card p-6">
          {[...Array(9).keys()].map((item) => (
            <Skeleton className="w-full h-[70px] mb-4" key={item} />
          ))}
        </div>
      ) : (
        <div className="admin-card">
          <AdminCardTitle
            cardTitle="Cập nhật bài viết"
            cardIconClasses="admin-main-gradient"
            icon={MdEditSquare}
            iconSize={22}
          />

          <EditArticleForm
            author={session?.user._id.toString()}
            article={article}
          />
        </div>
      )}
    </div>
  );
};

export default EditArticlePage;
