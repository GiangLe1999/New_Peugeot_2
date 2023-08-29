import { CarType } from "@/types";
import Link from "next/link";
import { FC } from "react";
import NextImage from "../NextImage";
import { formatPrice } from "@/lib/formatData";

interface Props {
  car: CarType;
}

const CarCard: FC<Props> = ({ car }): JSX.Element => {
  return (
    <div className="shadow-md bg-white rounded-sm overflow-hidden">
      <Link
        href={"/" + car.slug}
        className="relative w-full main-image-ratio block overflow-hidden"
      >
        <NextImage
          src={car.avatar}
          alt={car.name}
          className="hover:scale-105"
        />
      </Link>

      <div>
        <div className="grid grid-cols-2 gap-6 pl-4 items-center">
          <Link href={"/" + car.slug}>
            <h4 className="text-[15px] text-textColor font-bold hover:text-primary transition">
              {car.name.toUpperCase()}
            </h4>
          </Link>

          <div className="price-block-decor">
            <span>
              {formatPrice(car.priceFrom)}
              <u>đ</u>
            </span>
          </div>
        </div>

        <ul className="pt-4 pb-6 ml-8 text-[#555555] text-sm list-disc space-y-2 car-main-infos">
          <li>Kiểu dáng: {car.mainInfo.kind}</li>
          <li>Số chỗ: {car.mainInfo.seats}</li>
          <li>Hộp số: {car.mainInfo.gear}</li>
          <li>Động cơ: {car.mainInfo.engine}</li>
          <li>Nhiên liệu: {car.mainInfo.fuel}</li>
        </ul>
      </div>
    </div>
  );
};

export default CarCard;
