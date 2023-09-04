import { CarType } from "@/types";
import { FC } from "react";
import NextImage from "../NextImage";
import { formatPrice } from "@/lib/formatData";
import { GiSteeringWheel } from "react-icons/gi";
import Link from "next/link";

interface Props {
  cars: CarType[];
}

const CarList: FC<Props> = ({ cars }): JSX.Element => {
  return (
    <div className="mt-2 flex-1 space-y-16">
      {cars.map((car) => (
        <div key={car._id.toString()}>
          <h2 className="font-bold text-xl uppercase border-b border-textColor py-1 mb-5">
            {car.name}
          </h2>
          <div className="flex items-center gap-4">
            <div className="relative w-[30%] main-image-ratio">
              <NextImage src={car.avatar} alt={car.name} />
            </div>

            <div className="flex-1 space-y-8">
              {car.carLines.map((line, index) => (
                <div className="flex items-center gap-8 text-xs" key={index}>
                  <h3 className="w-[40%] truncate font-bold">{line.name}</h3>
                  <div className="w-[35%]">
                    Giá: {formatPrice(line.price)} VNĐ
                  </div>
                  <Link
                    href=""
                    className="w-[25%] flex items-center justify-center gap-1 bg-primary p-2 rounded-md text-white"
                  >
                    <GiSteeringWheel />
                    Đăng ký lái thử
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarList;
