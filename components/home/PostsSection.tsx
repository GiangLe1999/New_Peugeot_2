"use client";

import { FC } from "react";
import SectionTitle from "./SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { getAllArticlesForUsers } from "@/service/article.service";
import { useQuery } from "@tanstack/react-query";
import ArticleCard from "../newsPage/ArticleCard";
import ReactQueryProvider from "@/providers/react-query-provider";

interface Props {}

const PostsSection: FC<Props> = (props): JSX.Element => {
  const { data, isPending } = useQuery({
    queryKey: ["get-articles-for-users"],
    queryFn: () => getAllArticlesForUsers({ selectedCate: "", currentPage: 1 }),
  });

  return (
    <section className="py-10 container">
      <SectionTitle title="Tin Tức & Sự Kiện" />

      <ReactQueryProvider>
        <div className="mt-10">
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              617: {
                slidesPerView: 2,
              },
              944: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            className="homeSwiper !aspect-auto"
          >
            {(data as any)?.result.map((article: any, index: number) => (
              <SwiperSlide key={index}>
                <ArticleCard article={article} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </ReactQueryProvider>
    </section>
  );
};

export default PostsSection;
