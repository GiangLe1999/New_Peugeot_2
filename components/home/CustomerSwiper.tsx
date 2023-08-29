"use client";

import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import NextImage from "../NextImage";

interface Props {}

const arr = [1, 2, 3, 4, 5, 6, 7];

const CustomerSwiper: FC<Props> = (props): JSX.Element => {
  return (
    <div className="pt-5 pb-8">
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="customerSwiper"
      >
        {arr.map((item) => (
          <SwiperSlide key={item}>
            <div className="relative w-full aspect-square rounded-sm overflow-hidden">
              <NextImage
                src={`/images/home/customers/giao-xe-mazda-toi-khach-hang-${item}.jpg`}
                alt={`Giao xe Mazda tới khách hàng ${item}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomerSwiper;
