"use client";

import React, { FC } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ContainNextImage from "../ContainNextImage";

interface Props {
  colors: { color: string; colorImg: string }[];
  price: string;
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
            key={image}
            className="relative w-full cursor-pointer main-image-ratio"
          >
            <ContainNextImage
              key={image}
              src={image}
              alt={`${image} preview`}
              priority={index === 0}
            />
          </div>
        ))}
      </Carousel>

      <p className="text-2xl text-primary font-bold text-center uppercase leading-none">
        Giá từ: {price}
      </p>
    </div>
  );
};

export default CarImageGallery;
