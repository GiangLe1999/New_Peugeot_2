"use client";

import { CarType } from "@/types";
import { FC } from "react";
import NextImage from "../NextImage";
import { formatPrice } from "@/lib/formatData";
import { GiSteeringWheel } from "react-icons/gi";
import Link from "next/link";
import BtnWithIcon from "../BtnWithIcon";
import { linkConstants } from "@/data/constants";

interface Props {
  cars: CarType[];
}

const CarList: FC<Props> = ({ cars }): JSX.Element => {
  return (
    <div className="mt-2 flex-1">
      {Array.isArray(cars) ? (
        cars.map((car) => (
          <div key={car._id.toString()} className="mb-16">
            <h2 className="font-bold text-xl uppercase border-b border-textColor py-1 mb-5 hover:text-primary transition">
              <Link href={`/${car.slug}`}>{car.name}</Link>
            </h2>
            <div className="flex items-center gap-4">
              <Link
                href={`/${car.slug}`}
                className="relative w-[30%] main-image-ratio"
              >
                <NextImage
                  src={car.avatar}
                  alt={car.name}
                  className="hover:scale-[1.05]"
                />
              </Link>

              <div className="flex-1 space-y-8">
                {car.carLines.map((line, index) => (
                  <div className="flex items-center gap-8 text-xs" key={index}>
                    <h3 className="w-[40%] truncate font-bold">{line.name}</h3>
                    <div className="w-[35%]">
                      Giá: {formatPrice(line.price)} VNĐ
                    </div>
                    <BtnWithIcon
                      to={linkConstants.testDrive}
                      customClasses="w-1/4 bg-primary text-white !p-2"
                      icon={GiSteeringWheel}
                      content="Đăng ký lái thử"
                      iconSize={14}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))
      ) : (
        <>
          <div className="relative w-[80%] aspect-[798/243] mx-auto">
            <NextImage
              src="/images/bao-gia/found-no-car.jpg"
              alt="Không tìm thấy xe phù hợp"
            />
          </div>
          <p className="text-center font-bold text-primary text-xl">
            Không tìm thấy xe phù hợp!
          </p>
        </>
      )}
    </div>
  );
};

export default CarList;
