"use client";

import React, { FC } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ContainNextImage from "../ContainNextImage";
import { ICarColor } from "@/model/Car2";
import { formatPrice } from "@/lib/formatData";

interface Props {
  colors: ICarColor[];
  price: number;
}

const CarImageGallery: FC<Props> = ({ colors, price }): JSX.Element => {
  const carImages = colors.map((color) => color.colorImg);
  const carColors = colors.map((color) => color.color);
  return (
    <div className="w-full">
      <Carousel
        emulateTouch
        infiniteLoop
        showIndicators={false}
        showArrows={false}
        // autoPlay
        renderThumbs={() =>
          carColors.map((color, index) => (
            <div
              key={index}
              style={{ backgroundColor: color }}
              className="w-full h-full rounded-sm"
            />
          ))
        }
      >
        {carImages.map((image, index) => (
          <div
            key={image.url}
            className="relative w-full cursor-pointer main-image-ratio"
          >
            <ContainNextImage
              key={image.url}
              src={image.url}
              alt={`${image} preview`}
              priority={index === 0}
            />
          </div>
        ))}
      </Carousel>

      <p className="text-2xl text-primary font-bold text-center leading-none">
        Giá từ: {formatPrice(price)}
        <u className="text-base relative -top-2">đ</u>
      </p>
    </div>
  );
};

export default CarImageGallery;
