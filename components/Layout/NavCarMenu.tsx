import { navCarMenu } from "@/data";
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  showCarMenu: boolean;
}

const NavCarMenu: FC<Props> = ({ showCarMenu }): JSX.Element => {
  return (
    <div
      className={`absolute w-full -bottom-[378px] left-0 z-50 bg-white p-5 grid grid-cols-5 gap-3 rounded-sm shadow-md transition origin-top ${
        showCarMenu ? "scale-3d-1" : "scale-3d-0"
      }`}
    >
      {navCarMenu.map((car, index) => (
        <Link
          href={"/" + car.link}
          key={index}
          className="text-center hover:scale-[1.04] transition"
        >
          <div className="relative w-full aspect-video">
            <Image
              style={{ objectFit: "contain" }}
              fill={true}
              src={car.img}
              alt={car.name}
            />
          </div>

          <p className="font-bold text-sm text-textColor">{car.name}</p>
          <p className="font-bold text-primary">Giá: Từ {car.price} triệu</p>
        </Link>
      ))}
    </div>
  );
};

export default NavCarMenu;
