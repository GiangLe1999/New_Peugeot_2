"use client";

import FirstBanner from "@/components/FirstBanner";
import NewsCard from "@/components/newsPage/NewsCard";
import { getAllNewsPostsData } from "@/lib/fetchData";
import { NextPage } from "next";
import { frontType } from "./[postSlug]/page";
import { useEffect, useState } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";

interface Props {}

const AllNewsPage: NextPage<Props> = () => {
  const [newsPosts, setNewsPosts] = useState<frontType[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchDataHandler = async () => {
    setLoading(true);
    const data = (await getAllNewsPostsData()) as frontType[];
    setLoading(false);
    setNewsPosts(data);
  };

  useEffect(() => {
    fetchDataHandler();
  }, []);

  return (
    <div>
      <FirstBanner
        heading="TIN TỨC & ƯU ĐÃI"
        subHeading="Thông tin mới nhất về các dòng xe của Mazda"
        bgImg="/images/tin-tuc/first-banner.jpg"
      />

      <div className="container my-16">
        {loading ? (
          <div className="w-full h-screen flex items-center justify-center">
            <LoadingSpinner />
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {newsPosts.map((post, index) => (
              <NewsCard item={post} key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllNewsPage;
