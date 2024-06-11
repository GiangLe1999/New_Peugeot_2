"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import NextImage from "../NextImage";
import { homeBanners } from "@/data";
import Link from "next/link";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        className="homeSwiper"
      >
        {homeBanners.map((banner, index) => (
          <SwiperSlide key={index}>
            <Link href="" className="relative w-full h-full block">
              <NextImage
                src={banner.src}
                alt={`Peugeot Home Banner ${index}`}
                priority={index === 0}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
