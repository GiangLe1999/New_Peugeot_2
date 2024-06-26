import { CarType } from "@/types";
import Link from "next/link";
import { FC } from "react";
import NextImage from "../NextImage";
import { formatPrice } from "@/lib/formatData";
import { CarEntity } from "@/entities/car.entity";

interface Props {
  car: CarEntity;
}

const CarCard: FC<Props> = ({ car }): JSX.Element => {
  return (
    <div className="shadow-md bg-white rounded-sm overflow-hidden border">
      <Link
        href={"/" + car.slug}
        className="relative w-full aspect-[1.667] block overflow-hidden"
      >
        <NextImage
          src={car.avatar.url}
          alt={car.name}
          className="hover:scale-105"
        />
      </Link>

      <div>
        <div className="grid grid-cols-2 gap-6 pl-4 items-center">
          <h4>
            <Link
              className="text-[15px] text-textColor font-bold hover:text-primary transition"
              href={"/" + car.slug}
            >
              {car.name.toUpperCase()}
            </Link>
          </h4>

          <div className="price-block-decor">
            <span className="-ml-2 max-[355px]:text-sm">
              {formatPrice(car?.priceFrom)}
              <u>đ</u>
            </span>
          </div>
        </div>

        <ul className="pt-4 pb-6 ml-8 text-[#555555] text-sm list-disc space-y-2 car-main-infos">
          <li>Kiểu dáng: {car.category}</li>
          <li>Số chỗ: {car.seats}</li>
          <li>Hộp số: {car.gear}</li>
          <li>Động cơ: {car.engine}</li>
          <li>Nhiên liệu: {car.fuel}</li>
        </ul>
      </div>
    </div>
  );
};

export default CarCard;
